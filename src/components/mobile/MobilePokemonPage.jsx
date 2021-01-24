import React, { useEffect, useState } from "react";
import useLoadData from "../../hooks/useLoadData.jsx";
import Styled from "styled-components";

const DivInfo = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const Image = Styled.img`
  height: 400px;
  width: 300px;
`;

const H3 = Styled.h3`
  margin: 0;
`;

const H4 = Styled.h4`
  margin: 0;
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
  padding-bottom: 10px;
`;

const StatsContainer = Styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

const StatParagraph = Styled.p`
  margin: 0;
`;

const LoadingContainer = Styled.div`
  display: flex;
  justify-content: center;
`;

const InfoContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MobilePokemonPage = ({ props }) => {
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
      <InfoContainer>
        <StatsContainer>
          <H4>
            Stats: <br />
          </H4>
          {pokemonData.stats.map((item) => (
            <StatParagraph>
              {item.stat.name}: {item.base_stat}
            </StatParagraph>
          ))}
        </StatsContainer>
        <AbilitiesContainer>
          <H4>Abilities:</H4>
          {abilities.map((item, idx) => (
            <div>
              {idx + 1}) {item.name} -
              {item.effect_entries[0].language.name === "en"
                ? item.effect_entries[0].short_effect
                : item.effect_entries[1].short_effect}
            </div>
          ))}
        </AbilitiesContainer>
      </InfoContainer>
    </DivInfo>
  ) : (
    <LoadingContainer>
      <p>Loading...</p>
    </LoadingContainer>
  );
};

export default MobilePokemonPage;
