import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import SubHeading from '../../../components/SubHeading';
import ContFoodFssc from '../../../components/contentTraining/food/ContFoodFssc';

const TrainFoodFssc = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'TRAINING - FOOD SAFETY: FSSC VER 5.1 (Food Safety System Certificate)'} />
      <ContFoodFssc />
      <Footer />
    </div>
  );
};

export default TrainFoodFssc;
