import styled from "styled-components";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Country } from "../../types/types";
import { searchByCode } from "../../config";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 40%;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin: 0;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const Info = styled.div`
  width: 60%;
  margin: 0 3rem;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

const CountryDetails = styled.div`
  display: flex;
  font-size: var(--fs-lg);
  margin-bottom: 0.7rem;
  & b {
    font-weight: bold;
  }
`;

const TagGroup = styled.div`
  display: flex;
  width: fit-content;
  gap: 0.3rem;
  flex-wrap: wrap;
  font-size: var(--fs-lg);
  & b {
    font-weight: bold;
  }
`;

const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  font-size: var(--fs-md);
  line-height: 1.5;
  cursor: pointer;
`;

export const CountryInfo: React.FC<{ country: Country }> = ({ country }) => {
  const [neighbors, setNeighbors] = useState<string[]>([]);

  useEffect(() => {
    if (country && country.borders) {
      setNeighbors([]);
      axios.get(searchByCode(country.borders)).then((res) => {
        res.data.map((c: Country) => {
          setNeighbors((prev) => [...prev, c.name]);
        });
      });
    }
  }, [country]);

  const navigate = useNavigate();
  const handleClick = (name: string) => {
    navigate(`/country/${name}`);
  };

  return (
    country && (
      <Wrapper>
        <Image src={country.flag} />
        <Info>
          <Title>{country.name}</Title>
          <CountryDetails>
            <b>Population:</b> {`${country.population}`}
          </CountryDetails>
          <CountryDetails>
            <b>Region:</b> {`${country.region}`}
          </CountryDetails>
          <CountryDetails>
            <b>Capital:</b> {` ${country.capital}`}
          </CountryDetails>
          <CountryDetails>
            <b>Currency:</b>
            {country.currencies.map((c) => (
              <span key={c.name}>
                {c.name} ({c.symbol})
              </span>
            ))}
          </CountryDetails>
          <TagGroup>
            <b>Borders:</b>
            {neighbors.length === 0 && <span>No borders</span>}
            {neighbors.map((n) => (
              <Tag onClick={() => handleClick(n)} key={n}>
                {n}
              </Tag>
            ))}
          </TagGroup>
        </Info>
      </Wrapper>
    )
  );
};
