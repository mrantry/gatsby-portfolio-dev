import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export function History() {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Details theme={theme}>
          <h1>History</h1>
          <p>
          Founded in 2003, our St Louis based company has serviced clients nationwide in a broad range of industries ranging from other technology firms to FMCG companies.
          </p>
          <Button as={AnchorLink} href="#contact">
            Join the Family
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="We Are Cerqit" />
        </Thumbnail>
      </SkillsWrapper>
    </Wrapper>
  );
};
