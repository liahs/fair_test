import { createSlice } from "@reduxjs/toolkit";

const initialState={
    details:null,
    isModalOpen:false
}

const depositModalSlice=createSlice({
    name:"depositModal",
    initialState:initialState,
    reducers:{
        setModalDet:(state,action)=>{
            state.details=action.payload
        },
        setDepoModalOpen:(state,action)=>{
            state.isModalOpen=action.payload
        }
    }
})

export const {setModalDet,setDepoModalOpen}=depositModalSlice.actions

export default depositModalSlice.reducer