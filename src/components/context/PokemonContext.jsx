import React, { useReducer, useContext } from "react";

const PokemonStateContext = React.createContext();
const PokemonDispatchContext = React.createContext();

const initialState = {
  pokemonList: [],
};

const pokemonReducer = (state, action) => {
  switch(action.type) {
    case 'SAVE_DATA': {
      if (action.data) {
        return {...state, pokemonList: action.data}
      }
    }
  }
};

const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  const saveData = data => {
    dispatch({type: 'SAVE_DATA', data})
  }

  return (
    <PokemonStateContext.Provider value={state}>
      <PokemonDispatchContext.Provider value={{dispatch, saveData}}>
        {children}
      </PokemonDispatchContext.Provider>
    </PokemonStateContext.Provider>
  );
};

const usePokemonDispatch = () => {
  const context = useContext(PokemonDispatchContext);
  if (context === undefined) {
    throw new Error("usePokemonDispatch must be used within a Provider");
  }
  return context;
};

const usePokemonState = () => {
  const context = useContext(PokemonStateContext);
  if (context === undefined) {
    throw new Error("usePokemonState must be used within a CartProvider");
  }
  return context;
};

export { usePokemonState, usePokemonDispatch, PokemonProvider };
