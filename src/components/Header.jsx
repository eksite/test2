import React, { useState, useEffect, useCallback } from "react";
import { TextField, Box, MenuItem, NativeSelect, InputLabel } from "@material-ui/core";
import Styled from "styled-components";
import { debounce } from "lodash";

const DesktopHeader = Styled.div`
    display: flex;
    width: 100%;
`;

const Header = ({ pokemons }) => {
  const [textValue, setTextValue] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const debounceFilterData = useCallback(
    debounce((textValue) => {
      const filtered = pokemons.results.filter((item) =>
        item.name.includes(textValue)
      );
      setFilteredPokemons(filtered);
    }, 1000),
    []
  );

  useEffect(() => {
    debounceFilterData(textValue);
  }, [textValue]);

  return (
    <Box display="flex">
      <InputLabel htmlFor="select">Age</InputLabel>
      <NativeSelect id="select">
        <option value="10">Ten</option>
        <option value="20">Twenty</option>
      </NativeSelect>
    </Box>
  );
};

export default Header;
