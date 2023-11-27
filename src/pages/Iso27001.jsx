import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import Content27001 from '../components/contentIso/Content27001';

const Iso27001 = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'Iso27001'} />
      <Content27001 />
      <Footer />
    </div>
  );
};

export default Iso27001;
