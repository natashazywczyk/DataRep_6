import { useEffect } from 'react';

const MovieItem = (props) => {

    useEffect(
        ()=>{

        }, []
    );

    return(
        <div>
            <h3>{props.myMovie.Title}</h3>
            <p>{props.myMovie.Year}</p>
            <img src={props.myMovie.Poster}></img>
        </div>
    );  
}

export default MovieItem;