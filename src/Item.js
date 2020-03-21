import React, { Component } from 'react';
import ListContext from './contexts/ListContext';
import './Item.css';

export default class Item extends Component {
	render() {
		const { id, title, completed } = this.props.item;
		return (
			<ListContext.Consumer>
				{({ onSetComplete, onDelete }) => {
					return (
						<div className={`item ${completed?'completed':''}`}>
							<span className="status">
								<input type="checkbox" checked={completed} onChange={event => onSetComplete(id, event.target.checked)}></input>
							</span>
							<span className="title">
								{title}
							</span>
							<span className="buttons">
								<button className="delete" onClick={() => onDelete(id)}>X</button>
							</span>
						</div>
					)
				}}
			</ListContext.Consumer>
			
		);
	}
}