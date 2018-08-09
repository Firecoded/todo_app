import React, { Component } from 'react';


class Todo_list extends Component {
	render() {
		const listElement = this.props.list.map((item, index)=>{
			return <li className = "collection-item" key={item._id}>{item.title}</li>;
		})
		
		return (
			<ul className = 'collection'>
				{listElement}
			</ul>
		);
	}
}

export default Todo_list;
