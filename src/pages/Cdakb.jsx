import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import ContentCdakb from '../components/content/ContentCdakb';

const Cdakb = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'CDAKB'} />
      <ContentCdakb />
      <Footer />
    </div>
  );
};

export default Cdakb;
