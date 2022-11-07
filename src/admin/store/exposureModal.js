import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    details: null,
    isModalOpen: false
}

const exposureSlice = createSlice({
    name: "creditLimit",
    initialState: initialState,
    reducers: {
        setExpoModalDet: (state, action) => {
            state.details = action.payload
        },
        setExpoModalOpen: (state, action) => {
            state.isModalOpen = action.payload
        }
    }
})

export const { setExpoModalDet, setExpoModalOpen } = exposureSlice.actions

export default exposureSlice.reducer