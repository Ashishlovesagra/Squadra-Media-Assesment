class MovieModel {
    static async fetchMovies(language) {
      const axios = require("axios");
      try {
        const response = await axios.post("https://hoblist.com/api/movieList", {
          category: "movies",
          language: language || "kannada",
          genre: "all",
          sort: "voting",
        });
        return response.data;
      } catch (error) {
        throw new Error("Error fetching movies");
      }
    }
  }
  
  module.exports = MovieModel;
  