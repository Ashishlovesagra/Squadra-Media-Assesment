const MovieModel = require('../models/movieModel');

const getMovies = async function(req, res) {
    const { language } = req.body;
    try {
        const movies = await MovieModel.fetchMovies(language);
        res.json(movies);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
};

module.exports  = {
    getMovies,
};
