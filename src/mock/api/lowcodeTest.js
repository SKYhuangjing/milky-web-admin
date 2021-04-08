/*
 * @Author: Yin Xiang Zheng
 * @LastEditors: Yin Xiang Zheng
 * @LastEditTime: 2020-10-30 10:50:53
 */


page = {
    pageId: 'xxx',
    pageConf: [
        {
            // id: 1, 后端
            name_zh: "自定义描述组件",
            name_en: "自定义描述组件",
            config: {
                uid: 'bede3c4899f133161d9dcd38d5854654',
                hasCollapse: true,
                border: true,
            },
            childs: [
                {
                    cname: "dataCenter",
                    name: "dataCenter",
                    config: {
                        size: "small",
                        pagination: true
                    },
                },
                {
                    cname: "zdivider",
                    name: "分割线",
                    config: {}
                },
            ],
        },
        {
            // id: 1, 后端
            name_zh: "分割线",
            name_en: "分割线",
            config: {
                uid: 'bede3c4899f133161d9dcd38d5854654',
                hasCollapse: true,
                border: true,
            },
            childs: []
        },
    ],

}


field = {
    props: 'xxx',
    name_zh: 'xxx',
    name_en: 'xxx',
    des_zh: 'xxx',
    des_en: 'xxx',
    formConfig: {},
    detailConf: {}
}