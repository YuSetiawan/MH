import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import ContentTraining from '../components/content/ContentTraining';
import {HelmetPage} from '../components/HelmetPage';

const Training = () => {
  return (
    <>
      <HelmetPage
        title={'Training Program by Mutual Harmony Consulting'}
        content={
          'Mutual Harmony Consulting menyediakan pelatihan ISO bersertifikasi resmi yang menyesuaikan kebutuhan perusahaan anda dengan harga terbaik. Berikut list pelatihan dan sertifikasi yang kami sediakan: ISO 9001, ISO 14001, ISO 45001,ISO 37001, ISO 17025, ISO 13485, ISO 31000, FCCA, CDAKB, HALAL, dan sebagainya.'
        }
        link={'/training'}
        keyword={
          'iso, iso surabaya, sertifikasi iso, konsultasi iso, training iso, pelatihan iso, ISO 9001, ISO 14001, ISO 45001,ISO 37001, ISO 17025, ISO 13485, ISO 31000, halal, sertifikasi halal, cdakb, fcca, sertifikasi halal surabaya'
        }
      />
      <div>
        <Navbar />
        <SubHeading children={'TRAINING'} />
        <ContentTraining />
        <Footer />
      </div>
    </>
  );
};

export default Training;
