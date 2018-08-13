import React from 'react';
import {Link} from 'react-router-dom';
import './404.css'

export default () => {
	return (
		<div className ="not-found">
			<div className = 'not-found-cont'>	
				<h1 className = 'center'>404 - Wrong Neighborhood</h1>
				<h5 className = 'center'>
					<Link to ='/'>Return to Home</Link>
				</h5>
			</div>		
		</div>	
	)
}