import React from 'react';

import Footer from '../components/presentation/Footer';
import CommunityGroups from '../components/CommunityGroups';
import Statistics from '../components/Statistics';

import logo from '../assets/img/logo.svg';

const HomePage = () => (
  <div className="HomePage">
    <main>
      <section className="bg-faded">
        <div className="container py-5">
          <img src={logo} alt="Kākā Database logo" className="logo" />
          <h1 className="mb-4">
            Kākā Database <small>Project</small>
          </h1>
          <p className="lead">
            The Kākā Database project aims to help Aotearoa/New Zealand's native kākā (
            <em>Nestor meridionalis</em>). The goal is for the project to be a multi-stakeholder
            community-led effort that enables the public to better engage with kākā conservation.
          </p>
        </div>
      </section>
      <section className="">
        <div className="container py-5">
          <h2>Statistics</h2>
          <Statistics />
        </div>
      </section>
      <section className="bg-light">
        <div className="container py-5">
          <h2>Community groups</h2>
          <CommunityGroups />
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default HomePage;
