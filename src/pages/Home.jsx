import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/contentHome/Banner';
import Body from '../components/contentHome/Body';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
