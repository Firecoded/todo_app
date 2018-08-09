import React, { Component } from 'react';
import dummyData from '../data/todo';

class Todo_list extends Component {
	render() {
		const listElement = dummyData.map((item, index)=>{
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
