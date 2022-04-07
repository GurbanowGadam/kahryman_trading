const status = require('./../Utilis/status')
const apiQuery = require('./../Queries/ApiQuery')

const home = async(req,res)=>{
    try {
        const {lang} = req.params
        const result = await apiQuery.get_home()
        res.status(status.OK).json({ data: rows })
    } catch (err) {
        res.status(status.ERROR).json({ msg: err.message })
    }
}

module.exports = {
    home
}