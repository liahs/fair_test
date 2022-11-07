import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    details: null,
    isModalOpen: false
}

const withdrawSlice = createSlice({
    name: "withDrawModal",
    initialState: initialState,
    reducers: {
        setWithdrawModalDet: (state, action) => {
            state.details = action.payload
        },
        setWithdrawModalOpen: (state, action) => {
            state.isModalOpen = action.payload
        }
    }
})

export const { setWithdrawModalDet, setWithdrawModalOpen } = withdrawSlice.actions

export default withdrawSlice.reducer