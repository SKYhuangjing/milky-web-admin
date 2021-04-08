const getLocale = require('../utils/locale');
let locale = getLocale("en_US"); // todo,默认组件验证使用英文
exports.rules = {
    required: {
        required: true,
        message: locale["verify.required"]
    },
    min_10: {
        min: 10,
        message: locale["verify.min_10"]
    },
    min_20: {
        min: 20,
        message: locale["verify.min_20"]
    },
    max_10: {
        max: 10,
        message: locale["verify.max_10"]
    },
    max_20: {
        max: 20,
        message: locale["verify.max_20"]
    },
    max_100: {
        max: 100,
        message: locale["verify.max_100"]
    },
    max_200: {
        max: 200,
        message: locale["verify.max_200"]
    },
    max_500: {
        max: 500,
        message: locale["verify.max_500"]
    }
}
