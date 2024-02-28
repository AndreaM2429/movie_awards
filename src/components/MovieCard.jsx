import PropTypes from 'prop-types';

function MovieCard({ MoviesArr }) {
  return (
    <div className="card-div d-col center">
      <h2>{MoviesArr.title}</h2>
      <img src={MoviesArr.poster_img} alt={MoviesArr.title} />
      <button type="button">Details</button>
    </div>
  );
}

MovieCard.propTypes = {
  MoviesArr: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_img: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
