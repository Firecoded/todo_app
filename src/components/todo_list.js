import React, { Component } from 'react';
import TodoItem from './todo_item';


class Todo_list extends Component {
	render() {
		const listElement = this.props.list.map((item, index)=>{
			return <TodoItem key = {item._id} id = {item._id} title = {item.title}/>
		})
		
		return (
			<ul className = 'collection'>
				{listElement}
			</ul>
		);
	}
}

export default Todo_list;
