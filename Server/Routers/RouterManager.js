const AdminRouter = require('./AdminRouter')
const ApiRouter = require('./ApiRouter')


module.exports = (app) => {
    app.use('/api/admin',AdminRouter)
    app.use('/api',ApiRouter)
}