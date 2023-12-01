import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import ContentMenuArt from '../components/content/ContentMenuArt';
import {HelmetPage} from '../components/HelmetPage';

const ArtikelMenu = () => {
  return (
    <>
      <HelmetPage
        title={'Artikel by Mutual Harmony Consulting'}
        content={
          'Artikel terkini mengenai aktifitas pelatihan MH Consulting. Konsultasikan pelatihan ISO perusahaan anda dengan MH Consulting. Mutual Harmony Consulting berdiri pada tahun 2010 dilatar belakangi akan pentingnya dan bernilainya peranan sumber daya manusia.'
        }
        link={'/artikel'}
        keyword={'artikel iso, iso, konsultasi iso, pelatihan iso, mh consulting'}
      />
      <div>
        <Navbar />
        <SubHeading children={'MENU ARTIKEL'} />
        <ContentMenuArt />
        <Footer />
      </div>
    </>
  );
};

export default ArtikelMenu;
