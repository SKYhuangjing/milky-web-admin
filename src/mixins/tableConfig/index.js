import axios from "@/axios"
import moment from 'moment'
export const tableConfigMixin = {
    data() {
        return {
            selectedRowKeys: [],
            selectedRows: [],
            rowSelection: {
                onChange: (selectedRowKeys, selectedRows) => {
                    this.selectedRowKeys = [...selectedRowKeys]
                    this.selectedRows = [...selectedRows]
                }
            },
            loading: false,
            pagination: {
                total: 0,
                pageSize: 10,
                current: 1,
                size: 'small',
                showQuickJumper: true,
                showSizeChanger: true,
                pageSizeOptions: ['10', '20', '50', '100'],
            },
            mixinsConfig: {
                addPageUrl: "",
                queryApi: "",
                deleteApi: ""
            },
            params: {
                queryValue: '',
                pageNum: 1,
                pageSize: 10
            },
        }
    },
    methods: {
        getTableDatas() {
            let params = {
                ...this.params
            }

            this.loading = true
            console.log("this.header",this.headers)
            //headers: { "Authorization": "Basic YWRtaW46dGVzdA==" },
            axios.get(this.mixinsConfig.queryApi,{params}).then(res => {
                this.loading = false
                this.dataSource = res.data || res.list
                this.pagination.total = res.total
                this.pagination.current = res.pageNum
                this.pagination.pageSize = res.pageSize
            }).catch(err => {
                this.loading = false
            })
        },
        deleteHandle(apiPath) {
            if (!apiPath) {
                return
            }
            let _this = this
            this.$confirm({
                title: 'Are you sure delete this item?',
                okText: 'Yes',
                okType: 'danger',
                cancelText: 'No',
                onOk() {
                    axios.delete(apiPath).then(res => {
                        _this.$message.success("Successful")
                        _this.getTableDatas()
                    })
                },
                onCancel() { },
            });
        },
        tableChangeHandle(pagination, filters, sorter) {
            let {
                current = this.params.pageNum,
                pageSize = this.params.pageSize
            } = pagination
            this.params.pageNum = current
            this.params.pageSize = pageSize
            this.pagination.current = current
            this.pagination.pageSize = pageSize

            this.getTableDatas()
        },
        searchHandle(queryValues) {
            // let params = {}
            // let {
            //     pageNum,
            //     pageSize
            // } = this.params
            // this.params = {
            //     pageNum,
            //     pageSize,
            //     queryValue: ''
            // }

            this.params = {
                ...this.params,
                queryValue: ''
            }
            for (const key in queryValues) {
                if (queryValues[key] !== undefined) {
                    this.params[key] = key === 'baseInfoId' ? queryValues[key].split('-').pop() : queryValues[key]
                }

            }
            this.getTableDatas()
        },
        columnsChangeHandle(columns) {
            this.columns = columns
        }
    },
    mounted() {
        if (!this.pagination) {
            return
        }
        this.pagination.current = this.params.pageNum || 1
        this.pagination.pageSize = this.params.pageSize || 10
        // this.headers=JSON.parse(localStorage.getItem('roles') || '{}')
    }
}
