import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import ContentGallery from '../components/content/ContentGallery';
import {HelmetPage} from '../components/HelmetPage';

const Gallery = () => {
  return (
    <>
      <HelmetPage
        title={'Gallery Pelatihan - Mutual Harmony Consulting'}
        content={
          'Gallery pelatihan yang dilakukan MH Consulting. Mutual Harmony Consulting menyediakan pelatihan ISO bersertifikasi resmi yang menyesuaikan kebutuhan perusahaan anda dengan harga terbaik. Berikut list pelatihan dan sertifikasi yang kami sediakan: ISO 9001, ISO 14001, ISO 45001,ISO 37001, ISO 17025, ISO 13485, ISO 31000, FCCA, CDAKB, HALAL, dan sebagainya.'
        }
        link={'/gallery'}
        keyword={'gallery, dokumentasi, artikel iso, iso, konsultasi iso, pelatihan iso, sertifikasi iso, iso surabaya, mh consulting'}
      />
      <div>
        <Navbar />
        <SubHeading children={'GALLERY - TRAINING DOCUMENTATION'} />
        <ContentGallery />
        <Footer />
      </div>
    </>
  );
};

export default Gallery;
