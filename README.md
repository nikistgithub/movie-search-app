# Movie Search Application

## Overview
This is a simple React-based web application that allows users to search for movies using the [OMDb API](https://www.omdbapi.com/). The application fetches movie data from the API based on user input and displays the results in a user-friendly interface. Users can also view detailed information about a selected movie in a popup.

## Features
- **Movie Search**: Users can search for movies by typing in the search box and pressing "Enter". The results will display a list of movies that match the search query.
- **Movie Details Popup**: Clicking on a movie in the search results will open a popup with detailed information about the movie, including its title, year, rating, plot, and poster.
- **Close Popup**: Users can close the popup to return to the search results.
- **Responsive Design**: Works on desktops, tablets, and mobile devices.

## Getting Started

### Prerequisites
- **Node.js**: Ensure you have Node.js installed. You can download it from [here](https://nodejs.org/en).
- **npm**: npm is included with Node.js. You will use it to install dependencies and run the application.

### Instalation
1. **Clone the Repository**

```bash
git clone https://github.com/nikistgithub/movie-search-app.git
cd movie-search-app
```
2. **Install dependencies**

```bash
npm install
```

3. **Run the application**

```bash
npm run dev
```

This will start the development server and open the application in your default browser at `http://localhost:5173`.

## Usage
- **Search for Movies**: Type a movie name in the search box and press "Enter". The application will fetch and display movies that match the search query.
- **View Movie Details**: Click on any movie in the search results to open a popup with detailed information about the movie.
- **Close Popup**: Click the "Close" button in the popup to return to the search results.

## API Reference
This application uses the OMDb API to fetch movie data. You can get an API key by registering on their website.

- **Base URL**: `http://www.omdbapi.com/`
- **API Key**: The API key used in this project is `f3ef19f4`.
- **Endpoints**:
    - **Search movies**: `http://www.omdbapi.com/?apikey=YOUR_API_KEY&s=SEARCH_QUERY`
    - **Get movie details**: `http://www.omdbapi.com/?apikey=YOUR_API_KEY&i=IMDB_ID`


