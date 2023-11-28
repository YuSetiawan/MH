import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import SubHeading from '../../../components/SubHeading';
import ContFoodIso from '../../../components/contentTraining/food/ContFoodIso';

const TrainFoodIso = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'TRAINING - FOOD SAFETY: ISO 22000:2018 (Sistem Manajemen Keamanan Pangan)'} />
      <ContFoodIso />
      <Footer />
    </div>
  );
};

export default TrainFoodIso;
