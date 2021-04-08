const install = function (Vue) {
    Vue.prototype.$validate = {
        password({ value, form }) {

        },
        compareToPassword({ value, form, column, props }) {
            /*
            * 获取密码的值
            * 判断password与当前的value是否相同和当前value是否为空
            * true  设置validate为空对象（必须为空对象，不然回印象单前表单的其他默认验证的展示）
            * false 这是validateStatus和errorMsg
            */
            if (!column.validate) {
                return
            }
            let password = form.getFieldValue(props)
            if (password === value || !value) {
                column.validate = {}
            } else {
                column.validate = {
                    validateStatus: "error",
                    errorMsg: "Two passwords that you enter is inconsistent!"
                }
            }
        },
        regExp: {
            email: "^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$",
            mobile: "^[1][3-8][0-9]{9}$",
            IP: "^((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))$",
            card: "^(6225|6221|6270|6226|9988|6011)\d{12}|4\d{15}|5[1-5]\d{14}|3[4,7]\d{13}|3[0,6,8]\d{12}$"
        }
    }
}
export default install
