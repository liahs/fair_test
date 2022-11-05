import { Routes, Route } from "react-router-dom"
import AccountStatement from "../containers/accountStatement.js"
import Home from "../containers/home"
import LiveMarketContainer from "../containers/livemarket"
import MatchScreen from "../containers/matchScreen"


const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/live" element={<LiveMarketContainer />} />
            <Route exact path="/match" element={<MatchScreen />} />
            <Route exact path="/accountStatement" element={<AccountStatement />} />


        </Routes>
    )
}

export default AdminRoutes
