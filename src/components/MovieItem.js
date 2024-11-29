import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from "axios";
import Button from 'react-bootstrap/Button';


const MovieItem = (props)=> {
  useEffect(() => {
    console.log("Movie Item:", props.myMovie);
  }, [props.myMovie]); // Only run this effect when the mymovie prop changes
  
  //Handles the delete request when button is clicked
  const handleDelete = (e) => 
  {
    e.preventDefault();

    axios.delete('http://localhost:4000/api/movies/' + props.myMovie._id) //delete movie by id
    .then((res) => 
    {
      props.Reload(); //reload when deleted
    })
    .catch((error) => {
      console.error("Error deleting movie:", error); //handles error if movie couldn't be deleted
    });
  }

  return (
    <div>
      <Card>
        <Card.Header>{props.myMovie.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.myMovie.poster} alt={props.myMovie.title} />
            <footer>{props.myMovie.year}</footer>
          </blockquote>
        </Card.Body>
        <Link to={"/edit/" + props.myMovie._id} className="btn btn-primary">Edit</Link>
        <Button className = "btn btn-danger" onClick = {handleDelete}>Delete</Button> {/*Delete item using delete handler function when button clicked*/}
      </Card>
    </div>
  );
}

export default MovieItem;