const state = {
    cart: [],
    productChoose: [],
    isOpen: false,
};

const getters = {
    isOpenCardPopUp: state => state.isOpen,
    productChoose: state => state.productChoose,
    isProductChoose: (state) => (id) => state.cart.filter(product => product.id === id).length > 0,
    getCountProductInCart: (state) => (id) => state.cart.filter(product => product.id === id)[0].countProduct,
    cartLenght: (state) => state.cart.length
};


const actions = {
    openCardPopUp({ commit }, product) {
        commit('openCardPopUp', product)
    },
    closeCardPopUp({ commit }) {
        commit('closeCardPopUp')
    },
    addProductToCart({ commit }, product) {
        commit('addProductToCart', product);
    }
};


const mutations = {
    openCardPopUp(state, product) {
        state.productChoose = product;
        state.isOpen = true;
    },
    closeCardPopUp(state) {
        state.productChoose = [];
        state.isOpen = false;
    },
    addProductToCart(state, { product, status }) {
        switch (status) {
            case 'update':
                state.cart = state.cart.map(i => {
                    if(i.id === product.id) {
                        return product
                    }
                    return i
                });
                break;
            case 'remove':
                state.cart = state.cart.filter(i => i.id !== product.id);
                break;
            case 'add':
                state.cart = [...state.cart, product];
                break;
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
