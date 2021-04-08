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
                        labelInValue: true,
                        searchFetch: true,
                        fieldNames: {
                            text: 'value',
                            value: 'value',
                        },
                        fetchParams: {
                            pageSize: '10',
                            queryValue: '',
                            pageNum: '1',
                            type:'ROOM'
                        },
                        props: 'style',
                        label: "风格",
                        mode: "multiple",
                        type: 'select',
                        axios: axios,
                        searchApi: '/api/tag/list',
                        useToken: 'jwt',
                        searchLoading: false,
                        rules: [{
                            required: true,
                            message: this.$t('common.verify.required')
                        }]
                    },
                  {
                    props: "name",
                    type: "input",
                    label: "名称",
                   
                  },
                  {
                    type: 'input-number',
                    min: 0,
                    props: 'maxPeople',
                    label: "最大人数",
                  },
                  {
                    props: "status",
                    type: "select",
                    label: "类型",
                    options: [
                        {
                            text: '新建',
                            value: 0,
                        },
                        {
                            text: '装修中',
                            value: 1,
                        }, {
                            text: '可使用',
                            value: 2,
                        }, {
                            text: '暂停使用',
                            value: 3,
                        }, {
                            text: '下线',
                            value: 4,
                        },
                    ],
                    rules: [{
                        required: true,
                        message: this.$t('common.verify.required')
                    }]
                   
            },

                ],
            }
        }
    }
}
