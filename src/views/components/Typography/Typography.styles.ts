// Packages
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

// Interfaces
import { TypographyInterface } from "./Typography.interface";

export const StyledTypography: React.FC<TypographyInterface> = styled.p.attrs({
  className: "StyledTypography",
})`
  // Variant
  ${(props: TypographyInterface) => {
    switch (props.variant) {
      case "h1":
        return tw`text-4xl font-sans font-bold tracking-wide leading-9`;
      case "h2":
        return tw`text-2xl font-sans font-bold tracking-wide leading-7`;
      case "subtitle":
        return tw`text-base font-mono font-extrabold tracking-wide leading-4`;
      case "Benefit_title":
        return tw`text-base font-sans font-bold tracking-wide leading-4`;
      case "cta_text":
        return tw`text-lg font-sans font-extrabold tracking-wide leading-5`;
      case "date":
        return tw`text-sm font-sans font-extrabold leading-4`;
      case "links":
        return tw`text-sm font-mono font-bold tracking-wide leading-3 underline`;
      case "input_title":
        return tw`text-xs font-mono font-semibold tracking-wide leading-3`;
      case "input_help":
        return tw`text-xs font-mono font-normal tracking-wide leading-3`;
      case "p":
        return tw`text-sm font-mono font-normal tracking-wide leading-4`;
      case "menu":
        return tw`text-xs font-sans font-bold tracking-widest leading-4`;
      case "tc":
        return tw`text-xs font-mono font-normal tracking-wide leading-4`;
      case "small_links":
        return tw`text-xs font-mono font-bold tracking-wide leading-3 underline`;
      default:
        return tw`text-sm font-mono font-normal tracking-wide leading-4`;
    }
  }}
`;
