const { query } = require("./../Database/index");
const { Q_Formatter } = require("./../Functions/QFormatter");

const get_home = async (lang) => {
  try {
    const sql_faciliti = Q_Formatter(
      `SELECT 
          home_translation.topic_title,
          home_translation.faciliti_title_s as small_title,
          home_translation.faciliti_title_b as big_title,
          home_translation.faciliti_text as text,
          (select json_agg(faciliti_images.*) from faciliti_images) as images
       FROM home_translation WHERE lang_id = (SELECT id FROM languages WHERE short_name = ?)`,
      [lang]
    );
    const res_faciliti = await query(sql_faciliti, []);

    const sql_slider = Q_Formatter(`select * from sliders`);
    const res_slider = await query(sql_slider, []);

    const sql_agens = Q_Formatter(
      `SELECT agencie_title as title, agencie_content as content  
      FROM home_translation WHERE lang_id = (SELECT id FROM languages WHERE short_name = ?);`,
      [lang]
    );
    const res_agens = await query(sql_agens, []);

    const sql_statistics = Q_Formatter(
      `SELECT stt.*, st.number  FROM statistics_translations as stt INNER JOIN statistics as st ON  
      stt.statistics_id = st.id
      WHERE lang_id = (SELECT id FROM languages WHERE short_name = ?);`,
      [lang]
    );
    const res_statistics = await query(sql_statistics, []);

    return [
      res_faciliti.rows[0],
      res_slider.rows,
      res_agens.rows[0],
      res_statistics.rows,
    ];
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const get_about = async (lang) => {
  try {
    const sql = Q_Formatter(
      `SELECT * FROM about_translation 
        where lang_id = (SELECT id FROM languages WHERE short_name = ?) ;`,
      [lang]
    );
    const res = await query(sql, []);

    const sql_image = Q_Formatter(
      `SELECT * FROM about_image where position = 'left';`,
      [lang]
    );
    const res_image = await query(sql_image, []);

    const sql_image_path = Q_Formatter(
      `SELECT * FROM about_image where position = 'bottom';`,
      [lang]
    );
    const res_image_path = await query(sql_image_path, []);

    return [res.rows[0], res_image.rows, res_image_path.rows[0]];
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const get_product = async (lang) => {
  try {
    const sql = Q_Formatter(
      `SELECT products.image_path,
    (select json_agg(products_translation.*) as products from products_translation where lang_id = (SELECT id FROM languages WHERE short_name = ?) ) 
    from products; `,
      [lang]
    );
    const res = await query(sql, []);

    return res.rows;
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const get_gallery = async (lang) => {
  try {
    const sql = Q_Formatter(`
      select * from gallery;`);
    const res = await query(sql, []);

    return res.rows;
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const get_contact = async (lang) => {
  try {
    const sql = Q_Formatter(
      `
      WITH address as (
        SELECT at.* FROM address_translations as at INNER JOIN address as a ON  
        at.address_id = a.id
        WHERE lang_id = (SELECT id FROM languages WHERE short_name = ?)
      )
      
      SELECT 
      ct.*,
      (select json_agg(address.*) from address) as address,
      (select json_agg(phone_numbers.*) from phone_numbers) as phone_numbers,
      (select json_agg(mails.*) from mails) as mails
      FROM contact_translation as ct 
      where lang_id = (SELECT id FROM languages WHERE short_name = ?);
      

      `,
      [lang, lang]
    );
    const res = await query(sql, []);

    return res.rows[0];
  } catch (err) {
    return "false";
  }
};

const topics = async (data, lang) => {
  try {
    const sql = Q_Formatter(
      `SELECT * FROM topics_translations where lang_id = (SELECT id FROM languages WHERE short_name = ?);`,
      [lang]
    );
    const res = await query(sql, []);
    const sql_2 = Q_Formatter(`select * from topics;`);
    const res_2 = await query(sql_2, []);
    //1
    const image_path_1 = res_2.rows[0].image_path;
    const upload_1 = image_path_1.substring(0, 6);
    const topics_1 = image_path_1.substring(7, 13);
    const image_1 = image_path_1.substring(14);
    const new_image_path_1 =
      upload_1 + "/" + topics_1 + "/" + image_1 + "-1000.jpg";
    data.articles[0].attachments.linkedin_embed.post.message =
      res.rows[0].content;
    data.articles[0].attachments.linkedin_embed.user.name = res.rows[0].title;
    data.articles[0].attachments.linkedin_embed.post.images[0].image_url =
      new_image_path_1;
    //2
    const image_path_2 = res_2.rows[1].image_path;
    const upload_2 = image_path_2.substring(0, 6);
    const topics_2 = image_path_2.substring(7, 13);
    const image_2 = image_path_2.substring(14);
    const new_image_path_2 =
      upload_2 + "/" + topics_2 + "/" + image_2 + "-1000.jpg";
    data.articles[1].body = res.rows[1].content;
    data.articles[1].title = res.rows[1].title;
    data.articles[1].cover_url = new_image_path_2;

    //3
    const image_path_3 = res_2.rows[2].image_path;
    const upload_3 = image_path_3.substring(0, 6);
    const topics_3 = image_path_3.substring(7, 13);
    const image_3 = image_path_3.substring(14);
    const new_image_path_3 =
      upload_3 + "/" + topics_3 + "/" + image_3 + "-1000.jpg";
    data.articles[2].attachments.facebook_post.message = res.rows[2].content;
    data.articles[2].attachments.facebook_post.from_name = res.rows[2].title;
    data.articles[2].attachments.facebook_post.picture = new_image_path_3;

    //4
    const image_path_4 = res_2.rows[3].image_path;
    const upload_4 = image_path_4.substring(0, 6);
    const topics_4 = image_path_4.substring(7, 13);
    const image_4 = image_path_4.substring(14);
    const new_image_path_4 = upload_4 + "/" + topics_4 + "/" + image_4;
    data.articles[3].attachments.facebook_post.message = res.rows[3].content;
    data.articles[3].attachments.facebook_post.from_name = res.rows[3].title;
    data.articles[3].attachments.facebook_post.picture =
      new_image_path_4 + "-1000.jpg";

    //5
    const image_path_5 = res_2.rows[4].image_path;
    const upload_5 = image_path_5.substring(0, 6);
    const topics_5 = image_path_5.substring(7, 13);
    const image_5 = image_path_5.substring(14);
    const new_image_path_5 =
      upload_5 + "/" + topics_5 + "/" + image_5 + "-1000.jpg";
    data.articles[4].attachments.linkedin_embed.post.message =
      res.rows[4].content;
    data.articles[4].attachments.linkedin_embed.user.name = res.rows[4].title;
    data.articles[4].attachments.linkedin_embed.post.images[0].image_url =
      new_image_path_5;

    return data;
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const get_header = async (lang, menu) => {
  try {
    const sql_header = Q_Formatter(
      `WITH slider as (
        SELECT
          hi.id,
          hi.image_path,
          htt.small_text,
          htt.text
        FROM header_image as hi
        inner join header_text_translation as htt
        on htt.header_image_id = hi.id and htt.lang_id = (select id from languages where short_name = ?)
        WHERE hi.menu = ? )
      select
        ( select json_agg(slider.*) from slider) as slider,
        ( select json_agg(menu_translation.*) from menu_translation where lang_id = (select id from languages where short_name = ?) ) as menu,
        ( select json_agg(languages.*) from languages) as languages
      from slider
    ;`,
      [lang, menu, lang]
    );
    const res_header = await query(sql_header, []);

    return res_header.rows;
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const get_footer = async (lang) => {
  try {
    const sql_footer = Q_Formatter(
      `WITH address as (
        SELECT at.* FROM address_translations as at INNER JOIN address as a ON  
        at.address_id = a.id
        WHERE lang_id = (SELECT id FROM languages WHERE short_name = ?)
      )
      SELECT footer.*,
      (select json_agg(address.*) from address) as address,
      (select json_agg(phone_numbers.*) from phone_numbers) as phone_numbers,
      (select json_agg(mails.*) from mails) as mails
       from footer where lang_id = (SELECT id FROM languages WHERE short_name = ?); `,
      [lang, lang]
    );
    const res_footer = await query(sql_footer, []);

    return res_footer.rows[0];
  } catch (err) {
    console.log(err);
    return "false";
  }
};

module.exports = {
  get_home,
  get_gallery,
  get_about,
  get_product,
  get_contact,
  topics,
  get_header,
  get_footer,
};
