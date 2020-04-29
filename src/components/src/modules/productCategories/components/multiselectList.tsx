import React from 'react'
import { Link } from 'react-router-dom'
import messages from 'lib/text'
import { List, ListItem } from 'material-ui/List'
import FontIcon from 'material-ui/FontIcon'
import Checkbox from 'material-ui/Checkbox'

const styles = {
	selectedItem: {
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
	},
	innerItem: {
		paddingLeft: 55,
	},
	nestedListStyle: {
		padding: '0 0 0 15px',
	},
}

const FolderIcon = <FontIcon className="material-icons">folder</FontIcon>
const DraftIcon = <FontIcon className="material-icons">visibility_off</FontIcon>

const Item extends React.PureComponent {
	handleCheck = (event, isInputChecked) => {
		const { item } = props
		props.onCheck(item.id)
	}

	
		const { item, opened, selectedIds, nestedItems } = props
		const isChecked =
			selectedIds &&
			selectedIds.length > 0 &&
			selectedIds.includes(item.id)
		// const style = isChecked ? styles.selectedItem : null;

		return (
			<ListItem
				className="treeItem"
				initiallyOpen={opened}
				innerDivStyle={styles.innerItem}
				primaryText={item.name}
				nestedItems={nestedItems}
				leftCheckbox={
					<Checkbox checked={isChecked} onCheck={handleCheck} />
				}
				nestedListStyle={styles.nestedListStyle}
			/>
		)
	}
}

export default const Categories = () => {
	
		
	}

	getItem(selectedIds, allItems, item, opened) {
		const nestedItems = getChildren(selectedIds, allItems, item.id, opened)
		return (
			<Item
				key={item.id}
				item={item}
				opened={opened}
				selectedIds={selectedIds}
				nestedItems={nestedItems}
				onCheck={props.onCheck}
			/>
		)
	}

	getChildren(selectedIds, allItems, id, opened) {
		if (allItems && id) {
			return allItems
				.filter((item) => item.parent_id === id)
				.map((item) => getItem(selectedIds, allItems, item, opened))
		}
		return []
	}

	
		const { selectedIds, items, opened = false } = props

		const rows = items
			.filter((item) => item.parent_id === null)
			.map((item) => getItem(selectedIds, items, item, opened))

		return <List>{rows}</List>
	}
}
