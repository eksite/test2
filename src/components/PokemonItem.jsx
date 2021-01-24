import React from "react";
import DesktopPokemonItem from "./desktop/DesktopPokemonItem.jsx";
import MobilePokemonItem from "./mobile/MobilePokemonItem.jsx";
import Styled from "styled-components";
import useLoadData from "../hooks/useLoadData.jsx";

const DesktopOnly = Styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 21%;
  align-items: center;
  text-align: center;
    @media (max-width: 600px) {
      display: none;
    }
`;

const MobileOnly = Styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 90%;
  align-items: center;
  text-align: center;
  padding: 15px 0px 15px 0px;
    @media (min-width: 601px) {
      display: none;
    }
`;

const PokemonItem = ({ pokemon, id }) => {
  const data = useLoadData(`${pokemon.url}`);
  return (
    <>
      <MobileOnly>
        <MobilePokemonItem pokemon={data} id={id}/>
      </MobileOnly>

      <DesktopOnly>
        <DesktopPokemonItem pokemon={data} id={id} />
      </DesktopOnly>
    </>
  );
};

export default PokemonItem;
