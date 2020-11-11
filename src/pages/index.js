import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Overview, Contact, Projects, History } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Overview />
    <History />
    <Projects />
    <Contact />
  </Layout>
);
