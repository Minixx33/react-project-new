import React, {useState, useEffect, FormEvent} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";

interface WeatherData {
    main: {
        temp: number;
        humidity: number;
        feels_like: number;
        temp_max: number;
        temp_min: number;
    };
    weather: Array<{
        description: string;
        icon: string;
    }>;
    name: string;
}


//simple weather app that uses openweathermap api
const WeatherApp : React.FC = () => {
    
    const apiKey = '7f5e3331c1acf222c290baed9c49eb39';

    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [city, setCity] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [unit, setUnit] = useState<string>('metric');

    const fetchWeather = async () => {
        try {
            const response = await axios.get<WeatherData>(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
              );
            setWeather(response.data);
            setError('');
        }
        catch (error) {
            setError('City not found');
            setWeather(null);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetchWeather();
    }     

    const toFahrenheit = (celsius: number) => {
        return (celsius * 9/5) + 32;
    };

    return (
        <section className="container py-5">
            <h1 className="text-center py-3">Weather App</h1>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-8 col-lg-6 col-xl-4">
                    <h3 className="mb-4 fw-normal">Check the weather forecast</h3>

                    <form onSubmit={handleSubmit}>
                        <div className="input-group rounded mb-3">
                            <input
                                type="search"
                                className="form-control rounded"
                                placeholder="City"
                                aria-label="Search"
                                aria-describedby="search-addon"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                            <button type="submit" className="input-group-text border-0 fw-bold" id="search-addon">
                                Check!
                            </button>
                        </div>
                    </form>

                    <div className="mb-4 pb-2">
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value="metric"
                                checked={unit === 'metric'}
                                onChange={() => setUnit('metric')}
                            />
                            <label className="form-check-label" htmlFor="inlineRadio1">Celsius</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio2"
                                value="imperial"
                                checked={unit === 'imperial'}
                                onChange={() => setUnit('imperial')}
                            />
                            <label className="form-check-label" htmlFor="inlineRadio2">Fahrenheit</label>
                        </div>
                    </div>

                    {weather && (
                        <div className="card shadow-0 border">
                            <div className="card-body p-4">
                                <h4 className="mb-1 fw-normal">{weather.name}</h4>
                                <p className="mb-2">Current temperature: <strong>{unit === 'metric' ? weather.main.temp : toFahrenheit(weather.main.temp).toFixed(2)}°{unit === 'metric' ? 'C' : 'F'}</strong></p>
                                <p>Feels like: <strong>{unit === 'metric' ? weather.main.feels_like : toFahrenheit(weather.main.feels_like).toFixed(2)}°{unit === 'metric' ? 'C' : 'F'}</strong></p>
                                <p>Max: <strong>{unit === 'metric' ? weather.main.temp_max : toFahrenheit(weather.main.temp_max).toFixed(2)}°{unit === 'metric' ? 'C' : 'F'}</strong>, Min: <strong>{unit === 'metric' ? weather.main.temp_min : toFahrenheit(weather.main.temp_min).toFixed(2)}°{unit === 'metric' ? 'C' : 'F'}</strong></p>

                                <div className="d-flex flex-row align-items-center">
                                    <p className="mb-0 me-4">{weather.weather[0].description}</p>
                                    <img
                                        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                                        alt={weather.weather[0].description}
                                        style={{ width: '50px', height: '50px' }}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {error && <p className="text-danger">{error}</p>}
                </div>
            </div>
            <footer>
                <p className="text-center py-3">Return to <Link to="/">Homepage</Link></p>
            </footer>
        </section>
    );
}

export default WeatherApp;

// styling based on weather app in https://mdbootstrap.com/docs/standard/extended/weather/