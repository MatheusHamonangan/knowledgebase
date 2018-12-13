import React from "react";
import axios from "axios";

const APIKey = 'AIzaSyBRfoK7iLGt4P2JonP_dVNk3nDUO3PNlCM';

class Places extends React.Component {    
    constructor(props){
			super(props)
			this.state = {
					temp: [],
					weather: []
			}
    }

    componentDidMount(){
    axios.get('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Brisbane&inputtype=textquery&fields=id,photos,formatted_address,name,rating,opening_hours,geometry&key=' + APIKey)
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

export default Places;