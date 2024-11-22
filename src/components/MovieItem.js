import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const MovieItem = (props)=> {
  useEffect(() => {
    console.log("Movie Item:", props.mymovie);
  }, [props.mymovie]); // Only run this effect when the mymovie prop changes

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
      </Card>
    </div>
  );
}

export default MovieItem;