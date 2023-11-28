import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import SubHeading from '../../../components/SubHeading';
import ContImpPpic from '../../../components/contentTraining/improvement/ContImpPpic';

const TrainImpPpic = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'TRAINING - IMPROVEMENT: PPIC (Production Planning & Inventory Control)'} />
      <ContImpPpic />
      <Footer />
    </div>
  );
};

export default TrainImpPpic;
