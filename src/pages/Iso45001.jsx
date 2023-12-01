import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import Content45001 from '../components/contentIso/Content45001';
import {HelmetPage} from '../components/HelmetPage';

const Iso45001 = () => {
  return (
    <>
      <HelmetPage
        title={' ISO ISO 45001:2018 dan SMK3 PP 50 Tahun 2012  - Mutual Harmony Consulting'}
        content={
          'Organisasi dapat lebih baik dengan merujuk dan menerapkan Sistem Manajemen Keselamatan dan Kesehatan Kerja ISO 45001:2018 dan SMK3 PP 50 Tahun 2012 untuk pengeloloaan Keselamatan dan Kesehatan Kerja di organisasi. Sistem Manajemen Keselamatan dan Kesehatan Kerja ISO 45001:2018 dan SMK3 PP 50 Tahun 2012menyediakan kerangka bagi organisasi untuk mengidentifikasi bahaya dan penilaian resiko dan pengendaliannya serta melihat masalah seperti pengalokasian sumberdaya, tugas dan tanggung jawab, dan mengevaluasi sistem yang ada, prosedur dan proses secara sistematis serta mencapai peningkatan yang berkelanjutan dan unjuk kerja Keselamatan dan Kesehatan Kerja melalui manajemen pengelolaan bahaya dan resiko yang efektif. Standar ISO 45001:2018 dan SMK3 PP 50 Tahun 2012 ini merupakan standar terbaru dari ISO Series yang dikeluarkan oleh badan iso.org dengan tujuan memberikan kemudahan kepada organisasi dalam menerapkan Sistem Manajemen Terpadu. Untuk mendapatkan sertifikasi sistem manajemen keselamatan dan kesehatan kerja mereka. Tujuan utama dari standar sistem manajemen keselamatan dan kesehatan kerja ini adalah untuk mengontrol risiko dan melakukan tindakan pencegahan. Perbedaan pertama berkaitan dengan struktur. ISO 45001 didasarkan pada ISO Guide 83 (“Annex SL”) yang menetapkan struktur tingkat tinggi yang umum, teks dan istilah serta definisi umum untuk sistem manajemen (misalnya ISO 9001 , ISO 14001, dll.). Struktur ini bertujuan untuk memfasilitasi proses implementasi dan integrasi beberapa sistem manajemen secara harmonis, terstruktur dan efisien. Manfaat Penerapan ISO 45001:2018 danSMK3 PP 50 Tahun 2012 memberikan beberapa keuntungan bagi organisasi, diantaranya : Meningkatkan kesadaran akan bahaya dan risiko dengan pemenuhan persyaratan Peraturan Pemerintah; Lingkungan kerja yang aman, menurunkan claim asuransi dan menurunkan biaya kehilangan jam kerja; Memenuhi kewajiban undang-undang dengan menunjukkan kesungguhan dalam mengelola risiko; Memiliki image perusahaan yang baik dimata pemerintah, pelanggan, karyawan dan masyarakat umumnya; danMenurunkan biaya akibat kecelakaan dan penyakit akibat kerja.'
        }
        link={'/iso45001'}
        keyword={
          'artikel ISO ISO 45001:2018 dan SMK3 PP 50 Tahun 2012 , ISO ISO 45001:2018 dan SMK3 PP 50 Tahun 2012 , pelatihan ISO ISO 45001:2018 dan SMK3 PP 50 Tahun 2012 , artikel iso, iso, konsultasi iso, pelatihan iso, sertifikasi iso, iso surabaya, mh consulting'
        }
      />
      <div>
        <Navbar />
        <SubHeading children={'ISO 45001 / SMK3 PP 50'} />
        <Content45001 />
        <Footer />
      </div>
    </>
  );
};

export default Iso45001;
