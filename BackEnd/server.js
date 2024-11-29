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


//Find all document in database
app.get('/api/movies', async (req, res) => {
    const movies = await movieModel.find({});

    res.status(200).json({movies})
});

//Push movie data to database
app.post('/api/movies', async (req, res)=>{

    const { title, year, poster } = req.body;
   
    const newMovie = new movieModel({ title, year, poster });
    await newMovie.save(); //wait until last process is finished
   
    res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
})

//Search for a particular movie ID
app.get('/api/movies/:id', async(req, res) =>
{
    const movie = await movieModel.findById(req.params.id); // Searches for id given by user
    res.json(movie);
})

//Find movie from id and update it, creating a new, updated movie is displayed
app.put('/api/movies/:id', async (req, res) => {
    let movie = await movieModel.findByIdAndUpdate(req.params.id, req.body, {new:true})

    //Send edited movie
    res.send(movie);
})

//Handles the movie deletion, server side
app.delete('/api/movies/:id', async (req, res) =>
{
    console.log('Deleting movie, ID: ', req.params.id);
    const movie = await movieModel.findByIdAndDelete(req.params.id); //wait until the id of movie is ofund
    res.status(200).send({ message: "Movie successfully deleted", movie});
});

//Only run on specified port when running
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
