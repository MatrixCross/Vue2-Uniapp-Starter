import {} from 'vuex'

export default {
  namespaced: true,
  state: {
    userInfo: null,
    name: 'foo',
  },
  mutations: {
    setUserInfo(store, val) {
      store.userInfo = val
    },
    setName(store, val) {
      store.name = val
    },
  },
}
