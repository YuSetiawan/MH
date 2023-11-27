import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import Content14001 from '../components/contentIso/Content14001';

const Iso14001 = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'ISO 14001'} />
      <Content14001 />
      <Footer />
    </div>
  );
};

export default Iso14001;
