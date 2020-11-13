import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import businessman from 'assets/illustrations/businessman.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export function Talent() {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="talent">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={businessman} alt="We Are Cerqit" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>For Talent</h1>
          <p>
          Our passion is to help you build your career.
          With services like career coaching, resume review, and interview prep, we grow with you.
          If your next step is Entry Level Support Specialist or Chief Technology Officer, we're there to help you meet your goals.
          </p>
          <Button as={AnchorLink} href="#contact">
            Join the Family
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
