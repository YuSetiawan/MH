import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import Content45001 from '../components/contentIso/Content45001';

const Iso45001 = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'ISO 45001 / SMK3 PP 50'} />
      <Content45001 />
      <Footer />
    </div>
  );
};

export default Iso45001;
