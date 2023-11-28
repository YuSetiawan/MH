import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import SubHeading from '../../../components/SubHeading';
import Contk3Mecha from '../../../components/contentTraining/k3/Contk3Mecha';

const Traink3Mecha = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'TRAINING - K3 & LINGKUNGAN: MECHANICAL SAFETY'} />
      <Contk3Mecha />
      <Footer />
    </div>
  );
};

export default Traink3Mecha;
