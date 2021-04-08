module.exports = function (app) {
    app.get('/mock/test', (req, res) => {
        res.json({ a: 1 })
    })

    return app
}
