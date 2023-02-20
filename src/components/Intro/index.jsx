import {
  IntroButton,
  IntroSubtitle,
  IntroPosition,
  IntroTitle,
  IntroText,
  TitleSection,
  IntroContainer,
  IntroSeparator,
  IntroBackground,
} from "./styles";

const Intro = () => {
  return (
    <IntroContainer>
      <IntroText>
        <TitleSection>
          <IntroTitle>
            Hello, I'm <span>Eugene</span>
          </IntroTitle>
          <IntroSeparator />
          <IntroPosition>Frontend developer</IntroPosition>
        </TitleSection>
        <IntroSubtitle>
          A young and promising programmer from Ukraine
        </IntroSubtitle>
        <IntroButton>view more</IntroButton>
      </IntroText>
      <IntroBackground />
    </IntroContainer>
  );
};

export default Intro;
