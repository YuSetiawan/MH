import React from 'react';
import Artph from '../../assets/image/safety.jpeg';
const ContArt23 = () => {
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
        <h2 className="mb-3">CEGAH KORSLETING, PERALATAN LISTRIK SEBAIKNYA BERLABEL SNI</h2>
        <div className="row">
          <div className="col-sm-8">
            <small className="text-body-secondary">23 Juni 2022</small> <br />
            <div className="text-center mb-2">
              <img src={Artph} alt="quality" className="col-6" />
            </div>
            <p className="card-text">
              PT PLN (Persero) meminta kepada pelanggan untuk rutin mengecek instalasi listrik di rumah. Pengecekan secara rutin ini untuk menghindari bahaya korsleting listrik yang bisa menimbulkan kebakaran.
              <br />
              PLN juga mengimbau agar pemilik rumah menggunakan instalansi listrik sesuai dengan Standar Nasional Indonesia (SNI). Hal ini dilakukan supaya instalasi listrik di rumah terjamin keamanannya. <br />
              <br />
              <br />
              General Manager PLN Unit Induk Distribusi Jakarta Raya Doddy B. Pangaribuan mengatakan, sesuai dengan Undang-Undang Nomor 30 Tahun 2009 tentang Ketenagalistrikan, PLN hanya berwenang mengalirkan listrik sampai batas kWh meter
              saja. Sedangkan untuk perawatan instalasi kelistrikan sebenarnya ada di tangan pelanggan.
              <br />
              <br />
              "Meskipun bukan wewenang PLN sampai ke instalasi listrik dalam rumah pelanggan, tetapi kami mengimbau pelanggan untuk tetap memperhatikan peralatan dan instalasi listrik di rumahnya," kata dia dalam keterangan tertulis, Minggu
              (3/4/2022).
              <br />
              <br />
              Selain kabel instalasi, Doddy menambahkan peralatan listrik di rumah pun sebaiknya wajib berlabel SNI demi keamanan dan kenyamanan. Perhatikan juga setiap alat elektronik yang badannya terbuat dari logam yang mudah berkarat,
              jangan sampai membuat kabel terkelupas dan mengakibatkan korsleting.
              <br />
              <br />
              “Perhatikan stop kontak, bila lubangnya terlihat meleleh atau sudah tidak bisa dipasang steker, sebaiknya diganti. Dan juga cek posisi steker alat elektronik yang terpasang pada stop kontak terus menerus, seperti kulkas dan
              pompa listrik. Jangan sampai longgar dan menimbulkan percikan listrik,” ujar Doddy.
              <br />
              <br />
              Peralatan listrik dengan daya listrik bertenaga besar, seperti water heater, AC, pompa air, kulkas, dan yang lainnya, sebaiknya menggunakan jalur listrik sendiri. Pembagian jalur listrik ini akan membuat kabel listrik tetap
              awet karena beban arus tidak berlebihan.
              <br />
              <br />
              Sumber: https://www.liputan6.com/bisnis/read/4928775/cegah-korsleting-peralatan-listrik-sebaiknya-berlabel-sni
              <br />
              <br />
              Dapatkan informasi program-program training MH Consulting lebih lanjut melalui{' '}
              <a className="text-success" aria-label="Chat on WhatsApp" href="https://wa.me/6281333575557">
                +62813 3357 5557
              </a>
            </p>
          </div>
          <div className="col-sm-4 mt-2">
            <h3 className="text-secondary">Baca Juga</h3>
            <a href="24-juni-2022" className="mx-3">
              <div className="text-dark">
                <p>
                  <b className="text-primary">Ingin Kalibrasi Internal? Yuk Penuhi Beberapa Syaratnya</b>
                  <br />
                  <small className="text-body-secondary">24 Juni 2022</small> <br />
                  Bulan Mei lalu, MH Consulting berkesempatan mengadakan Public Training Kalibrasi dengan parameter Dimensi, Massa dan Suhu. ...
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

export default ContArt23;
