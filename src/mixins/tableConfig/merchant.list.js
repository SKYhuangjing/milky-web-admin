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
                    },
                    {
                        props: 'mobile',
                        title: '联系方式',
                    },
                    {
                        props: 'address',
                        title: "地址",
                        type: 'render',
                        renderContent: ({
                            record
                        }) => {
                            console.log("record",record)
                           return `<span >${record.country} ${record.state} ${record.city} ${record.area} ${record.address}</span>`
                        },
                    }, 
                    {
                        props: 'status',
                        title: 'Status',
                        mapping: [{
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
                    ]
                    },
               

                ]
            },
           
        }
    }
}
