import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import ContentContact from '../components/content/ContentContact';
import {HelmetPage} from '../components/HelmetPage';

const ContactUs = () => {
  return (
    <>
      <HelmetPage
        title={'Contact Information of MH Consulting'}
        content={'Informasi lebih lanjut bisa anda dapatkan dengan menghubungi kontak informasi pada laman ini.'}
        link={'/home'}
        keyword={'contact us, iso, konsultasi iso, pelatihan iso, kontak informasi,'}
      />

      <div>
        <Navbar />
        <SubHeading children={'CONTACT US'} />
        <ContentContact />
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
