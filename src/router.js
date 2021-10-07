import Vue from "vue";
import VueRouter from 'vue-router'

import ToDoList from './components/ToDoList'
import Add from './components/Add'
import Login from './components/user/Login'
import Register from './components/user/Register'
import UserDetail from './components/user/UserDetail'
Vue.use(VueRouter)


export const router = new VueRouter({
    routes:[
        {path :"/",component:ToDoList},
        {path:"/add",component:Add},
        {path:"/login",component:Login},
        {path:"/register",component:Register},
        {path:"/user-detail",component:UserDetail}
    ],
    mode : "history"
})