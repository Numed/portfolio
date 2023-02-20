import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
  padding: 30px 60px;
`;

export const HeaderLogo = styled.a`
  font-weight: 500;
  font-size: 28px;
  line-height: 39px;
  letter-spacing: 1.2px;
  color: #eeeeee;
  text-shadow: -4px 4px 12px rgba(0, 0, 0, 0.25);
`;

export const HeaderNav = styled.nav`
  list-style: none;
  display: flex;
  width: 33.3%;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLink = styled.a`
  color: #eeeeee;
  letter-spacing: 0.05em;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
`;
