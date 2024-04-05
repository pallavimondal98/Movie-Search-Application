# Movie Search App

This is a movie search application built with React. It allows users to search for movies, view detailed information about each movie, and browse a collection of English movies using a swiper carousel.

## Folder Structure

```
📁 movie-search-app
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── 📁 public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
│   └── _redirects
├── README.md
├── 📁 src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── 📁 components
│   │   ├── 📁 allMovies
│   │   │   └── Allmovies.jsx
│   │   ├── 📁 banner
│   │   │   └── Banner.jsx
│   │   ├── 📁 cardModel
│   │   │   └── CardModel.jsx
│   │   ├── 📁 footer
│   │   │   └── Footer.js
│   │   ├── 📁 Header
│   │   │   └── Header.jsx
│   │   ├── 📁 movieDetails
│   │   │   └── MovieDetails.jsx
│   │   └── 📁 swiper
│   │       └── SwiperCard.js
│   ├── 📁 img
│   │   ├── netflip.png
│   │   └── netflip2.png
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── 📁 pages
│   │   ├── HomePage.jsx
│   │   ├── LandingPage.jsx
│   │   └── Movies.jsx
│   ├── reportWebVitals.js
│   └── setupTests.js
└── tailwind.config.js
```

## Instructions

### Clone the Repository

```bash
git clone <repository_url>
cd movie-search-app
```

### Install Node Modules

```bash
npm install
```

### Run the Project

```bash
npm start
```

## Fetching Data from API and Destructuring

Data is fetched from the OMDB API using the Axios library. The `fetchAllMovies` function in the `Allmovies.jsx` component fetches data for all movies, while the `fetchMovieDetailedData` function in the `MovieDetails.jsx` component fetches detailed data for a specific movie. The fetched data is then destructured and used to populate the UI components.

## Tech Stack Used

- React
- React Router DOM
- Axios
- Material-UI
- Swiper
- Tailwind CSS

## Learnings from this Project

- Building a responsive UI with React components
- Fetching and displaying data from an API
- Routing and navigation using React Router DOM
- Working with third-party libraries like Swiper and Material-UI
- Using Tailwind CSS for styling and layout
