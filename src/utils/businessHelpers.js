import axios from '@/axios'
let isEn = localStorage.getItem('lang') === 'en_US'
let unit, emptyText = '-'

export function redirectToLocal(vm, url, title) {
    if (window.top != window.self) {
        window.parent.postMessage({
                cmd: 'addTabs',
                params: {
                    type: 'resource',
                    url: '/oss_resource' + url,
                    title: title,
                    id: url
                }
            },
            '*'
        )
    } else {
        vm.$router.push(url)
    }
}



//  列表页面跳转到详情页面

/**
 *
 *
 * @export
 * @param {*} vm 组件实例
 * @param {*} record 当前选中的item
 * @param {*} prefixTitle 前缀标题
 * @param {*} suffixTitle 后缀标题
 */
export function redirectToDetail(vm, record, title) {
    let tabTtile
    if (window.top != window.self) {
        let path = `${record.path}/${record.id}`
        let url = window.location.href.replace(
            window.location.pathname,
            `/oss_resource${path}`
        )
        if (typeof title === 'object') {
            tabTtile = `${prefixTitle.prefix || emptyText}:${prefixTitle.suffix || emptyText}`
        } else if (typeof title === 'string') {
            tabTtile = title
        }
        window.parent.postMessage({
            cmd: 'addTabs',
            params: {
                url,
                title: tabTtile,
                id: path
            }
        }, '*')

    } else {
        vm.$router.push(`${record.path}/${record.id}`)
    }
}


/**
 *
 *
 * @export
 * @param {*} id po 或pwID
 * @param {*} isPo boolean 当前是否 是po
 * @param {*} detailData 数据集合 {}
 * @returns
 */
export function getWorkOrderJumpRoute(id, title, isOrderNo) {
    if (isOrderNo) {
        let path = `task/po?orderNo=${title}`
        let url = window.location.href.replace(
            window.location.pathname,
            `/oss_vendor/${path}`
        )
        window.parent.postMessage({
                cmd: 'addTabs',
                params: {
                    title,
                    id: path,
                    url: url,
                },
            },
            '*'
        )

        return
    }
    return axios
        .get(`/workflowApi/release/instance/${id}/uiRoute`)
        .then(res => {
            let o = {}
            const {
                ossInstance,
                uiJump,
                code,
                name
            } = res
            if (title) {
                o.title = title
            } else {
                o.title = code
            }
            o.name = name
            if (ossInstance) {
                o.id = res.id
                o.type = 'oss2.0'
                o.oss2Path = 'mainflow/index?woid=' + res.id

            } else {
                o.url = uiJump.url.replace(':id', id)
                o.id = window.location.pathname.replace(
                    /\/oss_resource.+/,
                    '/oss_vendor/' + uiJump.id.replace(':id', id)
                )
            }
            if (window.top != window.self) {
                window.parent.postMessage({
                        cmd: 'addTabs',
                        params: o
                    },
                    '*'
                )
            } else {
                window.location.href = o.url
            }
        })
}

export function renderPoOrPw(record, key) {
    return record[key] ?
        `<span style="color:#0C85EE;cursor:pointer">${record[key]} </span>` :
        '-'
}

export function resolveApparentPowerUnit(record) {
    switch (record.apparentPowerUnit) {
        case 1:
            unit = 'kVA'
            break
        case 2:
            unit = 'KW'
            break
    }
    return record.apparentPower ? record.apparentPower + unit : emptyText
}

export function resolveLoadPowerUnit(record) {
    switch (record.loadPowerUnit) {
        case 1:
            unit = 'KV'
        case 2:
            unit = 'KW'
    }
    return record.loadPower ? record.loadPower + unit : emptyText
}

export function resolveAlternatingCurrentType(type) {
    switch (type) {
        case 1:
            return isEn ? 'Single Phase Power' : '单相电'
        case 3:
            return isEn ? 'Three Phase Power' : '三相电'
        default:
            return emptyText
    }

}

export function resovleVoltageUnit(record) {
    switch (record.voltageUnit) {
        case 1:
            unit = 'V'
            break
    }
    return record.voltage ? record.voltage + unit : emptyText
}
export function resolveWiringType(type) {
    switch (type) {
        case 1:
            return isEn ? 'Up' : '上走线'
        case 2:
            return isEn ? 'Down' : '下走线'
    }
    return emptyText
}

export function resolveRedundant(redundant) {
    switch (redundant) {
        case 1:
            return 'Yes'
        case 2:
            return 'No'
    }
    return emptyText
}
export function resolveMaxCurrentOfBranch(record, key) {
    switch (record[key]) {
        case 1:
            unit = 'A'
            break
    }
    key = key.replace('Unit', '')
    return record[key] ? record[key] + unit : emptyText
}
export function resolveMaximumSupportPowerUnit(record) {
    switch (record.maximumSupportPowerUnit) {
        case 1:
            unit = 'kVa'
            break
    }
    return record.maximumSupportPower ? record.maximumSupportPower + unit : emptyText
}

export function resolveProtection(protection) {
    switch (protection) {
        case 1:
            return 'Yes'
        case 0:
            return 'No'
    }
    return emptyText
}

export const getWosUrl = (instId) => {
    return `/zenlayer_web/common?url=mainflow/index?woid=${instId}`
}


// export function redirectToOpenTab(url, params = {}) {
//     console.log(">>>>>><<<<<<<")
//     params = Object.assign({ type: 'resource' }, params)
//     const id = (url.match(/[0-9]+/) || [])[0]
//     if (window.top !== window.self) {
//         if (!params.title) {
//             params.title = params.prefix + ':' + (params.suffix || id)
//         }
//         if (params.type === 'resource') {
//             params.id = id ? url + id : url
//             params.url = '/oss_template' + url
//             window.parent.postMessage({ cmd: 'addTabs', params }, '*')
//         } else if (params.type === 'oss') {
//             params.url = url
//             params.id = url
//             window.parent.postMessage({ cmd: 'addTabs', params }, '*')
//         }
//     } else {
//         if (params.type === 'resource') {
//             // url = url.replace(`/${id}`, '')
//             this.$router.push(url)
//         } else {
//             window.location.href = `https://oss.zen.dev${url}`
//         }
//     }
// }
