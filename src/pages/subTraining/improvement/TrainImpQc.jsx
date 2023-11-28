import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import SubHeading from '../../../components/SubHeading';
import ContImpQc from '../../../components/contentTraining/improvement/ContImpQc';

const TrainImpQc = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'TRAINING - IMPROVEMENT: Dasar-dasar QC, SPC & QC 7 Tools'} />
      <ContImpQc />
      <Footer />
    </div>
  );
};

export default TrainImpQc;
