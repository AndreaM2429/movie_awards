import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesInfo } from './redux/slices/awards';

function App() {
  const { movies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesInfo());
  }, [dispatch]);

  console.log(movies);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
