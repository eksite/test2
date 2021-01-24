import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import MobilePokemonPage from "../components/mobile/MobilePokemonPage.jsx";
import DesktopPokemonPage from "../components/desktop/DekstopPokemonPage.jsx";

const DesktopOnly = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
    @media (max-width: 600px) {
      display: none;
    }
`;

const MobileOnly = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
    @media (min-width: 601px) {
      display: none;
    }
`;

const PokemonPage = (props) => {
  return (
    <>
      <MobileOnly>
        <MobilePokemonPage props={props} />
      </MobileOnly>
      <DesktopOnly>
        <DesktopPokemonPage props={props} />
      </DesktopOnly>
    </>
  );
};

export default PokemonPage;
