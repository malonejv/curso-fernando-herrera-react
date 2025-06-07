import PropTypes from "prop-types";
import './GridItem.css';

export const GridItem = ({ gif }) => {
  return (
    <div className='card'>
      <img src={gif.url} alt={gif.title} />
      <h3>{gif.title}</h3>
    </div>
  )
}

GridItem.propTypes = {
  gif: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
}