/*
 * @Author: Yin Xiang Zheng
 * @LastEditors: Yin Xiang Zheng
 * @LastEditTime: 2021-01-13 15:26:52
 */
// 通过自定义props数据，来过滤form columns字段
export function hiddenFormColumnsByProps(columns, propsArr) {
    return columns.filter(item => {
        let result = true
        propsArr.forEach(props => {
            if (props === item.props) {
                result = false
            }
        });
        return result
    })
}

// 初始化form params
export function initParamsOfFormColumns(columns) {
    let result = {}
    columns.forEach(column => {
        if (column.type === "input") {
            result[column.props] = ""
        }
    })

    return result
}

// uid
export function getUid() {
    var len = 32 //32长度
    var radix = 16 //16进制
    var chars = '0123456789abcdefghijklmnopqrstuvwxyz'.split('')
    var uid = [],
        i
    radix = radix || chars.length
    if (len) {
        for (i = 0; i < len; i++) {
            uid[i] = chars[0 | (Math.random() * radix)]
        }
    } else {
        var r
        uid[8] = uid[13] = uid[18] = uid[23] = '-'
        uid[14] = '4'
        for (i = 0; i < 36; i++) {
            if (!uid[i]) {
                r = 0 | (Math.random() * 16)
                uid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r]
            }
        }
    }
    return uid.join('')
}

export function getFields(arrayOfObject, key) {
    let output = [];
    for (let i = 0; i < arrayOfObject.length; ++i)
        output.push(arrayOfObject[i][key]);
    return output;
}

export function pushIfNotExist(array, elem) {
    if (array.indexOf(elem) == -1) {
        array.push(elem);
    }
    return array;
}

export function pushApply(a, b = []) {
    a.forEach(function (value) {
        pushIfNotExist(b, value);
    });
}
