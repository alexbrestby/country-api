import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { ALL_COUNTRIES } from "../../config";
import { Controls } from "../components/Controls/Controls";
import { CountryList } from "../components/CoutryList/CountryList";
import { Country } from "../types/types";

type HomePageProps = {
  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
};

export const HomePage: React.FC<HomePageProps> = ({
  countries,
  setCountries,
}) => {
  const [filteredCountries, setFilteredCountries] =
    useState<Country[]>(countries);

  const handleSearch = useCallback(
    (search: string, region: string) => {
      const searchLower = search.toLowerCase();
      setFilteredCountries(
        countries.filter(
          (c) =>
            c.name.toLowerCase().includes(searchLower) &&
            (region === "" || c.region.toLowerCase() === region.toLowerCase()),
        ),
      );
    },
    [countries],
  ); // Memoized to avoid re-renders

  useEffect(() => {
    if (countries.length === 0) {
      axios
        .get(ALL_COUNTRIES)
        .then(({ data }) => {
          setCountries(data);
          setFilteredCountries(data);
        })
        .catch((e) => console.error(e));
    }
  }, [countries, setCountries]);

  return (
    <>
      <Controls handleSearch={handleSearch} />
      <CountryList countries={filteredCountries} />
    </>
  );
};
