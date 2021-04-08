const getLocale = require('../utils/locale');
let locale = getLocale();

const base = require("./base")
let {
    required,
    max_100
} = base.rules

// 这里是通用的’form‘、’table‘以及'search colums'的数据结构
// 统一类型的数据，可通过tag公用一些基础属性(如createTime、updateTime都属于time类型)
//form tag:textarea、
//table tag:time、textOverflowEllipsis
module.exports = [{
    props: 'tableList',
    form: {
        type: 'table-list',
        label: locale.tableList,
        space: 10,
        defaultNewItem: {},
        subColumns: []
    }
}, {
    props: 'upload',
    form: {
        type: 'oss-upload',
        label: '上传',
        props: 'upload',
        listType: 'text', // text, picture 和 picture-card
        maxUpload: 1,
        rules: [required],

    }
}, {
    props: 'name',
    form: {
        type: "input",
        rules: [required],
        label: locale.name
    }
}, {
    props: 'slot',
    form: {
        type: "slot",
        label: locale.name
    }
}, {
    props: 'discount',
    form: {
        type: "input",
        label: locale.discount,
        rules: [required],
        searchBtnText: '%'
    }
}, {
    props: 'inputNumber',
    form: {
        type: 'input-number',
        label: locale.inputNumber,
        rules: [required],
    }
}, {
    props: 'language',
    form: {
        type: "select",
        label: locale.language,
        options: [{
            text: "zh-CN",
            value: "zh-CN"
        }, {
            text: "en-US",
            value: "en-US"
        }],
        rules: [required]
    }
}, {
    props: 'searchSelect',
    form: {
        type: "select",
        label: locale.searchSelect,
        options: [],
        searchFetch: true,
        fieldNames: {
            value: 'id',
            text: 'name'
        },
        // axios: axios,
        useToken: "jwt",
        searchApi: '/systemApi/user',
        searchLoading: false,
        rules: [required],
        fetchParams: {
            queryValue: '',
            pageNum: 1,
            pageSize: 10,
            type: 1
        }
    }
}, {
    props: 'description',
    form: {
        type: "textarea",
        label: locale.description,
        tag: "textarea"
    },
    table: {
        title: locale.description,
        tag: "textOverflowEllipsis"
    }
}, {
    props: 'descriptionZh',
    form: {
        type: "textarea",
        label: locale.descriptionZh,
        tag: "textarea"
    },
    table: {
        title: locale.description,
        tag: "textOverflowEllipsis"
    }
}, {
    props: 'createTime',
    form: {
        label: "创建时间",
        type: "datepicker",
        datepickerType: 'date-picker',
        format: 'YYYY-MM-DD',
        placeholder: '选择日期',
    },
    table: {
        title: locale.createTime,
        tag: "time"
    }
}, {
    props: 'updateTime',
    table: {
        title: locale.updateTime,
        tag: "time"
    }
}, {
    props: 'createBy',
    table: {
        title: locale.createBy
    }
}, {
    props: 'type',
    table: {
        title: locale.type
    }
}, {
    props: 'creator',
    table: {
        title: locale.creator
    }
}, {
    props: 'gender',
    form: {
        type: 'radioGroup',
        label: locale.gender,
        options: [{
            label: 'male',
            value: 'male'
        },
        {
            label: 'female',
            value: 'female'
        }
        ],
        rules: [required]
    }
}, {
    props: 'interest',
    form: {
        type: 'checkboxGroup',
        label: locale.interest,
        options: [{
            label: 'Apple',
            value: 'Apple'
        },
        {
            label: 'Pear',
            value: 'Pear'
        },
        {
            label: 'Orange',
            value: 'Orange'
        }
        ],
        rules: [required]
    }
}, {
    props: 'checkbox',
    form: {
        type: 'checkbox',
        title: '复选框',
        props: 'checkbox',
        rules: [required],

    }
}, {
    props: 'group',
    form: {
        type: 'group',
        label: locale.group,
        props: 'group',
        rules: [required],
        subColumns: []
    }
}, {
    props: 'todoList',
    form: {
        type: 'todo-list',
        label: locale.todoList,
        space: 10,
        defaultNewItem: {},
        subColumns: []
    }
}]
