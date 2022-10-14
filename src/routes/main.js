import { Routes, Route } from "react-router-dom"
import Home from "../containers/home"
import Login from "../containers/login"

const Main=()=>{
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}

export default Main
