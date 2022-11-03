import { createSlice } from "@reduxjs/toolkit";

const betplaceSlice=createSlice({
    name:"betplace",
    initialState:{
        anchor:null
    },
    reducers:{
        setAnchor:(state,action)=>{
            state.anchor=action.payload
        }
    }
})

export const {setAnchor} = betplaceSlice.actions

export default betplaceSlice.reducer