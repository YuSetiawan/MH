import React from 'react';
import Navbar from '../../components/Navbar';
import SubHeading from '../../components/SubHeading';
import Footer from '../../components/Footer';
import ContArt23 from '../../components/contentArtikel/ContArt23';

const Artikel2 = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'ARTIKEL - 23 JUNI 2022'} />
      <ContArt23 />
      <Footer />
    </div>
  );
};

export default Artikel2;
