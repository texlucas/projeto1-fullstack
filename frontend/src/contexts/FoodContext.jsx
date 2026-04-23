// eslint-disable-next-line react-refresh/only-export-components
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
      return { image: null, loading: false, error: "Categoria não encontrada. Tente outra." };

    default:
      return state;
  }
}

export function FoodProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const buscarImagem = async (categoria) => {
    dispatch({ type: "FETCH_START" });

    try {
      const res = await fetch(`https://foodish-api.com/api/images/${categoria.toLowerCase()}`);
      const data = await res.json();

      if (!res.ok || !data.image) {
        dispatch({ type: "FETCH_ERROR" });
        return;
      }

      dispatch({ type: "FETCH_SUCCESS", payload: data.image });
    } catch (_err) {
      dispatch({ type: "FETCH_ERROR" });
    }
  };

  return (
    <FoodContext.Provider value={{ ...state, buscarImagem }}>
      {children}
    </FoodContext.Provider>
  );
}