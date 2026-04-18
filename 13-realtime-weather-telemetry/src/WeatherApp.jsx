import { useState, useEffect } from "react";

export default function WeatherApp()
{
    const [weather, setWeather] = useState(null);
    const [clock, setClock] = useState(new Date());

    // Live clock
    useEffect(() =>
    {
        const timer = setInterval(() => setClock(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Load mock data once
    useEffect(() =>
    {
        const mockData = {
            location: {
                name: "London",
                region: "City of London, Greater London",
                country: "United Kingdom",
                lat: 51.52,
                lon: -0.11,
                tz_id: "Europe/London",
                localtime_epoch: 1613896955,
                localtime: "2021-02-21 8:42",
            },
            current: {
                last_updated_epoch: 1613896210,
                last_updated: "2021-02-21 08:30",
                temp_c: 11,
                temp_f: 51.8,
                is_day: 1,
                condition: {
                    text: "Partly cloudy",
                    icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
                    code: 1003,
                },
                wind_mph: 3.8,
                wind_kph: 6.1,
                wind_degree: 220,
                wind_dir: "SW",
                pressure_mb: 1009,
                pressure_in: 30.3,
                precip_mm: 0.1,
                precip_in: 0,
                humidity: 82,
                cloud: 75,
                feelslike_c: 9.5,
                feelslike_f: 49.2,
                vis_km: 10,
                vis_miles: 6,
                uv: 1,
                gust_mph: 10.5,
                gust_kph: 16.9,
                air_quality: {
                    co: 230.3,
                    no2: 13.5,
                    o3: 54.3,
                    so2: 7.9,
                    pm2_5: 8.6,
                    pm10: 11.3,
                    "us-epa-index": 1,
                    "gb-defra-index": 1,
                },
            },
        };

        setTimeout(() =>
        {
            setWeather(mockData);
        }, 500); // simulate network delay
    }, []);

    if (!weather) return <p>Loading weather...</p>;

    const { location, current } = weather;

    return (
        <div className="container"
            style={{ fontFamily: "Arial", padding: 20, maxWidth: 400 }}>
            <h2>Weather in {location.name}, {location.country}</h2>
            <p><strong>Mock Local Time:</strong> {location.localtime}</p>
            <p><strong>Live Device Time:</strong> {clock.toLocaleTimeString()}</p>

            <img src={`https:${current.condition.icon}`} alt="weather icon" />
            <p><strong>Condition:</strong> {current.condition.text}</p>
            <p><strong>Temperature:</strong> {current.temp_c}°C</p>
            <p><strong>Feels Like:</strong> {current.feelslike_c}°C</p>
            <p><strong>Humidity:</strong> {current.humidity}%</p>
            <p><strong>Wind:</strong> {current.wind_kph} kph ({current.wind_dir})</p>
            <p><strong>Pressure:</strong> {current.pressure_mb} mb</p>
            <p><strong>Visibility:</strong> {current.vis_km} km</p>
            <p><strong>UV Index:</strong> {current.uv}</p>

            <h4>Air Quality (Index)</h4>
            <ul>
                <li>CO: {current.air_quality.co}</li>
                <li>NO₂: {current.air_quality.no2}</li>
                <li>O₃: {current.air_quality.o3}</li>
                <li>PM2.5: {current.air_quality.pm2_5}</li>
                <li>PM10: {current.air_quality.pm10}</li>
            </ul>
        </div>
    );
}
