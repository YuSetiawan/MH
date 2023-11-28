import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import SubHeading from '../../../components/SubHeading';
import ContIso14 from '../../../components/contentTraining/iso/ContIso14';

const TrainIso14 = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'TRAINING - ISO 14001'} />
      <ContIso14 />
      <Footer />
    </div>
  );
};

export default TrainIso14;
