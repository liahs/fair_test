import {createSlice} from '@reduxjs/toolkit'

const currentSelectedSlice=createSlice({
    name:"currentSelected",
    initialState:{
        current:0
    },
    reducers:{
        setCurrentSelected:(state,action)=>{
            state.current=action.payload
        }
    }
})

export const {setCurrentSelected}=currentSelectedSlice.actions

export default currentSelectedSlice.reducer