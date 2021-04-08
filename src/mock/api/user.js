

module.exports = function (app) {
    app.get('/mock/users', (req, res) => {
        res.json({ email: "abc.com" })
    })

    app.get('/mock/users/:id', (req, res) => {
        res.json({ email: "123" })
    })

    return app
}
