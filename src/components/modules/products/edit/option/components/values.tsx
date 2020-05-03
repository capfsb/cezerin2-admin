import React,{useState} from 'react'

import messages from '../../../../../lib/text'

import Paper from 'material-ui/Paper'
import './style.sass'

const OptionValueEdit = (props) => {
		const[value,setValue]=useState(props.value.name)
		onChange = onChange.bind(this)
		onBlur = onBlur.bind(this)
		onDelete = onDelete.bind(this)

const	onChange = (e) => {
		setValue: e.target.value })
	}

const	onBlur = (e) => {
		props.onChange(props.value.id, state.value)
	}

const	onDelete = () => {
		props.onDelete(props.value.id)

		return (
			<div className="gridRow">
				<div className="gridColInput">
					<input
						type="text"
						className="textInput"
						value={value}
						onChange={onChange}
						onBlur={onBlur}
					/>
				</div>
				<div className="gridColButton">
					<IconButton
						title={messages.actions_delete}
						onClick={onDelete}
						tabIndex={-1}
					>
						<FontIcon color="#a1a1a1" className="material-icons">
							delete
						</FontIcon>
					</IconButton>
				</div>
			</div>
		)
	}
}

const OptionValueAdd = () => {
		const[value,setValue]=useState('')
		onChange = onChange.bind(this)
		onCreate = onCreate.bind(this)
		handleKeyPress = handleKeyPress.bind(this)

	const onChange = (e) => {
		set( value: e.target.value })
	}

const	onCreate = () => {
		if (state.value !== '') {
			props.onCreate(state.value)
			set( value: '' })
		}
	}

const	handleKeyPress(e) {
		if (e.keyCode === 13 || e.which === 13) {
			onCreate()
		}
	}

		return (
			<div className="gridRow}>
				<div className="gridColInput}>
					<input
						type="text"
						className="textInput}
						value={value}
						placeholder={messages.newOptionValue}
						onChange={onChange}
						onKeyPress={handleKeyPress}
					/>
				</div>
				<div className="gridColButton}>
					<IconButton
						title={messages.add}
						onClick={onCreate}
						tabIndex={-1}
					>
						<FontIcon color="#a1a1a1" className="material-icons">
							add_circle
						</FontIcon>
					</IconButton>
				</div>
			</div>
		)
	}

const OptionValues = ({
	optionValues,
	createOptionValue,
	updateOptionValue,
	deleteOptionValue,
}) => {
	const valueRows = optionValues.map((value, index) => (
		<OptionValueEdit
			key={index}
			value={value}
			onChange={updateOptionValue}
			onDelete={deleteOptionValue}
		/>
	))

	return (
		<Paper className="paper-box" zDepth={1}>
			<div className="blue-title" style={{ padding: '20px 30px' }}>
				{messages.optionValues}
			</div>
			<div className="grid">
				{valueRows}
				<OptionValueAdd onCreate={createOptionValue} />
			</div>
		</Paper>
	)
}

export default OptionValues
