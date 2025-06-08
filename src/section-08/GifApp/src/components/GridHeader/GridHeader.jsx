import "./GridHeader.css";
import PropTypes from "prop-types";

export const GridHeader = ({ category, onRemove }) => {
  return (
    <h2 className="grid-header">
      {category} <button onClick={onRemove}>X</button>
    </h2>
  );
};

GridHeader.propTypes = {
  category: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};
