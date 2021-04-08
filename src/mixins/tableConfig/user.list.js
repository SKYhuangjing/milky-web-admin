import moment from 'moment'
export const listTableMixin = {
    data() {
        return {
            tableConfig: {
                scroll: {
                    x: 900
                },
                disableFlex: true,
                columns: [
                    {
                        props: 'userName',
                        title: '用户名',
                    },
                    {
                        props: 'userType',
                        title: 'userType',
                    },
                    {
                        props: 'nickName',
                        title: '别名',
                    },
                {
                    props: 'sex',
                    title: '性别',
                },
                {
                    props: 'source',
                    title: 'source',
                }, 
                {
                    props: 'mobile',
                    title: '电话号码',
                }, 
                {
                    props: 'status',
                    title: '状态',
                },
                
                
            ]
            },
           
        }
    }
}
