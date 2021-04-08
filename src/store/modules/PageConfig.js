/*
 * @Author: Yin Xiang Zheng
 * @LastEditors: Yin Xiang Zheng
 * @LastEditTime: 2021-02-20 15:04:03
 */
const state = {
    currentWidget: null,
    cloudWebTabs: [],
    debuggerStatus: JSON.parse(sessionStorage.getItem('debuggerStatus')),

}

const mutations = {
    SET_CURRENT_WIDGET(state, attr) {
        state.currentWidget = attr
    },
    DEBUGGER_STATUS(state, status) {
        state.debuggerStatus = status
    },
}

const actions = {
    setCurrentWidget({
        commit
    }, attr) {
        commit('SET_CURRENT_WIDGET', attr)
    },
}

export default {
    state,
    mutations,
    actions
}
