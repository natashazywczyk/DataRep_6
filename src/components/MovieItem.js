import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from "axios";
import Button from 'react-bootstrap/Button';


const MovieItem = (props)=> {
  useEffect(() => {
    console.log("Movie Item:", props.mymovie);
  }, [props.mymovie]); // Only run this effect when the mymovie prop changes

  const handleDelete = (e) => 
  {
    e.preventDefault();

    axios.delete('http://localhost:4000/api/movies/' + props.myMovie._id)
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
        <Button className = "btn btn-danger" onClick = {handleDelete}>Delete</Button>
      </Card>
    </div>
  );
}

export default MovieItem;