import React, { useEffect } from 'react';
import { useWeather } from './context/WeatherContext';
import './index.css';

const App = () =>
{
  const { weather, fetchWeather, loading } = useWeather();

  // --- LIFECYCLE: INITIAL DATA FETCHING ---
  useEffect(() =>
  {
    /**
     * Initializes app state. 
     * Prioritizes User Geolocation; falls back to 'Hyderabad' 
     * if permission is denied or unsupported.
     */
    if (navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchWeather(null, pos.coords.latitude, pos.coords.longitude),
        () => fetchWeather("Hyderabad")
      );
    } else
    {
      fetchWeather("Hyderabad");
    }
  }, [fetchWeather]);

  // --- UI HELPER: DYNAMIC ICON ENGINE ---
  /**
   * Maps weather condition strings to high-quality SVG vector paths.
   * This internal component ensures the UI reflects current atmospheric states.
   */
  const WeatherIcon = ({ condition = "", size = 80 }) =>
  {
    const text = condition.toLowerCase();

    // Thunderstorm Case
    if (text.includes("thunder")) return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19L15 22l-2.5-3m1-4l-1.25 1.5m3.5-1.5l-1.25 1.5M10 13l-1.25 1.5" />
        <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
        <path d="M13 11l-2 3h3l-2 3" />
      </svg>
    );

    // Rain & Drizzle Case
    if (text.includes("rain") || text.includes("drizzle")) return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
        <path d="M8 19l1 2m3-2l1 2m3-2l1 2" />
      </svg>
    );

    // Sunny & Clear Sky Case
    if (text.includes("sun") || text.includes("clear")) return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    );

    // Default Case: Clouds
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    );
  };

  // --- DATA PREPARATION: 7-DAY FORECAST LOGIC ---
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const todayIndex = new Date().getDay();

  // Rotates the 'days' array starting from the current day
  const forecastDays = Array.from({ length: 7 }, (_, i) => days[(todayIndex + i) % 7]);

  // --- RENDER: LOADING STATE ---
  if (loading)
  {
    return (
      <div className="app-overlay">
        <div className="city-name">Syncing...</div>
      </div>
    );
  }

  // --- RENDER: MAIN INTERFACE ---
  return (
    <div className="app-overlay">
      {/* Search Interface */}
      <input
        className="top-search"
        placeholder="Search Global Station..."
        onKeyDown={(e) =>
        {
          if (e.key === 'Enter') fetchWeather(e.target.value);
        }}
      />

      {weather && (
        <div className="weather-container">
          {/* Header Section */}
          <h1 className="city-name">{weather.city}</h1>

          {/* Hero Visual */}
          <WeatherIcon condition={weather.condition} size={130} />

          <div className="main-temp">{weather.temp}</div>

          {/* Detailed Stats */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', opacity: 0.6, fontWeight: 600 }}>
            <span>L: {weather.low}°</span>
            <span>H: {weather.high}°</span>
          </div>

          <p className="condition-text">{weather.condition}</p>

          <hr />

          {/* Weekly Forecast Row */}
          <div className="forecast-row">
            {forecastDays.map((day, i) => (
              <div key={i} className="forecast-item">
                <span className="day-label">{i === 0 ? "Today" : day}</span>

                {/* Visual variation for demo purposes */}
                <WeatherIcon condition={i % 3 === 0 ? "rain" : "cloud"} size={30} />

                <span className="forecast-temp">
                  {/* Calculated mock temps relative to current weather */}
                  {weather.temp + (i % 2 === 0 ? 2 : -1)}/
                  {weather.temp - (i % 2 === 0 ? 4 : 6)}
                </span>
              </div>
            ))}
          </div>
          {/* Footer */}
          <footer className="footer-credit">
            <span style={{ fontWeight: 400 }}>Developed by</span>
            <a
              href="https://github.com/ABDUL-RAHMAN-9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abdul Rahman
            </a>
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;