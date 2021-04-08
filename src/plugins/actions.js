/*
 * @Author: Yin Xiang Zheng
 * @LastEditors: Yin Xiang Zheng
 * @LastEditTime: 2020-12-28 14:13:41
 */
import axios from '@/axios'
class LCAction {
    constructor(vue, actions, cxtOptions = {}) {
        this._vue = vue
        this.cxt = null
        this.actions = actions || []
        this.createContext(cxtOptions)
    }
    compose() {
        let _this = this
        function dispatch(i) {
            let action = _this.actions[i];
            if (!action) {
                return Promise.resolve();
            }

            return Promise.resolve(
                _this.rendor(action, function next() {
                    // promise完成后，再执行下一个
                    return dispatch(i + 1);
                })
            )
        }
        dispatch(0)
    }
    async rendor(action, next) {
        let { cxt, _vue } = this
        let { key, code } = action
        console.log("+++++", cxt, action, key)


        if (code !== key) {
            cxt.next = next
            let func = new Function('cxt', '_this', 'axios', code)
            func(cxt, _vue, axios)
            // next()
            return
        }

        if (key === "list.delete") {
            let params = {
                action: 'DELETE',
                targetBean: cxt.targetBean,
                recordId: cxt.dataSource.id,
            }
            _vue.$confirm({
                title: 'Are you sure delete this item?',
                okText: 'Yes',
                okType: 'danger',
                cancelText: 'No',
                onOk() {
                    axios.post('/resourceApi/metaBiz', params).then((res) => {
                        _vue.$message.success('Successful')
                        next()
                    })
                },
                onCancel() { },
            });
        } else if (key === "list.refresh") {
            _vue.$emit('refresh')
            next()
        } else if (key === "form.submit") {
            try {
                await _vue.saveMethdos()
                next()
            } catch (error) {
                console.log('error???', error);
            }
        } else if (key === "modal.close") {
            console.log('?????? list.open.modallist.open.modal', code);
            _vue.closeModal()
            next()
        }

    }
    createContext(options) {
        let { targetBean, dataSource, formValues } = options || {}
        /*
        * route 当前页面路由信息
        * targetBean 元数据中都数据源
        * dataSource 当前按钮操作都数据源，如table编辑按钮即为record
        * formValues 提交表单的数据
        *
        *
        */
        let cxt = {
            route: this._vue.$route,
            targetBean,
            dataSource,
            formValues
        }
        this.cxt = cxt
    }
    setContext(key, values) {
        let { cxt } = this
        cxt[key] = values
    }
}
export default LCAction;
