import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SubHeading from '../../components/SubHeading';
import ContIso13 from '../../components/contentTraining/ContIso13';

const TrainIso13 = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'TRAINING - ISO 13485'} />
      <ContIso13 />
      <Footer />
    </div>
  );
};

export default TrainIso13;
