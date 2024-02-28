import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesInfo } from '../redux/slices/awards';
import MovieCard from './MovieCard';

function Movies() {
  const { movies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesInfo());
  }, [dispatch]);

  return (
    <section className="d-col center">
      <header className="title">
        <h1>Movies</h1>
      </header>
      <div className="d-row movies-div center">
        {movies.map((movie) => (
          <MovieCard key={movie.title} MoviesArr={movie} />
        ))}
      </div>
    </section>
  );
}

export default Movies;
