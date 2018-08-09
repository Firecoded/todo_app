import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import Todo_list from './todo_list';
import AddItem from "./add_item";
import listData from '../data/todo';



class App extends Component {
	constructor(props){
		super(props)

		this.state = {
			items: []
		};
	}

	componentDidMount() {
		this.getListData();
	}
	
	addItem = (item) => {
		item._id = new Date().getTime();
		this.setState({
			items: [item, ...this.state.items]
		})
	}

	getListData(){
		//this is where would make the server call

		this.setState({
			items: listData
		});

	}
	render(){
		console.log(this.state)
		return (
		    <div className= "container">
		        <h1 className="center">To Do List</h1>
		        <AddItem add={this.addItem}/>
		        <Todo_list list = {this.state.items}/>
		    </div>
		);
	}
}		

export default App;
