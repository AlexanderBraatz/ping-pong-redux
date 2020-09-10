import { connect } from "react-redux";
import ResetButton from "./ResetButton";
import { reset } from "../../data/actions"

const mapDispatchToProps = (dispatch)=> {
    return {
        resetit : () => dispatch(reset()),
    }
}
export default connect( null, mapDispatchToProps)(ResetButton);