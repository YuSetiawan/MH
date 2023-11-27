import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import ContentFcca from '../components/content/ContentFcca';

const Fcca = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'FCCA'} />
      <ContentFcca />
      <Footer />
    </div>
  );
};

export default Fcca;
