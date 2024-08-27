let store = {
    currentTotalPrice: "0.00",
    currentOrderId: null
};

export const setStore = (newStore) => {
    store = { ...store, ...newStore };
};

export const getStore = () => store;
