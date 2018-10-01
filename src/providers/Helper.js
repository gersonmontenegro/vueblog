import Vue from 'vue'

export default class Helper {
    openNotify(type, title, text) {
        Vue.notify({
            group: 'foo',
            type: type,
            title: title,
            text: text
        })
    }
}