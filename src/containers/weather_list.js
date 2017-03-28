import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

import { bindActionCreators } from 'redux';


class WeatherList extends Component {
    
    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = _.map(cityData.list.map(weather => weather.main.temp) , (temp) => temp-273);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        console.log(`name : ${name}`);
        // const lon = cityData.city.coord.lon;
        // const lat = cityData.city.coord.lat;
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>  
                <td> <Chart data={temps} color="blue" unit="K"/></td>  
                <td> <Chart data={pressures} color="grey" unit="hPa" /></td>  
                <td> <Chart data={humidities} color="green" unit="%" /></td>           
            </tr>
        );
    }

    render(){
        return (
            <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature (K)</th>
                            <th>Pressurety (hPa)</th>
                            <th>Humidity (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather }; // === { weather: weather };
}

export default connect (mapStateToProps)(WeatherList);