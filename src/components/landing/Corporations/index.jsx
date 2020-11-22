import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import deal from 'assets/illustrations/business_deal.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export function Corporations() {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="corporations">
      <SkillsWrapper as={Container}>
        <Details theme={theme}>
          <h1>For Corporations</h1>
          <p>
          After several years leading recruitment, it became clear that attracting and hiring good people was just one piece of a larger puzzle. 
          To hire good people you need to become good at attraction, selection, onboarding, retention and engagement otherwise you lose your talent somewhere along the way.
          Whether you're looking for IT Security, Architecture, Development, QA, or support, our talent will help you achieve your business goals.
          </p>
          <Button as={AnchorLink} href="#contact">
            Hire Talent
          </Button>
        </Details>
        <Thumbnail>
          <img src={deal} alt="We Are Cerqit" />
        </Thumbnail>
      </SkillsWrapper>
    </Wrapper>
  );
};
