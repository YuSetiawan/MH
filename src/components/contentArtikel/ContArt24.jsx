import React from 'react';
import Artph from '../../assets/image/Kalibrasi-31-Mei.jpeg';
const ContArt24 = () => {
  return (
    <>
      <style jsx>
        {`
          a {
            text-decoration: none;
          }
        `}
      </style>
      <article className="m-5">
        <h2 className="mb-3">INGIN KALIBRASI INTERNAL? YUK PENUHI BEBERAPA SYARATNYA</h2>
        <div className="row">
          <div className="col-sm-8">
            <p className="card-text">
              <small className="text-body-secondary">24 Juni 2022</small> <br />
              Bulan Mei lalu, MH Consulting berkesempatan mengadakan Public Training Kalibrasi dengan parameter Dimensi, Massa dan Suhu. Berlangsung di Great Hotel Diponegoro, Surabaya selama 2 hari yang diikuti peserta dari Surabaya dan
              sekitarnya. Trainer dalam kesempatan kali ini adalah Bapak Luqman Hakim yang merupakan praktisi di bidang laboratorium kalibrasi. Dengan segudang pengalaman dan kompetensi, beliau tak henti-henti memberikan pemahaman konsep
              kalibrasi alat ukur terutama pada parameter dimensi, massa dan suhu.
              <br />
            </p>
            <div className="text-center mx-2">
              <img src={Artph} alt="quality" className="col-6" />
            </div>
            <p>
              Kami sempat bertanya kepada seluruh peserta terkait tujuan utama mengikuti training kali ini. Sebagian besar jawaban peserta adalah ingin dapat kompetensi untuk melakukan aktivitas kalibrasi secara internal di perusahaan
              masing-masing. Bapak Luqman Hakim menjelaskan bahwa setidaknya ada beberapa hal yang perlu diperhatikan apabila perusahaan ingin mengkalibrasi alat ukur secara internal diantaranya adalah kompetensi personil laboratorium, SOP,
              Equipment dan material, Metode acuan dan saran & prasarana pendukung laboratorium (Infrastruktur)
              <br />
              <br />
              Personil lab merupakan hal yang cukup penting dalam melakukan kalibrasi secara internal. Seorang personil lab harus dapat menganalisa sertifikat kalibrasi, menghitung ketidakpastian alat ukur, yang pada akhirnya adalah mampu
              melakukan kalibrasi secara benar sesuai dengan kaidah dan ketentuannya. Training kali ini bersifat praktikal sehingga peserta mendapatkan gambaran perhitungan ketidakpastian secara lebih mudah.
              <br />
              <br />
              Apakah perusahaan Anda ingin melakukan praktik kalibrasi secara internal? maka kuasailah konsep kalibrasi secara matang & penuhi persyaratan teknis di internal. Sampai jumpa di Public Training Kalibrasi MH Consulting
              selanjutnya.
              <br />
              <br />
              Dapatkan informasi program-program training MH Consulting lebih lanjut melalui{' '}
              <a className="text-success" aria-label="Chat on WhatsApp" href="https://wa.me/6281333575557">
                +62813 3357 5557
              </a>
            </p>
          </div>
          <div className="col-sm-4">
            <h3 className="text-secondary">Baca Juga</h3>
            <a href="23-juni-2022" className="mx-3">
              <div className="text-dark">
                <p>
                  <b className="text-primary">
                    Cegah Korsleting, Peralatan Listrik Sebaiknya Berlabel SNI <br />
                  </b>
                  <small className="text-body-secondary">23 Juni 2022</small> <br />
                  PT PLN (Persero) meminta kepada pelanggan untuk rutin mengecek instalasi listrik di rumah. Pengecekan secara rutin ini untuk menghindari bahaya korsleting listrik yang bisa menimbulkan kebakaran. ...
                </p>
              </div>
            </a>
            <a href="../news" className="mx-3">
              <div className="text-dark">
                <p>
                  <b className="text-primary">
                    Update Project <br />
                  </b>
                  <small className="text-body-secondary">20 Juni 2022</small> <br />
                  Training yang telah dilakukan oleh Mutual Harmony Consulting.{' '}
                </p>
              </div>
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default ContArt24;
