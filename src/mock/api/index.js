let user = require("./user")
let test = require("./test")
let modules = [user, test]
module.exports = function (app) {
    modules.forEach(moduleFn => {
        app = moduleFn(app)
    })
    return app
}
