import { connect } from "react-redux"
import { withRouter } from "react-router"
import { deletePage } from "../actions"
import Buttons from "./components/headButtons"

const mapStateToProps = state => ({
  page: state.pages.pageEdit,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: id => {
    dispatch(deletePage(id))
    ownProps.history.push("/pages")
  },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Buttons))
