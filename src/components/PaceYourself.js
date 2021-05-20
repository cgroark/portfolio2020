import React, {Component} from 'react';
import run from '../images/run.png';
import Runform from './runform'


class PaceYourself extends Component {
	constructor(props){
		super(props)
		this.state = {
			
		}
	}

	render() {
		
		return(
			<div id="paceyourself">
				<img src={run} alt="logo" />
				<h1>Pace Yourself.</h1>
				<Runform />
			</div>
			)
	}
}

export default PaceYourself;