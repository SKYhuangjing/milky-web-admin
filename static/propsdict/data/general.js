const getLocale = require('../utils/locale');
let locale = getLocale();

const base = require("./base")
let { required, max_100 } = base.rules

// 这里定义可变化的通用样式，通过tag标签管理
let tagConf = {
    textarea: {
        tag: "textarea",
        form: {
            rows: 5,
            col: 24,
            rules: [required, max_100,]
        }
    },
    textOverflowEllipsis: {
        tag: "textOverflowEllipsis",
        table: {
            templates: [
                {
                    props: 'description',
                    type: "render",
                    renderContent: ({ record, template }) => {
                        return record[template.props].length > 8 ? record[template.props].substring(0, 8) + "..." : record[template.props]
                    },
                    popoverContent: true,
                    mouseoverHandle: ({ record, template }) => {
                        template.popoverContent = record[template.props].length > 8 ? record[template.props] : ""
                    },
                    mouseLeaveDelay: 0.1
                }
            ]
        }
    },
    time: {
        tag: "time",
        table: {
            sorter: true,
            templates: [{
                type: "time",
                props: "createTime",
                format: "YYYY-MM-DD HH:mm"
            }]
        }
    }
}

module.exports = tagConf
