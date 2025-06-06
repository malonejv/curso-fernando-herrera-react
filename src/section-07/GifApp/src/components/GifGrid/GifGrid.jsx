import { useFetchGifs } from "../../hooks/useFetchGifs";
import { GridHeader } from "../GridHeader/GridHeader";
import { GridItem } from "../GridItem/GridItem";
import { Loading } from "../Loading/Loading";
import "./GifGrid.css";

export const GifGrid = ({ category, onRemove }) => {
  const [gifs, isLoading] = useFetchGifs(category);

  const handleRemoveCategory = () => {
    onRemove(category);
  };

  return (
    <div className="gif-grid" data-category={category}>
      <GridHeader header={category} onRemove={handleRemoveCategory} />
      <Loading isLoading={isLoading} loadingMessage="Cargando..." />
      <div className="card-grid">
        {gifs?.map((gif) => (
          <GridItem key={gif.id} gif={gif} />
        ))}
      </div>
    </div>
  );
};
