import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import SubHeading from '../../../components/SubHeading';
import ContIso45 from '../../../components/contentTraining/iso/ContIso45';

const TrainIso45 = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'TRAINING - ISO 45001'} />
      <ContIso45 />
      <Footer />
    </div>
  );
};

export default TrainIso45;
