import React from "react";
import styled from "styled-components";
import { CountryCard } from "../CountryCard/CountryCard";
import { Country } from "../../types/types";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 3rem;
  padding: 2rem 0;
  @media (min-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const CountryList: React.FC<{ countries: Country[] }> = ({
  countries,
}) => {
  return (
    <Wrapper>
      {countries.map((country) => (
        <CountryCard key={country.name} country={country} />
      ))}
    </Wrapper>
  );
};
