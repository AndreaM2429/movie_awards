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
    <main>
      <header>
        <h1>Movies</h1>
      </header>
      <section>
        {movies.map((movie) => (
          <MovieCard key={movie.title} MoviesArr={movie} />
        ))}
      </section>
    </main>
  );
}

export default Movies;
