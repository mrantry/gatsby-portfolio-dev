import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details } from './styles';
import social from './social.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedin } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Cerqit</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()}
        </span>
      </Details>
      <Links>
        <FontAwesomeIcon icon={["fas", "linkedin"]} />
      </Links>
    </Flex>
  </Wrapper>
);
