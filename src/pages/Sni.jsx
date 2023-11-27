import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import ListSni from '../components/content/ListSni';

const Sni = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'SNI - LIST SNI PRODUCT BY MINISTRY OF INDUSTRY'} />
      <ListSni />
      <Footer />
    </div>
  );
};

export default Sni;
