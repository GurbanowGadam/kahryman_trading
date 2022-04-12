const AdminRouter = require('./AdminRouter')
const ApiRouter = require('./ApiRouter')
const LoginRouter = require('./LoginRouter')


module.exports = (app) => {
    app.use('/api/admin',AdminRouter)
    app.use('/api',ApiRouter)
    app.use('/api/login',LoginRouter)
}