
import { Header, Background, HomeSlide ,Account,AccountList, UserDetailModal, DepositModal} from "../../components";

export default function Home() {
    
    return (
        <Background>
            <Header />
            <HomeSlide />
            <Account />
            <AccountList />
            <UserDetailModal />
            <DepositModal />
        </Background>
    )
}

