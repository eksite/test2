import React, { useEfect } from "react";
import PokemonItem from "../PokemonItem.jsx";
import Styled from "styled-components";


const DivContainer = Styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`;

const HomePage = ({ pokemons }) => {
  return (
    <DivContainer >
      {pokemons &&
        pokemons.results.map((item, idx) => <PokemonItem pokemon={item} key={idx} id={idx}/>)}
    </DivContainer>
  );
};
export default HomePage;
