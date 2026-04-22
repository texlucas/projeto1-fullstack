import { useState, useContext } from "react";
import { FoodContext } from "../contexts/FoodContext";

export default function Search() {
    const [categoria, setCategoria] = useState("");
    const { buscarImagem } = useContext(FoodContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!categoria) {
            alert("Digite uma categoria (ex: pizza, burger)");
            return;
        }

        buscarImagem(categoria);
    };

    return (
        <form onSubmit={handleSubmit}>
            <p style={{fontWeight: "bold"}}>Categorias disponíveis para pesquisa:</p>
            <ul
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    textAlign: "left",
                    gap: "8px 40px",
                    justifyContent: "center",
                    listStyle: "none",
                    padding: 0,
                    maxWidth: "300px",
                    margin: "0 auto",
                    paddingBottom: "40px"
                }}
            >
                <li>Biryani</li>
                <li>Butter-chicken</li>
                <li>Dosa</li>
                <li>Pasta</li>
                <li>Rice</li>
                <li>Burger</li>
                <li>Dessert</li>
                <li>Idly</li>
                <li>Pizza</li>
                <li>Samosa</li>
            </ul>
            <input
                type="text"
                placeholder="Digite a categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
            />
            <button type="submit">Buscar</button>
        </form>
    );
}