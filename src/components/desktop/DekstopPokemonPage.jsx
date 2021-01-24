import React, { useEffect, useState } from "react";
import useLoadData from "../../hooks/useLoadData.jsx";
import Styled from "styled-components";

const DivInfo = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

const Image = Styled.img`
  height: 400px;
  width: 300px;
`;

const H3 = Styled.h3`
  margin-top: 0px;
  margin-bottom: 10px;
`;

const ImageContainer = Styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  `;

const AbilitiesContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  // width: 30%;
`;

const StatsContainer = Styled.div`
  display: flex;
  flex-direction: column;
  padding:0px 20px 0 20px;
`;

const StatParagraph = Styled.p`
  margin: 0;
`;

const LoadingContainer = Styled.div`

`;

const DesktopPokemonPage = ({ props }) => {
  const pokemonData = useLoadData(
    `https://pokeapi.co/api/v2/pokemon/${props.match.params.id}`
  );
  const [abilities, setAbillities] = useState([]);

  useEffect(() => {
    setAbillities([]);
    if (pokemonData) {
      const loadData = () => {
        pokemonData.abilities.map(async (item) => {
          await fetch(item.ability.url)
            .then((res) => res.json())
            .then((res) => setAbillities((prev) => [...prev, res]));
        });
      };
      loadData();
    }
  }, [pokemonData]);

  return pokemonData && abilities.length == pokemonData.abilities.length ? (
    <DivInfo>
      <ImageContainer>
        <H3>{pokemonData.forms[0].name.toUpperCase()}</H3>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonData.id}.svg`}
        />
      </ImageContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <StatsContainer>
          <h4>
            Stats: <br />
          </h4>
          {pokemonData.stats.map((item) => (
            <StatParagraph>
              {item.stat.name}
              {": "} {item.base_stat}
            </StatParagraph>
          ))}
        </StatsContainer>
        <AbilitiesContainer>
          <h4>Abilities:</h4>
          {abilities.map((item, idx) => (
            <div>
              {idx + 1}) {item.name} {"- "}
              {item.effect_entries[0].language.name === "en"
                ? item.effect_entries[0].short_effect
                : item.effect_entries[1].short_effect}
            </div>
          ))}
        </AbilitiesContainer>
      </div>
    </DivInfo>
  ) : (
    <p>Loading...</p>
  );
};

export default DesktopPokemonPage;
