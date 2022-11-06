import {configureStore} from '@reduxjs/toolkit'
import selectedColorBox from './selectedColorBox'
import betplace from './betplace'
import userdetail from '../admin/store/userdetail'
import depositModal from '../admin/store/depositModal'
const store=configureStore({
    reducer:{
        selectedColorBox,
        betplace,
        userdetail,
        depositModal
    }
})

export default store