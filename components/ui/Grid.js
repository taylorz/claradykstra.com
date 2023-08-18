import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

const totalColumns = 12;

const GridContainer = styled.div`
  display: flex;
  ${(props) =>
    props.container &&
    `
    flex-wrap: wrap;
    width: 100%;
  `}
  ${(props) =>
    props.spacing &&
    !props.item &&
    !props.stack &&
    `
    width: calc(100% + ${theme.util.buffer * props.spacing}px);
    margin: ${-theme.util.buffer * (props.spacing / 2)}px;
  `}
  ${(props) => props.m && `margin: ${props.m * theme.util.buffer}px`};
  ${(props) => props.mt && `margin-top: ${props.mt * theme.util.buffer}px`};
  ${(props) => props.mb && `margin-bottom: ${props.mb * theme.util.buffer}px`};
  ${(props) => props.ml && `margin-left: ${props.ml * theme.util.buffer}px`};
  ${(props) => props.mr && `margin-right: ${props.mr * theme.util.buffer}px`};
  ${(props) => props.mtb && `margin: ${props.mtb * theme.util.buffer}px 0`};
  ${(props) => props.mlr && `margin: 0 ${props.mlr * theme.util.buffer}px`};
  ${(props) =>
    (props.m ||
      props.mt ||
      props.mb ||
      props.ml ||
      props.mr ||
      props.mtb ||
      props.mlr) &&
    "flex-direction: column"};
  ${(props) =>
    props.flexDirection
      ? `flex-direction: ${props.flexDirection};`
      : !props.container
      ? "flex-direction: column;"
      : ""}
  ${(props) => props.row && `flex-direction: row;`}
  ${(props) => props.flexWrap && `flex-wrap: ${props.flexWrap};`}
  ${(props) => props.flexShrink && `flex-wrap: ${props.flexShrink};`}
  ${(props) => props.flexFlow && `flex-flow: ${props.flexFlow};`}
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  flex: ${(props) => (props.flex ? props.flex : "initial")};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : "flex-start"};
  ${(props) => props.justifySelf && `justify-self: ${props.justifySelf};`}
  ${(props) => props.alignSelf && `align-self: ${props.alignSelf};`}
  ${(props) => props.alignContent && `align-content: ${props.alignContent};`}
  // flex items will refuse to shrink below their minimum intrinsic width, unless we set min-width to 0 explicity on all flex parents with flex: 1
  ${(props) => props.forceShrink && `min-width: 0;`}
  ${(props) =>
    props.xxs &&
    `
    max-width: ${(props.xxs * 100) / totalColumns}%;
    flex-basis: ${(props.xxs * 100) / totalColumns}%;
  `}
  ${(props) =>
    props.xs &&
    `
    max-width: ${(props.xs * 100) / totalColumns}%;
    flex-basis: ${(props.xs * 100) / totalColumns}%;
  `}
  ${(props) =>
    props.sm &&
    `
    @media (min-width: ${theme.breakpoint.sm}px) {
      max-width: ${(props.sm * 100) / totalColumns}%;
      flex-basis: ${(props.sm * 100) / totalColumns}%;
    }
  `}
  ${(props) =>
    props.main &&
    `
    @media (min-width: ${theme.breakpoint.main}px) {
      max-width: ${(props.main * 100) / totalColumns}%;
      flex-basis: ${(props.main * 100) / totalColumns}%;
    }
  `}
  ${(props) =>
    props.lg &&
    `
    @media (min-width: ${theme.breakpoint.lg}px) {
      max-width: ${(props.lg * 100) / totalColumns}%;
      flex-basis: ${(props.lg * 100) / totalColumns}%;
    }
  `}
  ${(props) =>
    props.xl &&
    `
    @media (min-width: ${theme.breakpoint.xl}px) {
      max-width: ${(props.xl * 100) / totalColumns}%;
      flex-basis: ${(props.xl * 100) / totalColumns}%;
    }
  `}

  ${(props) =>
    props.spacing &&
    `
    > .grid-child {
      padding: ${theme.util.buffer * (props.spacing / 2)}px;
    }
  `}
  ${(props) => props.full && "width: 100%;"}
  ${(props) => props.fullHeight && "height: 100%;"}
  ${(props) =>
    props.stack &&
    css`
      gap: ${(props) =>
        props.spacing && props.spacing * props.theme.util.buffer}px;
    `}
  &.grid-child {
    ${(props) =>
      props.flexDirection
        ? `flex-direction: ${props.flexDirection};`
        : props.row
        ? `flex-direction: row;`
        : "flex-direction: column;"}
  }
  ${(props) =>
    props.hidden &&
    css`
      display: ${(props) => (props.hidden === true ? "none" : "flex")};
    `}
`;

const Grid = (props) => {
  const { item, className, ...gridProps } = props;
  return (
    <GridContainer
      {...gridProps}
      className={`${className} ${item && "grid-child"}`}
    />
  );
};

export default Grid;
