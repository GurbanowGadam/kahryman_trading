const status = require("./../Utilis/status");
const adminQuery = require("./../Queries/AdminQuery");

//-----------phone--------------//
const get_phone_id = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await adminQuery.q_get_phone_id([id]);
    if (result != "false") {
      res.status(status.OK).json({ data: result });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const add_phone = async (req, res) => {
  try {
    const { phone_number } = req.body;
    const result = await adminQuery.q_add_phone([phone_number]);
    if (result != "false") {
      res.status(status.OK).json({ msg: "add successfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const save_phone = async (req, res) => {
  try {
    const { phone_number, id } = req.body;
    const result = await adminQuery.q_save_phone([id, phone_number]);
    if (result != "false") {
      res.status(status.OK).json({ msg: "save successfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const delete_phone = async (req, res) => {
  try {
    const { id } = req.body;
    const result = await adminQuery.q_delete_phone([id]);
    if (result != "false") {
      res.status(status.OK).json({ msg: "delete successfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

//-----------mail--------------//
const get_mail_id = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await adminQuery.q_get_mail_id([id]);
    if (result != "false") {
      res.status(status.OK).json({ data: result });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const add_mail = async (req, res) => {
  try {
    const { mail } = req.body;
    const result = await adminQuery.q_add_mail([mail]);
    if (result != "false") {
      res.status(status.OK).json({ msg: "add successfull" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const save_mail = async (req, res) => {
  try {
    const { mail, id } = req.body;
    const result = await adminQuery.q_save_mail();
    if (result != "false") {
      res.status(status.OK).json({ msg: "save successfull" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const delete_mail = async (req, res) => {
  try {
    const { id } = req.body;
    const result = await adminQuery.q_delete_mail();
    if (result != "false") {
      res.status(status.OK).json({ msg: "delete successfull" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

//-----------gallery--------------//
const get_gallery_id = async (req, res) => {
  try {
    const { id } = req.body;
    const result = await adminQuery.q_get_gallery_id([id]);
    if (result != "false") {
      res.status(status.OK).json({ data: result });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const add_gallery = async (req, res) => {
  try {
    const { type } = req.body;
    const { gallery } = req.files;
    const result = await adminQuery.q_add_gallery(type, gallery);
    if (result != "false") {
      res.status(status.OK).json({ msg: "add successfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const save_gallery = async (req, res) => {
  try {
    const result = await adminQuery.q_save_gallery();
    res.status(status.OK).json({ data: result });
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const delete_gallery = async (req, res) => {
  try {
    const result = await adminQuery.q_delete_gallery();
    res.status(status.OK).json({ data: result });
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

//----------language-----------------//
const get_language_id = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await adminQuery.q_get_language_id([id]);
    if (result != "false") {
      res.status(status.OK).json({ data: result });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const add_language = async (req, res) => {
  try {
    const { name, short_name } = req.body;
    const { image } = req.files;
    const result = await adminQuery.q_add_language([name, short_name], image);
    if (result != "false") {
      res.status(status.OK).json({ msg: "add succesfull" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const save_language = async (req, res) => {
  try {
    const { name, short_name, id } = req.body;
    const { image } = req.files;
    const result = await adminQuery.q_save_language(
      [name, short_name, id],
      image
    );
    if (result != "false") {
      res.status(status.OK).json({ msg: "save succesfull" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const delete_language = async (req, res) => {
  try {
    const { id } = req.body;
    const result = await adminQuery.q_delete_language([id]);
    if (result != "false") {
      res.status(status.OK).json({ msg: "delete succesfull" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

//----------footer-----------------//
const get_footer = async (req, res) => {
  try {
    const result = await adminQuery.q_get_footer();
    if (result != "false") {
      res.status(status.OK).json({ data: result });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const get_footer_id = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await adminQuery.q_get_footer_id([id]);
    if (result != "false") {
      res.status(status.OK).json({ data: result });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const save_footer = async (req, res) => {
  try {
    const { text, right, id } = req.body;
    const result = await adminQuery.q_save_footer([text, right, id]);
    if (result != "false") {
      res.status(status.OK).json({ msg: "save successfull" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

//----------home-----------------//
const get_home_id = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await adminQuery.q_get_home_id([id]);
    if (result != "false") {
      res.status(status.OK).json({ data: result });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const add_home = async (req, res) => {
  try {
    const { translations } = req.body;
    const result = await adminQuery.q_add_home(translations);
    if (result != "false") {
      res.status(status.OK).json({ msg: "add successfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const save_home = async (req, res) => {
  try {
    const { translations } = req.body;
    const result = await adminQuery.q_save_home(translations);
    if (result != "false") {
      res.status(status.OK).json({ msg: "save successfull" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

//----------contact-----------------//
const get_contact_id = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await adminQuery.q_get_contact_id([id]);
    if (result != "false") {
      res.status(status.OK).json({ data: result });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const add_contact = async (req, res) => {
  try {
    const { translations } = req.body;
    //const { image } = req.files;
    const result = await adminQuery.q_add_contact(translations);
    if (result != "false") {
      res.status(status.OK).json({ msg: "add successfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const save_contact = async (req, res) => {
  try {
    ////.........
    const {
      title,
      title_address,
      name,
      company_name,
      mail,
      subject,
      message,
      button_text,
      id,
    } = req.body;
    const { header_small_text, header_text } = req.body;
    const { header_image } = req.files;
    const result = await adminQuery.q_save_contact(
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
      ],
      [header_small_text, header_text],
      header_image
    );
    if (result != "false") {
      res.status(status.OK).json({ msg: "save successfull" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

//----------about-----------------//
const get_about_id = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await adminQuery.q_get_about_id([id]);
    if (result != "false") {
      res.status(status.OK).json({ data: result });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const add_about = async (req, res) => {
  try {
    const { translations, image_path } = req.body;
    //const { image } = req.files;
    const result = await adminQuery.q_add_about(translations, image_path);
    if (result != "false") {
      res.status(status.OK).json({ msg: "add successfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const save_about = async (req, res) => {
  try {
    const { small_title, big_title, content, button_text, id } = req.body;
    const { image } = req.files;
    const result = await adminQuery.q_save_about(
      [small_title, big_title, content, button_text, id],
      image
    );
    if (result != "false") {
      res.status(status.OK).json({ msg: "save succesfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

//----------product-----------------//
const get_product_id = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await adminQuery.q_get_product_id([id]);
    if (result != "false") {
      res.status(status.OK).json({ data: result });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const add_product = async (req, res) => {
  try {
    console.log("body => ", req.body);
    const { translations, image_path } = req.body;
    const result = await adminQuery.q_add_product(translations, image_path);
    if (result != "false") {
      res.status(status.OK).json({ msg: "add successfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const save_product = async (req, res) => {
  try {
    console.log("body => ", req.body);
    const { id, translations } = req.body;
    const image = req.files ? req.files.image : null;
    const result = await adminQuery.q_save_product(id, translations, image);
    if (result != "false") {
      res.status(status.OK).json({ msg: "save successfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const delete_product = async (req, res) => {
  try {
    const { id } = req.body;
    const result = await adminQuery.q_delete_product([id]);
    if (result != "false") {
      res.status(status.OK).json({ msg: "delete successfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

//----------header-----------------//
const get_header = async (req, res) => {
  try {
    const result = await adminQuery.q_get_header();
    if (result != "false") {
      res.status(status.OK).json({ data: result });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const get_header_id = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await adminQuery.q_get_header_id([id]);
    if (result != "false") {
      res.status(status.OK).json({ data: result });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const add_header = async (req, res) => {
  try {
    const { menu_p } = req.params;
    const { translations, menu, image } = req.body;
    const result = await adminQuery.q_add_header(translations, menu, image);
    res.status(status.OK).json({ data: result });
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const save_header = async (req, res) => {
  try {
    const result = await adminQuery.q_save_header();
    res.status(status.OK).json({ data: result });
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const delete_header = async (req, res) => {
  try {
    const result = await adminQuery.q_delete_header();
    res.status(status.OK).json({ data: result });
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

//----------address-----------------//
const get_address_id = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await adminQuery.q_get_address_id([id]);
    if (result != "false") {
      res.status(status.OK).json({ data: result });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const add_address = async (req, res) => {
  try {
    const { address, lang_id } = req.body;
    const result = await adminQuery.q_add_address([lang_id, address]);
    if (result != "false") {
      res.status(status.OK).json({ msg: "add successfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const save_address = async (req, res) => {
  try {
    const { address, id } = req.body;
    const result = await adminQuery.q_save_address([address, id]);
    if (result != "false") {
      res.status(status.OK).json({ msg: "save successfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const delete_address = async (req, res) => {
  try {
    const { id } = req.body;
    const result = await adminQuery.q_delete_address([id]);
    if (result != "false") {
      res.status(status.OK).json({ msg: "delete successfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

//----------statistics-----------------//
const get_statistics = async (req, res) => {
  try {
    const result = await adminQuery.q_get_statistics();
    if (result != "false") {
      res.status(status.OK).json({ data: result });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const get_statistics_id = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await adminQuery.q_get_statistics_id([id]);
    if (result != "false") {
      res.status(status.OK).json({ data: result });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const add_statistics = async (req, res) => {
  try {
    const { lang_id, text, number } = req.body;
    const result = await adminQuery.q_add_statistics([lang_id, text, number]);
    if (result != "false") {
      res.status(status.OK).json({ msg: "add successfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const save_statistics = async (req, res) => {
  try {
    const { text, number, id } = req.body;
    const result = await adminQuery.q_save_statistics([text, number, id]);
    if (result != "false") {
      res.status(status.OK).json({ msg: "save successfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const delete_statistics = async (req, res) => {
  try {
    const { id } = req.body;
    const result = await adminQuery.q_delete_statistics([id]);
    if (result != "false") {
      res.status(status.OK).json({ msg: "delete successfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

//----------topic-----------------//
const get_topic_id = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await adminQuery.q_get_topic_id([id]);
    if (result != "false") {
      res.status(status.OK).json({ data: result });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const add_topic = async (req, res) => {
  try {
    const { lang_id, title, content } = req.body;
    const { image } = req.files;
    const result = await adminQuery.q_add_topic(
      [lang_id, title, content],
      image
    );
    if (result != "false") {
      res.status(status.OK).json({ msg: "add successfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const save_topic = async (req, res) => {
  try {
    const { title, content, id } = req.body;
    const { image } = req.files;
    const result = await adminQuery.q_save_topic([title, content, id], image);
    if (result != "false") {
      res.status(status.OK).json({ msg: "save successfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const delete_topic = async (req, res) => {
  try {
    const { id } = req.body;
    const result = await adminQuery.q_delete_topic([id]);
    if (result != "false") {
      res.status(status.OK).json({ msg: "delete successfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

//----------slider-----------------//
const get_slider_id = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await adminQuery.q_get_slider_id([id]);
    if (result != "false") {
      res.status(status.OK).json({ data: result });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const add_slider = async (req, res) => {
  try {
    const { image } = req.files;
    const result = await adminQuery.q_add_slider(image);
    if (result != "false") {
      res.status(status.OK).json({ msg: "add successfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const save_slider = async (req, res) => {
  try {
    const { id } = req.body;
    const { image } = req.files;
    const result = await adminQuery.q_save_slider(id, image);
    if (result != "false") {
      res.status(status.OK).json({ msg: "save successfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const delete_slider = async (req, res) => {
  try {
    const { id } = req.body;
    const result = await adminQuery.q_delete_slider([id]);
    if (result != "false") {
      res.status(status.OK).json({ msg: "delete successfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

//----------faciliti_image-----------------//
const get_faciliti_image_id = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await adminQuery.q_get_faciliti_image_id([id]);
    if (result != "false") {
      res.status(status.OK).json({ data: result });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const add_faciliti_image = async (req, res) => {
  try {
    const { image } = req.files;
    const result = await adminQuery.q_add_faciliti_image(image);
    if (result != "false") {
      res.status(status.OK).json({ msg: "add successfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const save_faciliti_image = async (req, res) => {
  try {
    const { id } = req.body;
    const { image } = req.files;
    const result = await adminQuery.q_save_faciliti_image(id, image);
    if (result != "false") {
      res.status(status.OK).json({ msg: "save successfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const delete_faciliti_image = async (req, res) => {
  try {
    const { id } = req.body;
    const result = await adminQuery.q_delete_faciliti_image([id]);
    if (result != "false") {
      res.status(status.OK).json({ msg: "delete successfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

//---------------getler ucin func--------------//
const get_func = async (req, res) => {
  try {
    const url = req.url;
    const test = url.indexOf("/", 2);
    if (test != -1) {
      var x = url.substring(5, test);
    } else {
      var x = url.slice(5);
    }
    console.log(x);
    switch (x) {
      case "phone":
        result = await adminQuery.q_get_phone();
        if (result != "false") {
          res.status(status.OK).json({ data: result });
        } else {
          res.status(status.ERROR).json({ msg: "query error" });
        }
        break;
      case "mail":
        result = await adminQuery.q_get_mail();
        if (result != "false") {
          res.status(status.OK).json({ data: result });
        } else {
          res.status(status.ERROR).json({ msg: "query error" });
        }
        break;
      case "gallery":
        result = await adminQuery.q_get_gallery();
        if (result != "false") {
          res.status(status.OK).json({ data: result });
        } else {
          res.status(status.ERROR).json({ msg: "query error" });
        }
        break;
      case "language":
        result = await adminQuery.q_get_language();
        if (result != "false") {
          res.status(status.OK).json({ data: result });
        } else {
          res.status(status.ERROR).json({ msg: "query error" });
        }
        break;
      case "home":
        result = await adminQuery.q_get_home();
        if (result != "false") {
          res.status(status.OK).json({ data: result });
        } else {
          res.status(status.ERROR).json({ msg: "query error" });
        }
        break;
      case "contact":
        result = await adminQuery.q_get_contact();
        if (result != "false") {
          res.status(status.OK).json({ data: result });
        } else {
          res.status(status.ERROR).json({ msg: "query error" });
        }
        break;
      case "about":
        result = await adminQuery.q_get_about();
        if (result != "false") {
          res.status(status.OK).json({ data: result });
        } else {
          res.status(status.ERROR).json({ msg: "query error" });
        }
        break;
      case "product":
        result = await adminQuery.q_get_product();
        if (result != "false") {
          res.status(status.OK).json({ data: result });
        } else {
          res.status(status.ERROR).json({ msg: "query error" });
        }
        break;
      case "header":
        const { menu } = req.params;
        console.log(menu);
        result = await adminQuery.q_get_header(menu);
        if (result != "false") {
          res.status(status.OK).json({ data: result });
        } else {
          res.status(status.ERROR).json({ msg: "query error" });
        }
        break;
      case "address":
        result = await adminQuery.q_get_address();
        if (result != "false") {
          res.status(status.OK).json({ data: result });
        } else {
          res.status(status.ERROR).json({ msg: "query error" });
        }
        break;
      case "topic":
        result = await adminQuery.q_get_topic();
        if (result != "false") {
          res.status(status.OK).json({ data: result });
        } else {
          res.status(status.ERROR).json({ msg: "query error" });
        }
        break;
      case "slider":
        result = await adminQuery.q_get_slider();
        if (result != "false") {
          res.status(status.OK).json({ data: result });
        } else {
          res.status(status.ERROR).json({ msg: "query error" });
        }
        break;
      case "faciliti-image":
        result = await adminQuery.q_get_faciliti_image();
        if (result != "false") {
          res.status(status.OK).json({ data: result });
        } else {
          res.status(status.ERROR).json({ msg: "query error" });
        }
        break;
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

module.exports = {
  get_func,
  //---gallery---
  get_gallery_id,
  add_gallery,
  save_gallery,
  delete_gallery,

  //---phone---
  get_phone_id,
  add_phone,
  save_phone,
  delete_phone,

  //---mail---
  get_mail_id,
  add_mail,
  save_mail,
  delete_mail,

  //---language---
  get_language_id,
  add_language,
  save_language,
  delete_language,

  //---footer---
  get_footer,
  get_footer_id,
  save_footer,

  //---home---
  get_home_id,
  add_home,
  save_home,

  //---contact---
  get_contact_id,
  add_contact,
  save_contact,

  //---about---
  get_about_id,
  add_about,
  save_about,

  //---product---
  get_product_id,
  add_product,
  save_product,
  delete_product,

  //---header---
  get_header,
  get_header_id,
  add_header,
  save_header,
  delete_header,

  //---address---
  get_address_id,
  add_address,
  save_address,
  delete_address,

  //---statistics---
  get_statistics,
  get_statistics_id,
  add_statistics,
  save_statistics,
  delete_statistics,

  //---topic---
  get_topic_id,
  add_topic,
  save_topic,
  delete_topic,

  //---faciliti_image---
  get_faciliti_image_id,
  add_faciliti_image,
  save_faciliti_image,
  delete_faciliti_image,

  //---slider---
  get_slider_id,
  add_slider,
  save_slider,
  delete_slider,
};
