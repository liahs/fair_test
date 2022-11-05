import { Routes, Route } from "react-router-dom"
import Home from "../containers/home"
import LiveMarketContainer from "../containers/livemarket"
import MatchScreen from "../containers/matchScreen"


const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/live"  element={<LiveMarketContainer />} />

        </Routes>
    )
}

export default AdminRoutes
