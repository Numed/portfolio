import styled from "styled-components";
import bg from "../../img/introBg.png";

export const IntroContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 150px 0 0 80px;
`;

export const IntroText = styled.div`
  width: 100%;
  height: auto;
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: end;
`;

export const IntroTitle = styled.h2`
  color: #00adb5;
  font-weight: 500;
  font-size: 40px;
  line-height: 49px;
  width: 200px;

  span {
    font-size: 48px;
    line-height: 58.51px;
    color: #ffffff;
  }
`;

export const IntroSeparator = styled.span`
  height: 95px;
  border-right: 2.5px solid #eeeeee;
  margin: 0 15px;
`;

export const IntroPosition = styled.h2`
  font-weight: 500;
  font-size: 46px;
  line-height: 56px;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  color: #00adb5;
  text-shadow: -4px 4px 12px rgba(0, 0, 0, 0.25);
`;

export const IntroSubtitle = styled.p`
  margin-top: 15px;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: rgba(238, 238, 238, 0.5);
  text-shadow: -4px 4px 12px rgba(0, 0, 0, 0.25);
`;

export const IntroButton = styled.button`
  width: 195px;
  height: 50px;
  font-weight: 500;
  border: 1px solid transparent;
  border-radius: 30px;
  background-image: linear-gradient(#393e46, #393e46),
    linear-gradient(267deg, #00adb5 0%, rgba(238, 238, 238, 0.6) 100%);

  background-origin: border-box;
  background-clip: content-box, border-box;

  box-shadow: -4px 4px 12px rgba(0, 0, 0, 0.25);
  margin-top: 35px;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  color: #eeeeee;
  text-shadow: -4px 4px 12px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export const IntroBackground = styled.div`
  position: fixed;
  width: 50%;
  height: 100%;
  top: 0;
  right: 0;
  background: url(${bg}) no-repeat center;
  opacity: 0.5;
  mix-blend-mode: lighten;
`;
