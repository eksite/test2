import React from "react";

const PokemonPage = (props) => {
  return <div>{props.match.params.id}</div>;
};

export default PokemonPage;
