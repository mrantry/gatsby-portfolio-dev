import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import security from 'assets/illustrations/security.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export function Overview() {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={security} alt="We Are Cerqit" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>Overview</h1>
          <p>
          Cerqit is a US based IT security and solutions company that services a broad range of medium and large businesses.  
          Information security and data integrity are the focal points of every client. 
          Implementing both on-premise and cloud based solutions, Cerqit delivers customer-specific programs that keep their systems secure from the start.
          </p>
          <Button as={AnchorLink} href="#contact">
            Work with us
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
