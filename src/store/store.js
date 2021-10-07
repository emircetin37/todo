import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)



export const store = new Vuex.Store({

    state: {
        todo: [

        ],
        user: [

        ],
        nowUser: {},
        control: false
    },
    getters: {

        //**************************************TODO CODES****************************** */

        getList(state) {
            return state.todo;
        },

        //**************************************USER CODES****************************** */
    },
    mutations: {

        //**************************************TODO CODES****************************** */

        listUpdate(state, payload) {
            state.todo.push(payload)
        }

        //**************************************USER CODES****************************** */
    },
    actions: {


        //**************************************TODO CODES****************************** */

        listAdd({ commit }, payload) {
            Vue.http.post("https://my-project-f06fd-default-rtdb.firebaseio.com/todo.json", { payload })
            commit("listUpdate", payload)
        },
        deleteList({ state }, payload, index) {
            state.todo.splice(state.todo.indexOf(payload), 1)
            Vue.http.put("https://my-project-f06fd-default-rtdb.firebaseio.com/todo.json", state.todo)
        },
        createList({ state }) {
            Vue.http.get("https://my-project-f06fd-default-rtdb.firebaseio.com/todo.json")
                .then(response => {
                    for (let key in response.data) {
                        if (response.data[key].payload) {
                            state.todo.push(response.data[key].payload)
                        }
                        else {
                            state.todo.push(response.data[key])
                        }

                    }
                })
        },

        //**************************************USER CODES******************************** */
        registerUser({ state }, payload) {
            Vue.http.post("https://my-project-f06fd-default-rtdb.firebaseio.com/user.json", payload)
            state.user.push(payload)
        },

        loginUser({ state }, payload) {

            Vue.http.get("https://my-project-f06fd-default-rtdb.firebaseio.com/user.json")
                .then(response => {
                    for (let key in response.data) {
                        if (response.data[key].userName == payload.userName && response.data[key].password == payload.password) {
                            state.nowUser = response.data[key]
                            Vue.http.put("https://my-project-f06fd-default-rtdb.firebaseio.com/nowUser.json", state.nowUser)
                        }
                    }
                    if (!state.nowUser.userName) {
                        alert("Hatalı giriş yaptınız.")
                    }
                })
        },
        createUser({ state }) {
            Vue.http.get("https://my-project-f06fd-default-rtdb.firebaseio.com/nowUser.json")
                .then(response => {
                    if (response.data) {
                        state.nowUser = response.data
                    }
                })
        },
        logOutUser({ state }) {
            state.nowUser = {}
            Vue.http.put("https://my-project-f06fd-default-rtdb.firebaseio.com/nowUser.json", {})
        }


    },

})