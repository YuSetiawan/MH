import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import ContentCdakb from '../components/content/ContentCdakb';
import {HelmetPage} from '../components/HelmetPage';

const Cdakb = () => {
  return (
    <>
      <HelmetPage
        title={'CDAKB - Mutual Harmony Consulting'}
        content={
          'CDAKB adalah Cara Disribusi Alat Kesehatan yang Baik adalah pedoman kegiatan distribusi dan jaminan mutu pengendalian pada alat kesehatan. CDAKB memberikan panduan bagi perusahaan penyalur/distributor alat-alat kesehatan temasuk didalamnya kegiatan pemesanan, penyimpanan, pengangkutan dan pendistribusian.'
        }
        link={'/cdakb'}
        keyword={'CDAKB, cdakb, Cara Disribusi Alat Kesehatan, artikel iso, iso, konsultasi iso, pelatihan iso, mh consulting'}
      />
      <div>
        <Navbar />
        <SubHeading children={'CDAKB'} />
        <ContentCdakb />
        <Footer />
      </div>
    </>
  );
};

export default Cdakb;
