import axios from "@/axios"
import { getUid } from '@/utils'
export const addFormMixin = {
    data() {
        return {
            zmodalFormConfig: {
                formLayout: "horizontal",
                validateFirst: true,
                columns: [
                {
                        props: "name",
                        type: "input",
                        label: "姓名",
                        col:12,
                        rules: [{
                            required: true,
                            message: this.$t("common.verify.required")
                        }],
                },
                 {
                    props: "description",
                    type: "input",
                    label: "简介",
                    col:12,
                    rules: [{
                        required: true,
                        message: this.$t("common.verify.required")
                    }],
                   
                },
                {
                    props:"mobile",
                    type:'input',
                    label:"手机号码",
                    col:12,
                    rules: [{
                        required: true,
                        message: this.$t("common.verify.required")
                    }],
                },
                {
                    props: "status",
                    type: "select",
                    label: "状态", 
                    col:12,
                    options:[
                        {
                            text: '上线',
                            value: '1',
                        },
                        {
                            text: '下线',
                            value: '0',
                        }, {
                            text: '筹备中',
                            value: '2',
                        }, {
                            text: '可营业',
                            value: '3',
                        }, {
                            text: '暂停营业',
                            value: '4',
                        },
                    ],
                    rules: [{
                        required: true,
                        message: this.$t("common.verify.required")
                    }],
                },
                {
                    props: "source",
                    type: "select",
                    label: "来源", 
                    col:12,
                    options:[
                        {
                            text: 'Internal',
                            value: 'Internal',
                        },
                    ],
                    rules: [{
                        required: true,
                        message: this.$t("common.verify.required")
                    }],
                },

                ],
                detailColumns: [  
                    {
                    "props": "address",
                    renderContent: ({ value, dataSource }) => {
                       return <span >{dataSource.country}/{dataSource.city}/{dataSource.area}/{dataSource.address}</span>
                    },
                }
                ]
            }
        }
    }
}
