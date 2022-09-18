
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import BizSiteMngManager from "./components/listers/BizSiteMngCards"
import BizSiteMngDetail from "./components/listers/BizSiteMngDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/bizSiteMngs',
                name: 'BizSiteMngManager',
                component: BizSiteMngManager
            },
            {
                path: '/bizSiteMngs/:id',
                name: 'BizSiteMngDetail',
                component: BizSiteMngDetail
            },



    ]
})
