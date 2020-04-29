import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import messages from 'lib/text'
import apps from 'src/apps'
import RaisedButton from 'material-ui/RaisedButton'
import ServiceItem from './serviceItem'
import AppItem from './appItem'
import './style.sass'

const ServicesList = (props) => {
	useEffect(() => props.fetchData(),[])

		const { services, webstoreAuthorized } = props

		let serviceItems = null
		if (services && services.data) {
			serviceItems = services.data.map((service, index) => (
				<ServiceItem key={index} service={service} />
			))
		}

		const appItems = apps.map((app, index) => (
			<AppItem key={index} app={app.Description} />
		))

		return (
			<div
				className="row row--no-gutter scroll col-full-height"
				style={{ padding: 20, alignContent: 'flex-start' }}
			>
				{appItems}
				{!webstoreAuthorized && (
					<div
						style={{
							width: '100%',
							marginTop: 30,
							color: 'rgba(0, 0, 0, 0.52)',
						}}
					>
						{messages.loadFromWebstore}
						&nbsp;&nbsp;
						<Link to="/apps/login">
							<RaisedButton label={messages.loginTitle} />
						</Link>
					</div>
				)}
				{serviceItems}
			</div>
		)
	}
}

export default ServicesList
