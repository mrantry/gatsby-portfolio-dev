import React from 'react';
import { Layout } from 'components/common';
import { Intro, Overview, Contact, Projects, History } from 'components/landing';

export default () => (
  <Layout>
    <Intro />
    <Overview />
    <History />
    <Projects />
    <Contact />
  </Layout>
);
