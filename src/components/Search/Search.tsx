import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import React, { ChangeEvent } from "react";

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;

  border-radius: var(--radius);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search country",
})`
  margin-left: 1rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-bg);
  min-width: calc(100% - 80px);
  font-size: var(--fs-md);
`;

interface SearchProps {
  search: string;
  setSearch: (value: string) => void;
}

export const Search: React.FC<SearchProps> = ({ search, setSearch }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <InputContainer>
      <IoSearch size={24} />
      <Input onChange={handleInputChange} value={search} />
    </InputContainer>
  );
};
