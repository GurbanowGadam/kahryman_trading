const { query } = require("./../Database/index");
const { Q_Formatter } = require("./../Functions/QFormatter");
const imageUpload = require("./../Functions/imageUpload");
const { videoUpload } = require("./../Functions/videoUpload");
const { videUploadMV } = require("./../Functions/video");
const path = require("path");
const fs = require("fs");

//--------------phone------------//
const q_get_phone = async () => {
  try {
    const sql = Q_Formatter(`SELECT * FROM phone_numbers;`);
    const res = await query(sql, []);
    return res.rows;
  } catch (err) {
    return "false";
  }
};

const q_get_phone_id = async (params) => {
  try {
    const sql = Q_Formatter(
      `SELECT * FROM phone_numbers WHERE id = ?;`,
      params
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_add_phone = async (params) => {
  try {
    const sql = Q_Formatter(
      `INSERT INTO phone_numbers(number) VALUES(?) RETURNING *;`,
      params
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_save_phone = async (params) => {
  try {
    const sql = Q_Formatter(
      `UPDATE phone_numbers SET number = ? created_at = clock_timestamp() WHERE id = ? RETURNING *;`,
      params
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_delete_phone = async (params) => {
  try {
    const sql = Q_Formatter(
      `DELETE FROM phone_numbers WHERE id = ? RETURNING *;`,
      params
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

//--------------mail------------//
const q_get_mail = async () => {
  try {
    const sql = Q_Formatter(`SELECT * FROM mails;`, []);
    const res = await query(sql, []);
    return res.rows;
  } catch (err) {
    return "false";
  }
};

const q_get_mail_id = async (params) => {
  try {
    const sql = Q_Formatter(`SELECT * FROM mails WHERE id = ?;`, params);
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_add_mail = async (params) => {
  try {
    const sql = Q_Formatter(
      `INSERT INTO mails(mail) VALUES(?) RETURNING *;`,
      params
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_save_mail = async (params) => {
  try {
    const sql = Q_Formatter(
      `UPDATE mails SET number = ?, created_at = clock_timestamp() WHERE id = ? RETURNING *;`,
      params
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_delete_mail = async (params) => {
  try {
    const sql = Q_Formatter(
      `DELETE FROM mails WHERE id = ? RETURNING *;`,
      params
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

//--------------gallery------------//
const q_get_gallery = async () => {
  try {
    const sql = Q_Formatter(`SELECT * FROM gallery;`);
    const res = await query(sql, []);
    return res.rows;
  } catch (err) {
    return "false";
  }
};

const q_get_gallery_id = async (params) => {
  try {
    const sql = Q_Formatter(`SELECT * FROM gallery WHERE id = ?;`, params);
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_add_gallery = async (type, gallery) => {
  try {
    const params = [];
    const rgx = /video/;
    if (gallery.mimetype.search(rgx) != -1) {
      console.log("video");
      const gallery_path = await videUploadMV(gallery, "gallery");
      console.log("gallery_path => ", gallery_path);
      const sql = Q_Formatter(
        `INSERT INTO gallery(gallery_path, type) VALUES(?, ?) RETURNING *;`,
        [gallery_path, type]
      );
      const res = await query(sql, []);
    } else {
      console.log("image");
      const gallery_path = await imageUpload.oneImageUpload(image, "gallery");
      params.push(gallery_path);
      params.push("image");
      const sql = Q_Formatter(
        `INSERT INTO gallery(gallery_path, type) VALUES(?, ?) RETURNING *;`,
        params
      );
      const res = await query(sql, []);
    }
    // return res
  } catch (err) {
    return "false";
  }
};

const q_save_gallery = async () => {
  try {
    const sql = Q_Formatter(
      `UPDATE gallery SET name = ?, short_name = ?, created_at = clock_timestamp() WHERE id = ? RETURNING *;`,
      params
    );
    const res = await query(sql, []);
    return res;
  } catch (err) {
    return "false";
  }
};

const q_delete_gallery = async (params) => {
  try {
    const sql = Q_Formatter(
      `DELETE FROM gallery WHERE id = ? RETURNING *;`,
      params
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
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

const q_get_language_id = async (params) => {
  try {
    const sql = Q_Formatter(`SELECT * FROM languages WHERE id = ?;`, params);
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_add_language = async (params, image) => {
  try {
    const image_path = await imageUpload.oneImageUpload(image, "language");
    params.push(image_path);
    const sql = Q_Formatter(
      `INSERT INTO languages(name, short_name, image_path) VALUES(?, ?, ?) RETURNING *;`,
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

    if (image) {
      await imageUpload.Deletefile(
        path.normalize(__dirname + "./../../" + res.rows[0].image_path)
      );
      const image_path = await imageUpload.oneImageUpload(image, "language");
      const sql = Q_Formatter(
        `UPDATE languages SET image_path = ?, created_at = clock_timestamp() WHERE id = ?;`,
        [image_path, params[2]]
      );
      await query(sql, []);
    }
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
    await imageUpload.Deletefile(
      path.normalize(__dirname + "./../../" + res.rows[0].image_path)
    );
    return res.rows[0];
  } catch (err) {
    console.log(err);
    return "false";
  }
};

//--------------footer------------//
const q_get_footer = async () => {
  try {
    const sql = Q_Formatter(`SELECT * FROM footer;`);
    const res = await query(sql, []);
    return res.rows;
  } catch (err) {
    return "false";
  }
};

const q_get_footer_id = async (params) => {
  try {
    const sql = Q_Formatter(`SELECT * FROM footer WHERE id = ?;`, params);
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_save_footer = async (params) => {
  try {
    const sql = Q_Formatter(
      `UPDATE footer SET text = ?, right = ? created_at = clock_timestamp() WHERE id = ? RETURNING *;`,
      params
    );
    const res = await query(sql, []);
    return res;
  } catch (err) {
    return "false";
  }
};

//--------------home------------//
const q_get_home = async () => {
  try {
    const sql = Q_Formatter(`WITH
    ht as (
      SELECT 
      hmt.id, hmt.lang_id,
      json_build_object('topic_title', hmt.topic_title,
                          'faciliti_title_s', hmt.faciliti_title_s,
                          'faciliti_title_b', hmt.faciliti_title_b,
                          'agencie_title', hmt.agencie_title) as title,
        json_build_object('agencie_content',hmt.agencie_content,
                          'faciliti_text',hmt.faciliti_text) as text
      FROM home_translation as hmt
    )
    SELECT
    json_agg(ht.*) as translations
    FROM ht;`);
    const res = await query(sql, []);
    return res.rows;
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const q_get_home_id = async (params) => {
  try {
    const sql = Q_Formatter(
      `SELECT * FROM home_translation WHERE id = ?;`,
      params
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_add_home = async (translations) => {
  try {
    for (i = 0; i < translations.length; i++) {
      const lang_id = translations[i].lang_id;
      const topic_title = translations[i].title.topic_title;
      const faciliti_title_s = translations[i].title.faciliti_title_s;
      const faciliti_title_b = translations[i].title.faciliti_title_b;
      const agencie_title = translations[i].title.agencie_title;
      const agencie_content = translations[i].text.agencie_content;
      const faciliti_text = translations[i].text.faciliti_text;
      const sql_at = Q_Formatter(
        `insert into home_translation(lang_id, topic_title , faciliti_title_s , 
          faciliti_title_b , faciliti_text , agencie_title, agencie_content )
        values(?, ?, ?, ?, ?, ?, ?) returning *;`,
        [
          lang_id,
          topic_title,
          faciliti_title_s,
          faciliti_title_b,
          faciliti_text,
          agencie_title,
          agencie_content,
        ]
      );
      var res_at = await query(sql_at, []);
    }
    return res_at.rows[0];
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const q_save_home = async (translations) => {
  try {
    for (i = 0; i < translations.length; i++) {
      const id = translations[i].id;
      const topic_title = translations[i].title.topic_title;
      const faciliti_title_s = translations[i].title.faciliti_title_s;
      const faciliti_title_b = translations[i].title.faciliti_title_b;
      const faciliti_text = translations[i].text.faciliti_text;
      const agencie_title = translations[i].title.agencie_title;
      const agencie_content = translations[i].text.agencie_content;

      const sql = Q_Formatter(
        `UPDATE home_translation SET 
        topic_title = ?, faciliti_title_s = ?, faciliti_title_b = ?, faciliti_text = ?, 
        agencie_title = ?, agencie_content = ?, created_at = clock_timestamp() WHERE id = ? RETURNING *;`,
        params
      );
      var res = await query(sql, [
        topic_title,
        faciliti_title_s,
        faciliti_title_b,
        faciliti_text,
        agencie_title,
        agencie_content,
        id,
      ]);
    }
    return res.rows[0];
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
                          'message,',cont.message,
                          'button_text,',cont.button_text
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

const q_get_contact_id = async (params) => {
  try {
    const sql = Q_Formatter(
      `SELECT * FROM contact_translation WHERE id = ?;`,
      params
    );
    const res = await query(sql, []);
    return res.rows[0];
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

const q_save_contact = async (translations) => {
  try {
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
        button_text = ? created_at = clock_timestamp() WHERE id = ? returning *;`,
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
    return res;
  } catch (err) {
    return "false";
  }
};

//--------------about------------//
const q_get_about = async () => {
  try {
    const sql = Q_Formatter(`WITH sub_q as (
      select
        sq_at.about_id, 
        json_build_object('small_title',sq_at.small_title,'big_title',sq_at.big_title) as title,
        json_build_object('content',sq_at.content) as text
      from about_translation as sq_at 
    ),
    at as (
      SELECT 
      at.id, at.lang_id, at.about_id,
      sub_q.title,
      sub_q.text
      FROM about_translation as at
      inner join sub_q on sub_q.about_id = at.about_id 
    )
    SELECT about.id, about.image_path,
        (SELECT json_agg(at.*) as translations FROM at WHERE at.about_id = about.id) 
        FROM about;`);
    const res = await query(sql, []);
    return res.rows;
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const q_get_about_id = async (params) => {
  try {
    const sql = Q_Formatter(`SELECT * FROM about_translation;`, params);
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_add_about = async (translations, image) => {
  try {
    if (image) {
      var image_path = await imageUpload.oneImageUpload(image, "about");

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

const q_save_about = async (translations, image, id) => {
  try {
    if (image) {
      const sql_2 = `select image_path from about where id = '${translations.id}';`;
      const res_2 = await query(sql_2, []);
      await imageUpload.Deletefile(
        path.normalize(__dirname + "./../../" + res_2.rows[0].image_path)
      );
      const image_path = await imageUpload.oneImageUpload(image, "about");
      const sql = Q_Formatter(
        `UPDATE about SET image_path = ?, created_at = clock_timestamp() WHERE id = ? returning *;`,
        [image_path, translations.id]
      );
      var res_a = await query(sql, []);
    }
    const about_id = image ? res_a.rows[0].id : translations.id;
    for (i = 0; i < translations.translations.length; i++) {
      const sql_2 = Q_Formatter(
        `UPDATE about_translation SET about_id = ?, small_title = ?, 
      big_title = ?, content  = ?, created_at = clock_timestamp() WHERE id = ?;`,
        [
          about_id,
          translations.translations[i].title.small_title,
          translations.translations[i].title.big_title,
          translations.translations[i].text.content,
          translations.translations[i].id,
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

//--------------product------------//
const q_get_product = async () => {
  try {
    const sql = Q_Formatter(`
    WITH 
    pt as (
      SELECT 
      prt.id, prt.lang_id, prt.product_id,
      json_build_object('name',prt.name) as title,
      json_build_object('text',prt.text) as text
      FROM products_translation as prt
    )
    SELECT products.id, products.image_path,
        (SELECT json_agg(pt.*) as translations FROM pt WHERE pt.product_id = products.id) 
        FROM products;`);
    const res = await query(sql, []);
    return res.rows;
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const q_get_product_id = async (params) => {
  try {
    const sql = Q_Formatter(
      `SELECT * FROM products_translation WHERE id = ?;`,
      params
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_add_product = async (translations, image) => {
  try {
    const image_path = await imageUpload.oneImageUpload(image, "products");

    const sql = Q_Formatter(
      `INSERT INTO products(image_path) VALUES(?) RETURNING *;`,
      [image_path]
    );
    const res = await query(sql, []);
    const product_id = res.rows[0].id;
    for (i = 0; i < translations.length; i++) {
      const lang_id = translations[i].lang_id;
      const name = translations[i].title.name;
      const text = translations[i].text.text;
      const sql_pt = Q_Formatter(
        `insert into products_translation(lang_id, product_id, name, text)
        values(?, ?, ?, ?) returning *;`,
        [lang_id, product_id, name, text]
      );
      const res_pt = await query(sql_pt, []);
    }

    return res_pt.rows;
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const q_save_product = async (id, translations, image) => {
  try {
    if (image) {
      const sql = Q_Formatter(`SELECT image_path FROM products WHERE id = ?;`, [
        id,
      ]);
      const res = await query(sql, []);
      const image_path_old = res.rows[0].image_path;
      await imageUpload.Deletefile(
        path.normalize(__dirname + "./../../" + image_path_old)
      );
      const image_path = await imageUpload.oneImageUpload(image, "products");
      const sql_p = Q_Formatter(
        `INSERT INTO products(image_path) values(?) returning *;`,
        [image_path]
      );
      const res_p = await query(sql_p, []);
      var product_id = res_p.rows[0].id;
    }

    for (i = 0; i < translations.length; i++) {
      const lang_id = translations[0].lang_id;
      const name = translations[0].title.name;
      const text = translations[0].text.text;
      const product_id = image ? new_product_id : translations[0].product_id;
      const sql_pt = Q_Formatter(
        `INSERT INTO products_translation(lang_id, product_id, name, text) VALUES(?, ?, ?, ?) returning *;`,
        [lang_id, product_id, name, text]
      );
      var res_pt = await query(sql_pt, []);
    }

    return res_pt.rows[0];
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const q_delete_product = async (params) => {
  try {
    const sql = Q_Formatter(
      `DELETE FROM products_translation WHERE id = ? RETURNING *;`,
      params
    );
    const res = await query(sql, []);
    await imageUpload.Deletefile(
      path.normalize(__dirname + "./../../" + res.rows[0].image_path)
    );
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

const q_get_header_id = async () => {
  try {
    const sql = Q_Formatter(`SELECT * FROM  WHERE id = ?;`, params);
    const res = await query(sql, []);
    return res;
  } catch (err) {
    return "false";
  }
};

const q_add_header = async (translations, menu, image) => {
  try {
    const sql = Q_Formatter(`RETURNING *;`, params);
    const res = await query(sql, []);
    return res;
  } catch (err) {
    return "false";
  }
};

const q_save_header = async () => {
  try {
    const sql = Q_Formatter(`RETURNING *;`, params);
    const res = await query(sql, []);
    return res;
  } catch (err) {
    return "false";
  }
};

const q_delete_header = async () => {
  try {
    const sql = Q_Formatter(`RETURNING *;`, params);
    const res = await query(sql, []);
    return res;
  } catch (err) {
    return "false";
  }
};

//--------------header_image------------//
const q_get_header_image = async () => {
  try {
    const sql = Q_Formatter(`SELECT * FROM header_image_image_translation;`);
    const res = await query(sql, []);
    return res.rows;
  } catch (err) {
    return "false";
  }
};

const q_get_header_image_id = async () => {
  try {
    const sql = Q_Formatter(`SELECT * FROM  WHERE id = ?;`, params);
    const res = await query(sql, []);
    return res;
  } catch (err) {
    return "false";
  }
};

const q_add_header_image = async () => {
  try {
    const sql = Q_Formatter(`RETURNING *;`, params);
    const res = await query(sql, []);
    return res;
  } catch (err) {
    return "false";
  }
};

const q_save_header_image = async () => {
  try {
    const sql = Q_Formatter(`RETURNING *;`, params);
    const res = await query(sql, []);
    return res;
  } catch (err) {
    return "false";
  }
};

const q_delete_header_image = async () => {
  try {
    const sql = Q_Formatter(`RETURNING *;`, params);
    const res = await query(sql, []);
    return res;
  } catch (err) {
    return "false";
  }
};

//--------------address------------//
const q_get_address = async () => {
  try {
    const sql = Q_Formatter(`SELECT * FROM address;`);
    const res = await query(sql, []);
    return res.rows;
  } catch (err) {
    return "false";
  }
};

const q_get_address_id = async (params) => {
  try {
    const sql = Q_Formatter(`SELECT * FROM address WHERE id = ?;`, params);
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_add_address = async (params) => {
  try {
    const sql = Q_Formatter(
      `INSERT INTO address(lang_id, address) VALUES(?, ?) RETURNING *;`,
      params
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_save_address = async (params) => {
  try {
    const sql = Q_Formatter(
      `UPDATE address SET 
        address = ? created_at = clock_timestamp() 
        WHERE id = ? RETURNING *;`,
      params
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_delete_address = async (params) => {
  try {
    const sql = Q_Formatter(
      `DELETE FROM address WHERE id = ? RETURNING *;`,
      params
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

//--------------statistics------------//
const q_get_statistics = async () => {
  try {
    const sql = Q_Formatter(`SELECT * FROM statistics;`);
    const res = await query(sql, []);
    return res.rows;
  } catch (err) {
    return "false";
  }
};

const q_get_statistics_id = async (params) => {
  try {
    const sql = Q_Formatter(`SELECT * FROM statistics WHERE id = ?;`, params);
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_add_statistics = async (params) => {
  try {
    const sql = Q_Formatter(
      `INSERT INTO statistics(lang_id, text, number) VALUES(?, ?, ?) RETURNING *;`,
      params
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_save_statistics = async (params) => {
  try {
    const sql = Q_Formatter(
      `UPDATE statistics SET 
        text = ?, number = ?, created_at = clock_timestamp() 
        WHERE id = ? RETURNING *;`,
      params
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_delete_statistics = async (params) => {
  try {
    const sql = Q_Formatter(
      `DELETE FROM statistics WHERE id = ? RETURNING *;`,
      params
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

//--------------topic------------//
const q_get_topic = async () => {
  try {
    const sql = Q_Formatter(`SELECT * FROM topics_translations;`);
    const res = await query(sql, []);
    return res.rows;
  } catch (err) {
    return "false";
  }
};

const q_get_topic_id = async () => {
  try {
    const sql = Q_Formatter(
      `SELECT * FROM topics_translations WHERE id = ?;`,
      params
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_add_topic = async (params, image) => {
  try {
    const image_path = await imageUpload.oneImageUpload(image, "topics");
    params.push(image_path);
    const sql = Q_Formatter(
      `INSERT INTO topics_translations(lang_id, title, content, image_path) VALUES(?, ?, ?, ?) RETURNING *;`,
      params
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_save_topic = async (params, image) => {
  try {
    const sql = Q_Formatter(
      `UPDATE topics_translations SET 
        title = ?, content = ?, created_at = clock_timestamp() 
        WHERE id = ? RETURNING *;`,
      params
    );
    const res = await query(sql, []);
    if (image) {
      await imageUpload.Deletefile(
        path.normalize(__dirname + "./../../" + res.rows[0].image_path)
      );
      const image_path = await imageUpload.oneImageUpload(image, "topics");
      const sql = Q_Formatter(
        `UPDATE topics_translations SET image_path = ?, created_at = clock_timestamp() WHERE id = ?;`,
        [image_path, res.rows[0].id]
      );
      await query(sql, []);
    }
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_delete_topic = async (params) => {
  try {
    const sql = Q_Formatter(
      `DELETE FROM topics_translations WHERE id = ? RETURNING *;`,
      params
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

//--------------slider------------//
const q_get_slider = async () => {
  try {
    const sql = Q_Formatter(`SELECT * FROM sliders_translations;`);
    const res = await query(sql, []);
    return res.rows;
  } catch (err) {
    return "false";
  }
};

const q_get_slider_id = async () => {
  try {
    const sql = Q_Formatter(
      `SELECT * FROM sliders_translations WHERE id = ?;`,
      params
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_add_slider = async (params, image) => {
  try {
    const image_path = await imageUpload.oneImageUpload(image, "sliders");
    const sql = Q_Formatter(
      `INSERT INTO sliders(image_path) VALUES(?) RETURNING *;`,
      [image_path]
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_save_slider = async (id, image) => {
  try {
    const sql = Q_Formatter(
      `SELECT image_path FROM faciliti_images WHERE id = ?;`,
      [id]
    );
    const res = await query(sql, []);
    if (image) {
      await imageUpload.Deletefile(
        path.normalize(__dirname + "./../../" + res.rows[0].image_path)
      );
      const image_path = await imageUpload.oneImageUpload(
        image,
        "faciliti_images"
      );
      const sql = Q_Formatter(
        `UPDATE faciliti_images SET image_path = ?, created_at = clock_timestamp() WHERE id = ?;`,
        [image_path, res.rows[0].id]
      );
      var res_fi = await query(sql, []);
    }
    return res_fi.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_delete_slider = async (params) => {
  try {
    const sql = Q_Formatter(
      `DELETE FROM sliders_translations WHERE id = ? RETURNING *;`,
      params
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

//--------------faciliti_image------------//
const q_get_faciliti_image = async () => {
  try {
    const sql = Q_Formatter(
      `SELECT json_agg(faciliti_images.*) as images FROM faciliti_images;`
    );
    const res = await query(sql, []);
    return res.rows;
  } catch (err) {
    return "false";
  }
};

const q_get_faciliti_image_id = async () => {
  try {
    const sql = Q_Formatter(
      `SELECT * FROM faciliti_images_translations WHERE id = ?;`,
      params
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_add_faciliti_image = async (image) => {
  try {
    const image_path = await imageUpload.oneImageUpload(
      image,
      "faciliti_images"
    );
    const sql = Q_Formatter(
      `INSERT INTO faciliti_images(image_path) VALUES(?) RETURNING *;`,
      [image_path]
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_save_faciliti_image = async (id, image) => {
  try {
    const sql = Q_Formatter(
      `SELECT image_path FROM faciliti_images WHERE id = ?;`,
      [id]
    );
    const res = await query(sql, []);
    if (image) {
      await imageUpload.Deletefile(
        path.normalize(__dirname + "./../../" + res.rows[0].image_path)
      );
      const image_path = await imageUpload.oneImageUpload(
        image,
        "faciliti_images"
      );
      const sql = Q_Formatter(
        `UPDATE faciliti_images SET image_path = ?, created_at = clock_timestamp() WHERE id = ?;`,
        [image_path, res.rows[0].id]
      );
      var res_fi = await query(sql, []);
    }
    return res_fi.rows[0];
  } catch (err) {
    return "false";
  }
};

const q_delete_faciliti_image = async (params) => {
  try {
    const sql = Q_Formatter(
      `DELETE FROM faciliti_images_translations WHERE id = ? RETURNING *;`,
      params
    );
    const res = await query(sql, []);
    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

module.exports = {
  //--phone--
  q_get_phone,
  q_get_phone_id,
  q_add_phone,
  q_save_phone,
  q_delete_phone,

  //--gallery--
  q_get_gallery,
  q_get_gallery_id,
  q_add_gallery,
  q_save_gallery,
  q_delete_gallery,

  //--mail--
  q_get_mail,
  q_get_mail_id,
  q_add_mail,
  q_save_mail,
  q_delete_mail,

  //--language--
  q_get_language,
  q_get_language_id,
  q_add_language,
  q_save_language,
  q_delete_language,

  //--footer--
  q_get_footer,
  q_get_footer_id,
  q_save_footer,

  //--home--
  q_get_home,
  q_add_home,
  q_get_home_id,
  q_save_home,

  //--contact--
  q_get_contact,
  q_get_contact_id,
  q_add_contact,
  q_save_contact,

  //--about--
  q_get_about,
  q_add_about,
  q_get_about_id,
  q_save_about,

  //--product--
  q_get_product,
  q_get_product_id,
  q_add_product,
  q_save_product,
  q_delete_product,

  //--header--
  q_get_header,
  q_get_header_id,
  q_add_header,
  q_save_header,
  q_delete_header,

  //--address--
  q_get_address,
  q_get_address_id,
  q_add_address,
  q_save_address,
  q_delete_address,

  //--statistics--
  q_get_statistics,
  q_get_statistics_id,
  q_add_statistics,
  q_save_statistics,
  q_delete_statistics,

  //--topic--
  q_get_topic,
  q_get_topic_id,
  q_add_topic,
  q_save_topic,
  q_delete_topic,

  //--slider--
  q_get_slider,
  q_get_slider_id,
  q_add_slider,
  q_save_slider,
  q_delete_slider,

  //--faciliti--
  q_get_faciliti_image,
  q_get_faciliti_image_id,
  q_add_faciliti_image,
  q_save_faciliti_image,
  q_delete_faciliti_image,
};
