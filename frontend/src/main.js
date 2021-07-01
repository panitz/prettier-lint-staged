import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const obj = {
  key1: 'Value1',
  key2: 'value2',
}

console.log('The object is:', obj)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
