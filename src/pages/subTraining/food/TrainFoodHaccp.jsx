import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import SubHeading from '../../../components/SubHeading';
import ContFoodHaccp from '../../../components/contentTraining/food/ContFoodHaccp';

const TrainFoodHaccp = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'TRAINING - FOOD SAFETY: HACCP (Hazard Critical Control Point)'} />
      <ContFoodHaccp />
      <Footer />
    </div>
  );
};

export default TrainFoodHaccp;
