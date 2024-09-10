# Contact Management and COVID-19 Dashboard App

This app combines a contact management system with a COVID-19 dashboard that displays charts and maps. Built with **React**, **Redux Toolkit**, **TypeScript**, **Vite**, and **React Query**, it features contact management along with visualizations of COVID-19 data using a map and line chart.

## Features

### Contact Management
- Add new contacts.
- Edit existing contacts.
- Delete contacts.
- View all contacts.

### COVID-19 Dashboard
- Line graph showing case fluctuations over time.
- Map with markers showing country-specific COVID-19 data such as active cases, recovered cases, and deaths.

## Tech Stack
- **Frontend:** React, Redux, TypeScript, Vite
- **Styling:** TailwindCSS
- **State Management:** Redux Toolkit
- **API Management:** React Query
- **Charts:** Chart.js
- **Maps:** React Leaflet

## Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher) or **yarn** (v1.22 or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-repo/contact-management-covid-dashboard.git
   cd contact-management-covid-dashboard
   ```

2. **Install dependencies:**
   Using npm:
   ```bash
   npm install
   ```
   Using yarn:
   ```bash
   yarn install
   ```

3. **Start the development server:**
   Using npm:
   ```bash
   npm run dev
   ```
   Using yarn:
   ```bash
   yarn dev
   ```

4. **Build for production:**
   Using npm:
   ```bash
   npm run build
   ```
   Using yarn:
   ```bash
   yarn build
   ```

5. **Run the production build:**
   ```bash
   npm run preview
   ```

### COVID-19 Data API

This app uses the [Disease.sh COVID-19 API](https://disease.sh/) for fetching worldwide and country-specific COVID-19 data.

- **Worldwide data of cases:**
  ```bash
  https://disease.sh/v3/covid-19/all
  ```

- **Country-specific data of cases:**
  ```bash
  https://disease.sh/v3/covid-19/countries
  ```

- **Graph data for cases with dates:**
  ```bash
  https://disease.sh/v3/covid-19/historical/all?lastdays=all
  ```

### Map and Chart Details

- **Map:** The app uses **React Leaflet** to display markers on the world map. Each marker shows the total number of active, recovered cases, and deaths in the selected country.
- **Line Graph:** The app uses **Chart.js** to render a line graph showing the daily fluctuations in COVID-19 cases globally over time.

## How to Contribute
1. Fork the repository.
2. Create a new feature branch.
3. Make your changes and commit them.
4. Push the branch and create a Pull Request.

---

This README should provide all necessary instructions to run and understand the app.