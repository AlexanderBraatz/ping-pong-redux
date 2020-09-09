import { connect } from "react-redux";
import HistoryList from "./HistoryList"

const mapStatetoProps = ({history}) => {
    return{
        history : history,
    }
}


export default connect(mapStatetoProps)(HistoryList)