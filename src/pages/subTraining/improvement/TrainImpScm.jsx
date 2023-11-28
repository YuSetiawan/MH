import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import SubHeading from '../../../components/SubHeading';
import ContImpScm from '../../../components/contentTraining/improvement/ContImpScm';

const TrainImpScm = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'TRAINING - IMPROVEMENT: SCM (Supply Chain Management)'} />
      <ContImpScm />
      <Footer />
    </div>
  );
};

export default TrainImpScm;
