import { Routes, Route } from "react-router-dom"
import AccountStatement from "../containers/accountStatement.js"
import GeneralReport from "../containers/generalReport/index.js"
import AddAccount from "../containers/AddAccount/index.js"
import Home from "../containers/home"
import MarketAnaylsisContainer from "../containers/marketAnalysis"
import MatchScreen from "../containers/matchScreen"
import ProfitLoss from "../containers/profitLoss/index.js"
import CurrentBets from "../containers/currentBets/index.js"
import LiveMarket from "../containers/marketlive"
import Reports from "../containers/reports/index.js"

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/list_of_clients" element={<Home />} />
            <Route exact path="/market_analysis" element={<MarketAnaylsisContainer />} />
            <Route exact path="/live_market" element={<LiveMarket />} />
            <Route exact path="/match" element={<MatchScreen />} />
            <Route exact path="/account_statement" element={<AccountStatement />} />
            <Route exact path="/general_report" element={<GeneralReport />} />
            <Route exact path="/profit_loss" element={<ProfitLoss />} />
            <Route exact path="/add_account" element={<AddAccount />} />
            <Route exact path="/current_bet" element={<CurrentBets />} />
            <Route exact path="/reports" element={<Reports />} />
            <Route exact path="/game_report" element={<Reports />} />
        </Routes>
    )
}

export default AdminRoutes
