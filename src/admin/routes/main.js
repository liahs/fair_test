import { Routes, Route } from "react-router-dom"
import Home from "../containers/home"


const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default AdminRoutes
