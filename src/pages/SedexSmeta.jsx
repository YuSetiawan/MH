import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import ContentSedex from '../components/content/ContentSedex';
import {HelmetPage} from '../components/HelmetPage';

const SedexSmeta = () => {
  return (
    <>
      <HelmetPage
        title={' SEDEX (SMETA) - Mutual Harmony Consulting'}
        content={
          'Sedex, adalah organisasi non profit yang berbasis di London, Inggris, yang membuka keanggotaan pada perusahaan-perusahaan diseluruh dunia. Sedex adalah anggota organisasi bisnis yang berkomitmen untuk perbaikan berkelanjutan dari kinerja etis pada rantai pasok suppliernya. Perusahaan-perusahaan yang bergabung dengan sedex bisa menggunakan Sedex berbasis sistem, berpartisipasi pada Sedex organisasi, berpartisipasi dalam kerja kelompok-kelompok, jaringan dan menjalin keeratan dengan anggota sedex lainnya, menggunakan nilai dan pelayanan-pelayanan sedex. Sedex mengajak perusahaan-perusahaan anggota untuk melakukan pengelolaan secara efektif pada sisi etis dan bertanggung jawab secara praktis dari rantai pasok global, keterbukaan secara menyeluruh melalui pertukaran data. SMETA dirancang untuk memberikan keuntungan kepada pengecer dan supplier barang, mengurangi upaya duplikasi pada audit etika perdagangan. Perusahaan-perusahaan yang tidak menjadi anggota Sedex dapat dan mendorong menggunakan SMETA dengan baik. Sedex adalah platform yang komprehensif yang dapat membuat manajemen efektif dari rantai pasok global yang lengkap, menjadikan keuntungan bisnis yang sesungguhnya untuk organisasi anda. Keuntungan menerapkan Sedex adalah: 1. Memperbaiki reputasi perusahaan, 2. Memperoleh Keuntungan yang bersaing, 3. Meminimalkan resiko, 4. Efisiensi waktu dan uang. SMETA adalah audit prosedur yang mengkompilasi dari praktek yang baik dari teknik audit etika. SMETA bukan kode etik, sebuah metode baru atau proses sertifikasi. Menggunakan SMETA, supplier dapat melaksanakan satu audit dan dapat membagikan kepada seluruh pelanggannya, daripada melaksanakan audit yang berbeda untuk masing-masing pelanggannya. SMETA menggunakan metode ETI Code dan hukum lokal sebagai alat ukur dan mencakup 4 modul yaitu : Keselamatan dan Kesehatan Kerja, Standar Perburuhan, Standar Lingkungan, dan Etika Bisnis'
        }
        link={'/sedexSmeta'}
        keyword={'SEDEX, SMETA, artikel SEDEX, artikel SMETA, berita iso, sertifikasi sni, sertifikasi sni surabaya, artikel iso, iso, konsultasi iso, pelatihan iso, sertifikasi iso, iso surabaya, mh consulting'}
      />
      <div>
        <Navbar />
        <SubHeading children={'SEDEX (SMETA)'} />
        <ContentSedex />
        <Footer />
      </div>
    </>
  );
};

export default SedexSmeta;
