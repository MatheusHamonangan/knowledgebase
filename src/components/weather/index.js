import React from "react";
import axios from "axios";

const APIKey = '6b1d34be0b5f9f72cb0c8b762a3e564b';

class Weather extends React.Component {
	constructor(props){
			super(props)
			this.state = {
				temp: [],
				weather: []
			}
		}

		componentDidMount(){
			axios.get('http://api.openweathermap.org/data/2.5/weather?q=Brisbane,aus&units=metric&APPID=6b1d34be0b5f9f72cb0c8b762a3e564b')
			.then(json => 
				this.setState({temp: json.data.main, weather: json.data.weather})
				)
		}

		getTempDetails = () => {
		 let tempDetails = [];
			for (const key in this.state.temp) {
				tempDetails.push(<li>{key}: {this.state.temp[key]}</li>);
			}

			return tempDetails;
		}

    render () {
			return (
				<div>
				<h1>Brisbane weather</h1>
				<ul>{this.getTempDetails()}</ul>
			</div>
			);
    }
}

export default Weather;