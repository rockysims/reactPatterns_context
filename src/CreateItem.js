import React, { Component } from 'react'
import ListContext from './contexts/ListContext';

export default class CreateItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newItem: this.buildNewItem('')
		};
	}

	buildNewItem(title) {
		return {
			userId: 1,
			title: title,
			completed: false
		};
	}

	render() {
		return (
			<ListContext.Consumer>
				{({ onCreate }) => {
					const onClickCreate = () => {
						onCreate(this.state.newItem);
						this.setState({
							newItem: this.buildNewItem(this.state.newItem.title)
						});
					};

					const onTitleChange = (event) => {
						this.setState({
							newItem: {...this.state.newItem, title: event.target.value}
						});
					};

					return (
						<div className="item">
							<span className="title">
								<input type="text" onChange={onTitleChange}></input>
							</span>
							<span className="buttons">
								<button className="create" onClick={onClickCreate}>+</button>
							</span>
						</div>
					)
				}}
			</ListContext.Consumer>
		)
	}
}