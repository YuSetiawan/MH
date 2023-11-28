import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import SubHeading from '../../../components/SubHeading';
import ContFoodPersonal from '../../../components/contentTraining/food/ContFoodPersonal';

const TrainFoodPersonal = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'TRAINING - FOOD SAFETY: Personal Hygiene'} />
      <ContFoodPersonal />
      <Footer />
    </div>
  );
};

export default TrainFoodPersonal;
