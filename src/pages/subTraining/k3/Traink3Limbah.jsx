import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import SubHeading from '../../../components/SubHeading';
import Contk3Limbah from '../../../components/contentTraining/k3/Contk3Limbah';

const Traink3Limbah = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'TRAINING - K3 & LINGKUNGAN: PENANGANAN LIMBAH B3'} />
      <Contk3Limbah />
      <Footer />
    </div>
  );
};

export default Traink3Limbah;
