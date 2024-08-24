import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "../../components/Container/Container";
import { IoMoon, IoMoonOutline } from "react-icons/io5";

const HeaderStyled = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--color-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled.h1`
  color: var(--color-text);
  font-size: var(--fs-md);
  font-weight: var(--fw-400);
`;

const ThemeSwitcher = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--color-text);
  font-size: var(--fs-sm);
`;

export const Header: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = (): void => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <HeaderStyled>
      <Container>
        <Wrapper>
          <Title>Where in the world?</Title>
          <ThemeSwitcher onClick={toggleTheme}>
            {theme === "light" ? (
              <IoMoonOutline size={24} />
            ) : (
              <IoMoon size={24} />
            )}
            <span style={{ marginLeft: "0.5rem" }}>
              {theme === "light" ? "Light Mode" : "Dark Mode"}
            </span>
          </ThemeSwitcher>
        </Wrapper>
      </Container>
    </HeaderStyled>
  );
};
