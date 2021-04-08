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
                            text: 'name',
                            value: 'uid',
                        },
                        fetchParams: {
                            pageSize: '10',
                            queryValue: '',
                            pageNum: '1',
                            customerUids:localStorage.getItem("customerUid")
                        },
                        props: 'name',
                        label: "姓名",
                        type: 'select',
                        axios: axios,
                        searchApi: '/api/contact/page',
                        useToken: 'jwt',
                        searchLoading: false,
                        changeHandle: ({
                            value
                        }) => {
                            console.log("value",value)
                            

                            axios.get(`/api/contact/id/${value.key}`).then((res) => {
                                console.log("res",res)
                                let zmodalForm = this.$refs.zmodalForm
                                console.log("zm",zmodalForm)
                                this.$nextTick(() =>{
                                    this.$refs.zmodalForm.updateForm(
                                        {
                                            mobile:res.mobile,
                                            sex:res.sex,
                                            status:res.status,
                                            type:res.type,
                                            role:res.role,
                                            
                                        }
                                        )

                                })
                              
                            })
                        }
                    },
                  {
                    props: "mobile",
                    type: "input",
                    label: "手机号码",
                    isDisabled:true
                   
                  },
                
                  {
                    props: "sex",
                    type: "select",
                    label: "性别",
                    isDisabled:true,
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
                            value: 0,
                        },
                        {
                            text: '培训中',
                            value: 1,
                        }, {
                            text: '可带本',
                            value: 2,
                        }, {
                            text: '休假',
                            value: 3,
                        }, {
                            text: '离职',
                            value: 4,
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
                        value: 0,
                    },
                    {
                        text: '全职',
                        value: 1,
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
                    value: 0,
                },
                {
                    text: '管理员',
                    value: 1,
                },
                {
                    text: '老板',
                    value: 2,
                },
            ],
            
           
    },
        

                ],
            }
        }
    }
}
