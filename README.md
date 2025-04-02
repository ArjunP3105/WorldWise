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

## Explore the Feature 🗺

**Homepage**
![1](https://github.com/user-attachments/assets/27986cfc-f650-4d80-a877-fab29af711a9)

**Logout**
![2](https://github.com/user-attachments/assets/eeb56355-3174-4a01-899c-79c242e8c11b)

**App/Cities**
![3](https://github.com/user-attachments/assets/40cfc759-b737-4825-8af5-5468d52abed1)

**App/Countries**
![5](https://github.com/user-attachments/assets/7aa6226b-1054-4d48-bf39-3c2c1f999584)

**Visited Cities**
![4](https://github.com/user-attachments/assets/b2f89bd6-879b-4e26-a853-cca027efb0c1)

**Add City**
![6](https://github.com/user-attachments/assets/e0f2c033-4369-45ec-aa26-4333071ae707)

**About Page**
![1 1](https://github.com/user-attachments/assets/e6f7578d-9c03-4ea6-8115-1c4a58dbd6bb)

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



