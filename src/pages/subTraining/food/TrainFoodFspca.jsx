import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import SubHeading from '../../../components/SubHeading';
import ContFoodFspca from '../../../components/contentTraining/food/ContFoodFspca';

const TrainFoodFspca = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'TRAINING - FOOD SAFETY: FSPCA (Hazard Analysis and Preventive Control for Human Food)'} />
      <ContFoodFspca />
      <Footer />
    </div>
  );
};

export default TrainFoodFspca;
