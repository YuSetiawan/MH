import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import ContentTraining from '../components/content/ContentTraining';

const Training = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'TRAINING'} />
      <ContentTraining />
      <Footer />
    </div>
  );
};

export default Training;
