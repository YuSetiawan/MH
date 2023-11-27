import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import Content22000 from '../components/contentIso/Content22000';

const Iso22000 = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'ISO 22000'} />
      <Content22000 />
      <Footer />
    </div>
  );
};

export default Iso22000;
