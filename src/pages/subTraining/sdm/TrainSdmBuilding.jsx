import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import SubHeading from '../../../components/SubHeading';
import ContSdmBuilding from '../../../components/contentTraining/sdm/ContSdmBuilding';

const TrainSdmBuilding = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'TRAINING - SDM: Team Building'} />
      <ContSdmBuilding />
      <Footer />
    </div>
  );
};

export default TrainSdmBuilding;
