import { connect } from "react-redux";
import HistoryList from "./HistoryList"

const mapStatetoProps = ({history, name1, name2}) => {
    return{
        history : history,
        name1,
        name2,
    }
}


export default connect(mapStatetoProps)(HistoryList)