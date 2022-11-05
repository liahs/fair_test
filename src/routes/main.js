import { Routes, Route } from "react-router-dom"
import AdminRoutes from "../admin/routes/main"
import ForgetPassword from "../containers/forgetPassword"
import Home from "../containers/home"
import Login from "../containers/login"
import Matches from "../containers/matches"
import NewPassword from "../containers/newpassword"
import Verification from "../containers/verification"

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/forget_password" element={<ForgetPassword />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/new_password" element={<NewPassword />} />
            <Route path="/home" element={<Home />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
    )
}

export default Main
