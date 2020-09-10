import { connect } from "react-redux";
import WinAlert from "./WinAlert"

const mapStatetoProps = ({winner, name1, name2}) => ({winner, name1, name2}); 
                                    /*^shorthand for:
=>{
    return({
        winner : winner,
    })
}



*/
export default connect(mapStatetoProps)(WinAlert);