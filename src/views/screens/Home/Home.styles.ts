// Packages
import styled from "styled-components";
import tw from "twin.macro";

export const StyledGridContent = styled.div`
  ${tw`grid gap-4 justify-center`}
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`