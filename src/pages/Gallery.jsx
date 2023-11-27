import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import ContentGallery from '../components/content/ContentGallery';

const Gallery = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'GALLERY - TRAINING DOCUMENTATION'} />
      <ContentGallery />
      <Footer />
    </div>
  );
};

export default Gallery;
