# Real-time Weather Telemetry

<p align="center">
  <strong>A live connection to the sky. This terminal bridges the gap between raw satellite telemetry and human-readable design, using real-time coordinates to show exactly what is happening outside your window.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React%2018-Logic-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/OpenWeather-Live_Feed-orange?style=for-the-badge&logo=openweathermap&logoColor=white" alt="API" />
  <img src="https://img.shields.io/badge/Logic-Geolocation_Aware-success?style=for-the-badge" alt="Logic" />
  <img src="https://img.shields.io/badge/Data-Real_Time-blue?style=for-the-badge" alt="Data" />
</p>

## Table of Contents

- [The Core Purpose](#the-core-purpose)
- [How the Data Flows](#how-the-data-flows)
- [Key Logic Features](#key-logic-features)
- [Technical Stack](#technical-stack)
- [Local Setup](#local-setup)
- [Architecture & Fallbacks](#architecture--fallbacks)
- [Author](#author)

## The Core Purpose

Most weather apps are static templates. This project was built to be a **Live Telemetry Node**. The goal was to implement a professional-grade data pipeline that skips the manual search bar. By using the browser's native Geolocation API, the app identifies where you are standing and immediately opens an asynchronous handshake with the OpenWeatherMap servers to return the exact atmospheric state of your location.

## How the Data Flows

The application follows a strict **"Fetch-Normalize-Render"** cycle:

1.  **Detection:** Upon mounting, the app requests high-accuracy coordinates from the user's device.
2.  **Handshake:** Those coordinates are passed into a secure asynchronous request to the OpenWeather global API.
3.  **Normalization:** The raw, messy JSON response is intercepted and mapped into a clean, standardized data object.
4.  **Hydration:** The UI updates instantly, turning technical numbers into a fluid, visual experience.

## Key Logic Features

- **Zero-Action Sync:** The moment you open the app, the data begins syncing. No typing is required to see your local weather.
- **Smart Context Management:** Uses the **React Context API** to act as a single "Source of Truth" for the weather data, ensuring every component stays perfectly in sync without data leaks.
- **Real-Time Clock Synchronization:** A custom hook maintains a high-precision digital clock, providing the necessary temporal context for the weather readings.
- **Dynamic Iconography:** Instead of generic images, the app uses logic-based SVG paths that mutate their shape and color based on the weather description string returned by the API.

## Technical Stack

- **Framework:** React 18 (Functional Architecture)
- **State Management:** Context API & Custom Hooks (`useWeather`)
- **Telemetry Provider:** OpenWeatherMap API
- **Styling:** CSS3 Variables & Backdrop-Blur Modules
- **Graphics:** Optimized Inline SVG paths

## Local Setup

Follow these steps to initialize the telemetry environment:

### 1. Navigate to Module

```bash
cd 13-realtime-weather-telemetry
```

### 2. Install Infrastructure

```bash
npm install
```

### 3. Launch Deployment

```bash
npm run dev
```

Access the dashboard at `http://localhost:5173`

## Architecture & Fallbacks

The interface is engineered for **Reliability and Immediate Value**:

- **Privacy-First Fallback:** If a user prefers not to share their coordinates, the system respects that choice. Instead of showing an error, it gracefully transitions to a pre-configured "Hyderabad" station to ensure the visual experience remains intact.

- **Instant Engagement:** The application is designed with a "Zero-Action" philosophy. From the moment the node is initialized, it begins an automated synchronization sequence so the user can see the system's full telemetry capabilities without needing to type a single character.

## Author

Built by **[Abdul Rahman](https://github.com/ABDUL-RAHMAN-9)**
