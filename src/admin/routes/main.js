import { Routes, Route } from "react-router-dom"
import AccountStatement from "../containers/accountStatement.js"
import GeneralReport from "../containers/generalReport/index.js"
import AddAccount from "../containers/AddAccount/index.js"
import Home from "../containers/home"
import LiveMarketContainer from "../containers/livemarket"
import MatchScreen from "../containers/matchScreen"
import ProfitLoss from "../containers/profitLoss/index.js"
import CurrentBets from "../containers/currentBets/index.js"


const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/live" element={<LiveMarketContainer />} />
            <Route exact path="/match" element={<MatchScreen />} />
            <Route exact path="/accountStatement" element={<AccountStatement />} />
            <Route exact path="/generalReport" element={<GeneralReport />} />
            <Route exact path="/profitLoss" element={<ProfitLoss />} />
            <Route exact path="/addAccount" element={<AddAccount />} />
            <Route exact path="/bets" element={<CurrentBets />} />


        </Routes>
    )
}

export default AdminRoutes
