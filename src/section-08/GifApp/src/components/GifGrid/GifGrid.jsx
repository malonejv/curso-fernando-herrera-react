import PropTypes from "prop-types";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { GridHeader } from "../GridHeader/GridHeader";
import { GridItem } from "../GridItem/GridItem";
import { Loading } from "../Loading/Loading";
import "./GifGrid.css";

export const GifGrid = ({ category, onRemove }) => {
  const [gifs, isLoading] = useFetchGifs(category);

  const onRemoveCategory = (category) => {
    onRemove(category);
  };

  return (
    <div className="gif-grid" data-category={category}>
      <GridHeader category={category} onRemove={onRemoveCategory} />
      <Loading isLoading={isLoading} loadingMessage="Cargando..." />
      <div className="card-grid">
        {gifs?.map((gif) => (
          <GridItem key={gif.id} gif={gif} />
        ))}
      </div>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};