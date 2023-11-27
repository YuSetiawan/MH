import React from 'react';
import Smeta from '../../assets/image/smeta.jpg';

const ContentSedex = () => {
  return (
    <article className="m-5">
      <h2 className="mb-4">SEDEX (SMETA)</h2>
      <p>
        Sedex, adalah organisasi non profit yang berbasis di London, Inggris, yang membuka keanggotaan pada perusahaan-perusahaan diseluruh dunia. <br />
        <br />
        Sedex adalah anggota organisasi bisnis yang berkomitmen untuk perbaikan berkelanjutan dari kinerja etis pada rantai pasok suppliernya. Perusahaan-perusahaan yang bergabung dengan sedex bisa menggunakan Sedex berbasis sistem,
        berpartisipasi pada Sedex organisasi, berpartisipasi dalam kerja kelompok-kelompok, jaringan dan menjalin keeratan dengan anggota sedex lainnya, menggunakan nilai dan pelayanan-pelayanan sedex.
        <br />
        <br />
        Sedex mengajak perusahaan-perusahaan anggota untuk melakukan pengelolaan secara efektif pada sisi etis dan bertanggung jawab secara praktis dari rantai pasok global, keterbukaan secara menyeluruh melalui pertukaran data.
      </p>
      <div className="text-center m-5">
        <img src={Smeta} alt="smeta" className="col-sm-6" />
      </div>
      <p>
        SMETA dirancang untuk memberikan keuntungan kepada pengecer dan supplier barang, mengurangi upaya duplikasi pada audit etika perdagangan. Perusahaan-perusahaan yang tidak menjadi anggota Sedex dapat dan mendorong menggunakan SMETA
        dengan baik.
        <br />
        <br />
        Sedex adalah platform yang komprehensif yang dapat membuat manajemen efektif dari rantai pasok global yang lengkap, menjadikan keuntungan bisnis yang sesungguhnya untuk organisasi anda.
        <br />
        Keuntungan menerapkan Sedex adalah:
        <br /> <br />
        1. Memperbaiki reputasi perusahaan
        <br />
        2. Memperoleh Keuntungan yang bersaing
        <br />
        3. Meminimalkan resiko
        <br />
        4. Efisiensi waktu dan uang
        <br /> <br />
        SMETA adalah audit prosedur yang mengkompilasi dari praktek yang baik dari teknik audit etika. SMETA bukan kode etik, sebuah metode baru atau proses sertifikasi.
        <br />
        Menggunakan SMETA, supplier dapat melaksanakan satu audit dan dapat membagikan kepada seluruh pelanggannya, daripada melaksanakan audit yang berbeda untuk masing-masing pelanggannya.
        <br /> <br />
        SMETA menggunakan metode ETI Code dan hukum lokal sebagai alat ukur dan mencakup 4 modul yaitu :
        <br /> <br />
        - Keselamatan dan Kesehatan Kerja
        <br />
        - Standar Perburuhan
        <br />
        - Standar Lingkungan
        <br />
        - Etika Bisnis
        <br />
      </p>
    </article>
  );
};

export default ContentSedex;
