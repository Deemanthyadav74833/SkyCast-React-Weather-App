import {useState} from 'react';
import SearchBox from './SearchBox.jsx';
import Infobox from './info.jsx';

export default function Weather() {
    const [weatherInfo, setWeatherInfo] = useState({
        City: 'Mumbai',
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 24.84,
        tempMax: 25.05,
        humidity: 73,
        weather: 'Clouds',
    });

    let updateInfo = (result) =>{
        setWeatherInfo(result);
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Weather app by deemanth</h2>
            <SearchBox updateInfo={updateInfo}/>
            <Infobox info={weatherInfo}  />
        </div>
    );
}