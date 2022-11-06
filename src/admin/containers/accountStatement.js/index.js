import { Box } from "@mui/material"
import { Background } from "../../components";
import AccountStatementList from "../../components/AccountStatementList";
import YellowHeader from "../../components/YellowHeader";

const AccountStatement = () => {

    return (
        <Background>
            <YellowHeader />
            <AccountStatementList />
        </Background>
    )
}
export default AccountStatement;