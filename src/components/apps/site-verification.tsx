import React, { useEffect } from 'react'
import messages from 'lib/text'
import api from 'lib/api'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export const Description = {
	key: 'site-verification',
	name: 'Site Verification',
	coverUrl: '/assets/images/apps/site_verification.webp',
	description: `Note that verifying your site with these services is not necessary in order for your site to be indexed by search engines. To use these advanced search engine tools and verify your site with a service, paste the HTML Tag code below.
  <p>Supported verification services:</p>
  <ol>
    <li><a target="_blank" href="https://www.google.com/webmasters/tools/" rel="external noopener noreferrer">Google Search Console</a></li>
    <li><a target="_blank" href="https://www.bing.com/webmaster/" rel="external noopener noreferrer">Bing Webmaster Center</a></li>
    <li><a target="_blank" href="https://pinterest.com/website/verify/" rel="external noopener noreferrer">Pinterest Site Verification</a></li>
    <li><a target="_blank" href="https://webmaster.yandex.com/sites/" rel="external noopener noreferrer">Yandex.Webmaster</a></li>
  </ol>`,
}

const GOOGLE_EXAMPLE = '<meta name="google-site-verification" content="1234" />'
const BING_EXAMPLE = '<meta name="msvalidate.01" content="1234" />'
const PINTEREST_EXAMPLE = '<meta name="p:domain_verify" content="1234" />'
const YANDEX_EXAMPLE = '<meta name="yandex-verification" content="1234" />'

export const App = () => {
		state = {
			google: '',
			bing: '',
			pinterest: '',
			yandex: '',
		}

	handleGoogleChange = (event) => {
		set(
			google: event.target.value,
		})
	}

	handleBingChange = (event) => {
		set(
			bing: event.target.value,
		})
	}

	handlePinterestChange = (event) => {
		set(
			pinterest: event.target.value,
		})
	}

	handleYandexChange = (event) => {
		set(
			yandex: event.target.value,
		})
	}

	fetchSettings = () => {
		api.apps.settings
			.retrieve('site-verification')
			.then(({ status, json }) => {
				const appSettings = json
				if (appSettings) {
					set(
						google: appSettings.google,
						bing: appSettings.bing,
						pinterest: appSettings.pinterest,
						yandex: appSettings.yandex,
					})
				}
			})
			.catch((error) => {
				console.log(error)
			})
	}

	updateSettings = () => {
		const { google, bing, pinterest, yandex } = state
		const metaTags = [google, bing, pinterest, yandex]
			.map((tag) => (tag && tag.length > 0 ? tag : null))
			.filter((tag) => tag !== null)
			.join('\n')

		api.apps.settings.update('site-verification', {
			google,
			bing,
			pinterest,
			yandex,
		})

		api.theme.placeholders.update('site-verification', {
			place: 'head_start',
			value: metaTags,
		})
	}

	useEffect(() => (fetchSettings(),[])

		return (
			<>
				<TextField
					type="text"
					value={state.google}
					onChange={handleGoogleChange}
					floatingLabelText="Google"
					fullWidth
					hintText={GOOGLE_EXAMPLE}
				/>

				<TextField
					type="text"
					value={state.bing}
					onChange={handleBingChange}
					floatingLabelText="Bing"
					fullWidth
					hintText={BING_EXAMPLE}
				/>

				<TextField
					type="text"
					value={state.pinterest}
					onChange={handlePinterestChange}
					floatingLabelText="Pinterest"
					fullWidth
					hintText={PINTEREST_EXAMPLE}
				/>

				<TextField
					type="text"
					value={state.yandex}
					onChange={handleYandexChange}
					floatingLabelText="Yandex"
					fullWidth
					hintText={YANDEX_EXAMPLE}
				/>

				<div style={{ textAlign: 'right', marginTop: 20 }}>
					<RaisedButton
						label={messages.save}
						primary
						disabled={false}
						onClick={updateSettings}
					/>
				</div>
			</>
		)
	}
