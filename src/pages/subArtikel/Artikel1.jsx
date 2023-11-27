import React from 'react';
import Navbar from '../../components/Navbar';
import SubHeading from '../../components/SubHeading';
import Footer from '../../components/Footer';
import ContArt24 from '../../components/contentArtikel/ContArt24';

const Artikel1 = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'ARTIKEL - 24 JUNI 2022'} />
      <ContArt24 />
      <Footer />
    </div>
  );
};

export default Artikel1;
