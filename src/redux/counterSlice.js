import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    'name' : 'counter',
    initialState : {
        counter : 0 
    },
    reducers: {
        increment : (state) => {state.counter += 1},
        decrement : (state) => {state.counter -= 1},
        incrementBy : (state, num) => { state.counter += num}
    },
})

// To Selectively import reducer fucntion to use in target components to dispatch actions
export const {increment, decrement, incrementBy} = counterSlice.actions; 

// Entire Reducer export by default to add this automatically into configureStore in store.js 
export default counterSlice.reducer