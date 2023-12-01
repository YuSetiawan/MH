import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import Content22000 from '../components/contentIso/Content22000';
import {HelmetPage} from '../components/HelmetPage';

const Iso22000 = () => {
  return (
    <>
      <HelmetPage
        title={' ISO 22000:2018 - Mutual Harmony Consulting'}
        content={
          'ISO 22000:2018 adalah suatu standar internasional yang menggabungkan dan melengkapi elemen utama ISO 9001, dalam hal penyediaan suatu kerangka kerja yang efektif untuk pengembangan, penerapan, dan peningkatan berkesinambungan dari Sistem Manajemen Keamanan Pangan (SMKP). ISO 22000:2018 menjaga keselarasan dengan sistem manajemen lainnya, misalnya ISO 9001 dan ISO 14001, untuk memastikan keefektifan integrasi sistem-sistem tersebut. Manfaat Penerapan dan Sertifikasi ISO 22000 : • Menunjukkan suatu komitmen yang riil ke keselamatan makanan yang global dapat mengubah bentuk Citra perusahaan anda menjadi lebih baik dan juga sebagai suatu alat, sebagai jaminan terhadap keselamatan dan mutu organisasi anda; • Memastikan pemenuhan dengan semua perundang-undangan keselamatan makanan dan mengurangi resiko dari hukum; • Karyawan mengetahui tentang HACCP dan manfaatnya; • Mengetahui faktor-faktor yang berpengaruh terhadap kebersihan makanan selama produksi; • Mengetahui prinsip higienis dan pedoman untuk pengendaliannya; • Mengetahui cara pengendalian atau tindakan terhadap penyimpangan yang terjadi; • Terjaminnya makanan dan minuman yang layak dikonsumsi; • Terpeliharanya kepercayaan pelanggan international; • Meningkatnya pengetahuan akan higienisnya makanan kepada semua karyawan; dan • Secara tidak langsung membantu masyarakat dalam pengadaan makanan yang higienis.'
        }
        link={'/iso22000'}
        keyword={'artikel ISO 22000:2018, ISO 22000:2018, pelatihan ISO 22000:2018, artikel iso, iso, konsultasi iso, pelatihan iso, sertifikasi iso, iso surabaya, mh consulting'}
      />
      <div>
        <Navbar />
        <SubHeading children={'ISO 22000'} />
        <Content22000 />
        <Footer />
      </div>
    </>
  );
};

export default Iso22000;
