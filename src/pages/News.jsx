import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import ContentNews from '../components/content/ContentNews';

const News = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'NEWS'} />
      <ContentNews />
      <Footer />
    </div>
  );
};

export default News;
