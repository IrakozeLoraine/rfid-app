
export default {
    namespaced: true,
    state: {
        cards: null,
    },
    mutations: {
        setCard: (state, card) =>{
            state.cards = card
            console.log(state.cards)
        }
    },
    actions: {
    },
    getters: {
    }
}
