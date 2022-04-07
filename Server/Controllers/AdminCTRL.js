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


const get_gallery = async(req,res)=>{
    try {
        const result = await adminQuery.q_get_gallery()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const create_gallery = async(req,res)=>{
    try {
        const result = await adminQuery.q_create_gallery()
        res.status(status.OK).json({ data: result })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const update_gallery = async(req,res)=>{
    try {
        const result = await adminQuery.q_update_gallery()
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




module.exports = {
    upload_image,
    //---gallery---
    get_gallery,
    create_gallery,
    update_gallery,
    delete_gallery,
}