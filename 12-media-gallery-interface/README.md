# Archive Node | Media Gallery Interface

<p align="center">
  <strong>A high-fidelity cinematic repository featuring smooth linear interpolation (Lerp) and dynamic video orchestration.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React%2018-Framework-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/React--Player-Vimeo--Integration-blueviolet?style=for-the-badge" alt="React Player" />
  <img src="https://img.shields.io/badge/Parallax-Lerp--Engine-ff2ebc?style=for-the-badge" alt="Parallax" />
  <img src="https://img.shields.io/badge/UI/UX-Industrial--Minimalist-000?style=for-the-badge" alt="Design" />
</p>

## Table of Contents
- [Overview](#overview)
- [Engineering Highlights](#engineering-highlights)
- [Technical Stack](#technical-stack)
- [Local Setup](#local-setup)
- [Troubleshooting](#troubleshooting)
- [Author](#author)

## Overview
The **Media Gallery Interface** is a specialized React environment designed for immersive cinematic storytelling. Moving beyond standard static grids, this project utilizes a custom **Parallax Engine** that translates mouse telemetry into fluid, interpolated motion, creating a premium "Archive" experience.

## Engineering Highlights
- **Lerp Animation Loop:** Implements Linear Interpolation (`current + (target - current) * factor`) via `requestAnimationFrame` for high-performance, buttery-smooth movement.
- **Dynamic Ingestion:** Automated row mapping logic that filters and distributes media assets based on unique ID strings.
- **Adaptive HUD:** A fixed-position System HUD that provides contextual data overlays without interfering with the visual parallax layer.
- **Responsive Fallback:** Intelligently disables high-intensity parallax on touch devices to ensure a smooth vertical scrolling experience for mobile users.

## Technical Stack
- **Frontend:** React 18 (Hooks-based architecture)
- **Styling:** CSS3 (3D Transforms & Backdrop Filters)
- **Media Engine:** React-Player (Vimeo API Integration)
- **Typography:** Space Grotesk & JetBrains Mono

## Local Setup

Follow these steps to initialize the gallery environment:

### 1. Navigate to Directory
```bash
cd 12-media-gallery-interface
```


### 2. Synchronize Dependencies

> Crucial: This project requires the `react-player` library to render cinematic content.

```bash
npm install react-player
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Launch Development Node

```bash
npm run dev
```

Access the dashboard at `http://localhost:5173`

## Troubleshooting

If videos are not appearing or the UI remains static:

- **Dependency Sync:** Ensure you executed `npm install react-player` in the project root.
- **Network Link:** Check your internet connection (content is streamed live via the Vimeo API).
- **Parallax Engagement:** On desktop, ensure your mouse is within the viewport to engage the movement engine.

## Author

Built by **[Abdul Rahman](https://github.com/ABDUL-RAHMAN-9)**  


