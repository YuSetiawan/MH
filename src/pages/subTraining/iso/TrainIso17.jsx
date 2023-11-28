import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import SubHeading from '../../../components/SubHeading';
import ContIso17 from '../../../components/contentTraining/iso/ContIso17';

const TrainIso17 = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'TRAINING - ISO 17025'} />
      <ContIso17 />
      <Footer />
    </div>
  );
};

export default TrainIso17;
