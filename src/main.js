// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './components';
import App from './App'
import router from './router'
import './assets/css/common.less'

import Distpicker from 'v-distpicker'

Vue.component('v-distpicker', Distpicker)

Vue.config.productionTip = false
Vue.use(Distpicker)

// import vuex
import store from './store'
import VuexDynamicModule from './plugins/vuexDynamicModule'
Vue.use(VuexDynamicModule)
// import i18n
import i18n from './i18n'

// import plugins
import plugin from './plugins'
Vue.use(plugin)
import ref from "vue-ref";
Vue.use(ref, { name: "ant-ref" });

import zenUi from '@zenlayer/zen-ui'
Vue.use(zenUi);

import uitest from '@zenlayer/utt'
Vue.use(uitest);
let utt = new uitest({ platform: "oss" })


import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css' //样式文件

import * as Methods from './utils/globalMethods'
Object.keys(Methods).forEach(key => Vue.prototype[key] = Methods[key])

Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    })
})

Vue.prototype.$oss3SetRecordId = (id, next) => {
    router.push({
        query: { recordId: id }
    })
    if (next && typeof next === "function") {
        next()
    }

}

Vue.prototype.$oss3JumpTo = (title, id, path, base = 'oss_other') => {

    if (window !== window.top) {
        window.parent.postMessage(
            {
                cmd: 'addTabs',
                params: {
                    title,
                    id,
                    url: `${window.location.origin}/${base}/${path}`,
                },
            },
            '*'
        )
    } else {
        path = path.indexOf("/") === 0 ? path : "/" + path
        router.push(path)
    }
}

Vue.prototype.$oss2JumpTo = (title, id, path) => {
    if (window !== window.top) {
        window.parent.postMessage(
            {
                cmd: 'addTabs',
                params: {
                    title,
                    id,
                    type: 'oss2.0',
                    oss2Path: path

                },
            },
            '*'
        )
    }
}


Vue.prototype.$oss3ReloadIframe = (tabkey, next) => {
    if (window !== window.top) {
        window.parent.postMessage(
            {
                cmd: 'reloadIframe',
                params: {
                    tabkey: tabkey
                }
            },
            '*'
        )
    }
    if (next && typeof next === "function") {
        next()
    }

}

Vue.prototype.$closeCurrentIframe = () => {
    if (window !== window.top) {
        window.parent.postMessage(
            {
                cmd: 'closeCurrentIframe',
                params: {}
            },
            '*'
        )
    }
}



// 如果不是顶层环境
if (window !== window.top) {
    window.addEventListener('message', () => {
        const data = event.data
        switch (data.cmd) {
            case 'postToken':
                localStorage.setItem("jwt", data.params.jwt)
                break
            case 'lang':
                if (localStorage.getItem('lang') != data.params.type) {
                    store.commit('setLang', data.params.type)
                }
                break
            case 'debuggerStatus':
                store.commit('DEBUGGER_STATUS', data.params.type)
                break
        }
    })
    window.parent.postMessage({
        cmd: "getToken",
        params: {
            origin: location.host
        }
    },
        "*"
    )
    window.parent.postMessage({
        cmd: "lang",
        params: {
            origin: location.host
        }
    },
        "*"
    )
    window.parent.postMessage(
        {
            cmd: "debuggerStatus",
            params: {
                origin: location.host
            }
        },
        "*"
    )
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    i18n,
    utt,
    components: {
        App
    },
    template: '<App/>'
})
