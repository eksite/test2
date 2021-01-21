import React from "react";
import useLoadData from "./hooks/useLoadData.jsx";
import Styled from "styled-components";
import {useHistory} from 'react-router-dom';

const Div = Styled.div`
      display: flex;
      flex-direction: column;
      flex: 1 0 21%;
      align-items: center;
      width: 20% ;
      text-align: center;
  `;

const Image = Styled.img`
  height: 150px;
  width: 120px;
`;

const PokemonItem = ({ pokemon, id }) => {
  const history = useHistory();
  const data = useLoadData(`${pokemon.url}`);
  const handleOnClick = () => {
    history.push(`/pokemon/${id}`)
}
  return (
    <Div onClick={handleOnClick}>
      {data && (
        <>
          <Image src={data.sprites.other.dream_world.front_default} />
          <div>{data.forms[0].name}</div>
        </>
      )}
    </Div>
  );
};

export default PokemonItem;
