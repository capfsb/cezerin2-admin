import { connect } from "react-redux"
import { withRouter } from "react-router"
import { fetchOrders, setFilter, deleteOrders, createOrder } from "../actions"
import Buttons from "./components/buttons"

const mapStateToProps = state => ({
  search: state.orders.filter.search,
  selectedCount: state.orders.selected.length,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setSearch: value => {
    dispatch(setFilter({ search: value }))
    dispatch(fetchOrders())
  },
  onDelete: () => {
    dispatch(deleteOrders())
  },
  onCreate: () => {
    dispatch(createOrder(ownProps.history))
  },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Buttons))