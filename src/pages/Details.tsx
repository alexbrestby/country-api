import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { IoArrowBack } from "react-icons/io5";
import { Country } from "../types/types";
import { searchByName } from "../config";
import { Button } from "../components/Button/Button";
import { CountryInfo } from "../components/CountryInfo/CountryInfo";

export const Details: React.FC = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState<Country>();

  useEffect(() => {
    axios
      .get(searchByName(name as string))
      .then(({ data }) => {
        setCountry(data[0]);
      })
      .catch((e) => console.error(e));
  }, [name]);

  return (
    <div style={{ padding: "1rem" }}>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack />
        Back
      </Button>
      <CountryInfo country={country as Country} />
    </div>
  );
};
