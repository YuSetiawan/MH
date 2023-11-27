import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import Content9001 from '../components/contentIso/Content9001';

const Iso9001 = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'ISO 9001'} />
      <Content9001 />
      <Footer />
    </div>
  );
};

export default Iso9001;
