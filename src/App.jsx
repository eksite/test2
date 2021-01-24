import React from "react";
import MainPage from "./pages/MainPage.jsx";
import PokemonPage from "./pages/PokemonPage.jsx";
import Header from "./components/Header.jsx";
import useLoadData from "./hooks/useLoadData.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const pokemonList = useLoadData(
    "https://pokeapi.co/api/v2/pokemon/?limit=1118"
  );

  return pokemonList ? (
    <>
      <Router>
        <Header pokemons={pokemonList} />
        <Switch>
          <Route exact path="/pokemon/:id" component={PokemonPage} />
          <Route render={(props) => <MainPage pokemons={pokemonList} />} />
        </Switch>
      </Router>
    </>
  ) : (
    <div>loading...</div>
  );
};

export default App;
