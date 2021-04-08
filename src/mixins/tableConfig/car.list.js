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
                
                    props: 'merchantName',
                    title: '商家',
                }, 
                {
                    props: 'roomName',
                    title: '房间',
                }, 
                {
                    props: 'gameName',
                    title: '剧本',
                }, 
                {
                    props:'startTime',
                    title:"开车时间",
                    type: 'render',
                    renderContent: ({
                        record
                    }) => {
                        return record.startTime
                    ? moment
                            .parseZone(record.startTime)
                            .local()
                            .format('YYYY-MM-DD HH:mm:ss')
                    : ''
                    },
                },
                {
                    props: 'peopleNum',
                    title: '当前人数',
                    type: 'render',
                    renderContent: ({
                        record
                    }) => {
                       return  ` <span >剧本:${record.malePeople}男${record.femalePeople}女<br></br>当前:${record.readyMale}男${record.readyFemale}女</span>`
                    },
                }, 
                {
                    props: 'price',
                    title: '价格',
                }, 
                {
                    props: 'shared',
                    title: '拼车状态',
                    type: 'render',
                    renderContent: ({
                        record
                    }) => {
                       return  `<span>${record.shared?"是":"否"}</span>`
                    },
                }, 
                {
                    props: 'stage',
                    title: '阶段',
                    type: 'render',
                    renderContent: ({
                        record
                    }) => {
                       return  `<span>玩家已就位:${record.playerReady?'是':'否'}<br></br>DM 已就位:${record.actorReady?'是':'否'}</span>`
                    },
                
                }, 
                {
                    props: 'createTime',
                    title: '创建时间',
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
                    props: 'status',
                    title: '状态',
                    mapping: [{
                        text: '想法',
                        value: '0',
                    },
                    {
                        text: '预定中',
                        value: '1',
                    }, {
                        text: '锁场',
                        value: '2',
                    }, {
                        text: '开场',
                        value: '3',
                    }, {
                        text: '完成',
                        value: '4',
                    }, {
                        text: '放弃',
                        value: '5',
                    },
                ]
                }, 

                ]
            },
           
        }
    }
}


