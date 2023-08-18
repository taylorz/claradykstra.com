import styled, { css } from "styled-components";

const StyledText = styled.span`
  font-family: ${({ theme }) => theme.text.family.regular};
  font-size: ${({ theme }) => theme.text.body.size.regular}px;
  line-height: ${({ theme }) => theme.text.body.lineHeight.regular}px;
  color: ${({ theme }) => theme.color.text.dark};
  letter-spacing: 0.075rem;
  &::selection {
    background: #685451;
  }
  /* hoverable */
  ${(props) =>
    props.hoverable &&
    css`
      &:hover {
        cursor: pointer;
      }
    `}
  /* italic */
  ${(props) =>
    props.italic &&
    css`
      font-style: italic;
    `}
  /* lightened */
  ${(props) =>
    props.lightened &&
    css`
      color: ${({ theme }) => theme.color.text.medium};
    `}
  /* paragraph */
    ${(props) =>
    props.paragraph &&
    css`
      margin-bottom: ${({ theme }) => theme.text.body.lineHeight.regular}px;
    `};
`;

const Text = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};
export default Text;
