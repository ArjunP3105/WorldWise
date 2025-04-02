# WorldWise 🌍

WorldWise is a travel-tracking app built with React and Vite, designed to help users log, organize, and visualize their travel experiences. With an interactive map and city-based tracking, WorldWise provides an intuitive way to document past trips, make notes about each location, and explore the places you've visited. 
The app offers a simple yet effective approach to personal travel logging, making it easier to reflect on past journeys and plan future adventures.

## Features 🚀

- **Homepage**: Start tracking button redirects to the login page.
- **Authentication**: Single-user login system.
- **App Section**: Displays visited cities and an interactive Leaflet map.
- **City & Country Navigation**:
  - The left side contains city and country navigation, while the right side features an interactive map powered by Leaflet.
  - The city section lists previously added cities.
  - The country section shows a unique list of countries derived from the added cities.
- **Interactive Map**:
  - Markers for visited cities.
  - Clicking a visited city on the left displays details such as city name, visit date, notes, and a Wikipedia link, while also centering the map view on that city's coordinates.
- **Adding & Deleting Cities**:
  - Clicking a location on the map opens a form with the pre-filled city name based on the selected location.
  - Uses React Date Picker for selecting the visit date.
  - Users can add notes and save the city.
  - Once added, the city appears in the visited cities list, and a new marker is placed on the map at the corresponding coordinates.
  - Users can also delete previously added cities if needed.
- **Global State Management**: Uses `createContext` to manage application state efficiently.
- **Logout**: Redirects to the homepage.

## Tech Stack 🛠️

- React (useState, useEffect, React Router, createContext)
- Vite for fast development and optimized builds
- React Date Picker for date selection
- CSS
- Leaflet for map functionality

## Installation 🏗️

1. Clone the repository:
   ```sh
   git clone https://github.com/ArjunP3105/WorldWise.git
   ```
2. Navigate to the project folder:
   ```sh
   cd worldwise
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Start the backend server:
   ```sh
   npm run server
   ```


# Let's Connect! :

LinkedIn - [Arjun P](https://www.linkedin.com/in/arjun-p-810a96318/) 

GitHub - [ArjunP3105](https://github.com/ArjunP3105)



