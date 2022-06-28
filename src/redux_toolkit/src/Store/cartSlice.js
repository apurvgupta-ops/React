import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add(state, actions) {
            state.push(actions.payload)
        },
        remove(state, actions) {
            const item = state.filter(item => item.id !== actions.payload)
            return item
        }
    }
})

export const { add, remove } = cartSlice.actions
export default cartSlice.reducer