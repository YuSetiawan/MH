import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import Content27001 from '../components/contentIso/Content27001';
import {HelmetPage} from '../components/HelmetPage';

const Iso27001 = () => {
  return (
    <>
      <HelmetPage
        title={' ISO 27001 - Mutual Harmony Consulting'}
        content={
          'ISO 27001 adalah suatu standar internasional untuk Sistem Manajemen Kemanan Informasi(SMKI) sebagian besar sebelumnya diangkat berdasarkan BS 7799 yang umum digunakan sejak tahun 1995 mengenai pengelolaan keamanan informasi.ISO 27001 menyediakan kerangka kerja untuk netralitas penggunaan tehnologi, netralitas sistem manajemen pengelolaan rekanan yang memungkinkan suatu organisasi memastikan bahwa pengukuran keamanan informasi adalah efektif. Hal ini termasuk kemampuan mengakses data secara berkelanjutan, adanya kerahasiaan dan integritas atas informasi yang dimilikinya dan kebutuhan pihak-pihak yang berkepentingan demikian pula dengan kesesuaian hukum. ISO 27001 disusun agar mudah saling melengkapi dengan standar sistem manajemen lainnya seperti ISO 9001 dan ISO 14001. Meskipun beberapa klausula tertentu berbeda, secara umumelemen-elemen yang ada termasuk dokumentasi, persyaratan audit dan tinjauan manajemen,memungkinkan suatu organisasi mengembangkan secara lebih luas integrasi sistem manajemen. Meskipun komunikasi moderen memerlukan suatuperantara berarti bahwa sebagian terbesar sistem ISMS diutamakan pada ICT, ISO 27001 adalahpenerapan yang seimbang pada bentuk-bentuk informasi, seperti catatancatatan, gambar-gambar, dan percakapan-percakapan yang tersaji dalam bentuk kertas'
        }
        link={'/iso27001'}
        keyword={'artikel ISO 27001, ISO 27001, pelatihan ISO 27001, artikel iso, iso, konsultasi iso, pelatihan iso, sertifikasi iso, iso surabaya, mh consulting'}
      />
      <div>
        <Navbar />
        <SubHeading children={'Iso27001'} />
        <Content27001 />
        <Footer />
      </div>
    </>
  );
};

export default Iso27001;
