import React from "react";
import HomePage from "./pages/HomePage.jsx";
import PokemonPage from "./pages/PokemonPage.jsx";
import Header from "./Header.jsx";
import useLoadData from "./hooks/useLoadData.jsx";
import { PokemonProvider } from "./context/PokemonContext.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App =  () => {
  const pokemonList = useLoadData(
    "https://pokeapi.co/api/v2/pokemon/?limit=1118"
  );

  return (
      pokemonList ? <>
      <Header pokemons={pokemonList}/>
      <Router>
        <Switch>
          <Route exact path="/pokemon/:id" component={PokemonPage} />
          <Route render={(props)=><HomePage pokemons={pokemonList} />}/>
        </Switch>
      </Router>
      </> : <div>loading...</div>

  );
};

export default App;
