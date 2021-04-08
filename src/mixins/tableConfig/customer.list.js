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
                        props: 'code',
                        title: '编号',
                },
                {
                    props: 'name',
                    title: '名称',
                   
                }, 
                {
                    props: 'description',
                    title: '简介',
                    sorter: true
                },
                {
                    props: 'mobile',
                    title: '电话号码',
                    sorter: true
                },
                {
                    props: 'status',
                    title: 'status',
                    width: '100px',
                    mapping: [{
                        text: '新建',
                        value: '0',
                    },
                    {
                        text: '装修中',
                        value: '1',
                    }, {
                        text: '可使用',
                        value: '2',
                    }, {
                        text: '暂停使用',
                        value: '3',
                    }, {
                        text: '下线',
                        value: '4',
                    },
                ]
                },
                {
                    props:'createTime',
                    title:"创建时间",
                    width:'200px',
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

                ]
            },
           
        }
    }
}
