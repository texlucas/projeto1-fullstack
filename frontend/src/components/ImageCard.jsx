import { useContext } from "react";
import { FoodContext } from "../contexts/FoodContext";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -600px 0; }
  100% { background-position: 600px 0; }
`;

const Card = styled.div`
  background: #fff;
  border: 1px solid #e8e8e4;
  border-radius: 16px;
  overflow: hidden;
`;

const Skeleton = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  background: linear-gradient(90deg, #f0f0ee 25%, #e8e8e4 50%, #f0f0ee 75%);
  background-size: 600px 100%;
  animation: ${shimmer} 1.4s infinite linear;
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  display: block;
`;

const Footer = styled.div`
  padding: 14px 18px;
  border-top: 1px solid #f0f0ec;
`;

const FoodName = styled.p`
  font-size: 15px;
  font-weight: 500;
  text-transform: capitalize;
`;

const Source = styled.p`
  font-size: 12px;
  color: #aaa;
  margin-top: 2px;
`;

const ErrorMessage = styled.p`
  padding: 1rem;
  font-size: 14px;
  color: #c0392b;
`;

export default function ImageCard() {
  const { image, loading, error } = useContext(FoodContext);

  if (!image && !loading && !error) return null;

  return (
    <Card>
      {loading && <Skeleton />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {image && !loading && (
        <>
          <Image src={image} alt="Comida" />
          <Footer>
            <FoodName>{image?.split("/").at(-2)}</FoodName>
            <Source>foodish-api.com</Source>
          </Footer>
        </>
      )}
    </Card>
  );
}