const install = function (Vue) {
    Vue.prototype.$utils = {
        isStatic: (value) => {
            return (
                typeof value === 'string' ||
                typeof value === 'number' ||
                typeof value === 'boolean' ||
                typeof value === 'undefined' ||
                value === null
            )
        },
        _isNaN: (v) => {
            return !(typeof v === 'string' || typeof v === 'number') || isNaN(v)
        },
        isPrimitive(value) {
            return Vue.prototype.$utils.isStatic(value) || typeof value === 'symbol'
        },
        isObject: (obj) => {
            return Object.prototype.toString.call(obj) === '[object Object]'
        },
        isArray: (value) => {
            return Object.prototype.toString.call(value) === '[object Array]'
        },
        max: (arr) => {
            arr = arr.filter(item => !Vue.prototype.$utils._isNaN(item))
            return arr.length ? Math.max.apply(null, arr) : undefined
        },
        min: (arr) => {
            arr = arr.filter(item => !Vue.prototype.$utils._isNaN(item))
            return arr.length ? Math.min.apply(null, arr) : undefined
        },
        pushIfNotExist: (array, elem) => {
            if (array.indexOf(elem) == -1) {
                array.push(elem);
            }
            return array;
        },
        pushApply: (a, b = []) => {
            a.forEach(function (value) {
                b = Vue.prototype.$utils.pushIfNotExist(b, value);
            });
            return b;
        },
        isNonEmptyArray: function (a) {
            return a && (a instanceof Array) && a.length != 0;
        },
        hasElement: (array, elem) => {
            return Vue.prototype.$utils.isNonEmptyArray(array) && array.indexOf(elem) != -1;
        },
        getRawType: (value) => {
            return Object.prototype.toString.call(value).slice(8, -1)
        },
        isDate: (value) => {
            return Object.prototype.toString.call(value) === '[object Date]'
        },
        isEmpty: (value) => {
            if (value == null) {
                return true;
            }
            if (Vue.prototype.$utils.isArray(value)) {
                return !value.length;
            } else if (Vue.prototype.$utils.isObject(value)) {
                for (let key in value) {
                    if (hasOwnProperty.call(value, key)) {
                        return false;
                    }
                }
            }
            return false;
        },
        capitalize: (str) => {
            return str.charAt(0).toUpperCase() + str.slice(1)
        },
        extend: (to, _from) => {
            for (let key in _from) {
                to[key] = _from[key];
            }
            return to
        },
        clone: (value, deep) => {
            if (Vue.prototype.$utils.isPrimitive(value)) {
                return value
            }

            if (Vue.prototype.$utils.isArray(value)) { //是类数组
                value = Array.prototype.slice.call(value)
                return value.map(item => deep ? Vue.prototype.$utils.clone(item, deep) : item)
            } else if (Vue.prototype.$utils.isObject(value)) { //是对象
                let target = {}, key;
                for (key in value) {
                    value.hasOwnProperty(key) && (target[key] = deep ? Vue.prototype.$utils.clone(value[key], deep) : value[key])
                }
            }

            let type = Vue.prototype.$utils.getRawType(value)

            switch (type) {
                case 'Date':
                case 'RegExp':
                case 'Error': value = new window[type](value); break;
            }
            return value
        },
        isPCBroswer: () => {
            let e = navigator.userAgent.toLowerCase()
                , t = "ipad" == e.match(/ipad/i)
                , i = "iphone" == e.match(/iphone/i)
                , r = "midp" == e.match(/midp/i)
                , n = "rv:1.2.3.4" == e.match(/rv:1.2.3.4/i)
                , a = "ucweb" == e.match(/ucweb/i)
                , o = "android" == e.match(/android/i)
                , s = "windows ce" == e.match(/windows ce/i)
                , l = "windows mobile" == e.match(/windows mobile/i);
            return !(t || i || r || n || a || o || s || l)
        },
        unique: (arr) => {
            if (!Vue.prototype.$utils.isArray(arr)) { //不是类数组对象
                return arr
            }
            const res = new Map();
            return arr.filter((a) => !res.has(a) && res.set(a, 1))
        },
        findArrayOfObjectValue: (arrayOfObject, selField, targetField, selValue) => {
            if (!Vue.prototype.$utils.isArray(arrayOfObject) || !selField) {
                return
            }
            const splitRule = ','
            let targetValue = []

            let getDateKey = (datakey, object) => {
                return (datakey.split('.').reduce((object, val) => {
                    return object ? object[val] : null
                }, object) || '')
            }

            let setTargetValue = (value) => {
                const findValue = arrayOfObject.find(item => getDateKey(selField, item) === value)
                targetValue.push(getDateKey(targetField, findValue) || null)
            }

            // selValue = ['1', '2', '3']
            if (Vue.prototype.$utils.isArray(selValue)) {
                for (let value of selValue) {
                    setTargetValue(value)
                }
            }
            //  selValue = '1,2,3,4'
            if (typeof selValue === 'string' && selValue.split(',').length > 1) {
                let paperSelValue = selValue.split(splitRule).filter((val) => val !== splitRule)
                for (let value of paperSelValue) {
                    setTargetValue(value)
                }
            }
            // selValue = '1'
            if (typeof selValue === 'string' && selValue.split(',').length === 1) {
                setTargetValue(selValue)
            }
            return targetValue
        },
        GetUrlParam: (urlStr) => {
            let url = urlStr || document.location.toString();
            let arrObj = url.split("?");
            let params = Object.create(null)
            if (arrObj.length > 1) {
                arrObj = arrObj[1].split("&");
                arrObj.forEach(item => {
                    item = item.split("=");
                    params[item[0]] = item[1]
                })
            }
            return params;
        },
        treeValue: null,
        forTree(list, targetAttr, targetValue, findKey) {
            list.find(item => {
                if (item[targetAttr] === targetValue) {
                    this.treeValue = item[findKey]
                }
                if (item.children) {
                    this.forTree(item.children, targetAttr, targetValue, findKey)
                }
            })
        },
        findTreeNodeBy(list, targetAttr, targetValue, findKey) {
            this.treeValue = null
            this.forTree(list, targetAttr, targetValue, findKey)
            return this.treeValue
        },

        setKeyToTree(list, start) {
            return list.map((item, index) => {
                if (item.children) {
                    this.setKeyToTree(item.children, start + index + "-")
                }
                item.key = start + index
                return item
            })
        },
        /**
         * @list 后台返回数据
         * @valueKey 设置value属性
         * @titleKey 设置title属性
         * @setAtndKey 是否需要设置atnd key
         */
        jsonToTree(list, valueKey, titleKey, setAtndKey, childrenKey, parentKey) {
            const data = JSON.parse(JSON.stringify(list)) // 浅拷贝不改变源数据
            const result = []
            if (!Array.isArray(data)) {
                return result
            }
            data.forEach(item => {
                delete item.children
            })
            const map = {}
            data.forEach(item => {
                map[item[childrenKey || 'uid']] = item
            })

            data.forEach(item => {
                const parent = map[item[parentKey || 'parentUid']]
                if (titleKey) {
                    item.title = item[titleKey]
                }
                if (valueKey) {
                    item.value = item[valueKey]
                }
                if (parent) {
                    parent.children = parent.children || []
                    parent.children.push(item)
                } else {
                    result.push(item)
                }
            })
            if (setAtndKey) {
                return this.setKeyToTree(result, "0-")
            }
            return atndTree
        }

    }
}
export default install
