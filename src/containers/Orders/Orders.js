
import { Component } from "react";
import { connect } from "react-redux";

import Order from "../../components/Order/Order";
import axios from '../../axios-order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../Store/actions/index'
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends Component {

    // state = {
    //     orders: [],
    //     loading: true
    // }

    componentDidMount() {

        this.props.onFetchOrders()
    }
    render() {
        console.log("this.props", this.props)
        let orders = <Spinner />
        if (!this.props.loading) {

            orders = this.props.orderList.map(order => (
                <Order
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price} />
            ))
        }
        return (
            <div>
                {orders}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("state++++++ props", state)
    return {
        orderList: state.order.orders,
        loading: state.order.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actions.fetchOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios))  