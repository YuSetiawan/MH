import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import ContentSedex from '../components/content/ContentSedex';

const SedexSmeta = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'SEDEX (SMETA)'} />
      <ContentSedex />
      <Footer />
    </div>
  );
};

export default SedexSmeta;
