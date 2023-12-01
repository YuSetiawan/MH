import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import ContentNews from '../components/content/ContentNews';
import {HelmetPage} from '../components/HelmetPage';

const News = () => {
  return (
    <>
      <HelmetPage
        title={' News - Mutual Harmony Consulting'}
        content={
          'Mutual Harmony Consulting menyediakan pelatihan ISO bersertifikasi resmi yang menyesuaikan kebutuhan perusahaan anda dengan harga terbaik. Berikut list pelatihan dan sertifikasi yang kami sediakan: ISO 9001, ISO 14001, ISO 45001,ISO 37001, ISO 17025, ISO 13485, ISO 31000, FCCA, CDAKB, HALAL, dan sebagainya.'
        }
        link={'/news'}
        keyword={'berita iso, artikel iso, iso, konsultasi iso, pelatihan iso, sertifikasi iso, iso surabaya, mh consulting'}
      />
      <div>
        <Navbar />
        <SubHeading children={'NEWS'} />
        <ContentNews />
        <Footer />
      </div>
    </>
  );
};

export default News;
