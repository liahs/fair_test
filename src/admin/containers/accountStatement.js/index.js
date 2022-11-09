import { Box } from "@mui/material"
import { Background, Header } from "../../components";
import AccountStatementList from "../../components/AccountStatementList";
import YellowHeader from "../../components/YellowHeader";

const AccountStatement = () => {

    return (
        <Background>
            <Header />
            <YellowHeader />
            <AccountStatementList />
        </Background>
    )
}
export default AccountStatement;