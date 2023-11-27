import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import ContentContact from '../components/content/ContentContact';

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <SubHeading children={'CONTACT US'} />
      <ContentContact />
      <Footer />
    </div>
  );
};

export default ContactUs;
