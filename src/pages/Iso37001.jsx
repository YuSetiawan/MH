import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import Content37001 from '../components/contentIso/Content37001';

const Iso37001 = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'ISO 37001'} />
      <Content37001 />
      <Footer />
    </div>
  );
};

export default Iso37001;
