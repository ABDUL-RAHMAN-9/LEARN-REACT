import React, { createContext, useState, useContext } from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) =>
{
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async (city, lat, lon) =>
    {
        setLoading(true);
        setError(null);
        try
        {
            const KEY = "a518b80dc65bee4c686afdf4dce526fe";

            const url = lat && lon
                ? `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric`
                : `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`;

            const res = await fetch(url);
            const data = await res.json();

            if (res.status !== 200) throw new Error(data.message);

            const standardized = {
                city: data.name,
                temp: Math.round(data.main.temp),
                high: Math.round(data.main.temp_max),
                low: Math.round(data.main.temp_min),
                condition: data.weather[0].description,
                iconCode: data.weather[0].icon, // to determine which SVG to show
                forecast: [
                    { day: "Next", temp: `${Math.round(data.main.temp + 2)}/${Math.round(data.main.temp - 2)}`, icon: "cloud" },
                    { day: "Day 2", temp: `${Math.round(data.main.temp + 3)}/${Math.round(data.main.temp - 1)}`, icon: "sun" },
                ]
            };

            setWeather(standardized);
        } catch (err)
        {
            setError(err.message);
        } finally
        {
            setLoading(false);
        }
      };

    return (
        <WeatherContext.Provider value={{ weather, loading, error, fetchWeather }}>
            {children}
        </WeatherContext.Provider>
    );
};

export const useWeather = () => useContext(WeatherContext);