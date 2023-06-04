import { createSlice } from "@reduxjs/toolkit";

const intitialState = {
    number: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: intitialState,
    reducers: {
        addCounter: (state, action) => {
            state.number = action.payload
        }
    }
})

export const { addCounter } = counterSlice.actions

export default counterSlice.reducer