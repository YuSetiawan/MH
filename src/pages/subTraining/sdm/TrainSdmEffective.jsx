import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import SubHeading from '../../../components/SubHeading';
import ContSdmEffective from '../../../components/contentTraining/sdm/ContSdmEffective';

const TrainSdmEffective = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'TRAINING - SDM: Effective Supervisory Skill'} />
      <ContSdmEffective />
      <Footer />
    </div>
  );
};

export default TrainSdmEffective;
