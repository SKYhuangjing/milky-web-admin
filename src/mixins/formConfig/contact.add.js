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
                   
                  },
                  {
                    props: "mobile",
                    type: "input",
                    label: "手机号码",
                   
                  },
                
                  {
                    props: "sex",
                    type: "select",
                    label: "性别",
                    options: [
                        {
                            text: 'male',
                            value: 'male',
                        },
                        {
                            text: 'female',
                            value: 'female',
                        }, 
                    ],
                 
                   
            },
                  {
                    props: "status",
                    type: "select",
                    label: "状态",
                    options: [
                        {
                            text: '已签约',
                            value: '0',
                        },
                        {
                            text: '培训中',
                            value: '1',
                        }, {
                            text: '可带本',
                            value: '2',
                        }, {
                            text: '休假',
                            value: '3',
                        }, {
                            text: '离职',
                            value: '4',
                        },
                    ],
                    
                   
            },
            {
                props: "type",
                type: "select",
                label: "类型",
                options: [
                    {
                        text: '兼职',
                        value: '0',
                    },
                    {
                        text: '全职',
                        value: '1',
                    },
                ],
                
               
        },
        {
            props: "role",
            type: "select",
            label: "角色",
            options: [
                {
                    text: '普通员工',
                    value: '0',
                },
                {
                    text: '管理员',
                    value: '1',
                },
                {
                    text: '老板',
                    value: '2',
                },
            ],
            
           
    },
        

                ],
            }
        }
    }
}
