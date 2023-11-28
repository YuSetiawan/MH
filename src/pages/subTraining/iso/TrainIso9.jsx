import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import SubHeading from '../../../components/SubHeading';
import ContIso9 from '../../../components/contentTraining/iso/ContIso9';

const TrainIso9 = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'TRAINING - ISO 9001'} />
      <ContIso9 />
      <Footer />
    </div>
  );
};

export default TrainIso9;
