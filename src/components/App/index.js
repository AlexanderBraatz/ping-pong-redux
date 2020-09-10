import { connect } from "react-redux";
import App from "./App"

const mapStateToProps= ({started}) => ({ started, })

export default connect(mapStateToProps)(App);