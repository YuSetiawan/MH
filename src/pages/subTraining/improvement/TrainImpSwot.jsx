import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import SubHeading from '../../../components/SubHeading';
import ContImpSwot from '../../../components/contentTraining/improvement/ContImpSwot';

const TrainImpSwot = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'TRAINING - IMPROVEMENT: SWOT Analysis Training'} />
      <ContImpSwot />
      <Footer />
    </div>
  );
};

export default TrainImpSwot;
