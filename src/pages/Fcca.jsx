import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import ContentFcca from '../components/content/ContentFcca';
import {HelmetPage} from '../components/HelmetPage';

const Fcca = () => {
  return (
    <>
      <HelmetPage
        title={'FCCA - Mutual Harmony Consulting'}
        content={
          'Wal-mart telah meminta semua pemasok baru dan yang sudah ada untuk berpartisipasi dalam program FCCA. Program ini berfokus pada penilaian khusus untuk semua pemasok dan fasilitas manufaktur pemasok. Ini termasuk semua fasilitas pihak ketiga dan pengemasan, untuk memastikan bahwa mereka mematuhi standar Wal-Mart. Ini termasuk: Fasilitas Pabrik dan Lingkungan, Kalibrasi dan Pemeliharaan Mesin, Sistem Manajemen Mutu, Kontrol Bahan Masuk, Pemasok & Sub-kontraktor, Kontrol Proses dan Produksi, Pengujian internal, Inspeksi Akhir, dan Sumber Daya dan Pelatihan Orang'
        }
        link={'/fcca'}
        keyword={'FCCA, fcca, Walmart, artikel iso, iso, konsultasi iso, pelatihan iso, sertifikasi iso, iso surabaya, mh consulting'}
      />
      <div>
        <Navbar />
        <SubHeading children={'FCCA'} />
        <ContentFcca />
        <Footer />
      </div>
    </>
  );
};

export default Fcca;
