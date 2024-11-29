import Movies from './Movies';
import { useEffect, useState } from "react";
import axios from "axios";

//Displays when localhost:3000/read is clicked on navigation bar
const Read = () => {

  const [movies, setMovies] = useState([]);

  //Reload function that allows page to instantly refresh when movie deleted
  const reloadData = () => 
  {
    axios.get('http://localhost:4000/api/movies') //get api server
    .then((response) => {
      console.log(response.data);
      setMovies(response.data.movies); //display movie items
    })
    .catch((error) => {
      console.log(error); //handle error displaying movies
    })
  }

  //Reload when used
  useEffect(() => {
      reloadData();
    },[]);

    //Adds h3 size text
    return(
        <div>
            <h3>Hello from the Read component</h3>

            <Movies myMovies={movies} ReloadData = {reloadData} /> {/*reload page when item deleted */}
        </div>
    );
  }

  export default Read;

  


    //Read in a list of movies in json data and place in an array
    /*const movieList = [
            {
              "Title": "Avengers: Infinity War",
              "Year": "2018",
              "imdbID": "tt4154756",
              "Type": "movie",
              "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
              "Title": "Captain America: Civil War",
              "Year": "2016",
              "imdbID": "tt3498820",
              "Type": "movie",
              "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            },
            {
              "Title": "World War Z",
              "Year": "2013",
              "imdbID": "tt0816711",
              "Type": "movie",
              "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
            }     
    ];*/
