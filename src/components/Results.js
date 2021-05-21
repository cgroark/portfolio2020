import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';

class Forecast extends Component {
	render(){
		let fahrenheitMax = Math.round(this.props.max * (9/5) -459.67);
		let fahrenheitMin = Math.round(this.props.min * (9/5) -459.67);
		let image = 'http://openweathermap.org/img/w/' + this.props.icon + '.png';
		let date = this.props.dt.split('').slice(5,10).join('')
		return(
			<div className='forecast-each'>
				<h3 className='forecast-date'>{date}</h3>
				<img className='icon' src={image} alt="weather"/>
				<p className='forecast-high'>{fahrenheitMax}<sup> o </sup> F</p>
				<p className='forecast-low'>{fahrenheitMin}<sup> o </sup> F</p>
				
			</div>
		)
	}
}	
		
class Results extends Component{
	render(){
		let current = this.props.data
		const fiveDay = this.props.forecast.list.filter(item => {
    		return item.dt_txt[12] === '2' || item.dt_txt[11] === '2';
  		})
  		const forecastData = []
  		for(var i=0; i < fiveDay.length-1; i++){
  			if(fiveDay[i].dt_txt[12] === '2'){
  				forecastData.push({
  					date: fiveDay[i].dt_txt,
  					min: fiveDay[i].main.temp,
  					max: fiveDay[i+1].main.temp,
  					icon:fiveDay[i+1].weather[0].icon
  				})
  			}
  		}
  		console.log('forecastData',forecastData)
  		
  		const forecast = forecastData.map(each => {
			return <Forecast key={each.date} dt={each.date} min={each.min} max={each.max} icon={each.icon} />
		})
		let currentF = Math.round(current.main.temp * (9/5) -459.67);
		let currentCity = this.props.forecast.city.name;
		return(
			<div id="weather-results">
				<div className='current-weather'>
				<p id="city">Current weather in {currentCity}</p>
					<Row>
						<Col md={6}>
						<p id='current-temp'>{currentF}<sup>o F</sup></p>
						
						</Col>
						<Col md={6}>
						<p id='current-desc'>{current.weather[0].description}</p>
						<p id='humidity'>{current.main.humidity}% Humidity</p>
						</Col>
					</Row>
				</div>
				<h4>{currentCity} 5-Day Forecast</h4>
				<div className='forecast'>
				
					{forecast}
				</div>

			</div>
			)
	}
}

export default Results;