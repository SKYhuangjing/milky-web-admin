import moment from 'moment'
export const listTableMixin = {
    data() {
        return {
            tableConfig: {
                scroll: {
                    x: 900
                },
                disableFlex: true,
                columns: [{
                    props: 'name',
                    title: '姓名',
                    width: 100
                }, {
                    props: 'sex',
                    title: '性别',
                    width: 100
                }, 
                {
                    props: 'role',
                    title: '角色',
                    width: 100,
                    mapping: [{
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
                ]
                },
                
                {
                    props: 'type',
                    title: '类型',
                    width: 100,
                    mapping: [{
                        text: '兼职',
                        value: '0',
                    },
                    {
                        text: '全职',
                        value: '1',
                    },
                ]
                },
    
                {
                    props: 'status',
                    title: '状态',
                    width: 100,
                    mapping: [{
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
                ]
                    
                },
                {
                    props:'createTime',
                    title:"创建时间",
                    width:100,
                    type: 'render',
                    renderContent: ({
                        record
                    }) => {
                        return record.createTime
                    ? moment
                            .parseZone(record.createTime)
                            .local()
                            .format('YYYY-MM-DD HH:mm:ss')
                    : ''
                    },
                    
                    
                },
                {
                    props: 'action',
                    title: "action",
                    width: "140px"
                }

                ]
            },
           
        }
    }
}
