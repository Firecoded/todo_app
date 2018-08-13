import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import Todo_list from './todo_list';
import AddItem from "./add_item";
import axios from 'axios';
import {Route} from 'react-router-dom';
import Home from './home'


const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=c618_fire	';


class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			items: []
		};
	}

	componentDidMount() {
		this.getListData();
	}
	
	async addItem (item) {
		try {
			if(!item.title){
				throw new Error('Missing Title'); //throw is like return, stops when hit
			}
			await axios.post(`${BASE_URL}/todos${API_KEY}`, item);
		} catch(err){
			console.log(err)
		}
		this.getListData();
	}

	async getListData() {
		const resp = await axios.get(`${BASE_URL}/todos${API_KEY}`);
		this.setState({
			items: resp.data.todos
		});
	}

	render(){
		return (
		    <div className= "container">
		        <Route 
		        exact 
		        path = "/" 
		        render = {props => <Home list ={this.state.items} add ={this.addItem.bind(this)}{...props}/>} 
		        />
		    </div>
		);
	}
}		

// getListData(){
	// 	axios.get(`${BASE_URL}/todos${API_KEY}`).then(resp => {
			
	// 		this.setState({
	// 			items: resp.data.todos
	// 		});

	// 	}).catch(err => {
	// 		console.log("error", err.message)
	// 	});
export default App;
