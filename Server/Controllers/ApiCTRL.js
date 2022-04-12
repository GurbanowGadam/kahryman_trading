const status = require('./../Utilis/status')
const apiQuery = require('./../Queries/ApiQuery')

const home = async (req, res) => {
    try {
        const { lang } = req.params
        const result = await apiQuery.get_home()
        res.status(status.OK).json({ data: rows })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const about = async (req, res) => {
    try {
        const { lang } = req.params
        const result = await apiQuery.get_home()
        res.status(status.OK).json({ data: rows })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const gallery = async (req, res) => {
    try {
        const { lang } = req.params
        const result = await apiQuery.get_home()
        res.status(status.OK).json({ data: rows })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const product = async (req, res) => {
    try {
        const { lang } = req.params
        const result = await apiQuery.get_home()
        res.status(status.OK).json({ data: rows })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const contact = async (req, res) => {
    try {
        const { lang } = req.params
        const result = await apiQuery.get_home()
        res.status(status.OK).json({ data: rows })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const footer = async (req, res) => {
    try {
        const { lang } = req.params
        const result = await apiQuery.get_home()
        res.status(status.OK).json({ data: rows })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const topic_s = async (req, res, next) => {
    try {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        const {data_s} = require('../../sorce')
        res.status(status.OK).json(data_s)
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const topic_33834 = async (req, res, next) => {
    try {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        const {data_33834} = require('../../sorce')
        res.status(status.OK).json(data_33834)
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const topic_46292 = async (req, res, next) => {
    try {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        const {data_46292} = require('../../sorce')
        res.status(status.OK).json(data_46292)
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

const topic_49617 = async (req, res, next) => {
    try {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        const {data_49617} = require('../../sorce')
        res.status(status.OK).json(data_49617)
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}


module.exports = {
    home,
    about,
    contact,
    gallery,
    product,
    footer,
    topic_s,
    topic_33834,
    topic_46292,
    topic_49617
}