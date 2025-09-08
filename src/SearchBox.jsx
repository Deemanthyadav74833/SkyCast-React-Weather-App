import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchBox({ updateInfo }) {
    let [City, setCity] = useState('');
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "9dd2fbc55423f2e916c64fa6528ae252";

    let getWeather = async () => {
        let response = await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`);
        let jsonRes = await response.json();

        if (!response.ok) {
            throw new Error(jsonRes.message);
        }

        let result = {
            City: City,
            temp: jsonRes.main.temp,
            tempMin: jsonRes.main.temp_min,
            tempMax: jsonRes.main.temp_max,
            humidity: jsonRes.main.humidity,
            feelslike: jsonRes.main.feels_like,
            weather: jsonRes.weather[0].description,
        };
        console.log(result);
        return result;
    };

    let handleCity = (e) => {
        setCity(e.target.value);
    };

    let handleSubmit = async (e) => {
        e.preventDefault();
        console.log(City);
        setCity('');
        try {
            let info = await getWeather();
            updateInfo(info);
            setError(false);
        } catch (error) {
            setError(true);
            console.log(error.message);
        }
    };

    return (
        <div className="search-box" style={{ textAlign: 'center' }}>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={City} onChange={handleCity} />
                <br></br><br></br>
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error && <p style={{ color: 'red' }}>Please enter a valid city name</p>}
            </form>
        </div>
    );
}
