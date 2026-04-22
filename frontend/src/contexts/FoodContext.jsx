import { createContext, useReducer } from "react";

export const FoodContext = createContext();

const initialState = {
  image: null,
  loading: false,
  error: null
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };

    case "FETCH_SUCCESS":
      return { image: action.payload, loading: false, error: null };

    case "FETCH_ERROR":
      return { ...state, loading: false, error: "Erro ao buscar imagem" };

    default:
      return state;
  }
}

export function FoodProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

 const buscarImagem = async (categoria) => {
  dispatch({ type: "FETCH_START" });
  console.log(categoria)

  try {
    const res = await fetch(`https://foodish-api.com/api/images/${categoria}`);
    const data = await res.json();

    dispatch({ type: "FETCH_SUCCESS", payload: data.image });
  } catch (err) {
    dispatch({ type: "FETCH_ERROR" });
  }
};

  return (
    <FoodContext.Provider value={{ ...state, buscarImagem }}>
      {children}
    </FoodContext.Provider>
  );
}