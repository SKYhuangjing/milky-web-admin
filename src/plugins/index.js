import menu from "./menu"
import localStrorage from "./localStorage"
import verification from "./verification"
import postMessage from "./postMessage"
import utils from "./utils"
const plugins = [menu, localStrorage, verification, postMessage, utils]

const install = function (Vue) {
    plugins.forEach(item => {
        Vue.use(item)
    })
}
export default install
