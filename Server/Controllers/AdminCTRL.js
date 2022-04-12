const status = require('./../Utilis/status')
const adminQuery = require('./../Queries/AdminQuery')

const upload_image = async(req,res)=>{
    try {
        const result = await adminQuery.q_upload_image()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

//-----------image--------------//
const get_image = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_image()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const get_image_id = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_image_id()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const add_image = async(req,res)=>{
    try {
        const { image_path, role } = req.body
        const result = await adminQuery.q_add_image([image_path, role])
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const edit_image = async(req,res)=>{
    try {
        const result = await adminQuery.q_edit_image()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const delete_image = async(req,res)=>{
    try {
        const result = await adminQuery.q_delete_image()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}


//-----------phone--------------//
const get_phone = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_phone()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const get_phone_id = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_phone_id()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const add_phone = async(req,res)=>{
    try {
        const result = await adminQuery.q_add_phone()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const edit_phone = async(req,res)=>{
    try {
        const result = await adminQuery.q_edit_phone()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const delete_phone = async(req,res)=>{
    try {
        const result = await adminQuery.q_delete_phone()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}


//-----------mail--------------//
const get_mail = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_mail()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const get_mail_id = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_mail_id()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const add_mail = async(req,res)=>{
    try {
        const result = await adminQuery.q_add_mail()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const edit_mail = async(req,res)=>{
    try {
        const result = await adminQuery.q_edit_mail()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const delete_mail = async(req,res)=>{
    try {
        const result = await adminQuery.q_delete_mail()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

//-----------gallery--------------//
const get_gallery = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_gallery()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const get_gallery_id = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_gallery_id()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const add_gallery = async(req,res)=>{
    try {
        const result = await adminQuery.q_add_gallery()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const edit_gallery = async(req,res)=>{
    try {
        const result = await adminQuery.q_edit_gallery()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const delete_gallery = async(req,res)=>{
    try {
        const result = await adminQuery.q_delete_gallery()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

//----------footer-----------------//
const get_footer = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_footer()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const get_footer_id = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_footer_id()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const add_footer = async(req,res)=>{
    try {
        const result = await adminQuery.q_add_footer()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const edit_footer = async(req,res)=>{
    try {
        const result = await adminQuery.q_edit_footer()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const delete_footer = async(req,res)=>{
    try {
        const result = await adminQuery.q_delete_footer()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}


//----------home-----------------//
const get_home = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_home()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const get_home_id = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_home_id()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const add_home = async(req,res)=>{
    try {
        const result = await adminQuery.q_add_home()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const edit_home = async(req,res)=>{
    try {
        const result = await adminQuery.q_edit_home()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const delete_home = async(req,res)=>{
    try {
        const result = await adminQuery.q_delete_home()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}



//----------contact-----------------//
const get_contact = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_contact()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const get_contact_id = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_contact_id()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const add_contact = async(req,res)=>{
    try {
        const result = await adminQuery.q_add_contact()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const edit_contact = async(req,res)=>{
    try {
        const result = await adminQuery.q_edit_contact()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const delete_contact = async(req,res)=>{
    try {
        const result = await adminQuery.q_delete_contact()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

//----------about-----------------//
const get_about = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_about()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const get_about_id = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_about_id()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const add_about = async(req,res)=>{
    try {
        const result = await adminQuery.q_add_about()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const edit_about = async(req,res)=>{
    try {
        const result = await adminQuery.q_edit_about()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const delete_about = async(req,res)=>{
    try {
        const result = await adminQuery.q_delete_about()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

//----------product-----------------//
const get_product = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_product()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const get_product_id = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_product_id()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const add_product = async(req,res)=>{
    try {
        const result = await adminQuery.q_add_product()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const edit_product = async(req,res)=>{
    try {
        const result = await adminQuery.q_edit_product()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const delete_product = async(req,res)=>{
    try {
        const result = await adminQuery.q_delete_product()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

//----------header-----------------//
const get_header = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_header()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const get_header_id = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_header_id()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const add_header = async(req,res)=>{
    try {
        const result = await adminQuery.q_add_header()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const edit_header = async(req,res)=>{
    try {
        const result = await adminQuery.q_edit_header()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const delete_header = async(req,res)=>{
    try {
        const result = await adminQuery.q_delete_header()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

//----------menu-----------------//
const get_menu = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_menu()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const get_menu_id = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_menu_id()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const add_menu = async(req,res)=>{
    try {
        const result = await adminQuery.q_add_menu()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const edit_menu = async(req,res)=>{
    try {
        const result = await adminQuery.q_edit_menu()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const delete_menu = async(req,res)=>{
    try {
        const result = await adminQuery.q_delete_menu()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

//----------locasions-----------------//
const get_locasions = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_locasions()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const get_locasions_id = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_locasions_id()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const add_locasions = async(req,res)=>{
    try {
        const result = await adminQuery.q_add_locasions()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const edit_locasions = async(req,res)=>{
    try {
        const result = await adminQuery.q_edit_locasions()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const delete_locasions = async(req,res)=>{
    try {
        const result = await adminQuery.q_delete_locasions()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

//----------statistics-----------------//
const get_statistics = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_statistics()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const get_statistics_id = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_statistics_id()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const add_statistics = async(req,res)=>{
    try {
        const result = await adminQuery.q_add_statistics()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const edit_statistics = async(req,res)=>{
    try {
        const result = await adminQuery.q_edit_statistics()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const delete_statistics = async(req,res)=>{
    try {
        const result = await adminQuery.q_delete_statistics()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

//----------topic-----------------//
const get_topic = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_topic()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const get_topic_id = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_topic_id()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const add_topic = async(req,res)=>{
    try {
        const result = await adminQuery.q_add_topic()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const edit_topic = async(req,res)=>{
    try {
        const result = await adminQuery.q_edit_topic()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const delete_topic = async(req,res)=>{
    try {
        const result = await adminQuery.q_delete_topic()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}








module.exports = {
    upload_image,

    //---image---
    get_image,
    get_image_id,
    add_image,
    edit_image,
    delete_image,

    //---gallery---
    get_gallery,
    get_gallery_id,
    add_gallery,
    edit_gallery,
    delete_gallery,

    //---phone---
    get_phone,
    get_phone_id,
    add_phone,
    edit_phone,
    delete_phone,

    //---mail---
    get_mail,
    get_mail_id,
    add_mail,
    edit_mail,
    delete_mail,

    //---footer---
    get_footer,
    get_footer_id,
    add_footer,
    edit_footer,
    delete_footer,

    //---home---
    get_home,
    get_home_id,
    add_home,
    edit_home,
    delete_home,

    //---contact---
    get_contact,
    get_contact_id,
    add_contact,
    edit_contact,
    delete_contact,

    //---about---
    get_about,
    get_about_id,
    add_about,
    edit_about,
    delete_about,

    //---product---
    get_product,
    get_product_id,
    add_product,
    edit_product,
    delete_product,

    //---header---
    get_header,
    get_header_id,
    add_header,
    edit_header,
    delete_header,

    //---menu---
    get_menu,
    get_menu_id,
    add_menu,
    edit_menu,
    delete_menu,

    //---locasions---
    get_locasions,
    get_locasions_id,
    add_locasions,
    edit_locasions,
    delete_locasions,

    //---statistics---
    get_statistics,
    get_statistics_id,
    add_statistics,
    edit_statistics,
    delete_statistics,

    //---topic---
    get_topic,
    get_topic_id,
    add_topic,
    edit_topic,
    delete_topic,

}
