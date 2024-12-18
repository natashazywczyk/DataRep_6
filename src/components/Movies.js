import MovieItem from './MovieItem';

function Movies(props) {
    return (
        <>
            {props.myMovies.map((movie) => (
                <MovieItem
                    myMovie={movie}
                    key={movie._id}
                    Reload={props.ReloadData} //handles reload function
                />
            ))}
        </>
    );
}

export default Movies;