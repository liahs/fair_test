import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    details: null,
    isModalOpen: false
}

const creditLimitlSlice = createSlice({
    name: "creditLimit",
    initialState: initialState,
    reducers: {
        setCredModalDet: (state, action) => {
            state.details = action.payload
        },
        setCredModalOpen: (state, action) => {
            state.isModalOpen = action.payload
        }
    }
})

export const { setCredModalDet, setCredModalOpen } = creditLimitlSlice.actions

export default creditLimitlSlice.reducer