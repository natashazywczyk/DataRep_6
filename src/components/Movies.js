import MovieItem from './MovieItem';

const Movies = (props) =>{
    return props.myMovies.map(
        (movie)=>{
            return <MovieItem myMovie={movie} key={movie._id}/>
        }
    );
}

export default Movies;