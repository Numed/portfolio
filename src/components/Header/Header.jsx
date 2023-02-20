import { HeaderContainer, HeaderLogo, HeaderNav, HeaderLink } from "./styles";
import { headerLinks } from "./constants";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo href={headerLinks.HOME}>Numed</HeaderLogo>
      <HeaderNav>
        <HeaderLink href={headerLinks.ABOUT}>about me</HeaderLink>
        <HeaderLink href={headerLinks.SKILLS}>skills</HeaderLink>
        <HeaderLink href={headerLinks.PORTFOLIO}>portfolio</HeaderLink>
        <HeaderLink href={headerLinks.CONTACTS}>contact</HeaderLink>
      </HeaderNav>
    </HeaderContainer>
  );
};

export default Header;
