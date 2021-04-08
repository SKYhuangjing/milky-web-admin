function VuexDynamicModule() {
    this.listeners = {}
}
const dynamicModule = new VuexDynamicModule()
VuexDynamicModule.prototype.on = function (module, state) {
    if (!(module in this.listeners)) this.listeners[module] = []
    this.listeners[module].push(state)
}
VuexDynamicModule.prototype.emit = function (module, cb) {
    if (typeof module !== 'string') throw new Error(' module must be a string')
    const listener = this.listeners[module]
    if (!listener) throw new Error('Can not found this' + module)
    listener.forEach(function (state) {
        cb(state)
    })
}
// 模块注册
function registerModule(vm, options, module) {
    let data, preserveState, state, _path;
    if (typeof module === 'string') {
        module = module.replace(/\s+/g, '').split(/\,+/g)
    } else if (Object.prototype.toString.call(module) === '[object, Object') {
        module = Array.isArray(module.name) ? module.name : module.name.replace(/\s+/g, '').split(/\,+/g)
        preserveState = module.preserveState
    }
    module.forEach((item, i) => {
        if (vm.st[item]) {
            vm.st[item] = vm.$store.state[item]
        } else {
            vm.$set(vm.st, item, {})
            _path = options.path + item
            _path = _path.replace('../', '')
            import('../' + _path).then(res => {
                vm.$store.registerModule(item, res.default, { preserveState })
                vm.st[item] = vm.$store.state[item]
                state = vm.$store.state[item]
                for (data in state) {
                    vm.$set(vm.st[item], data, state[data])
                }
                dynamicModule.on(item, state)
                if (dynamicModule.modules.indexOf(item) == -1) dynamicModule.modules.push(item)
            }).catch(e => {
                throw new Error(e)
            })
        }

    })
}
function inheritModuleByName(vm, name, options) {
    if (name = (/\./.test(name) && name.split('.')[0]) || '') {
        if (!vm.$store.state[name]) {
            registerModule(vm, options, name)
        } else {
            vm.$set(vm.st, name, vm.$store.state[name])
        }

    }
}
VuexDynamicModule.install = function (Vue, options = {}) {
    options.path = options.path || '../store/modules/'
    Vue.mixin({
        data() {
            return {
                st: {
                    common: null
                }
            }
        },
        created() {
            let $options = this.$options,
                modules = $options.modules,
                inheritModules = $options.inheritModules,
                name = $options.name
            if (modules) registerModule(this, options, modules)
            if (this.$store && !/^A[A-Z]{1}/.test(name)) this.st.common = this.$store.state.common
            inheritModules && registerModule(this, options, inheritModules)
            name && !/^A[A-Z]{1}/.test(name) && inheritModuleByName(this, name.toLowerCase(), options)
            // !/^A[A-Z]{1}/.test(this.$options.name) && dispatch(this)
        },
        methods: {
            dispatch(namespace, payload) {
                this.$store.dispatch(namespace, payload)
            },
            commit(namespace, payload) {
                this.$store.commit(namespace, payload)
            },
            registerComplete(type, cb) {
                dynamicModule.emit(type, cb)
            }
        }
    })
}
export default VuexDynamicModule
