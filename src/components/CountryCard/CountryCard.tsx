import React from "react";
import styled from "styled-components";
import { Country } from "../../types/types";
import { Link } from "react-router-dom";

const Wrapper = styled.article`
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.h3`
  margin: 0 0 1rem;
  font-size: var(--fs-lg);
  font-weight: var(--fw-800);     );
`;

const CardList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CardListItem = styled.li`
  line-height: 1.6;
`;

export const CountryCard: React.FC<{ country: Country }> = ({ country }) => {
  return (
    <Wrapper>
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to={`/country/${country.name}`}
      >
        <CardImage src={country.flag} />
        <CardBody>
          <CardTitle>{country.name}</CardTitle>
          <CardList>
            <CardListItem>Population: {country.population}</CardListItem>
            <CardListItem>Region: {country.region}</CardListItem>
            <CardListItem>Capital: {country.capital}</CardListItem>
          </CardList>
        </CardBody>
      </Link>
    </Wrapper>
  );
};
