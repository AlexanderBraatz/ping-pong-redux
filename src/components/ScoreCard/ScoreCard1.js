import { connect } from "react-redux";
import ScoreCard from "./ScoreCard";
import { increment } from "../../data/actions"




const mapStateToProps = (state) => {
    let {servingP1,player1, winner, name1} = state;
    return({
        serving : servingP1,
        score : player1,
        winner,
        name : name1,
    });
};



const mapDispatchToProps = (dispatch) => {
    return({
        handleScore : () => dispatch(increment(1)),
    });
}


export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard)
//^connect also subscribes ScoreCard to the store, so its re rendered with every state change !!





/* 
1. expoert default
2. call connect with mapStateToProps
    -joins our component with the store
    -subscribes to the store under the hood and re-renderd our component if the relevent state changes in store.
3. call  the returned funcction with my reauable ScoreCard component

- this wraps ScoreCard in another component, that commponent is given acces to the store
- alowing use of state in ScoreCard without ting it to using redux itself

the component structure

-App
^-ConnectFunction
^--React.Redux.Provider
^---ScoreCard

*/