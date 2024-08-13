import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            //   const existingItem = prevItems.find(item => item.id === product.id);
            //   if (existingItem) {
            //     return prevItems.map(item =>
            //       item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            //     );
            //   }
            const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
            if (existingItemIndex !== -1) {
                // If the product already exists, create a new array with the updated item
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    quantity: updatedItems[existingItemIndex].quantity + 1
                };
                return updatedItems;
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, newQuantity) => {

        if (newQuantity < 1) return;
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart
    };

    return React.createElement(CartContext.Provider, { value }, children);
};

export const useCart = () => useContext(CartContext);