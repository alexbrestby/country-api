import React, { ReactNode } from "react";
import styled from "styled-components";
import { Container } from "../../components/Container/Container";

const MainStyled = styled.main`
  padding: 2rem 0;
  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`;

interface MainProps {
  children: ReactNode;
}

export const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <MainStyled>
      <Container>{children}</Container>
    </MainStyled>
  );
};
