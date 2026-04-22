import { useContext } from "react";
import { FoodContext } from "../contexts/FoodContext";

export default function ImageCard() {
  const { image, loading, error } = useContext(FoodContext);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  if (!image) return <p>Nenhuma imagem carregada</p>;

  return (
    <div>
      <img src={image} alt="Comida" width="300" />
    </div>
  );
}