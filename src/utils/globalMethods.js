import axios from '@/axios'
export function redirectToOpenTab(url, params = {}) {
    console.log(">>>>>><<<<<<<")
    params = Object.assign({ type: 'resource' }, params)
    const id = (url.match(/[0-9]+/) || [])[0]
    if (window.top !== window.self) {
        if (!params.title) {
            params.title = params.prefix + ':' + (params.suffix || id)
        }
        if (params.type === 'resource') {
            params.id = id ? url + id : url
            params.url = '/oss_resource_ipam' + url
            window.parent.postMessage({ cmd: 'addTabs', params }, '*')
        } else if (params.type === 'oss') {
            params.url = url
            params.id = url
            window.parent.postMessage({ cmd: 'addTabs', params }, '*')
        }
    } else {
        if (params.type === 'resource') {
            // url = url.replace(`/${id}`, '')
            this.$router.push(url)
        } else {
            window.location.href = `https://oss.zen.dev${url}`
        }
    }
}

export function resetTableSorterStatus(columns) {
    columns.forEach(col => {
        if (col.filters) {
            col.filteredValue = null
            delete this.params[col.dataIndex]
        }
        if (col.sorter) {
            col.sortOrder = null
            delete this.params[encodeURIComponent('sortBies[0].asc')]
            delete this.params[encodeURIComponent('sortBies[0].field')]
        }
    })
}

export function tableChangeSorterStatus(columns, sorter, filters) {
    columns.forEach(col => {
        if (col.filters && filters) {
            col.filteredValue = filters[col.dataIndex]
        }
        if (col.sorter && sorter) {
            col.sortOrder = sorter.columnKey === col.dataIndex && sorter.order
        }
    })
}

export function uiRouteJump(relatedInstanceId, useBusinessCode) {
    return axios
        .get(
            `/workflowApi/release/instance/${relatedInstanceId}/uiRoute`
        )
        .then(res => {
            let pathObj = {};
            let { ossInstance, uiJump, businessCode, code, name } = res;
            pathObj.title = useBusinessCode
                ? businessCode || code
                : code;
            pathObj.name = name;
            if (ossInstance) {
                pathObj.id = res.id;
                pathObj.type = "oss2.0";
                pathObj.oss2Path = "mainflow/index?woid=" + res.id;
            } else {
                pathObj.id = uiJump.id.replace(
                    ":id",
                    relatedInstanceId
                );
                pathObj.url = uiJump.url.replace(
                    ":id",
                    relatedInstanceId
                );
            }

            window.parent.postMessage(
                {
                    cmd: "addTabs",
                    params: pathObj
                },
                "*"
            );
        })
        .catch(err => {
            this.$message.error("关联工单没有配置URL");
            console.log(err);
        });
}