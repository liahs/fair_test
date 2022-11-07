
import { Header, Background, HomeSlide ,Account,AccountList, UserDetailModal, DepositModal, SetCreditModal, WithDrawModal, SetExposureModal, ChangePasswordModal, DailogModal} from "../../components";

export default function Home() {
    
    return (
        <Background>
            <Header />
            <HomeSlide />
            <Account />
            <AccountList />
            <UserDetailModal />
            <DepositModal />
            <SetCreditModal />
            <WithDrawModal />
            <SetExposureModal />
            <ChangePasswordModal />
            <DailogModal />
        </Background>
    )
}

