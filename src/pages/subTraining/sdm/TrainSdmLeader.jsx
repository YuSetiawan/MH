import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import SubHeading from '../../../components/SubHeading';
import ContSdmLeader from '../../../components/contentTraining/sdm/ContSdmLeader';

const TrainSdmLeader = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'TRAINING - SDM: Sinergy Building for Leader'} />
      <ContSdmLeader />
      <Footer />
    </div>
  );
};

export default TrainSdmLeader;
