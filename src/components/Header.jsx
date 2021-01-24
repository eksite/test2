import React, { useState, useEffect, useCallback } from "react";
import { TextField, Box, Button } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import Styled from "styled-components";
import { useHistory } from "react-router-dom";

const HeaderContainer = Styled.div`
    display: flex;
    width: 80%;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const ComboBoxContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Header = ({ pokemons }) => {
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const history = useHistory();

  const handleOnClick = () => {
    if (selectedPokemon) {
      history.push(`/pokemon/${selectedPokemon.name}`);
    }
  };

  const handle = () => {
    history.push("/");
  };

  return (
    <HeaderContainer>
      <div>
        <Button onClick={handle}>Main page</Button>
      </div>
      <ComboBoxContainer>
        <Autocomplete
          options={pokemons.results}
          getOptionLabel={(option) => option.name.toUpperCase()}
          style={{ width: 175, margin: 5 }}
          onChange={(e, v) => setSelectedPokemon(v)}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              size="small"
              label="Pokemon's name"
            />
          )}
        />
        <Button onClick={handleOnClick}>search</Button>
      </ComboBoxContainer>
    </HeaderContainer>
  );
};

export default Header;
