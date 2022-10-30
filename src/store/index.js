import {configureStore} from '@reduxjs/toolkit'
import selectedColorBox from './selectedColorBox'

const store=configureStore({
    reducer:{
        selectedColorBox
    }
})

export default store