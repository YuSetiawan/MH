import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import ContentMenuArt from '../components/content/ContentMenuArt';

const ArtikelMenu = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'MENU ARTIKEL'} />
      <ContentMenuArt />
      <Footer />
    </div>
  );
};

export default ArtikelMenu;
