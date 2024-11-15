import { useEffect } from 'react';
import Card from 'react-bootstrap/Card'


const MovieItem = (props) => {

    useEffect(
        ()=>{
            console.log("Movie Item", props.myMovie);
        }, [props.myMovie]
    );

    return(
        <div>
            <Card>
                <Card.header>{props.myMovie.title}</Card.header>
                <Card.Body>
                    <blockquote className = "blockquote mb-0">
                        <img src={props.myMovie.Poster} alt={props.myMovie.title}/>
                        <footer>{props.myMovie.Year}</footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );  
}

export default MovieItem;