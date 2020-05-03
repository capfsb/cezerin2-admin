import React from 'react'
import { Link } from 'react-router-dom'
import messages from 'lib/text'
import CategorySelect from 'modules/productCategories/select'
import DeleteConfirmation from 'modules/shared/deleteConfirmation'
import FontIcon from 'material-ui/FontIcon'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import Search from './search'
const { Fragment } = React

export default const Buttons = () => {
	
		
		state = {
			categoryIdMoveTo: null,
			openMoveTo: false,
			openDelete: false,
		}
	}

	showMoveTo = () => {
		set( openMoveTo: true })
	}

	openDelete = () => {
		set( openDelete: true })
	}

	closeDelete = () => {
		set( openDelete: false })
	}

	deleteProduct = () => {
		set( openDelete: false })
		props.onDelete()
	}

	closeMoveTo = () => {
		set( openMoveTo: false })
	}

	saveMoveTo = () => {
		set( openMoveTo: false })
		props.onMoveTo(state.categoryIdMoveTo)
	}

	selectMoveTo = (categoryId) => {
		set( categoryIdMoveTo: categoryId })
	}

	
		const {
			search,
			setSearch,
			selectedCount,
			onDelete,
			onCreate,
			onImportProducts,
		} = props

		const actionsMoveTo = [
			<FlatButton
				label={messages.cancel}
				onClick={closeMoveTo}
				style={{ marginRight: 10 }}
			/>,
			<FlatButton
				label={messages.actions_moveHere}
				primary
				keyboardFocused
				onClick={saveMoveTo}
			/>,
		]

		return (
			<Fragment>
				<Search value={search} setSearch={setSearch} />
				{selectedCount > 0 && (
					<Fragment>
						<IconButton
							touch
							tooltipPosition="bottom-left"
							tooltip={messages.actions_delete}
							onClick={openDelete}
						>
							<FontIcon color="#fff" className="material-icons">
								delete
							</FontIcon>
						</IconButton>
						<IconButton
							touch
							tooltipPosition="bottom-left"
							tooltip={messages.actions_moveTo}
							onClick={showMoveTo}
						>
							<FontIcon color="#fff" className="material-icons">
								folder
							</FontIcon>
						</IconButton>
						<DeleteConfirmation
							open={state.openDelete}
							isSingle={false}
							itemsCount={selectedCount}
							onCancel={closeDelete}
							onDelete={deleteProduct}
						/>
						<Dialog
							title={messages.actions_moveTo}
							actions={actionsMoveTo}
							modal={false}
							open={state.openMoveTo}
							onRequestClose={closeMoveTo}
							autoScrollBodyContent
						>
							<CategorySelect
								onSelect={selectMoveTo}
								selectedId={state.categoryIdMoveTo}
								opened
							/>
						</Dialog>
					</Fragment>
				)}
				<IconButton
					touch
					tooltipPosition="bottom-left"
					tooltip={messages.addProduct}
					onClick={onCreate}
				>
					<FontIcon color="#fff" className="material-icons">
						add
					</FontIcon>
				</IconButton>
			</Fragment>
		)
	}
}
