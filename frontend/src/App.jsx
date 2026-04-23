import Search from "./components/Search";
import ImageCard from "./components/ImageCard";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'DM Sans', sans-serif;
    background: #f7f7f5;
    color: #1a1a1a;
    min-height: 100vh;
  }
`;

const Wrapper = styled.div`
  max-width: 580px;
  margin: 0 auto;
  padding: 3rem 1.25rem 4rem;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2.5rem;

  h1 {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -0.5px;
  }

  p {
    font-size: 14px;
    color: #888;
    margin-top: 6px;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <Wrapper>
        <Header>
          <h1>Buscador de Imagens de Alimentos</h1>
          <p>Busque imagens de pratos por categoria</p>
        </Header>
        <Search />
        <ImageCard />
      </Wrapper>
    </>
  );
}