import {configureStore} from '@reduxjs/toolkit'
import selectedColorBox from './selectedColorBox'
import betplace from './betplace'
const store=configureStore({
    reducer:{
        selectedColorBox,
        betplace
    }
})

export default store