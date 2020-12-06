import  { useState } from 'react'
import initialState from '../initialState'
const useInitialState = ()=>{
    const [ state, setState ] = useState(initialState);

    //Estas funciones son como un reducer
    const addToCart = payload =>{
        setState({
            ...state,
            cart:[ ...state.cart, payload]
        })
    }

    const removeFromCart = payload => {
        setState({
            ...state,
            cart : state.cart.filter(f => f.id !== payload.id)
        })
    }

    return {
        addToCart,
        removeFromCart,
        state
    }
};

export default useInitialState;
