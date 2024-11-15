//Create Express Application
const express = require('express');
const app = express();
const port = 4000; //make localhost port 4000

app.get('/', (req, res) => {
    res.send('Hello World');
});

//Added CORS Middleware to server
const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Body-parser Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Database Server Connection String
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.n2bkl.mongodb.net/MyMovieDB');

//What data to be stored
const movieSchema = new mongoose.Schema({
    title: String,
    year: String,
    poster: String
});

//Object to represent Database
//Generate model based schema
const movieModel = new mongoose.model('myMovies', movieSchema);

app.get('/api/movies', (req, res) => {
    const movies = [
        /*{
            "Title": "Avengers: Infinity War (server)",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War (server)",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        },
        {
            "Title": "World War Z (server)",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        }*/
    ];
    res.status(201).json({ movies });
});
 
//Push movie data to database
app.post('/api/movies', async (req, res)=>{

    const { title, year, poster } = req.body;
   
    const newMovie = new movieModel({ title, year, poster });
    await newMovie.save();
   
    res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
})

//Find all document in database
app.get('/api/movies', async (req, res) => {
    const movies = await movieModel.find({});

    res.status(200).json({movies})
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
