const { query } = require("./../Database/index");
const { Q_Formatter } = require("./../Functions/QFormatter");

const get_home = async (lang) => {
  try {
    const sql_header = Q_Formatter(
      `
        SELECT 
            (SELECT json_agg(header_image.*) FROM header_image WHERE header_image.menu = $a4e$home$a4e$) as images,
            (SELECT json_agg(header_text_translation.*) FROM header_text_translation WHERE 
            header_text_translation.lang_id = (SELECT id FROM languages WHERE short_name = 'en') AND 
            header_text_translation.header_image_id in (select id from header_image where menu = $a4e$home$a4e$ )  
            ) as header_text 
        FROM header_image WHERE menu = 'home'
    ;`,
      [lang]
    );
    const res_header = await query(sql_header, []);
    const sql_topic = Q_Formatter(
      `SELECT *, (select topic_title from home_translation where lang_id = (SELECT id FROM languages WHERE short_name = 'en')),
        (select image_path from image where role = 'topic_background') as topic_background
        FROM topics_translations where lang_id = (SELECT id FROM languages WHERE short_name = 'en');`,
      []
    );
    const res_topic = await query(sql_topic, []);

    const sql_faciliti = Q_Formatter(
      `SELECT 
          home_translation.topic_title,
          home_translation.faciliti_title_s as small_title,
          home_translation.faciliti_title_b as big_title,
          home_translation.faciliti_text as text,
          (select json_agg(faciliti_images.*) from faciliti_images) as images
       FROM home_translation WHERE lang_id = (SELECT id FROM languages WHERE short_name = 'en')`,
      []
    );
    const res_faciliti = await query(sql_faciliti, []);

    const sql_slider = Q_Formatter(`select * from sliders`);
    const res_slider = await query(sql_slider, []);

    const sql_agens =
      Q_Formatter(`SELECT agencie_title as title, agencie_content as content  
      FROM home_translation WHERE lang_id = (SELECT id FROM languages WHERE short_name = 'en');`);
    const res_agens = await query(sql_agens, []);

    const sql_statistics = Q_Formatter(
      `SELECT * FROM statistics WHERE lang_id = (SELECT id FROM languages WHERE short_name = 'en');`
    );
    const res_statistics = await query(sql_statistics, []);

    const sql_footer = Q_Formatter(
      `SELECT footer.*,
      (select json_agg(address.*) from address where lang_id = (SELECT id FROM languages WHERE short_name = 'en') ) as address,
      (select json_agg(phone_numbers.*) from phone_numbers) as phone_numbers,
      (select json_agg(mails.*) from mails) as mails
       from footer where lang_id = (SELECT id FROM languages WHERE short_name = 'en'); `
    );
    const res_footer = await query(sql_footer, []);

    return [
      res_header.rows[0],
      res_topic.rows,
      res_faciliti.rows[0],
      res_slider.rows,
      res_agens.rows[0],
      res_statistics.rows,
      res_footer.rows[0],
    ];
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const get_about = async (lang) => {
  try {
    const sql = Q_Formatter(
      `SELECT *, about.image_path 
    FROM about_translation 
    inner join about on about.id = about_translation.about_id
    where lang_id = (SELECT id FROM languages WHERE short_name = ?) ;`,
      [lang]
    );
    const res = await query(sql, []);

    return res.rows[0];
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const get_product = async () => {
  try {
    const sql = Q_Formatter(`SELECT products.image_path,
    (select json_agg(products_translation.*) as products from products_translation where lang_id = (SELECT id FROM languages WHERE short_name = 'en') ) 
    from products; `);
    const res = await query(sql, []);

    return res.rows[0];
  } catch (err) {
    console.log(err);
    return "false";
  }
};

const get_gallery = async () => {
  try {
    const sql = Q_Formatter(`SELECT * FROM gallery;`);
    const res = await query(sql, []);

    return res.rows;
  } catch (err) {}
};

const get_contact = async () => {
  try {
    const sql = Q_Formatter(
      `SELECT * FROM contact_translation where lang_id = (SELECT id FROM languages WHERE short_name = 'en');`
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
    const new_image_path_1 = upload_1 + "/" + topics_1 + "/" + image_1;
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
    const new_image_path_2 = upload_2 + "/" + topics_2 + "/" + image_2;
    data.articles[1].body = res.rows[1].content;
    data.articles[1].title = res.rows[1].title;
    data.articles[1].cover_url = new_image_path_2;

    //3
    const image_path_3 = res_2.rows[2].image_path;
    const upload_3 = image_path_3.substring(0, 6);
    const topics_3 = image_path_3.substring(7, 13);
    const image_3 = image_path_3.substring(14);
    const new_image_path_3 = upload_3 + "/" + topics_3 + "/" + image_3;
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
    data.articles[3].attachments.facebook_post.picture = new_image_path_4;

    //5
    const image_path_5 = res_2.rows[4].image_path;
    const upload_5 = image_path_5.substring(0, 6);
    const topics_5 = image_path_5.substring(7, 13);
    const image_5 = image_path_5.substring(14);
    const new_image_path_5 = upload_5 + "/" + topics_5 + "/" + image_5;
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

module.exports = {
  get_home,
  get_gallery,
  get_about,
  get_product,
  get_contact,
  topics,
};
