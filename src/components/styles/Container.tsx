import styled, { css } from "styled-components";
import { theme } from "../../theme";
import { Box } from "./Box";

interface Props {
  maxWidth: "sm" | "md" | "lg" | "xl";
}

export const Container = styled(Box)<Props>`
  width: 100%;
  display: block;
  max-width: unset;
  margin-left: auto;
  margin-right: auto;
  perspective-origin: center;
  perspective: 100em;
  padding-left: 24px;
  padding-right: 24px;

  ${(props) =>
    props.maxWidth === "sm" &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
        max-width: ${theme.breakpoints[0]};
      }
    `};

  ${(props) =>
    props.maxWidth === "md" &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
        max-width: ${theme.breakpoints[1]};
      }
    `};

  ${(props) =>
    props.maxWidth === "lg" &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
        max-width: ${theme.breakpoints[2]};
      }
    `};

  ${(props) =>
    props.maxWidth === "xl" &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints[3]}) {
        max-width: ${theme.breakpoints[3]};
      }
    `};
}
`;
