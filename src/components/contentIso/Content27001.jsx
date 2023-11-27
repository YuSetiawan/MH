import React from 'react';
import cyber from '../../assets/image/Cyber-Security-The-three-pillar-approach-Processes-are-crucial_1680x645_tcm8-162897.jpg';

const Content27001 = () => {
  return (
    <article className="m-5">
      <h2 className="mb-3">ISO 27001</h2>
      <div className="text-center">
        <img src={cyber} alt="quality" className="col-10" />
      </div>
      <p className="mt-3">
        <b>Apa itu ISO 27001?</b>
        <br />
        <br />
        ISO 27001 adalah suatu standar internasional untuk Sistem Manajemen Kemanan Informasi(SMKI) sebagian besar sebelumnya diangkat berdasarkan BS 7799 yang umum digunakan sejak tahun 1995 mengenai pengelolaan keamanan informasi.ISO
        27001 menyediakan kerangka kerja untuk netralitas penggunaan tehnologi, netralitas sistem manajemen pengelolaan rekanan yang memungkinkan suatu organisasi memastikan bahwa pengukuran keamanan informasi adalah efektif. Hal ini
        termasuk kemampuan mengakses data secara berkelanjutan, adanya kerahasiaan dan integritas atas informasi yang dimilikinya dan kebutuhan pihak-pihak yang berkepentingan demikian pula dengan kesesuaian hukum.
        <br />
        <br />
        ISO 27001 disusun agar mudah saling melengkapi dengan standar sistem manajemen lainnya seperti ISO 9001 dan ISO 14001. Meskipun beberapa klausula tertentu berbeda, secara umumelemen-elemen yang ada termasuk dokumentasi, persyaratan
        audit dan tinjauan manajemen,memungkinkan suatu organisasi mengembangkan secara lebih luas integrasi sistem manajemen. Meskipun komunikasi moderen memerlukan suatuperantara berarti bahwa sebagian terbesar sistem ISMS diutamakan pada
        ICT, ISO 27001 adalahpenerapan yang seimbang pada bentuk-bentuk informasi, seperti catatancatatan, gambar-gambar, dan percakapan-percakapan yang tersaji dalam bentuk kertas
        <br />
        <br />
      </p>
    </article>
  );
};

export default Content27001;
