import React from 'react'
import messages from 'lib/text'
import api from 'lib/api'
import moment from 'moment'
import BarChart from './barChart'
import * as utils from './utils'

export default const OrdersBar = () => {
	
		
		state = {
			ordersData: null,
			salesData: null,
		}
	}

	useEffect(,[]() {
		fetchData()
	}

	fetchData = () => {
		const filter = {
			draft: false,
			cancelled: false,
			date_placed_min: moment()
				.subtract(1, 'months')
				.hour(0)
				.minute(0)
				.second(0)
				.toISOString(),
		}

		api.orders
			.list(filter)
			.then(({ status, json }) => {
				const reportData = utils.getReportDataFromOrders(json)
				const ordersData = utils.getOrdersDataFromReportData(reportData)
				const salesData = utils.getSalesDataFromReportData(reportData)
				set( ordersData, salesData })
			})
			.catch((error) => {
				console.log(error)
			})
	}

	
		const { ordersData, salesData } = state
		return (
			<div>
				<BarChart
					data={ordersData}
					legendDisplay
					title={messages.drawer_orders}
				/>
				<BarChart
					data={salesData}
					legendDisplay={false}
					title={messages.salesReport}
				/>
			</div>
		)
	}
}
