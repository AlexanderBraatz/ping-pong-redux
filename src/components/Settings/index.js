import { connect } from "react-redux";
import Settings from "./Settings";
import {startWith} from "../../data/actions"

const mapStateToProps = ({name1, name2, winScore, alternation}) => ({name1, name2, winScore, alternation});

const mapDispatchToProps = (dispatch) =>{
    return{
        onStartGame: (name1L, name2L, winScoreL, alternationL) => dispatch(startWith(name1L, name2L, winScoreL, alternationL)),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Settings);