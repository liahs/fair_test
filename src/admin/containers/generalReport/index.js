import { Box } from "@mui/material"
import { Background } from "../../components";
import GeneralReportList from "../../components/GeneralReportList";
import YellowHeaderGeneralReport from "../../components/YellowHeaderGeneralReport";

const GeneralReport = () => {

    return (
        <Background>
            <YellowHeaderGeneralReport />
            <GeneralReportList />
        </Background>
    )
}
export default GeneralReport;