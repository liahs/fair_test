import {configureStore} from '@reduxjs/toolkit'
import selectedColorBox from './selectedColorBox'
import betplace from './betplace'
import userdetail from '../admin/store/userdetail'
import depositModal from '../admin/store/depositModal'
import creditLimitModal from '../admin/store/creditLimitModal'
import withdrawModal from '../admin/store/withdrawModal'
import exposureModal from '../admin/store/exposureModal'
import changePasswordModal from '../admin/store/changePasswordModal'
import dailogModal from '../admin/store/dailogModal'
const store=configureStore({
    reducer:{
        selectedColorBox,
        betplace,
        userdetail,
        depositModal,
        creditLimitModal,
        withdrawModal,
        exposureModal,
        changePasswordModal,
        dailogModal
    }
})

export default store