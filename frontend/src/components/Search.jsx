import { useState, useContext, useRef } from "react";
import { FoodContext } from "../contexts/FoodContext";
import styled from "styled-components";

const Card = styled.form`
  background: #fff;
  border: 1px solid #e8e8e4;
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1.25rem;
`;

const SectionLabel = styled.p`
  font-size: 11px;
  font-weight: 600;
  color: #aaa;
  text-transform: uppercase;
  letter-spacing: 0.7px;
  margin-bottom: 12px;
`;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1.25rem;
  padding: 0;
`;

const Tag = styled.li`
  font-size: 13px;
  color: #555;
  background: #f5f5f3;
  border: 1px solid #e8e8e4;
  border-radius: 999px;
  padding: 5px 14px;
  cursor: pointer;
  list-style: none;
  transition: all 0.15s;

  &:hover {
    background: #ececea;
    color: #1a1a1a;
  }
`;

const InputRow = styled.div`
  display: flex;
  gap: 8px;
`;

const Input = styled.input`
  flex: 1;
  height: 40px;
  border: 1px solid #e0e0dc;
  border-radius: 10px;
  padding: 0 14px;
  font-size: 14px;
  font-family: inherit;
  background: #fafaf8;
  color: #1a1a1a;
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;

  &:focus {
    border-color: #bbb;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.06);
  }

  &::placeholder {
    color: #bbb;
  }
`;

const SearchButton = styled.button`
  height: 40px;
  padding: 0 22px;
  background: #1a1a1a;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: #333;
  }
  &:active {
    transform: scale(0.98);
  }
`;

const ErrorMessage = styled.p`
  font-size: 13px;
  color: #c0392b;
  margin-top: 10px;
`;

const categorias = [
  "Biryani", "Butter-chicken", "Dosa", "Pasta", "Rice",
  "Burger", "Dessert", "Idly", "Pizza", "Samosa",
];

export default function Search() {
  const [categoria, setCategoria] = useState("");
  const [erroValidacao, setErroValidacao] = useState("");
  const { buscarImagem, error: erroApi } = useContext(FoodContext);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!categoria.trim()) {
      setErroValidacao("Digite uma categoria antes de buscar.");
      if (inputRef.current) inputRef.current.focus();
      return;
    }
    setErroValidacao("");
    buscarImagem(categoria);
  };

  const handleTagClick = (tag) => {
    setCategoria(tag.toLowerCase());
    setErroValidacao("");
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <Card onSubmit={handleSubmit}>
      <SectionLabel>Categorias disponíveis</SectionLabel>
      <TagList>
        {categorias.map((tag) => (
          <Tag key={tag} onClick={() => handleTagClick(tag)}>
            {tag}
          </Tag>
        ))}
      </TagList>
      <InputRow>
        <Input
          ref={inputRef}
          type="text"
          placeholder="Ex: pizza, burger"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
        <SearchButton type="submit">Buscar</SearchButton>
      </InputRow>
      {erroValidacao && <ErrorMessage>{erroValidacao}</ErrorMessage>}
      {erroApi && <ErrorMessage>{erroApi}</ErrorMessage>}
    </Card>
  );
}