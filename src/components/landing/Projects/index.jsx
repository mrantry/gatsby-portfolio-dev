import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card } from 'components/common';
import { Wrapper, Grid, Item, Content, Icon } from './styles';
import agreement from 'assets/illustrations/agreement.svg';
import people from 'assets/illustrations/people.svg';
import peopleSearch from 'assets/illustrations/people-search.svg';
import chat from 'assets/illustrations/work-chat.svg';
import contract from 'assets/illustrations/contract.svg';
import invest from 'assets/illustrations/invest.svg';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const cards = [
    {
      text: "Results Over Profits",
      description: "We do our best to deliver the best talent to the best companies.",
      iconSrc: peopleSearch
    },
    {
      text: "People Over Process",
      description: "Cerqit will never make a placement that we don't believe in 100%.",
      iconSrc: people
    },
    {
      text: "Open and Honest Communication",
      description: "We provide honest assessments and sound advice on all things IT career",
      iconSrc: chat
    },
    {
      text: "Always Do Right By The Client",
      description: "We work with our clients to determine the best solutions for IT talent sourcing.",
      iconSrc: contract
    },
    {
      text: "Invest in People",
      description: "Cerqit stands behind their people and are here to support them through every career move",
      iconSrc: invest
    },
    {
      text: "Build Strong Relationships",
      description: "Whether this is your 2nd job or your 22nd job, we're here for your career, not just a contract",
    },
  ]
  return (
    <Wrapper as={Container} id="values">
      <h2>Our Values</h2>
      <Grid>
        {cards.map((c, i) => (
          <Item key={i} as="a" target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
              <Content>
                <Icon src={c.iconSrc || agreement} alt='Our Values Set Us Apart' />
                <p>{c.description}</p>
                <h3>{c.text}</h3>
              </Content>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
