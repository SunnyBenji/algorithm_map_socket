export const state = () => ({
  socket: null,
})

export const mutations = {
  set(state, socket) {
    state.socket = socket
  },
}
