const { query } = require('./../Database/index')
const { Q_Formatter } = require('./../Functions/QFormatter')
const imageUpload = require('./../Functions/imageUpload')
const {videoUpload} = require('./../Functions/videoUpload') 
const path = require('path')
const fs = require('fs')


//--------------phone------------//
const q_get_phone = async () => {
    try {
        const sql = Q_Formatter(`SELECT * FROM phone_numbers;`)
        const res = await query(sql, [])
        return res.rows
    } catch (err) {
        return "false"
    }
}

const q_get_phone_id = async (params) => {
    try {
        const sql = Q_Formatter(`SELECT * FROM phone_numbers WHERE id = ?;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}

const q_add_phone = async (params) => {
    try {
        const sql = Q_Formatter(`INSERT INTO phone_numbers(number) VALUES(?) RETURNING *;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}

const q_save_phone = async (params) => {
    try {
        const sql = Q_Formatter(`UPDATE phone_numbers SET number = ? created_at = clock_timestamp() WHERE id = ? RETURNING *;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}

const q_delete_phone = async (params) => {
    try {
        const sql = Q_Formatter(`DELETE FROM phone_numbers WHERE id = ? RETURNING *;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}


//--------------mail------------//
const q_get_mail = async () => {
    try {
        const sql = Q_Formatter(`SELECT * FROM mails;`, [])
        const res = await query(sql, [])
        return res.rows
    } catch (err) {
        return "false"
    }
}

const q_get_mail_id = async (params) => {
    try {
        const sql = Q_Formatter(`SELECT * FROM mails WHERE id = ?;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}

const q_add_mail = async (params) => {
    try {
        const sql = Q_Formatter(`INSERT INTO mails(mail) VALUES(?) RETURNING *;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}

const q_save_mail = async (params) => {
    try {
        const sql = Q_Formatter(`UPDATE mails SET number = ?, created_at = clock_timestamp() WHERE id = ? RETURNING *;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}

const q_delete_mail = async (params) => {
    try {
        const sql = Q_Formatter(`DELETE FROM mails WHERE id = ? RETURNING *;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}



//--------------gallery------------//
const q_get_gallery = async () => {
    try {
        const sql = Q_Formatter(`SELECT * FROM gallery;`)
        const res = await query(sql, [])
        return res.rows
    } catch (err) {
        return "false"
    }
}

const q_get_gallery_id = async (params) => {
    try {
        const sql = Q_Formatter(`SELECT * FROM gallery WHERE id = ?;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}

const q_add_gallery = async (type,gallery) => {
    try {
        const params = []
        const rgx = /video/
        if (gallery.mimetype.search(rgx) != -1){
            console.log("video")
            const gallery_path = await videoUpload(image, 'gallery')
            params.push(gallery_path)
            params.push('image')
            const sql = Q_Formatter(`INSERT INTO gallery(gallery_path, type) VALUES(?, ?) RETURNING *;`, params)
            const res = await query(sql, [])
        } else {
            console.log("image")
            const gallery_path = await imageUpload.oneImageUpload(image, 'gallery')
            params.push(gallery_path)
            params.push('image')
            const sql = Q_Formatter(`INSERT INTO gallery(gallery_path, type) VALUES(?, ?) RETURNING *;`, params)
            const res = await query(sql, [])
        }
        // return res
    } catch (err) {
        return "false"
    }
}

const q_save_gallery = async () => {
    try {
        const sql = Q_Formatter(`UPDATE gallery SET name = ?, short_name = ?, created_at = clock_timestamp() WHERE id = ? RETURNING *;`, params)
        const res = await query(sql, [])
        return res
    } catch (err) {
        return "false"
    }
}

const q_delete_gallery = async (params) => {
    try {
        const sql = Q_Formatter(`DELETE FROM gallery WHERE id = ? RETURNING *;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}

//--------------language------------//
const q_get_language = async () => {
    try {
        const sql = Q_Formatter(`SELECT * FROM languages;`)
        const res = await query(sql, [])
        return res.rows
    } catch (err) {
        return "false"
    }
}

const q_get_language_id = async (params) => {
    try {
        const sql = Q_Formatter(`SELECT * FROM languages WHERE id = ?;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}

const q_add_language = async (params, image) => {
    try {
        const image_path = await imageUpload.oneImageUpload(image, 'language')
        params.push(image_path)
        const sql = Q_Formatter(`INSERT INTO languages(name, short_name, image_path) VALUES(?, ?, ?) RETURNING *;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}

const q_save_language = async (params,image) => {
    try {
        const sql = Q_Formatter(`UPDATE languages SET name = ?, short_name = ?, created_at = clock_timestamp() WHERE id = ? RETURNING *;`, params)
        const res = await query(sql, [])

        if(image){
            await imageUpload.Deletefile( path.normalize(__dirname + './../../' + res.rows[0].image_path) )
            const image_path = await imageUpload.oneImageUpload(image, 'language')
            const sql = Q_Formatter(`UPDATE languages SET image_path = ?, created_at = clock_timestamp() WHERE id = ?;`, [image_path, params[2] ])
            await query(sql, [])
        }
        return res.rows[0]
    } catch (err) {
        console.log(err)
        return "false"
    }
}

const q_delete_language = async (params) => {
    try {
        const sql = Q_Formatter(`DELETE FROM languages WHERE id = ? RETURNING *;`, params)
        const res = await query(sql, [])
        await imageUpload.Deletefile( path.normalize(__dirname + './../../' + res.rows[0].image_path) )
        return res.rows[0]
    } catch (err) {
        console.log(err)
        return "false"
    }
}

//--------------footer------------//
const q_get_footer = async () => {
    try {
        const sql = Q_Formatter(`SELECT * FROM footer;`)
        const res = await query(sql, [])
        return res.rows
    } catch (err) {
        
        return "false"
    }
}

const q_get_footer_id = async (params) => {
    try {
        const sql = Q_Formatter(`SELECT * FROM footer WHERE id = ?;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}

const q_save_footer = async (params) => {
    try {
        const sql = Q_Formatter(`UPDATE footer SET text = ?, right = ? created_at = clock_timestamp() WHERE id = ? RETURNING *;`, params)
        const res = await query(sql, [])
        return res
    } catch (err) {
        return "false"
    }
}

//--------------home------------//
const q_get_home = async () => {
    try {
        const sql = Q_Formatter(`SELECT * FROM home_translation;`)
        const res = await query(sql, [])
        console.log(res.rows)
        return res.rows
    } catch (err) {
        return "false"
    }
}

const q_get_home_id = async (params) => {
    try {
        const sql = Q_Formatter(`SELECT * FROM home_translation WHERE id = ?;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}

const q_save_home = async (params) => {
    try {
        const sql = Q_Formatter(`UPDATE footer SET 
        image_text = ?, topic_title = ?, faciliti_title_s = ?, faciliti_title_b = ?, faciliti_content = ?, 
        agencie_title = ?, agencie_content = ?, created_at = clock_timestamp() WHERE id = ? RETURNING *;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}

//--------------contact------------//
const q_get_contact = async () => {
    try {
        const sql = Q_Formatter(`SELECT * FROM contact_translation;`)
        const res = await query(sql, [])
        return res.rows
    } catch (err) {
        return "false"
    }
}

const q_get_contact_id = async (params) => {
    try {
        const sql = Q_Formatter(`SELECT * FROM contact_translation WHERE id = ?;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}

const q_save_contact = async (params, headers, image) => {
    try {
        const sql = Q_Formatter(`UPDATE contact_translation SET 
        title = ?, title_address = ?, name = ?, company_name = ?, mail = ?, 
        subject = ?, message = ?, button_text = ?, created_at = clock_timestamp() WHERE id = ? RETURNING *;`, params)
        const res = await query(sql, [])
        return res
    } catch (err) {
        return "false"
    }
}

//--------------about------------//
const q_get_about = async () => {
    try {
        const sql = Q_Formatter(`SELECT * FROM about_translation;`)
        const res = await query(sql, [])
        return res.rows
    } catch (err) {
        return "false"
    }
}

const q_get_about_id = async (params) => {
    try {
        const sql = Q_Formatter(`SELECT * FROM about_translation;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}

const q_save_about = async (params,image) => {
    try {
        const sql = Q_Formatter(`UPDATE about_translation SET 
        small_title = ?, big_title = ?, content = ?, button_text = ?,
        created_at = clock_timestamp() WHERE id = ? RETURNING *;`, params)
        const res = await query(sql, [])
        if(image){
            await imageUpload.Deletefile( path.normalize(__dirname + './../../' + res.rows[0].image_path) )
            const image_path = await imageUpload.oneImageUpload(image, 'about')
            const sql = Q_Formatter(`UPDATE about_translation SET image_path = ?, created_at = clock_timestamp() WHERE id = ?;`, [image_path, res.rows[0].id ])
            await query(sql, [])
        }
        return res
    } catch (err) {
        console.log(err)
        return "false"
    }
}


//--------------product------------//
const q_get_product = async () => {
    try {
        const sql = Q_Formatter(`SELECT * FROM products_translation ;`)
        const res = await query(sql, [])
        return res.rows
    } catch (err) {
        return "false"
    }
}

const q_get_product_id = async (params) => {
    try {
        const sql = Q_Formatter(`SELECT * FROM products_translation WHERE id = ?;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}

const q_add_product = async (params, image) => {
    try {
        const image_path = await imageUpload.oneImageUpload(image, 'products')
        params.push(image_path)
        const sql = Q_Formatter(`INSERT INTO products_translation(lang_id, name, text, image_path) VALUES(?, ?, ?, ?) RETURNING *;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}

const q_save_product = async (params, image) => {
    try {
        const sql = Q_Formatter(`UPDATE products_translation SET 
        name = ?, text = ?, created_at = clock_timestamp() 
        WHERE id = ? RETURNING *;`, params)
        const res = await query(sql, [])
        if(image){
            await imageUpload.Deletefile( path.normalize(__dirname + './../../' + res.rows[0].image_path) )
            const image_path = await imageUpload.oneImageUpload(image, 'products')
            const sql = Q_Formatter(`UPDATE products_translation SET image_path = ?, created_at = clock_timestamp() WHERE id = ?;`, [image_path, res.rows[0].id ])
            await query(sql, [])
        }
        return res.rows[0]
    } catch (err) {
        console.log(err)
        return "false"
    }
}

const q_delete_product = async (params) => {
    try {
        const sql = Q_Formatter(`DELETE FROM products_translation WHERE id = ? RETURNING *;`, params)
        const res = await query(sql, [])
        await imageUpload.Deletefile( path.normalize(__dirname + './../../' + res.rows[0].image_path) )
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}


//--------------header------------//
const q_get_header = async () => {
    try {
        const sql = Q_Formatter(`RETURNING *;`)
        const res = await query(sql, [])
        return res
    } catch (err) {
        return "false"
    }
}

const q_get_header_id = async () => {
    try {
        const sql = Q_Formatter(`SELECT * FROM  WHERE id = ?;`, params)
        const res = await query(sql, [])
        return res
    } catch (err) {
        return "false"
    }
}

const q_add_header = async () => {
    try {
        const sql = Q_Formatter(`RETURNING *;`, params)
        const res = await query(sql, [])
        return res
    } catch (err) {
        return "false"
    }
}

const q_save_header = async () => {
    try {
        const sql = Q_Formatter(`RETURNING *;`, params)
        const res = await query(sql, [])
        return res
    } catch (err) {
        return "false"
    }
}

const q_delete_header = async () => {
    try {
        const sql = Q_Formatter(`RETURNING *;`, params)
        const res = await query(sql, [])
        return res
    } catch (err) {
        return "false"
    }
}


//--------------menu------------//
const q_get_menu = async () => {
    try {
        const sql = Q_Formatter(`SELECT * FROM ;`)
        const res = await query(sql, [])
        return res
    } catch (err) {
        return "false"
    }
}

const q_get_menu_id = async () => {
    try {
        const sql = Q_Formatter(`SELECT * FROM  WHERE id = ?;`, params)
        const res = await query(sql, [])
        return res
    } catch (err) {
        return "false"
    }
}

const q_add_menu = async () => {
    try {
        const sql = Q_Formatter(`RETURNING *;`, params)
        const res = await query(sql, [])
        return res
    } catch (err) {
        return "false"
    }
}

const q_save_menu = async () => {
    try {
        const sql = Q_Formatter(`RETURNING *;`, params)
        const res = await query(sql, [])
        return res
    } catch (err) {
        return "false"
    }
}

const q_delete_menu = async () => {
    try {
        const sql = Q_Formatter(`RETURNING *;`, params)
        const res = await query(sql, [])
        return res
    } catch (err) {
        return "false"
    }
}


//--------------address------------//
const q_get_address = async () => {
    try {
        const sql = Q_Formatter(`SELECT * FROM address;`)
        const res = await query(sql, [])
        return res.rows
    } catch (err) {
        return "false"
    }
}

const q_get_address_id = async (params) => {
    try {
        const sql = Q_Formatter(`SELECT * FROM address WHERE id = ?;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}

const q_add_address = async (params) => {
    try {
        const sql = Q_Formatter(`INSERT INTO address(lang_id, address) VALUES(?, ?) RETURNING *;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}

const q_save_address = async (params) => {
    try {
        const sql = Q_Formatter(`UPDATE address SET 
        address = ? created_at = clock_timestamp() 
        WHERE id = ? RETURNING *;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}

const q_delete_address = async (params) => {
    try {
        const sql = Q_Formatter(`DELETE FROM address WHERE id = ? RETURNING *;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}


//--------------statistics------------//
const q_get_statistics = async () => {
    try {
        const sql = Q_Formatter(`SELECT * FROM statistics;`)
        const res = await query(sql, [])
        return res.rows
    } catch (err) {
        return "false"
    }
}

const q_get_statistics_id = async (params) => {
    try {
        const sql = Q_Formatter(`SELECT * FROM statistics WHERE id = ?;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}

const q_add_statistics = async (params) => {
    try {
        const sql = Q_Formatter(`INSERT INTO statistics(lang_id, text, number) VALUES(?, ?, ?) RETURNING *;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}

const q_save_statistics = async (params) => {
    try {
        const sql = Q_Formatter(`UPDATE statistics SET 
        text = ?, number = ?, created_at = clock_timestamp() 
        WHERE id = ? RETURNING *;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}

const q_delete_statistics = async (params) => {
    try {
        const sql = Q_Formatter(`DELETE FROM statistics WHERE id = ? RETURNING *;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}



//--------------topic------------//
const q_get_topic = async () => {
    try {
        const sql = Q_Formatter(`SELECT * FROM topics_translations;`)
        const res = await query(sql, [])
        return res.rows
    } catch (err) {
        return "false"
    }
}

const q_get_topic_id = async () => {
    try {
        const sql = Q_Formatter(`SELECT * FROM topics_translations WHERE id = ?;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}

const q_add_topic = async (params,image) => {
    try {
        const image_path = await imageUpload.oneImageUpload(image, 'topics')
        params.push(image_path)
        const sql = Q_Formatter(`INSERT INTO topics_translations(lang_id, title, content, image_path) VALUES(?, ?, ?, ?) RETURNING *;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}

const q_save_topic = async (params, image) => {
    try {
        const sql = Q_Formatter(`UPDATE topics_translations SET 
        title = ?, content = ?, created_at = clock_timestamp() 
        WHERE id = ? RETURNING *;`, params)
        const res = await query(sql, [])
        if(image){
            await imageUpload.Deletefile( path.normalize(__dirname + './../../' + res.rows[0].image_path) )
            const image_path = await imageUpload.oneImageUpload(image, 'topics')
            const sql = Q_Formatter(`UPDATE topics_translations SET image_path = ?, created_at = clock_timestamp() WHERE id = ?;`, [image_path, res.rows[0].id ])
            await query(sql, [])
        }
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}

const q_delete_topic = async (params) => {
    try {
        const sql = Q_Formatter(`DELETE FROM topics_translations WHERE id = ? RETURNING *;`, params)
        const res = await query(sql, [])
        return res.rows[0]
    } catch (err) {
        return "false"
    }
}

//------------

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
    q_get_home_id,
    q_save_home,

    //--contact--
    q_get_contact,
    q_get_contact_id,
    q_save_contact,

    //--about--
    q_get_about,
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

    //--menu--
    q_get_menu,
    q_get_menu_id,
    q_add_menu,
    q_save_menu,
    q_delete_menu,

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


}