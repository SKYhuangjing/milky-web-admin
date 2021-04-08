module.exports = (locale) => {
    let lang = "en_US"
    if (locale) {
        lang = locale
    } else {
        try {
            if (localStorage && localStorage.getItem("lang")) {
                lang = localStorage.getItem("lang")
            }
        } catch (error) {
            lang = "en_US"
        }
    }
    const data = require(`../locale/${lang}`)
    return data
}
