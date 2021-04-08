import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
import commonLanguage from './common'
const i18n = new VueI18n({
    locale: 'en',
    messages: {
        ...commonLanguage,

    },
    silentTranslationWarn: true,

})
export default i18n
