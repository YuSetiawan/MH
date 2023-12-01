import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import Content14001 from '../components/contentIso/Content14001';
import {HelmetPage} from '../components/HelmetPage';

const Iso14001 = () => {
  return (
    <>
      <HelmetPage
        title={' ISO 14001 : 2015 - Mutual Harmony Consulting'}
        content={
          'Sistem Manajemen Lingkungan ISO 14001 : 2015 merupakan sebuah standar internasional yang berkaitan dengan pengelolaan lingkungan untuk membantu organisasi meminimalkan pengaruh negatif kegiatan operasional mereka terhadap lingkungan yang mencakup udara, air, suara, atau tanah. Sistem Manajemen Lingkungan merupakan bagian integral dari sistem manajemen perusahaan secara keseluruhan yang terdiri dari satu set pengaturan-pengaturan secara sistematis yang meliputi struktur organisasi, tanggung jawab, prosedur, proses, serta sumber daya dalam upaya mewujudkan kebijakan lingkungan yang telah digariskan oleh perusahaan. '
        }
        link={'/iso14001'}
        keyword={'artikel ISO 14001 : 2015, ISO 14001 : 2015, pelatihan ISO 14001 : 2015, artikel iso, iso, konsultasi iso, pelatihan iso, sertifikasi iso, iso surabaya, mh consulting'}
      />
      <div>
        <Navbar />
        <SubHeading children={'ISO 14001'} />
        <Content14001 />
        <Footer />
      </div>
    </>
  );
};

export default Iso14001;
