import { Routes, Route } from "react-router-dom"
import Home from "../containers/home"
import Login from "../containers/login"
import Matches from "../containers/matches"

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/matches" element={<Matches />} />

        </Routes>
    )
}

export default Main
