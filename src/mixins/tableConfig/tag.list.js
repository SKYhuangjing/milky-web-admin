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
                
                props: 'type',
                   title: '类型',
                }, 
                {
                    props: 'value',
                    title: '名称',
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
