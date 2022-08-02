import { StyledHeader } from "./Header.styles";
import Typography from "@/views/components/Typography";

const Header = () => {
  return <StyledHeader>
    <Typography variant={"h2"} className={"text-white"}>Status Dashboard</Typography>
  </StyledHeader>
}

export default Header