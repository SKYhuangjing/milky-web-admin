const install = function (Vue) {
    Vue.prototype.$postMessage = {
        isMaster() {
            return window === window.top;
        },
        emit(cmd, params, origin = "*") {
            window.parent.postMessage(
                {
                    cmd: cmd,
                    params
                },
                origin
            )
        },
        registry() {
            window.addEventListener('message', () => {
                const data = event.data
                switch (data.cmd) {
                    case 'postToken':
                        let jwt = data.params.token
                        localStorage.setItem("jwt", jwt)
                        break
                    case 'clearToken':
                        localStorage.removeItem("jwt")
                        break
                }
            })
        }

    }
}
export default install
