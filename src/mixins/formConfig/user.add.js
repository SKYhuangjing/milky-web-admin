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
                    label: "名称",
                    col:12,
                   
                  },
                  {
                    labelInValue: true,
                    searchFetch: true,
                    col:12,
                    fieldNames: {
                        text: 'value',
                        value: 'value',
                    },
                    fetchParams: {
                        pageSize: '10',
                        queryValue: '',
                        pageNum: '1',
                        type:'Game'
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
                    type: 'input-number',
                    min: 1,
                    max: 5,
                    props: 'hardLevel',
                    label: "难度等级",
                    col:12,
                  },
                  {
                    type: 'input-number',
                    props: 'duration',
                    label: "时长",
                    col:12,
                  },
                  {   col:12,
                    type: "radioGroup",
                    label: "换装",
                    title: "radioGroup",
                    props: "dressUp",
                    options: [
                        { label: 'Yes', value: 'true'},
                        { label: 'No', value: 'false' },
                    ],
                },
                  {
                    props: "status",
                    type: "select",
                    label: "状态",
                    col:12,
                    options: [
                        {
                            text: '已购买',
                            value: '0',
                        },
                        {
                            text: '内测中',
                            value: '1',
                        }, {
                            text: '被埋',
                            value: '2',
                        }, {
                            text: '可预订',
                            value: '3',
                        }, {
                            text: '暂停预定',
                            value: '4',
                        }, {
                            text: '下架',
                            value: '5',
                        },
                    ],
                    
                   
            },
                  {
                    type: 'group',
                    label: '金额',
                    props: "price",
                    subColumns: [
                        {
                            type: 'input',
                            props: 'weekdayPrice',
                            col: 12,
                            addonBefore: '工作日',
                            isHidden: false
                        },
                        {
                            type: 'input',
                            props: 'weekendPrice',
                            col: 12,
                            addonBefore: '周末',
                            isHidden: false
                        },
                    ]
                },
                {
                    type: 'group',
                    label: '人数',
                    props: "people",
                    subColumns: [
                        {
                            type: 'input',
                            props: 'malePeople',
                            col: 12,
                            addonBefore: '男',
                            isHidden: false
                        },
                        {
                            type: 'input',
                            props: 'femalePeople',
                            col: 12,
                            addonBefore: '女',
                            isHidden: false
                        },
                    ]
                },
               
            {   
                type: 'todo-list',
                label: '创建角色',
                props: 'createGameRoleRequests',
                subColumns: [
                    { type: 'input', props: 'name',addonBefore: '名称', col: 4, },
                    {  type: "radioGroup",props: "sex",
                        options: [
                            { label: '男', value: 'male'},
                            { label: '女', value: 'female' },
                        ], col: 4,},
                    { type: 'input', props: 'desc',  addonBefore: '描述', col: 14,},
                ]
            },
            {
                props: "desc",
                type: "textarea",
                label: "简介",
                rows: 4
              },

                ],
            }
        }
    }
}
