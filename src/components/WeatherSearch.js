import React, {Component} from 'react';
import Results from './Results';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import thunder from '../images/thunderbolt.png';
let key = process.env.REACT_APP_API;

class WeatherSearch extends Component {
	constructor(props){
		super(props)
		this.state = {
			zip: '',
			weather: {},
			forecast: {},
			search: ''
		}
	}

	handleDelete = (e) => {
		e.preventDefault()
		this.setState({
			weather: {},
			forecast: {},
			zip: '',
		})
	}

	handleChange = (e) => {
		if(e.target.value.match("^[0-9|:]*$")!=null ){
			this.setState({
				zip: e.target.value
			})
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		let weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=' + this.state.zip + ',US&APPID=' + key;
		let forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?zip=' + this.state.zip + ',US&APPID='  + key;
		fetch(weatherUrl)
			.then(response => {
				return response.json()
			})
			.then(json => {
				this.setState({
					weather: json,
					search: 'yes'
				})
			})
		fetch(forecastUrl)
			.then(response => {
				return response.json()
			})
			.then(json => {
				this.setState({
					forecast: json
				})
			})
	}
	render() {
		const {weather, forecast, search, zip} = this.state;	
		return(
		
			<div className='weather-div'>
				<img src={thunder} alt="icon of thunder could and sun and lightning" />
				{forecast && zip.length > 0 &&
					<button id='delete' onClick={this.handleDelete}>x</button>
				}
				<form type='input'  onSubmit={this.handleSubmit}>
					
					<input 
						placeholder='Enter your zip code' 
						value={this.state.zip} 
						onChange={this.handleChange} 
						maxLength="5" 
					/>
					<button type='submit' id='mag-icon'><i className="fa fa-search" aria-hidden="true"></i></button>
			
				</form>
				
				{search && weather.cod === '404' &&
					<h3>No matching zip found</h3>
				}
				{forecast.cnt > 0 &&
				<Results data={this.state.weather} zip={this.state.zip} forecast={this.state.forecast}/>
				}
			</div>
			)
	}
}

export default WeatherSearch;