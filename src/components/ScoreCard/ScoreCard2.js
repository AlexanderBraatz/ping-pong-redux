import { connect } from "react-redux";
import ScoreCard from "./ScoreCard";
import { increment } from "../../data/actions"


const mapStateToProps = ({servingP1, player2, winner, name2}) => {
 
    return({
        serving : !servingP1,
        score : player2,
        winner,
        name : name2,
    });
};

const mapDispatchToProps = (dispatch) => {
    return({
        handleScore : () => dispatch(increment(2))
    });
}  

export default connect(mapStateToProps,mapDispatchToProps)(ScoreCard);

