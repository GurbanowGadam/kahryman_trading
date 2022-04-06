const { query } = require("./../Database/index")

const home = async(req,res)=>{
    try {
        const {lang} = req.params
        const q = ` select * from home where lang_id in ( seelct id from languages where short_name = '${lang}' );`
        const { rows } = await query(q,[])
        res.status(200).json({ data: rows })
    } catch (err) {
        
    }
}

module.exports = {
    home
}