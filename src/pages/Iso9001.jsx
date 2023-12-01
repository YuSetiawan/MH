import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import Content9001 from '../components/contentIso/Content9001';
import {HelmetPage} from '../components/HelmetPage';

const Iso9001 = () => {
  return (
    <>
      <HelmetPage
        title={'ISO 9001:2015 - Mutual Harmony Consulting'}
        content={
          'ISO 9001:2015 adalah suatu standar internasional untuk sistem manajemen Mutu (QMS). ISO 9001:2015 menetapkan persyaratan - persyaratan dan rekomendasi untuk desain dan penilaian dari suatu sistem manajemen mutu. ISO 9001:2015 bukan merupakan standar produk, karena tidak menyatakan persyaratan - persyaratan yang harus dipenuhi oleh sebuah produk (barang atau jasa). ISO 9001:2015 hanya merupakan standar sistem manajemen kualitas. Namun, bagaimanapun juga diharapkan bahwa produk yang dihasilkan dari suatu sistem manajemen kualitas internasional, akan berkualitas baik (standar).'
        }
        link={'/iso9001'}
        keyword={'artikel ISO 9001:2015, ISO 9001:2015, pelatihan iso ISO 9001:2015, artikel iso, iso, konsultasi iso, pelatihan iso, sertifikasi iso, iso surabaya, mh consulting'}
      />
      <div>
        <Navbar />
        <SubHeading children={'ISO 9001'} />
        <Content9001 />
        <Footer />
      </div>
    </>
  );
};

export default Iso9001;
