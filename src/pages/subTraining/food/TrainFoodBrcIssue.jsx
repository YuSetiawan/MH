import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import SubHeading from '../../../components/SubHeading';
import ContFoodBrc from '../../../components/contentTraining/food/ContFoodBrc';

const TrainFoodBrcIssue = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'TRAINING - FOOD SAFETY: BRC ISSUE 9 (Global Standard for Food Manufacturing)'} />
      <ContFoodBrc />
      <Footer />
    </div>
  );
};

export default TrainFoodBrcIssue;
