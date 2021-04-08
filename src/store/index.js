/*
 * @Author: Yin Xiang Zheng
 * @LastEditors: Yin Xiang Zheng
 * @LastEditTime: 2021-02-20 15:06:18
 */
import Vue from 'vue'
import Vuex from 'vuex'


import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tableStatusColor: {
            green: "#03c666",
            warning: "#FF9500",
            Announced: "#FF9100",
            Unannounced: "#52D4FF",
            InUse: "#00BF69",
            Active: "#A770FF",
            Inactive: "#95A0B0",
            Reserved: "#5297FF"
        },
        debuggerStatus: JSON.parse(sessionStorage.getItem('debuggerStatus')),

    },
    modules,
    strict: process.env.NODE_ENV !== 'production'
})
