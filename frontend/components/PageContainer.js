import styled, { css } from "styled-components";

import Navigation from "./Navigation";

const StyledPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: ${({ theme }) => theme.util.buffer * 6}px;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.sm}px) {
    padding: ${({ theme }) => theme.util.buffer * 4}px;
  }
`;
const StyledPageContent = styled.div`
  margin-left: ${({ theme }) => theme.util.buffer * 64}px;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.sm}px) {
    padding-top: ${({ theme }) => theme.util.buffer * 4}px;
    margin-left: 0;
  }
`;

const PageContainer = ({ children }) => {
  return (
    <StyledPageContainer>
      <Navigation />
      <StyledPageContent>{children}</StyledPageContent>
    </StyledPageContainer>
  );
};
export default PageContainer;
