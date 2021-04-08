const install = function(Vue){
    Vue.prototype.$localStorage = {
        _prefix: "__"+require('../../package').name+"__",
        setPrefix(prefix) {
            this._prefix = prefix;
        },
        get(key) {
            key = this._prefix + key;
            let item = localStorage.getItem(key);
            if (item == null) {
                return null;
            }
            let {value, expiresAt} = JSON.parse(item);
            if (expiresAt != null && Date.now() > expiresAt) {
                localStorage.removeItem(key);
                value = null;
            }
            return value;
        },
        set(key, value, expiresIn) {
            key = this._prefix + key;
            let item = {value, expiresAt: expiresIn == null ? null : Date.now() + expiresIn};
            localStorage.setItem(key, JSON.stringify(item));
        },
        remove(key) {
            key = this._prefix + key;
            localStorage.removeItem(key);
        }
      }
}
export default install