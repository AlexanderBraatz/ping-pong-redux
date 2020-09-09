import { connect } from "react-redux";
import ScoreCard from "./ScoreCard";


const mapStateToProps = (state) => {
    let {servingP1, player2, winner } = state;
    return({
        player : "2",
        serving : !servingP1,
        score : player2,
        winner : winner,
    })
};

export default connect(mapStateToProps)(ScoreCard);

