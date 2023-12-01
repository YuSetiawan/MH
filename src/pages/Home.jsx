import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/contentHome/Banner';
import Body from '../components/contentHome/Body';
import {HelmetPage} from '../components/HelmetPage';

const Home = () => {
  return (
    <>
      <HelmetPage
        title={'Mutual Harmony Consulting'}
        content={'Konsultasikan pelatihan ISO perusahaan anda dengan MH Consulting. Mutual Harmony Consulting berdiri pada tahun 2010 dilatar belakangi akan pentingnya dan bernilainya peranan sumber daya manusia.'}
        link={'/home'}
        keyword={'pelatihan iso surabaya, sertifikasi surabaya, iso surabaya, sertifikasi iso, sertifikasi iso, iso, konsultasi iso, pelatihan iso, mh consulting'}
      />

      <div>
        <Navbar />
        <Banner />
        <Body />
        <Footer />
      </div>
    </>
  );
};

export default Home;
