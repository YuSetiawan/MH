import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import SubHeading from '../../../components/SubHeading';
import ContIso19 from '../../../components/contentTraining/iso/ContIso19';

const TrainIso19 = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'TRAINING - ISO 19011'} />
      <ContIso19 />
      <Footer />
    </div>
  );
};

export default TrainIso19;
