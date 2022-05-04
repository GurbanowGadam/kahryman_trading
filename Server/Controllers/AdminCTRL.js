const status = require("./../Utilis/status");
const adminQuery = require("./../Queries/AdminQuery");

//-----------gallery--------------//
const add_gallery = async (req, res) => {
  try {
    console.log("req = >", req.files);
    const gallery = (await req.files) ? req.files.video : null;
    const image = (await req.files) ? req.files.image : null;
    const result = await adminQuery.q_add_gallery(gallery, image);
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
    const gallery = (await req.files) ? req.files.video : null;
    const image = (await req.files) ? req.files.image : null;
    const translations = JSON.parse(req.body.translations);
    const result = await adminQuery.q_save_gallery(
      translations,
      gallery,
      image
    );
    if (result != "false") {
      res.status(status.OK).json({ msg: "save successfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const delete_gallery = async (req, res) => {
  try {
    const arr = [];
    const { id, type } = await req.body;
    if (type == "video") {
      arr[0] = req.body.video_path;
      arr[1] = req.body.image_path;
    } else {
      arr[0] = req.body.image_path;
    }
    const result = await adminQuery.q_delete_gallery(arr, id, type);
    if (result != "false") {
      res.status(status.OK).json({ msg: "delete successfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

//----------language-----------------//
const add_language = async (req, res) => {
  try {
    const { name, short_name } = req.body;
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
const add_footer = async (req, res) => {
  try {
    const translations = JSON.parse(req.body.translations);
    const section = req.params.section;
    const result = await adminQuery.q_add_footer(translations, section);
    if (result != "false") {
      res.status(status.OK).json({ msg: "save successfull" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const save_footer = async (req, res) => {
  try {
    const translations = JSON.parse(req.body.translations);
    const section = req.params.section;
    const { id, number, mail } = translations;
    const result = await adminQuery.q_save_footer(
      [translations],
      [number, mail, id],
      section
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

const delete_footer = async (req, res) => {
  try {
    const section = req.params.section;
    const { id } = req.body;
    const result = await adminQuery.q_delete_footer(id, section);
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
const add_home = async (req, res) => {
  try {
    const section = req.params.section;
    const translations = JSON.parse(req.body.translations);
    const image = req.files ? req.files.image : null;
    const result = await adminQuery.q_add_home(translations, image, section);
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
    const section = req.params.section;
    const translations = JSON.parse(req.body.translations);
    const image = req.files ? req.files.image : null;
    const result = await adminQuery.q_save_home(translations, image, section);
    if (result != "false") {
      res.status(status.OK).json({ msg: "save successfull" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    console.log(err);
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const delete_home = async (req, res) => {
  try {
    const { id, image_path } = req.body;
    const section = req.params.section;
    const result = await adminQuery.q_delete_home(id, image_path, section);
    if (result != "false") {
      res.status(status.OK).json({ msg: "save successfull" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    console.log(err);
    res.status(status.ERROR).json({ msg: err.message });
  }
};
//----------contact-----------------//
const add_contact = async (req, res) => {
  try {
    const { translations } = req.body;
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
    const translations = JSON.parse(req.body.translations);
    const result = await adminQuery.q_save_contact(translations);
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
const add_about = async (req, res) => {
  try {
    const translations = JSON.parse(req.body.translations);
    const image = req.files.image ? req.files.image : null;
    const result = await adminQuery.q_add_about(translations, image);
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
    const translations = JSON.parse(req.body.translations);
    const result = await adminQuery.q_save_about(translations);
    if (result != "false") {
      res.status(status.OK).json({ msg: "save succesfull!" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

//----------about_image-----------------//
const save_about_image = async (req, res) => {
  try {
    const translations = JSON.parse(req.body.translations);
    const image = req.files ? req.files.image : null;
    const result = await adminQuery.q_save_about_image(translations, image);
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
const add_product = async (req, res) => {
  try {
    const image = req.files.image ? req.files.image : null;
    const translations = JSON.parse(req.body.translations);
    const result = await adminQuery.q_add_product(translations, image);
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
    const translations = JSON.parse(req.body.translations);
    const image = req.files ? req.files.image : null;
    const result = await adminQuery.q_save_product(translations, image);
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
    const id = req.body.id;
    const image_path = req.body.image_path;
    const result = await adminQuery.q_delete_product(id, image_path);
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
const add_header = async (req, res) => {
  try {
    const menu_p = req.params.menu;
    const translations = JSON.parse(req.body.translations);
    const image = req.files.image;
    const result = await adminQuery.q_add_header(translations, menu_p, image);
    if (result != "false") {
      res.status(status.OK).json({ msg: "add successfull" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const save_header = async (req, res) => {
  try {
    const menu = req.params.menu;
    const translations = JSON.parse(req.body.translations);
    const image = req.files ? req.files.image : null;
    const result = await adminQuery.q_save_header(translations, menu, image);
    if (result != "false") {
      res.status(status.OK).json({ msg: "save successfull" });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const delete_header = async (req, res) => {
  try {
    const menu = req.params.menu;
    const { id, image_path } = req.body;
    const result = await adminQuery.q_delete_header(id, image_path, menu);
    res.status(status.OK).json({ data: result });
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

//----------topic-----------------//
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

//----------slider-----------------//
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
    const { id, image_path } = req.body;
    const result = await adminQuery.q_delete_slider(id, image_path);
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

//----------topic_title-----------------//
const get_topic_title = async (req, res) => {
  try {
    const result = await adminQuery.q_get_topic_title();
    if (result != "false") {
      res.status(status.OK).json({ data: result });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const save_topic_title = async (req, res) => {
  try {
    const translations = JSON.parse(req.body.translations);
    const result = await adminQuery.q_save_topic_title(translations);
    if (result != "false") {
      res.status(status.OK).json({ msg: "save successfull!" });
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
    const index = url.indexOf("/", 2);
    if (index != -1) {
      var x = url.substring(5, index);
    } else {
      var x = url.slice(5);
    }
    switch (x) {
      case "home":
        const section = req.params.section;
        result = await adminQuery.q_get_home(section);
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
      case "about-image":
        result = await adminQuery.q_get_about_image();
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
      case "gallery":
        const type = req.params.type;
        result = await adminQuery.q_get_gallery(type);
        if (result != "false") {
          res.status(status.OK).json({ data: result });
        } else {
          res.status(status.ERROR).json({ msg: "query error" });
        }
        break;
      case "header":
        const { menu } = req.params;
        result = await adminQuery.q_get_header(menu);
        if (result != "false") {
          res.status(status.OK).json({ data: result });
        } else {
          res.status(status.ERROR).json({ msg: "query error" });
        }
        break;
      case "footer":
        const section_1 = req.params.section;
        result = await adminQuery.q_get_footer(section_1);
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
  add_gallery,
  save_gallery,
  delete_gallery,

  //---language---
  add_language,
  save_language,
  delete_language,

  //---footer---
  add_footer,
  save_footer,
  delete_footer,

  //---home---
  add_home,
  save_home,
  delete_home,

  //---contact---
  add_contact,
  save_contact,

  //---about---
  add_about,
  save_about,

  //---about_image---
  save_about_image,

  //---product---
  add_product,
  save_product,
  delete_product,

  //---header---
  add_header,
  save_header,
  delete_header,

  //---topic---
  save_topic,

  //---topic_title---
  get_topic_title,
  save_topic_title,

  //---faciliti_image---
  add_faciliti_image,
  save_faciliti_image,
  delete_faciliti_image,

  //---slider---
  add_slider,
  save_slider,
  delete_slider,
};
