import React, { Component } from 'react';
import ListContext from './contexts/ListContext';
import CreateItem from './CreateItem';
import Item from './Item';
import './List.css';

export default class List extends Component {
	render() {
		return (
			<ListContext.Consumer>
				{({ state: { items } }) => (
					<div className="list">
						{items.map(item => 
							<Item 
								key={item.id}
								item={item}
							/>
						)}
						{!items.length && 'No items.'}
						<CreateItem />
					</div>
				)}
			</ListContext.Consumer>
		)
	}
}
