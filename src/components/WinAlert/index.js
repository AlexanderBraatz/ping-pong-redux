import { connect } from "react-redux";
import WinAlert from "./WinAlert"

const mapStatetoProps = ({winner}) => ({winner}); 
                                    /*^shorthand for:
=>{
    return({
        winner : winner,
    })
}



*/
export default connect(mapStatetoProps)(WinAlert);