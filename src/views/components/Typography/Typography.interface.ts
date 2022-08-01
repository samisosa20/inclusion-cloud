import React from "react";

export interface TypographyInterface {
  children?: JSX.Element | JSX.Element[] | string | React.ReactNode;
  variant:
    | "h1"
    | "h2"
    | "subtitle"
    | "Benefit_title"
    | "cta_text"
    | "date"
    | "links"
    | "input_title"
    | "input_help"
    | "p"
    | "menu"
    | "tc"
    | "small_links";
  className?: string;
  handleClick?: Function;
}
