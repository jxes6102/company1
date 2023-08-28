import { createStore } from 'vuex'

export default createStore({
  state: {
    isMobile:false,
    menuStatus:false,
    informationChild:{}
  },
  getters: {
  },
  mutations: {
    setMobile (state,value){
      state.isMobile = (value <= 768) ? true : false
    },
    setMenu (state,value){
      state.menuStatus = value
    },
    setInformationChild (state,value){
      state.informationChild = value
    }
  },
  actions: {
  },
  modules: {
  }
})
