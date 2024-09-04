import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Search } from "../Search/Search";
import { CustomSelect } from "../CustomSelect/CustomSelect";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "Americas", label: "Americas" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

type ControlsProps = {
  handleSearch: (search: string, region: string) => void;
};

export const Controls: React.FC<ControlsProps> = ({ handleSearch }) => {
  const [search, setSearch] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  useEffect(() => {
    handleSearch(search, region);
  }, [search, region, handleSearch]);

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={options.find((option) => option.value === region) || null}
        onChange={(selectedOption) =>
          setRegion(selectedOption ? selectedOption.value : "")
        }
      />
    </Wrapper>
  );
};
