const { query } = require("./../Database/index");
const { Q_Formatter } = require("./../Functions/QFormatter");
const { videUploadMV } = require("./../Functions/video");
const imageUP = require("./../Functions/image");

//--------------gallery------------//
const q_get_gallery = async (type) => {
  try {
    if (type == "video") {
      const sql = Q_Formatter(
        `SELECT id, gallery_path as video_path, type, image_path FROM gallery where type = ?;`,
        [type]
      );
      var res = await query(sql, []);
      if (res.rows[0] == null) {
        res.rows[0] = { id: "", video_path: "", type: "video", image_path: "" };
      }
    } else {
      const sql = Q_Formatter(
        `SELECT id, gallery_path as image_path, type FROM gallery where type = ?;`,
        [type]
      );
      var res = await query(sql, []);
      if (res.rows[0] == null) {
        res.rows[0] = { id: "", image_path: "", type: "image" };
      }
    }
    return res.rows;
  } catch (err) {
    return "false";
  }
};

const q_add_gallery = async (gallery, image) => {
  try {
    if (gallery) {
      const gallery_path = await videUploadMV(gallery, "gallery");
      const image_path = await imageUP.OneImageUploadMV(image, "gallery");
      const sql = Q_Formatter(
        `INSERT INTO gallery(gallery_path, type, image_path) VALUES(?, ?, ?) RETURNING *;`,
        [gallery_path, "video", image_path]
      );
      var res = await query(sql, []);
    } else {
      const gallery_path = await imageUP.OneImageUploadMV(image, "gallery");
      const sql = Q_Formatter(
        `INSERT INTO gallery(gallery_path, type) VALUES(?, ?) RETURNING *;`,
        [gallery_path, "image"]
      );
      var res = await query(sql, []);
    }
    return res;
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const q_save_gallery = async (params, gallery, image) => {
  try {
    if (params.type == "video") {
      try {
        const id = params.id;
        const gallery_path = params.video_path;
        const image_path = params.image_path;
        const del_gallery_path =
          "/" + gallery_path.substring(0, gallery_path.length - 4);
        const del_image_path = "/" + image_path;
        await imageUP.DeleteVideo(del_gallery_path);
        await imageUP.DeleteImage(del_image_path);
        const new_gallery_path = await videUploadMV(gallery, "gallery");
        const new_image_path = await imageUP.OneImageUploadMV(image, "gallery");
        const sql = Q_Formatter(
          `UPDATE gallery SET gallery_path = ?, image_path = ?, type = ? WHERE id = ? RETURNING *;`,
          [new_gallery_path, new_image_path, "video", id]
        );
        var res = await query(sql, []);
      } catch (err) {
        console.log(err);
        return "false";
      }
    } else {
      const id = params.id;
      const gallery_path_del = "/" + params.image_path;
      await imageUP.DeleteImage(gallery_path_del);
      const gallery_path = await imageUP.OneImageUploadMV(image, "gallery");
      const sql = Q_Formatter(
        `UPDATE gallery SET gallery_path = ?, type = ? WHERE id = ? RETURNING *;`,
        [gallery_path, "image", id]
      );
      var res = await query(sql, []);
    }
    return res;
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const q_delete_gallery = async (arr, id, type) => {
  try {
    if (type == "video") {
      const gallery_path_del = "/" + arr[0].substring(0, arr[0].length - 4);
      const image_path_del = "/" + arr[1];
      await imageUP.DeleteVideo(gallery_path_del);
      await imageUP.DeleteImage(image_path_del);
      const sql = Q_Formatter(`DELETE FROM gallery WHERE id = ? RETURNING *;`, [
        id,
      ]);
      var res = await query(sql, []);
    } else {
      const gallery_path_del = "/" + arr[0];
      await imageUP.DeleteImage(gallery_path_del);
      const sql = Q_Formatter(`DELETE FROM gallery WHERE id = ? RETURNING *;`, [
        id,
      ]);
      var res = await query(sql, []);
    }
    return res;
  } catch (err) {
    console.log(err);
    return "false";
  }
};

//--------------language------------//
const q_get_language = async () => {
  try {
    const sql = Q_Formatter(`SELECT * FROM languages;`);
    const res = await query(sql, []);
    return res.rows;
  } catch (err) {
    return "false";
  }
};

const q_add_language = async (params) => {
  try {
    const sql = Q_Formatter(
      `INSERT INTO languages(name, short_name) VALUES(?, ?) RETURNING *;`,
      params
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_save_language = async (params, image) => {
  try {
    const sql = Q_Formatter(
      `UPDATE languages SET name = ?, short_name = ?, created_at = clock_timestamp() WHERE id = ? RETURNING *;`,
      params
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const q_delete_language = async (params) => {
  try {
    const sql = Q_Formatter(
      `DELETE FROM languages WHERE id = ? RETURNING *;`,
      params
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    console.log(err);
    return "false";
  }
};

//--------------footer------------//
const q_get_footer = async (section) => {
  try {
    switch (section) {
      case "text": {
        const sql = Q_Formatter(`WITH
        ftr as (
          select
            f.id, 
            f.lang_id, 
            json_build_object('bottum_title', f.bottum_title) as title,
            json_build_object('text', f.text) as text
          from footer as f
        )
        
        SELECT 
          json_agg(ftr.*) as translations
        FROM ftr;`);
        var res = await query(sql, []);

        return res.rows;
      }
      case "address": {
        const sql = Q_Formatter(`
        WITH 
        at as (
          SELECT 
          adt.id, adt.lang_id, adt.address_id,
          json_build_object('address',adt.address ) as title
          FROM address_translations as adt
        )
        SELECT address.id,
            (SELECT json_agg(at.*) as translations FROM at WHERE at.address_id = address.id) 
            FROM address;`);
        const res = await query(sql, []);
        const res_lang = await query(`select * from languages;`);
        if (res.rows[0] == null) {
          res.rows[0] = {
            id: "",
            translations: [
              {
                id: "",
                lang_id: res_lang.rows[0].id,
                address_id: "",
                title: { address: "" },
              },
            ],
          };
        }
        return res.rows;
      }
      case "mail": {
        const sql = `select * from mails;`;
        var res = await query(sql, []);
        if (res.rows[0] == null) {
          res.rows[0] = { id: "", mail: "" };
        }
        return res.rows;
      }
      case "phone": {
        const sql = Q_Formatter(`select * from phone_numbers;`);
        var res = await query(sql, []);
        if (res.rows[0] == null) {
          res.rows[0] = { id: "", number: "" };
        }
        return res.rows;
      }
      default:
        return "api not found";
    }
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const q_add_footer = async (params, section) => {
  try {
    const translations = params.translations;
    switch (section) {
      case "address": {
        try {
          const sql = Q_Formatter(
            `INSERT INTO address(address) VALUES(?) RETURNING *;`,
            [translations[0].title.address]
          );
          const res_a = await query(sql, []);
          for (i = 0; i < translations.length; i++) {
            const sql = Q_Formatter(
              `INSERT INTO address_translations(lang_id, address_id, address) VALUES(?, ?, ?) RETURNING *;`,
              [
                translations[i].lang_id,
                res_a.rows[0].id,
                translations[i].title.address,
              ]
            );
            var res = await query(sql, []);
          }
          return res.rows;
        } catch (err) {
          console.log(err);
          return "false";
        }
        break;
      }
      case "mail": {
        try {
          const sql = Q_Formatter(
            `INSERT INTO mails(mail) VALUES(?) RETURNING *;`,
            [params.mail]
          );
          var res = await query(sql, []);

          return res.rows;
        } catch (err) {
          console.log(err);
          return "false";
        }
      }
      case "phone": {
        try {
          const sql = Q_Formatter(
            `INSERT INTO phone_numbers(number) VALUES(?) RETURNING *;`,
            [params.number]
          );
          var res = await query(sql, []);

          return res.rows;
        } catch (err) {
          console.log(err);
          return "false";
        }
      }
      default:
        return "api not found";
    }
  } catch (err) {
    return "false";
  }
};

const q_save_footer = async (params, arr, section) => {
  try {
    switch (section) {
      case "text": {
        try {
          const translations = params[0].translations;
          for (i = 0; i < translations.length; i++) {
            const sql = Q_Formatter(
              `update footer set text = ?, bottum_title = ? where id = ? returning *;`,
              [
                translations[i].text.text,
                translations[i].title.bottum_title,
                translations[i].id,
              ]
            );
            var res = await query(sql, []);
          }
          return res.rows;
        } catch (error) {
          console.log(error);
          return "false";
        }
      }
      case "address": {
        try {
          const translations = params[0].translations;
          for (i = 0; i < translations.length; i++) {
            const sql = Q_Formatter(
              `update address_translations set address = ? where id = ? returning *;`,
              [translations[i].title.address, translations[i].id]
            );
            var res = await query(sql, []);
          }
          return res.rows;
        } catch (error) {
          return "false";
        }
      }
      case "mail": {
        try {
          const sql = Q_Formatter(
            `update mails set mail = ? where id = ? returning *;`,
            [arr[1], arr[2]]
          );
          var res = await query(sql, []);
          return res.rows;
        } catch (error) {
          console.log(error);
          return "false";
        }
        break;
      }
      case "phone": {
        try {
          const sql = Q_Formatter(
            `update phone_numbers set number = ? where id = ? returning *;`,
            [arr[0], arr[2]]
          );
          var res = await query(sql, []);
          return res.rows;
        } catch (error) {
          console.log(error);
          return "false";
        }
        break;
      }
      default:
        return "api not found";
    }
  } catch (err) {
    return "false";
  }
};

const q_delete_footer = async (id, section) => {
  try {
    if (section == "phone") {
      table = "phone_numbers";
    } else if (section == "mail") {
      table = "mails";
    } else {
      table = "address";
    }
    const str = `delete from ` + table + ` where id = ? returning *;`;
    const sql = Q_Formatter(str, [id]);
    const res = await query(sql, []);
    return res.rows;
  } catch (err) {
    return "false";
  }
};
//--------------home------------//
const q_get_home = async (section) => {
  try {
    switch (section) {
      case "topics": {
        try {
          const sql = Q_Formatter(`WITH
        topic_t as (
          select
            tt.id, 
            tt.topic_id, 
            tt.lang_id, 
            json_build_object('title', tt.title) as title,
            json_build_object('content', tt.content) as text
          from topics_translations as tt
        )
        
        SELECT 
        t.image_path, t.id,
        (select json_agg(topic_t.*) from topic_t where topic_t.topic_id = t.id ) as translations
        FROM topics as t;
          `);
          var res = await query(sql, []);
          return res.rows;
        } catch (err) {
          console.log(err);
          return "false";
        }
        break;
      }
      case "faciliti": {
        const sql = Q_Formatter(`WITH
        home_t as (
          select
            ht.id, 
            ht.lang_id, 
            json_build_object('small_title', ht.faciliti_title_s,
                              'big_title', ht.faciliti_title_b ) as title,
            json_build_object('text', ht.faciliti_text ) as text
          from home_translation as ht
        )
        
        SELECT 
          json_agg(home_t.*) as translations
        FROM home_t;`);
        var res = await query(sql, []);
        return res.rows;
        break;
      }
      case "faciliti-image": {
        const sql = Q_Formatter(`select * from faciliti_images;`);
        var res = await query(sql, []);
        return res.rows;
      }
      case "sliders": {
        const sql = Q_Formatter(`select * from sliders;`);
        var res = await query(sql, []);
        return res.rows;
      }
      case "map": {
        const sql = Q_Formatter(`WITH
        home_t as (
          select
            ht.id, 
            ht.lang_id, 
            json_build_object('title', ht.agencie_title ) as title,
            json_build_object('text', ht.agencie_content ) as text
          from home_translation as ht
        )
        
        SELECT 
          json_agg(home_t.*) as translations
        FROM home_t;`);
        var res = await query(sql, []);
        return res.rows;
      }
      case "statistic": {
        try {
          const sql = Q_Formatter(`
        WITH sub_stt as (
          select 
            stt.id,
            stt.lang_id,
            stt.statistics_id,
            json_build_object('title', stt.title,
            'number', (select number from statistics as s where s.id = stt.statistics_id) ) as title
          from statistics_translations stt
        )
        SELECT 
        st.id,
        (select json_agg(stt.*) from sub_stt as stt where stt.statistics_id = st.id ) as translations
        FROM statistics as st`);
          var res = await query(sql, []);
        } catch (err) {
          console.log(err);
          return "false";
        }
        return res.rows;
      }
      default:
        return "api not found";
    }
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const q_add_home = async (translations, image, section) => {
  try {
    switch (section) {
      case "topics": {
        const sql = Q_Formatter(`WITH
        topic_t as (
          select
            tt.id, 
            tt.topic_id, 
            tt.lang_id, 
            json_build_object('title', tt.title) as title,
            json_build_object('content', tt.content) as text
          from topics_translations as tt
        )
        
        SELECT 
        t.image_path, t.id,
        (select json_agg(topic_t.*) from topic_t where topic_t.topic_id = t.id ) as translations
        FROM topics as t;
        `);
        var res = await query(sql, []);
        return res.rows;
      }
      case "faciliti": {
        const sql = Q_Formatter(`WITH
        home_t as (
          select
            ht.id, 
            ht.lang_id, 
            json_build_object('small_title', ht.faciliti_title_s,
                              'big_title', ht.faciliti_title_b ) as title,
            json_build_object('text', ht.faciliti_text ) as text
          from home_translation as ht
        )
        
        SELECT 
          json_agg(home_t.*) as translations
        FROM home_t;`);
        var res = await query(sql, []);
        return res.rows;
      }
      case "faciliti-image": {
        try {
          const image_path = await imageUP.OneImageUploadMV(
            image,
            "faciliti-images"
          );
          const sql = Q_Formatter(
            `INSERT INTO faciliti_images(image_path) VALUES(?) returning *;`,
            [image_path]
          );
          const res = await query(sql, []);
          return res.rows;
        } catch (err) {
          console.log(err);
          return "false";
        }
      }
      case "sliders": {
        try {
          const image_path = await imageUP.OneImageUploadMV(image, "sliders");
          const sql = Q_Formatter(
            `INSERT INTO sliders(image_path) VALUES(?) returning *;`,
            [image_path]
          );
          const res = await query(sql, []);
          return res.rows;
        } catch (err) {
          console.log(err);
          return "false";
        }
      }
      case "map": {
        const sql = Q_Formatter(`WITH
        home_t as (
          select
            ht.id, 
            ht.lang_id, 
            json_build_object('title', ht.agencie_title ) as title,
            json_build_object('text', ht.agencie_content ) as text
          from home_translation as ht
        )
        
        SELECT 
          json_agg(home_t.*) as translations
        FROM home_t;`);
        var res = await query(sql, []);
        return res.rows;
      }
      case "statistic": {
        try {
          const sql = Q_Formatter(`
        WITH sub_stt as (
          select 
            stt.id,
            stt.lang_id,
            stt.statistics_id,
            json_build_object('title', stt.title ) as title
          from statistics_translations stt
        )
        SELECT 
        st.id,
        st.number,
        (select json_agg(stt.*) from sub_stt as stt where stt.statistics_id = st.id ) as translations
        FROM statistics as st`);
          var res = await query(sql, []);
        } catch (err) {
          console.log(err);
          return "false";
        }
        return res.rows;
      }
      default:
        return "api not found";
    }
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const q_save_home = async (params, image, section) => {
  try {
    switch (section) {
      case "topics": {
        try {
          const image_path = params.image_path;
          const topic_id = params.id;
          const translations = params.translations;
          if (image) {
            const new_i = "/" + image_path;
            await imageUP.DeleteImage(new_i);
            const new_image_path = await imageUP.OneImageUploadMV(
              image,
              "topics"
            );
            const sql_t = Q_Formatter(
              `UPDATE topics set image_path = ? where id = ? returning *;`,
              [new_image_path, topic_id]
            );
            const res_t = await query(sql_t, []);
            var new_topic_id = res_t.rows[0].id;
          }
          if (translations[0].text) {
            for (i = 0; i < translations.length; i++) {
              const title = translations[0].title.title;
              const content = translations[0].text.content;
              const id = translations[0].id;
              const t_id = image ? new_topic_id : translations[0].topic_id;
              const sql_tt = Q_Formatter(
                `UPDATE topics_translations SET  topic_id = ?, title = ?, content = ?
            WHERE id = ? returning *;`,
                [t_id, title, content, id]
              );
              var res_tt = await query(sql_tt, []);
            }
          } else {
            for (i = 0; i < translations.length; i++) {
              const topic_title = translations[0].title.topic_title;
              const id = translations[0].id;
              const sql_tt = Q_Formatter(
                `UPDATE home_translation SET  topic_title = ? WHERE id = ? returning *;`,
                [topic_title, id]
              );
              var res_tt = await query(sql_tt, []);
            }
          }

          return res_tt.rows[0];
        } catch (err) {
          console.log(err);
          return "false";
        }
      }
      case "faciliti": {
        try {
          const translations = params.translations;
          for (i = 0; i < translations.length; i++) {
            const sql = Q_Formatter(
              `UPDATE home_translation SET faciliti_title_s = ? , faciliti_title_b = ?,
            faciliti_text = ? WHERE id = ? returning *;`,
              [
                translations[i].title.small_title,
                translations[i].title.big_title,
                translations[i].text.text,
                translations[i].id,
              ]
            );
            var res = await query(sql, []);
          }
          return res.rows;
        } catch (err) {
          console.log(err);
          return "false";
        }
      }
      case "faciliti-image": {
        try {
          const image_path = params.image_path;
          const id = params.id;
          const new_i = "/" + image_path;
          await imageUP.DeleteImage(new_i);
          const new_image_path = await imageUP.OneImageUploadMV(
            image,
            "faciliti-images"
          );
          const sql = Q_Formatter(
            `UPDATE faciliti_images set image_path = ? where id = ? returning *;`,
            [new_image_path, id]
          );
          const res = await query(sql, []);
          return res.rows;
        } catch (err) {
          console.log(err);
          return "false";
        }
      }
      case "sliders": {
        try {
          const image_path = params.image_path;
          const id = params.id;
          const new_i = "/" + image_path;
          await imageUP.DeleteImage(new_i);
          const new_image_path = await imageUP.OneImageUploadMV(
            image,
            "sliders"
          );
          const sql = Q_Formatter(
            `UPDATE sliders set image_path = ? where id = ? returning *;`,
            [new_image_path, id]
          );
          const res = await query(sql, []);
          return res.rows;
        } catch (err) {
          console.log(err);
          return "false";
        }
      }
      case "map": {
        try {
          const translations = params.translations;
          for (i = 0; i < translations.length; i++) {
            const sql = Q_Formatter(
              `UPDATE home_translation SET agencie_title = ? , agencie_content = ?
               WHERE id = ? returning *;`,
              [
                translations[i].title.title,
                translations[i].text.text,
                translations[i].id,
              ]
            );
            var res = await query(sql, []);
          }
          return res.rows;
        } catch (err) {
          console.log(err);
          return "false";
        }
      }
      case "statistic": {
        try {
          const translations = params.translations;
          const id = params.id;
          const number = translations[0].title.number;
          const sql_s = Q_Formatter(
            `update statistics set number = ? where id = ? returning *;`,
            [number, id]
          );
          const res_s = await query(sql_s, []);
          for (i = 0; i < translations.length; i++) {
            const sql = Q_Formatter(
              `UPDATE statistics_translations SET statistics_id = ? , title = ?
               WHERE id = ? returning *;`,
              [
                res_s.rows[0].id,
                translations[i].title.title,
                translations[i].id,
              ]
            );
            var res = await query(sql, []);
          }
          return res.rows;
        } catch (err) {
          console.log(err);
          return "false";
        }
      }
    }
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_delete_home = async (id, image_path, section) => {
  try {
    try {
      const new_i = "/" + image_path;
      await imageUP.DeleteImage(new_i);
      const sql_t = Q_Formatter(
        `DELETE FROM sliders where id = ? returning *;`,
        [id]
      );
      const res_t = await query(sql_t, []);
      return res_tt.rows[0];
    } catch (err) {
      console.log(err);
      return "false";
    }
  } catch (err) {
    return "false";
  }
};

//--------------contact------------//
const q_get_contact = async () => {
  try {
    const sql = Q_Formatter(`WITH 
    ct as (
      SELECT 
      cont.id, cont.lang_id,
      json_build_object('title',cont.title,
                          'title_address',cont.title_address,
                          'name',cont.name,
                          'company_name',cont.company_name,
                          'mail',cont.mail,
                          'subject',cont.subject,
                          'message',cont.message,
                          'button_text',cont.button_text
                          ) as title
      FROM contact_translation as cont
    )
    SELECT
        json_agg(ct.*) as translations
    FROM ct;`);
    const res = await query(sql, []);
    return res.rows;
  } catch (err) {
    return "false";
  }
};

const q_add_contact = async (translations) => {
  try {
    for (i = 0; i < translations.length; i++) {
      const lang_id = translations[i].lang_id;
      const title = translations[i].title.title;
      const title_address = translations[i].title.title_address;
      const name = translations[i].title.name;
      const company_name = translations[i].title.company_name;
      const mail = translations[i].title.mail;
      const subject = translations[i].title.subject;
      const message = translations[i].title.message;
      const button_text = translations[i].title.button_text;
      const sql_ct = Q_Formatter(
        `insert into contact_translation(lang_id, title, title_address, name, 
          company_name, mail, subject, message, button_text  )
        values(?, ?, ?, ?, ?, ?, ?, ?, ?) returning *;`,
        [
          lang_id,
          title,
          title_address,
          name,
          company_name,
          mail,
          subject,
          message,
          button_text,
        ]
      );
      var res_ct = await query(sql_ct, []);
    }
    return res_ct.rows[0];
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const q_save_contact = async (params) => {
  try {
    const translations = params.translations;
    for (i = 0; i < translations.length; i++) {
      const id = translations[i].id;
      const title = translations[i].title.title;
      const title_address = translations[i].title.title_address;
      const name = translations[i].title.name;
      const company_name = translations[i].title.company_name;
      const mail = translations[i].title.mail;
      const subject = translations[i].title.subject;
      const message = translations[i].title.message;
      const button_text = translations[i].title.button_text;
      const sql_ct = Q_Formatter(
        `update contact_translation set title = ?, title_address = ?, 
        name = ?, company_name = ?, mail = ?, subject = ?, message = ?, 
        button_text = ? WHERE id = ? returning *;`,
        [
          title,
          title_address,
          name,
          company_name,
          mail,
          subject,
          message,
          button_text,
          id,
        ]
      );
      var res_ct = await query(sql_ct, []);
    }
    return res_ct;
  } catch (err) {
    console.log(err);
    return "false";
  }
};

//--------------about------------//
const q_get_about = async () => {
  try {
    const sql = Q_Formatter(`WITH at as (
      select
        sq_at.id, sq_at.lang_id,
        json_build_object('small_title',sq_at.small_title,'big_title',sq_at.big_title) as title,
        json_build_object('content',sq_at.content) as text
      from about_translation as sq_at 
    )
    SELECT
        json_agg(at.*) as translations  
    FROM at;`);
    const res = await query(sql, []);

    return res.rows;
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const q_add_about = async (params, image) => {
  try {
    const translations = params.translations;
    if (image) {
      var image_path = await imageUP.OneImageUploadMV(image, "about");
      const sql = Q_Formatter(
        `INSERT INTO about(image_path) VALUES(?) RETURNING *;`,
        [image_path]
      );
      const res = await query(sql, []);
      const about_id = res.rows[0].id;
      for (i = 0; i < translations.length; i++) {
        const lang_id = translations[i].lang_id;
        const small_title = translations[i].title.small_title;
        const big_title = translations[i].title.big_title;
        const content = translations[i].text.content;
        const sql_pt = Q_Formatter(
          `insert into about_translation(lang_id, about_id, small_title, big_title, content )
        values(?, ?, ?, ?, ?) returning *;`,
          [lang_id, about_id, small_title, big_title, content]
        );
        var res_at = await query(sql_pt, []);
      }
      return res_at.rows[0];
    }
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const q_save_about = async (params) => {
  try {
    const translations = params.translations;
    for (i = 0; i < translations.length; i++) {
      const sql_2 = Q_Formatter(
        `UPDATE about_translation SET small_title = ?, 
      big_title = ?, content  = ? WHERE id = ?;`,
        [
          translations[i].title.small_title,
          translations[i].title.big_title,
          translations[i].text.content,
          translations[i].id,
        ]
      );
      var { rows } = await query(sql_2, []);
    }

    return rows;
  } catch (err) {
    console.log(err);
    return "false";
  }
};
//--------------about_image------------//
const q_get_about_image = async () => {
  try {
    const sql = `
      select
        *
      from about_image;`;
    const res = await query(sql, []);
    return res.rows;
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const q_save_about_image = async (params, image) => {
  try {
    const image_path = params.image_path;
    const id = params.id;
    if (image) {
      const delete_image = "/" + image_path;
      await imageUP.DeleteImage(delete_image);
      var new_image_path = await imageUP.OneImageUploadMV(
        image,
        "about-images"
      );
    }
    const image_path_sql = image ? new_image_path : image_path;
    const sql = Q_Formatter(
      `update about_image set image_path = ?, position = ? where id = ? returning *;`,
      [image_path_sql, params.position, id]
    );
    const res = await query(sql, []);
    return res.rows;
  } catch (err) {
    console.log(err);
    return "false";
  }
};
//--------------product------------//
const q_get_product = async () => {
  try {
    const sql = Q_Formatter(`
    WITH 
    pt as (
      SELECT 
      prt.id, prt.lang_id, prt.product_id,
      json_build_object('name',prt.name, 'button_text',prt.button_text ) as title
      FROM products_translation as prt
    )
    SELECT products.id, products.image_path,
        (SELECT json_agg(pt.*) as translations FROM pt WHERE pt.product_id = products.id) 
        FROM products;`);
    const res = await query(sql, []);
    const res_lang = await query(`select * from languages;`, []);
    if (res.rows[0] == null) {
      res.rows[0] = {
        id: "",
        image_path: "",
        translations: [
          {
            id: "",
            lang_id: res_lang.rows[0].id,
            product_id: "",
            title: { name: "", button_text: "" },
          },
        ],
      };
    }
    return res.rows;
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const q_add_product = async (params, image) => {
  try {
    const translations = params.translations;
    const image_path = await imageUP.OneImageUploadMV(image, "products");
    const sql = Q_Formatter(
      `INSERT INTO products(image_path) VALUES(?) RETURNING *;`,
      [image_path]
    );
    const res = await query(sql, []);
    const product_id = res.rows[0].id;
    for (i = 0; i < translations.length; i++) {
      const lang_id = translations[i].lang_id;
      const name = translations[i].title.name;
      const button_text = translations[i].title.button_text;
      const sql_pt = Q_Formatter(
        `insert into products_translation(lang_id, product_id, name, button_text)
        values(?, ?, ?, ?) returning *;`,
        [lang_id, product_id, name, button_text]
      );
      var res_pt = await query(sql_pt, []);
    }

    return res_pt.rows;
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const q_save_product = async (params, image) => {
  try {
    const translations = params.translations;
    const p_id = params.id;
    var image_path = params.image_path;
    if (image) {
      const del_image_path = "/" + image_path;
      await imageUP.DeleteImage(del_image_path);
      const new_image_path = await imageUP.OneImageUploadMV(image, "products");
      const sql_p = Q_Formatter(
        `UPDATE products set image_path = ? where id = ? returning *;`,
        [new_image_path, p_id]
      );
      const res_p = await query(sql_p, []);
      var product_id = res_p.rows[0].id;
    }
    for (i = 0; i < translations.length; i++) {
      const name = translations[i].title.name;
      const button_text = translations[i].title.button_text;
      const id = translations[i].id;
      const new_product_id = image ? product_id : translations[0].product_id;
      const sql_pt = Q_Formatter(
        `UPDATE products_translation SET  product_id = ?, name = ?, button_text = ?
        WHERE id = ? returning *;`,
        [new_product_id, name, button_text, id]
      );
      var res_pt = await query(sql_pt, []);
    }
    return res_pt.rows[0];
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const q_delete_product = async (id, image_path) => {
  try {
    const delete_image_path = "/" + image_path;
    await imageUP.DeleteImage(delete_image_path);
    const sql = `DELETE FROM products WHERE id = $l7k$${id}$l7k$ RETURNING *;`;
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

//--------------header------------//
const q_get_header = async (menu) => {
  try {
    const sql = Q_Formatter(
      `
    with htt as (
      select 
          ht.id,
          ht.lang_id,
          ht.header_image_id,
          json_build_object('small_text',ht.small_text, 'text',ht.text ) as text 
      from header_text_translation as ht
    )
    SELECT 
    header_image.id,
    header_image.menu,
    header_image.image_path,
    (select json_agg(htt.*) from htt where htt.header_image_id = header_image.id ) as translations
    FROM header_image where menu = ?;`,
      [menu]
    );
    const res = await query(sql, []);
    return res.rows;
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const q_add_header = async (params, menu, image) => {
  try {
    const translations = params.translations;
    const image_path = await imageUP.OneImageUploadMV(image, "header");
    const sql = Q_Formatter(
      `INSERT INTO header_image(menu, image_path) VALUES(?, ?) RETURNING *;`,
      [menu, image_path]
    );
    const res = await query(sql, []);
    const header_id = res.rows[0].id;
    for (i = 0; i < translations.length; i++) {
      const lang_id = translations[i].lang_id;
      const small_text = translations[i].text.small_text;
      const text = translations[i].text.text;
      const sql_pt = Q_Formatter(
        `insert into header_text_translation(lang_id, header_image_id, small_text , text )
        values(?, ?, ?, ?) returning *;`,
        [lang_id, header_id, small_text, text]
      );
      var res_pt = await query(sql_pt, []);
    }
    return res_pt.rows;
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const q_save_header = async (params, menu, image) => {
  try {
    try {
      const image_path = params.image_path;
      const header_id = params.id;
      const translations = params.translations;
      if (image) {
        const del_image_path = "/" + image_path;
        await imageUP.DeleteImage(del_image_path);
        const new_image_path = await imageUP.OneImageUploadMV(image, "header");
        const sql_hi = Q_Formatter(
          `UPDATE header_image set image_path = ? where id = ? returning *;`,
          [new_image_path, header_id]
        );
        await query(sql_hi, []);
      }
      for (i = 0; i < translations.length; i++) {
        const small_text = translations[0].text.small_text;
        const text = translations[0].text.text;
        const id = translations[0].id;

        const sql_htt = Q_Formatter(
          `UPDATE header_text_translation SET header_image_id = ?, small_text = ?, text = ? 
            WHERE id = ? returning *;`,
          [header_id, small_text, text, id]
        );
        var res_htt = await query(sql_htt, []);
      }
      return res_htt.rows[0];
    } catch (err) {
      console.log(err);
      return "false";
    }
  } catch (err) {
    return "false";
  }
};

const q_delete_header = async (id, image_path, menu) => {
  try {
    const del_image_path = "/" + image_path;
    await imageUP.DeleteImage(del_image_path);
    const sql = Q_Formatter(
      `DELETE FROM header_image WHERE id = ? RETURNING *;`,
      [id]
    );
    const res = await query(sql, []);
    console.log(res.rows);
    return res;
  } catch (err) {
    return "false";
  }
};

//--------------faciliti_image------------//
const q_get_topic_title = async () => {
  try {
    const sql = `
    WITH 
        ht as (
          SELECT 
          ht.id, ht.lang_id,
          json_build_object('topic_title', ht.topic_title ) as title
          FROM home_translation as ht
        )
        SELECT 
          json_agg(ht.*) as translations
        FROM ht;
    `;
    const res = await query(sql, []);
    return res.rows;
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const q_save_topic_title = async (params) => {
  try {
    const translations = params.translations;
    const sql = Q_Formatter(
      `UPDATE home_translation SET topic_title = ? WHERE id = ? RETURNING *;`,
      [translations[0].title.topic_title, translations[0].id]
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

module.exports = {
  //--gallery--
  q_get_gallery,
  q_add_gallery,
  q_save_gallery,
  q_delete_gallery,

  //--language--
  q_get_language,
  q_add_language,
  q_save_language,
  q_delete_language,

  //--footer--
  q_get_footer,
  q_add_footer,
  q_save_footer,
  q_delete_footer,

  //--home--
  q_get_home,
  q_add_home,
  q_save_home,
  q_delete_home,

  //--contact--
  q_get_contact,
  q_add_contact,
  q_save_contact,

  //--about--
  q_get_about,
  q_add_about,
  q_save_about,

  //--about_image--
  q_get_about_image,
  q_save_about_image,

  //--product--
  q_get_product,
  q_add_product,
  q_save_product,
  q_delete_product,

  //--header--
  q_get_header,
  q_add_header,
  q_save_header,
  q_delete_header,

  //--topic_title--
  q_get_topic_title,
  q_save_topic_title,
};
