import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex,axios)

export default new Vuex.Store({
   state: {
      drawer: false,
      user: null,

   },
   mutations: {
      toggleDrawer (state, drawer) {
         state.drawer = !state.drawer
      },
      setUser (state, user) {
         state.user = user
      },
   },
   getters: {
      drawer: state => state.drawer,
      user: state => state.user
   },
   actions: {
      // loadUser({commit, state}) {
      //    if(state.user == null) {
      //       axios.get('../acar/api/get/profile')
      //                     .then(result => {
      //                         commit("setUser", result.data.profile);
      //                       console.log("GG")
      //                     }).catch(err => console.log(err)
      // }
      //       
   }
})
