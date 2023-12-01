import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import ListSni from '../components/content/ListSni';
import {HelmetPage} from '../components/HelmetPage';

const Sni = () => {
  return (
    <>
      <HelmetPage
        title={' SNI - Mutual Harmony Consulting'}
        content={
          'Mutual Harmony Consulting menyediakan pelatihan ISO bersertifikasi resmi yang menyesuaikan kebutuhan perusahaan anda dengan harga terbaik. Berikut list pelatihan dan sertifikasi yang kami sediakan: ISO 9001, ISO 14001, ISO 45001,ISO 37001, ISO 17025, ISO 13485, ISO 31000, FCCA, CDAKB, HALAL, dan sebagainya.'
        }
        link={'/sni'}
        keyword={'berita iso, sertifikasi sni, sertifikasi sni surabaya, artikel iso, iso, konsultasi iso, pelatihan iso, sertifikasi iso, iso surabaya, mh consulting'}
      />
      <div>
        <Navbar />
        <SubHeading children={'SNI - LIST SNI PRODUCT BY MINISTRY OF INDUSTRY'} />
        <ListSni />
        <Footer />
      </div>
    </>
  );
};

export default Sni;
