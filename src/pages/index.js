import React from 'react';
import { Layout } from 'components/common';
import { Intro, Overview, Contact, Projects, History, Talent, Corporations } from 'components/landing';

export default () => (
  <Layout>
    <Intro />
    <Overview />
    <History />
    <Projects />
    <Corporations />
    <Talent />
    <Contact />
  </Layout>
);
