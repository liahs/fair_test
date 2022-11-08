
import { SideBar } from "../../../components";
import { Header, Background, HomeSlide, Account, AccountList, UserDetailModal, DepositModal, SetCreditModal, WithDrawModal, SetExposureModal, ChangePasswordModal, DailogModal } from "../../components";
import SideBarAdmin from "../../components/SideBarAdmin";

export default function Home() {

    return (
        <Background>
            {/* <Header />
            <HomeSlide />
            <Account />
            <AccountList />
            <UserDetailModal />
            <DepositModal />
            <SetCreditModal />
            <WithDrawModal />
            <SetExposureModal />
            <ChangePasswordModal />
            <DailogModal /> */}
            <SideBarAdmin />
        </Background>
    )
}

