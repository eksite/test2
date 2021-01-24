import React from "react";
import useLoadData from "../../hooks/useLoadData.jsx";
import Styled from "styled-components";
import {useHistory} from 'react-router-dom';

const Image = Styled.img`
  height: 150px;
  width: 120px;
`;

const DesktopPokemonItem = ({ pokemon, id }) => {
  const history = useHistory();
  
  const handleOnClick = () => {
    history.push(`/pokemon/${id}`)
}
  return (
    <div onClick={handleOnClick}>
      {pokemon && (
        <>
          <Image loading="lazy" src={pokemon.sprites.other.dream_world.front_default} />
          <div>{pokemon.forms[0].name}</div>
        </>
      )}
    </div>
  );
};

export default DesktopPokemonItem;
