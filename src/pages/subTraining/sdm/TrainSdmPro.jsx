import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import SubHeading from '../../../components/SubHeading';
import ContSdmProb from '../../../components/contentTraining/sdm/ContSdmProb';

const TrainSdmPro = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'TRAINING - SDM: Problem Solving'} />
      <ContSdmProb />
      <Footer />
    </div>
  );
};

export default TrainSdmPro;
