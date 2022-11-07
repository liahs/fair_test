import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    details: null,
    isModalOpen: false
}

const changePasswordSlice = createSlice({
    name: "creditLimit",
    initialState: initialState,
    reducers: {
        setCmModalDet: (state, action) => {
            state.details = action.payload
        },
        setCmModalOpen: (state, action) => {
            state.isModalOpen = action.payload
        }
    }
})

export const { setCmModalDet, setCmModalOpen } = changePasswordSlice.actions

export default changePasswordSlice.reducer