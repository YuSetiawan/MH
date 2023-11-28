import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SubHeading from '../../components/SubHeading';
import ContIso31 from '../../components/contentTraining/ContIso31';

const TrainIso31 = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'TRAINING - ISO 31000'} />
      <ContIso31 />
      <Footer />
    </div>
  );
};

export default TrainIso31;
