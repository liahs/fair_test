import { Box, Typography } from "@mui/material"
import Input from "../../components/Input"
import { EyeIcon } from "../assets"
import DropDownCustom from "./DropdownCustom"
import DropDownSimple from "./DropdownSimple"


const containerStyles = {
    marginTop: "10px"
}

const titleStyles = { color: "#202020", fontSize: { mobile: "12px", laptop: "12px" }, fontWeight: "600", marginLeft: "0px" }
const imputStyle = { fontSize: { mobile: "14px", laptop: "14px", fontWeight: "600" } }
const inputContainerStyle = { borderRadius: "5px", border: "1px solid #DEDEDE" }
const AddAccount = () => {
    return (
        <Box sx={{ marginY: "20px", marginX: "1%" }}>
            <Typography sx={{ color: "white", fontSize: "18px", fontWeight: "600" }}>Add Account</Typography>
            <Box sx={{ background: "#F8C851", minHeight: "60vh", borderRadius: "5px", padding: "20px", marginTop: "10px", display: "flex" }}>
                <Box sx={{ flex: 1 }}>
                    <Input placeholder="John Doe" titleStyle={titleStyles} inputStyle={imputStyle} inputContainerStyle={inputContainerStyle} title={"Username"} />
                    <Input containerStyle={containerStyles} img={EyeIcon} titleStyle={titleStyles} inputStyle={imputStyle} inputContainerStyle={inputContainerStyle} title={"User Password*"} />
                    <Input containerStyle={containerStyles} img={EyeIcon} titleStyle={titleStyles} inputStyle={imputStyle} inputContainerStyle={inputContainerStyle} title={"Confirm User Password*"} />
                    <Input placeholder="John Doe" containerStyle={containerStyles} titleStyle={titleStyles} inputStyle={imputStyle} inputContainerStyle={inputContainerStyle} title={"Fullname"} />
                    <Input placeholder="Delhi" containerStyle={containerStyles} titleStyle={titleStyles} inputStyle={imputStyle} inputContainerStyle={inputContainerStyle} title={"City"} />
                    <Input placeholder="+0 123 456 7890" containerStyle={containerStyles} titleStyle={titleStyles} inputStyle={imputStyle} inputContainerStyle={inputContainerStyle} title={"Mobile Number"} />
                </Box>
                <Box sx={{ flex: 1, marginX: "20px" }}>
                    {/* <Input placeholder="John Doe" titleStyle={titleStyles} inputStyle={imputStyle} inputContainerStyle={inputContainerStyle} title={"Account Type"} /> */}
                    <DropDownSimple valued="Select Account Type..." dropStyle={{ filter: "invert(.9) sepia(1) saturate(5) hue-rotate(175deg);" }} valueStyle={{ ...imputStyle, color: "white" }} title={'Game Name'} valueContainerStyle={{ height: "45px", marginX: "0px", background: "#0B4F26", border: "1px solid #DEDEDE", borderRadius: "5px" }} containerStyle={{ width: "100%" }} titleStyle={{ marginLeft: "0px" }} data={["Super Master", "Master", "User"]} dropDownStyle={{ width: "21.4%", marginLeft: "0px", marginTop: "0px" }} dropDownTextStyle={imputStyle} />
                    <Input containerStyle={containerStyles} placeholder="1,000,000,000" titleStyle={titleStyles} inputStyle={imputStyle} inputContainerStyle={inputContainerStyle} title={"Credit Reference"} />
                    <Input containerStyle={containerStyles} placeholder="10%" titleStyle={titleStyles} inputStyle={imputStyle} inputContainerStyle={{ ...inputContainerStyle, backgroundColor: "#DEDEDE" }} title={"Upline Partnership"} />
                    <Input placeholder="12%" containerStyle={containerStyles} titleStyle={titleStyles} inputStyle={imputStyle} inputContainerStyle={inputContainerStyle} title={"My Partnership"} />
                    <Input placeholder="10%" containerStyle={containerStyles} titleStyle={titleStyles} inputStyle={imputStyle} inputContainerStyle={{ backgroundColor: "#DEDEDE", ...inputContainerStyle }} title={"Downline partnership"} />
                </Box>
                <Box sx={{ flex: 1.5 }}>
                    <Input
                        placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
                        titleStyle={titleStyles} inputStyle={imputStyle} inputProps={{ multiline: true, rows: 10 }} inputContainerStyle={{ ...inputContainerStyle, height: { laptop: "205px", mobile: "205px" } }} title={"Remark"} />
                    <Input placeholder="Donottel" containerStyle={{ ...containerStyles, width: "50%" }} titleStyle={titleStyles} inputStyle={imputStyle} inputContainerStyle={{ ...inputContainerStyle }} title={"Admin Transaction Password"} />
                    <Box sx={{ background: "#10DC61", width: "50%", display: "flex", justifyContent: "center", border: "2px solid #303030", alignItems: "center", borderRadius: "10px", height: "45px", marginTop: "35px" }}>
                        <Typography sx={{ color: "white", fontSize: "18px" }}>Create</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default AddAccount