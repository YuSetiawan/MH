import React from 'react';
import Navbar from '../components/Navbar';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import Content37001 from '../components/contentIso/Content37001';
import {HelmetPage} from '../components/HelmetPage';

const Iso37001 = () => {
  return (
    <>
      <HelmetPage
        title={' ISO 37001:2016 - Mutual Harmony Consulting'}
        content={
          'Penyuapan adalah tindakan memberikan atau meminta uang, barang, atau bentuk lain dari pemberi suap kepada penerima suap dengan maksud agar penerima suap memberikan kemudahan berupa tindakan atau kebijakan dalam wewenang penerima suap sesuai dengan kepentingan pemberi suap. Suap dapat membuat orang yang berhak kehilangan haknya, dan orang yang tidak berhak mendapatkannya. Suap adalah sesuatu yang sangat merusak tatanan masyarakat. Apabila jika suap telah menjadi kebiasaan atau tradisi, maka bisa menghancurkan sebuah negara. Yang menjadi korbannya ialah rakyat dan juga generasi penerus bangsa dengan kondisi negara yang carut marut. Suap seperti penyakit yang secara diam-diam menggerus keadilan dan kemanusiaan. Menurut Undang-undang nomor 20 tahun 2001 pemberantasan tindak pidana korupsi, disebutkan dalam pasal 5, 6, dan 7 bahwa pemberi suap dapat diberi hukuman penjara mulai dari 1 hingga 15 tahun tergantung pada jabatan oknum penerima suap. Dan menurut pasal 12 bahwa penerima suap dapat dihukum paling singkat 4-20 tahun penjara. Mengingat besarnya kerusakan yang bisa ditimbulkan oleh kegiatan suap terhadap tatanan masyarakat dan negara, maka Presiden Joko Widodo mengeluarkan Inpres No 10 tahun 2016 tentang Aksi Pencegahan dan Pemberantasan Korupsi. Menindaklanjuti Inpres tersebut, Badan Standardisasi Nasional (BSN) mengadopsi secara identik standar ISO 37001: 2016 menjadi SNI ISO 37001:2016 Sistem Manajemen Anti-Suap. SNI ISO 37001:2016 dapat digunakan untuk menanamkan budaya anti-suap dalam sebuah organisasi/institusi negara maupun swasta. Standar ini mendeteksi potensi penyuapan, sehingga organisas/institusii bisa melakukan pencegahan sejak dini. SNI ISO 37001:2016 membahas hal-hal sebagai berikut: Penyuapan di sektor publik, swasta, dan nirlaba; Penyuapan oleh organisasi; Penyuapan oleh personil organisasi yang bertindak atas nama organisasi dan atau keuntungan organisasi; Penyuapan oleh rekan bisnis organisasi yang bertindak atas nama organisasi atau keuntungan organisasi; Penyuapan kepada organisasi; Penyuapan kepada personil organisasi dalam kaitan dengan kegiatan organisasi; Penyuapan kepada rekan bisnis organisasi dalam kaitan dengan kegiatan organisasi;dan Penyuapan langsung dan tidak langsung (misalnya suap yang ditawarkan atau diterima melalui atau oleh pihak ketiga).'
        }
        link={'/iso37001'}
        keyword={'artikel ISO 37001:2016, ISO 37001:2016, pelatihan ISO 37001:2016, artikel iso, iso, konsultasi iso, pelatihan iso, sertifikasi iso, iso surabaya, mh consulting'}
      />
      <div>
        <Navbar />
        <SubHeading children={'ISO 37001'} />
        <Content37001 />
        <Footer />
      </div>
    </>
  );
};

export default Iso37001;
