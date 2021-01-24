import React from "react";
import useLoadData from "../../hooks/useLoadData.jsx";
import Styled from "styled-components";
import {useHistory} from 'react-router-dom';

const Image = Styled.img`
  height: 150px;
  width: 120px;
`;

const MobilePokemonItem = ({ pokemon, id }) => {
  const history = useHistory();
  const data = useLoadData(`${pokemon.url}`);
  const handleOnClick = () => {
    history.push(`/pokemon/${id}`)
}
  return (
    <div onClick={handleOnClick}>
      {data && (
        <>
          <Image src={data.sprites.other.dream_world.front_default} />
          <div>{data.forms[0].name}</div>
        </>
      )}
    </div>
  );
};

export default MobilePokemonItem;