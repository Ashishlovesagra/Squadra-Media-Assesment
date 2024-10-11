/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import "./Style.css";
import NoPoster from '../assets/NoPoster.png';

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState("kannada");

  const fetchMovies = async (selectedLanguage) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("http://localhost:3000/api/movies", {
        language: selectedLanguage,
      });
      const fetchedMovies = response.data.result.map(movie => ({
        ...movie,
        poster: movie.poster || NoPoster,  
      }));
      setMovies(fetchedMovies);
      console.log(response.data.result);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(language);
  }, [language]);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleUpvote = (movieId) => {
    const updatedMovies = movies.map((movie) => {
      if (movie._id === movieId) {
        movie.voting += 1;
        movie.upVoted = movie.upVoted || [];
        movie.upVoted.push("user");
      }
      return movie;
    });
    setMovies(updatedMovies);
  };

  const handleDownvote = (movieId) => {
    const updatedMovies = movies.map((movie) => {
      if (movie._id === movieId) {
        movie.voting -= 1;
        movie.downVoted = movie.downVoted || [];
        movie.downVoted.push("user");
      }
      return movie;
    });
    setMovies(updatedMovies);
  };

  if (loading) {
    return <div className="loader-box"><p className="loader"></p></div> ;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container">
      <h1 className="title">
        Movies in {language.charAt(0).toUpperCase() + language.slice(1)}
      </h1>
      <div className="language-search">
        <label htmlFor="language">Select Language: </label>
        <select id="language" value={language} onChange={handleLanguageChange}>
          <option value="kannada">Kannada</option>
          <option value="hindi">Hindi</option>
          <option value="english">English</option>
          <option value="tamil">Tamil</option>
          <option value="telugu">Telugu</option>
        </select>
      </div>
      <div className="container">
        <div className="movie-container">
          {movies.map((movie, index) => (
            <div key={movie._id} className="movie-cart">
              <div className="img-box">
                <img src={movie.poster} alt={movie.title} />
              </div>
              <div className="movie-details">
                <h3>{movie.title}</h3>
                <p>Genre: {movie.genre}</p>
                <p>Language: {movie.language}</p>
                <p>Director: {movie.director.join(", ") || "N/A"}</p>
                <p>
                  Release Date:{" "}
                  {new Date(movie.releasedDate * 1000).toLocaleDateString() ||
                    "N/A"}
                </p>
              </div>
              <div className="vote-section">
                <button
                  className="like"
                  onClick={() => handleUpvote(movie._id)}
                >
                  <p>{movie.upVoted ? movie.upVoted.length : 0}</p>
                  <i className="bi bi-hand-thumbs-up" style={{ fontSize: '2rem' }}></i>  
                  
                </button>
                <button
                  className="dislike"
                  onClick={() => handleDownvote(movie._id)}
                >
                  <p>{movie.downVoted ? movie.downVoted.length : 0}</p>
                  <i className="bi bi-xxl bi-hand-thumbs-down" style={{ fontSize: '2rem' }}></i>  
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieSearch;
