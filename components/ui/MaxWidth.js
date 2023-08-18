import styled, { css } from "styled-components";

const StyledMaxWidth = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.xs}px;
  /* margin: 0 auto; */
`;

const MaxWidth = ({ children, sm }) => {
  return <StyledMaxWidth sm={sm}>{children}</StyledMaxWidth>;
};

export default MaxWidth;
