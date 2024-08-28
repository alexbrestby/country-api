import React, { useEffect } from "react";
import axios from "axios";
import { ALL_COUNTRIES } from "../../config.ts";
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
  console.log(countries);
  useEffect(() => {
    if (!countries.length) {
      axios
        .get(ALL_COUNTRIES)
        .then(({ data }) => {
          setCountries(data);
        })
        .catch((e) => console.log(e));
    }
  }, [countries, setCountries]);

  return (
    <>
      <Controls />
      <CountryList countries={countries} />
    </>
  );
};
