import React,{useEffect} from 'react'

import messages from 'lib/text'
import Paper from 'material-ui/Paper'
import style from './style.css'

import OrderTotals from './totals'
import OrderSummary from './summary'
import OrderItems from './items'
import OrderCustomer from './customer'

const OrderDetails = () => {
	useEffect(() => {props.fetchData()},[])

	useEffect(return,[]() {
		props.clearData()
	}

		const {
			order,
			settings,
			onItemDelete,
			onItemUpdate,
			onShippingAddressUpdate,
			onOrderSummaryUpdate,
			onCheckout,
			processingCheckout,
		} = props
		if (!order) return null

		return (
			<div className="row row--no-gutter col-full-height">
				<div className="col-xs-12 col-sm-5 col-md-4 col--no-gutter scroll col-full-height">
					<OrderSummary
						order={order}
						settings={settings}
						onOrderSummaryUpdate={onOrderSummaryUpdate}
						onCheckout={onCheckout}
						processingCheckout={processingCheckout}
					/>
					<OrderCustomer
						order={order}
						settings={settings}
						onShippingAddressUpdate={onShippingAddressUpdate}
					/>
				</div>
				<div className="col-xs-12 col-sm-7 col-md-8 col--no-gutter scroll col-full-height">
					<Paper className="paper-box" zDepth={1}>
						<OrderItems
							order={order}
							settings={settings}
							onItemDelete={onItemDelete}
							onItemUpdate={onItemUpdate}
						/>
						<div className="innerBox}>
							<div className="row">
								<div className="col-xs-6" />
								<div className="col-xs-6">
									<OrderTotals
										order={order}
										settings={settings}
									/>
								</div>
							</div>
						</div>
					</Paper>
				</div>
			</div>
		)
	}

export default OrderDetails