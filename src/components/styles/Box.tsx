import styled, { css } from "styled-components";
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  boxShadow,
  BoxShadowProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
} from "styled-system";

interface Props
  extends ColorProps,
    LayoutProps,
    SpaceProps,
    FlexboxProps,
    BorderProps,
    ShadowProps,
    BoxShadowProps,
    PositionProps,
    BackgroundProps {
  display?: string;
  cursor?: string;
}

export const Box = styled.div<Props>`
  user-select: none;
  display: ${(props) => props.display || "flex"};

  ${(props) =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `};

  ${color};
  ${layout};
  ${space};
  ${flexbox};
  ${border};
  ${shadow};
  ${boxShadow};
  ${position};
  ${background};
`;
