const status = require('./../Utilis/status')
const adminQuery = require('./../Queries/AdminQuery')

//-----------phone--------------//
const get_phone = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_phone()
        if(result != 'false'){
            res.status(status.OK).json({ data: result })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const get_phone_id = async(req,res)=>{
    try {
        const { id } = req.params
        const result = await adminQuery.q_get_phone_id([id])
        if(result != 'false'){
            res.status(status.OK).json({ data: result })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const add_phone = async(req,res)=>{
    try {
        const { phone_number } = req.body
        const result = await adminQuery.q_add_phone([phone_number])
        if(result != 'false'){
            res.status(status.OK).json({ msg: "add successfull!" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }    
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const save_phone = async(req,res)=>{
    try {
        const { phone_number , id } = req.body
        const result = await adminQuery.q_save_phone([id, phone_number])
        if(result != 'false'){
            res.status(status.OK).json({ msg: "save successfull!" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }    
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const delete_phone = async(req,res)=>{
    try {
        const { id } = req.body
        const result = await adminQuery.q_delete_phone([id])
        if(result != 'false'){
            res.status(status.OK).json({ msg: "delete successfull!" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }    
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}


//-----------mail--------------//
const get_mail = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_mail()
        if(result != 'false'){
            res.status(status.OK).json({ data: result })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }    
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const get_mail_id = async(req,res)=>{
    try {
        const { id } = req.params
        const result = await adminQuery.q_get_mail_id([id])
        if(result != 'false'){
            res.status(status.OK).json({ data: result })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }     
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const add_mail = async(req,res)=>{
    try {
        const { mail } = req.body
        const result = await adminQuery.q_add_mail([mail])
        if(result != 'false'){
            res.status(status.OK).json({ msg: "add successfull" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }     
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const save_mail = async(req,res)=>{
    try {
        const { mail, id } = req.body
        const result = await adminQuery.q_save_mail()
        if(result != 'false'){
            res.status(status.OK).json({ msg: "save successfull" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const delete_mail = async(req,res)=>{
    try {
        const { id } = req.body
        const result = await adminQuery.q_delete_mail()
        if(result != 'false'){
            res.status(status.OK).json({ msg: "delete successfull" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }    
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

//-----------gallery--------------//
const get_gallery = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_gallery()
        if(result != 'false'){
            res.status(status.OK).json({ data: result })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }     
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const get_gallery_id = async(req,res)=>{
    try {
        const { id } = req.body
        const result = await adminQuery.q_get_gallery_id([id])
        if(result != 'false'){
            res.status(status.OK).json({ data: result })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }     
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const add_gallery = async(req,res)=>{
    try {
        const { type } = req.body
        const { gallery } = req.files
        const result = await adminQuery.q_add_gallery(type, gallery)
        if(result != 'false'){
            res.status(status.OK).json({ msg: "add successfull!" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }      
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const save_gallery = async(req,res)=>{
    try {
        const result = await adminQuery.q_save_gallery()
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

//----------language-----------------//
const get_language = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_language()
        if(result != 'false'){
            res.status(status.OK).json({ data: result })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const get_language_id = async(req,res)=>{
    try {
        const { id } = req.params
        const result = await adminQuery.q_get_language_id([id])
        if(result != 'false'){
            res.status(status.OK).json({ data: result })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const add_language = async(req,res)=>{
    try {
        const { name, short_name } = req.body
        const { image } = req.files
        const result = await adminQuery.q_add_language([name, short_name],image)
        if(result != 'false'){
            res.status(status.OK).json({ msg: "add succesfull" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }    
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const save_language = async(req,res)=>{
    try {
        const {name, short_name, id} = req.body
        const { image } = req.files
        const result = await adminQuery.q_save_language([name, short_name, id], image)
        if(result != 'false'){
            res.status(status.OK).json({ msg: "save succesfull" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }    
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const delete_language = async(req,res)=>{
    try {
        const { id } = req.body
        const result = await adminQuery.q_delete_language([id])
        if(result != 'false'){
            res.status(status.OK).json({ msg: "delete succesfull" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }    
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

//----------footer-----------------//
const get_footer = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_footer()
        if(result != 'false'){
            res.status(status.OK).json({ data: result })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }     
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const get_footer_id = async(req,res)=>{
    try {
        const { id } = req.params
        const result = await adminQuery.q_get_footer_id([id])
        if(result != 'false'){
            res.status(status.OK).json({ data: result })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const save_footer = async(req,res)=>{
    try {
        const { text, right, id } = req.body
        const result = await adminQuery.q_save_footer([ text, right, id ])
        if(result != 'false'){
            res.status(status.OK).json({ msg: "save successfull" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

//----------home-----------------//
const get_home = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_home()
        if(result != 'false'){
            res.status(status.OK).json({ data: result })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        } 
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const get_home_id = async(req,res)=>{
    try {
        const { id } = req.params
        const result = await adminQuery.q_get_home_id([id])
        if(result != 'false'){
            res.status(status.OK).json({ data: result })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        } 
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const save_home = async(req,res)=>{
    try {
        //faciliti yanyndaky suratlar problem //suratlary edit etmeli cozulmedik
        const { image_text, topic_title, faciliti_title_s, faciliti_title_b, faciliti_content, agencie_title, agencie_content, id } = req.body
        const { header_small_text, header_text } = req.body
        const {header_image, text_image, topic_background, } = req.files
        const result = await adminQuery.q_save_home([image_text, topic_title, faciliti_title_s, faciliti_title_b, faciliti_content, agencie_title, agencie_content, id])
        if(result != 'false'){
            res.status(status.OK).json({ msg: "save successfull" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }    
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}


//----------contact-----------------//
const get_contact = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_contact()
        if(result != 'false'){
            res.status(status.OK).json({ data: result })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }    
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const get_contact_id = async(req,res)=>{
    try {
        const { id } = req.params
        const result = await adminQuery.q_get_contact_id([id])
        if(result != 'false'){
            res.status(status.OK).json({ data: result })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }     
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const save_contact = async(req,res)=>{
    try { ////.........
        const { title, title_address, name, company_name, mail, subject, message, button_text, id } = req.body
        const { header_small_text, header_text} = req.body
        const { header_image } = req.files
        const result = await adminQuery.q_save_contact([title, title_address, name, company_name, mail, subject, message, button_text, id],[header_small_text,header_text],header_image)
        if(result != 'false'){
            res.status(status.OK).json({ msg: "save successfull" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }      
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

//----------about-----------------//
const get_about = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_about()
        if(result != 'false'){
            res.status(status.OK).json({ data: result })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }     
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const get_about_id = async(req,res)=>{
    try {
        const { id } = req.params
        const result = await adminQuery.q_get_about_id([id])
        if(result != 'false'){
            res.status(status.OK).json({ data: result })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }     
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const save_about = async(req,res)=>{
    try {
        const { small_title, big_title, content, button_text, id } = req.body
        const { image } = req.files
        const result = await adminQuery.q_save_about([small_title, big_title, content, button_text, id],image)
        if(result != 'false'){
            res.status(status.OK).json({ msg: "save succesfull!" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }     
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

//----------product-----------------//
const get_product = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_product()
        if(result != 'false'){
            res.status(status.OK).json({ data: result })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }     
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const get_product_id = async(req,res)=>{
    try {
        const { id } = req.params
        const result = await adminQuery.q_get_product_id([id])
        if(result != 'false'){
            res.status(status.OK).json({ data: result })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }    
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const add_product = async(req,res)=>{
    try {
        const { lang_id, name, text } = req.body
        const { image } = req.files
        console.log(image)
        const result = await adminQuery.q_add_product([lang_id, name, text], image )
        if(result != 'false'){
            res.status(status.OK).json({ msg: "add successfull!" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }     
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const save_product = async(req,res)=>{
    try {
        const { name, text, id } = req.body
        const { image } = req.files
        const result = await adminQuery.q_save_product([name, text, id], image)
        if(result != 'false'){
            res.status(status.OK).json({ msg: "save successfull!" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }     
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const delete_product = async(req,res)=>{
    try {
        const { id } = req.body
        const result = await adminQuery.q_delete_product([id])
        if(result != 'false'){
            res.status(status.OK).json({ msg: "delete successfull!" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }    
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

const save_header = async(req,res)=>{
    try {
        const result = await adminQuery.q_save_header()
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
        if(result != 'false'){
            res.status(status.OK).json({ data: result })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }     
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const get_menu_id = async(req,res)=>{
    try {
        const { id } = req.params
        const result = await adminQuery.q_get_menu_id([id])
        if(result != 'false'){
            res.status(status.OK).json({ data: result })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }     
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const add_menu = async(req,res)=>{
    try {
        const { name, lang_id } = req.body
        const result = await adminQuery.q_add_menu([lang_id, name])
        if(result != 'false'){
            res.status(status.OK).json({ msg: "add successfull!" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }     
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const save_menu = async(req,res)=>{
    try {
        const { name, id } = req.body
        const result = await adminQuery.q_save_menu([name, id])
        if(result != 'false'){
            res.status(status.OK).json({ msg: "save successfull!" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }    
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const delete_menu = async(req,res)=>{
    try {
        const { id } = req.body
        const result = await adminQuery.q_delete_menu([id])
        if(result != 'false'){
            res.status(status.OK).json({ msg: "delete successfull!" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

//----------address-----------------//
const get_address = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_address()
        if(result != 'false'){
            res.status(status.OK).json({ data: result })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }     
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const get_address_id = async(req,res)=>{
    try {
        const { id } = req.params
        const result = await adminQuery.q_get_address_id([id])
        if(result != 'false'){
            res.status(status.OK).json({ data: result })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }     
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const add_address = async(req,res)=>{
    try {
        const { address, lang_id } = req.body
        const result = await adminQuery.q_add_address([lang_id, address])
        if(result != 'false'){
            res.status(status.OK).json({ msg: "add successfull!" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }     
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const save_address = async(req,res)=>{
    try {
        const { address, id } = req.body
        const result = await adminQuery.q_save_address([address, id])
        if(result != 'false'){
            res.status(status.OK).json({ msg: "save successfull!" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }    
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const delete_address = async(req,res)=>{
    try {
        const { id } = req.body
        const result = await adminQuery.q_delete_address([id])
        if(result != 'false'){
            res.status(status.OK).json({ msg: "delete successfull!" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

//----------statistics-----------------//
const get_statistics = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_statistics()
        if(result != 'false'){
            res.status(status.OK).json({ data: result })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }     
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const get_statistics_id = async(req,res)=>{
    try {
        const { id } = req.params
        const result = await adminQuery.q_get_statistics_id([id])
        if(result != 'false'){
            res.status(status.OK).json({ data: result })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }     
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const add_statistics = async(req,res)=>{
    try {
        const { lang_id, text, number } = req.body
        const result = await adminQuery.q_add_statistics([lang_id, text, number])
        if(result != 'false'){
            res.status(status.OK).json({ msg: "add successfull!" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }     
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const save_statistics = async(req,res)=>{
    try {
        const { text, number, id } = req.body
        const result = await adminQuery.q_save_statistics([text, number, id])
        if(result != 'false'){
            res.status(status.OK).json({ msg: "save successfull!" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }    
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const delete_statistics = async(req,res)=>{
    try {
        const { id } = req.body
        const result = await adminQuery.q_delete_statistics([id])
        if(result != 'false'){
            res.status(status.OK).json({ msg: "delete successfull!" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

//----------topic-----------------//
const get_topic = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_topic()
        if(result != 'false'){
            res.status(status.OK).json({ data: result })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }     
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const get_topic_id = async(req,res)=>{
    try {
        const { id } = req.params
        const result = await adminQuery.q_get_topic_id([id])
        if(result != 'false'){
            res.status(status.OK).json({ data: result })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }     
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const add_topic = async(req,res)=>{
    try {
        const { lang_id, title, content } = req.body
        const { image } = req.files
        const result = await adminQuery.q_add_topic([lang_id, title, content], image)
        if(result != 'false'){
            res.status(status.OK).json({ msg: "add successfull!" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }     
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const save_topic = async(req,res)=>{
    try {
        const { title, content, id } = req.body
        const { image } = req.files
        const result = await adminQuery.q_save_topic([title, content, id],image)
        if(result != 'false'){
            res.status(status.OK).json({ msg: "save successfull!" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }    
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const delete_topic = async(req,res)=>{
    try {
        const { id } = req.body
        const result = await adminQuery.q_delete_topic([id])
        if(result != 'false'){
            res.status(status.OK).json({ msg: "delete successfull!" })
        } else {
            res.status(status.ERROR).json({ msg: "query error" })
        }
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}








module.exports = {
    //---gallery---
    get_gallery,
    get_gallery_id,
    add_gallery,
    save_gallery,
    delete_gallery,

    //---phone---
    get_phone,
    get_phone_id,
    add_phone,
    save_phone,
    delete_phone,

    //---mail---
    get_mail,
    get_mail_id,
    add_mail,
    save_mail,
    delete_mail,

    //---language---
    get_language,
    get_language_id,
    add_language,
    save_language,
    delete_language,
    
    //---footer---
    get_footer,
    get_footer_id,
    save_footer,

    //---home---
    get_home,
    get_home_id,
    save_home,

    //---contact---
    get_contact,
    get_contact_id,
    save_contact,

    //---about---
    get_about,
    get_about_id,
    save_about,

    //---product---
    get_product,
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

    //---menu---
    get_menu,
    get_menu_id,
    add_menu,
    save_menu,
    delete_menu,

    //---address---
    get_address,
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
    get_topic,
    get_topic_id,
    add_topic,
    save_topic,
    delete_topic,

}
