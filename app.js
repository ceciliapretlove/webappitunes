import Vue from 'vue' // vue.js
window.Axios = require('axios')       // vue http request
window.VueAxios = require('vue-axios')      // vue http request from axios(improved version)

import AppLayout from './App.vue' // main vue app
//jQuery
global.jQuery = require('jquery')

//Bootstrap
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'

//Carousel
import VueCarousel from 'vue-carousel'

//Font Awesome
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

let store = {
    state: { 
        cart: [],
        cartCount: 0,
    },

    mutations: {
        addToCart(state, item) {
            console.log(item.title);
        } 
    }
};
// initialize dependency
Vue.use(VueAxios,Axios)
Vue.use(VueCarousel)

// all vue component
Vue.component('carousel',require('./components/carousel.vue').default) // carousel
// Vue.component('carousel',require('./components/favourite.vue').default) // favourite




























// renderer
const app = new Vue({
          el: '#app',
      render: h => h(AppLayout)
    })


