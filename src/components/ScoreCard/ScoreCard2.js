import { connect } from "react-redux";
import ScoreCard from "./ScoreCard";
import { increment } from "../../data/actions"


const mapStateToProps = (state) => {
    let {servingP1, player2, winner } = state;
    return({
        player : "2",
        serving : !servingP1,
        score : player2,
        winner : winner,
    });
};

const mapDispatchToProps = (dispatch) => {
    return({
        handleScore : () => dispatch(increment(2))
    });
}  

export default connect(mapStateToProps,mapDispatchToProps)(ScoreCard);

