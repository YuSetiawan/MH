import React from 'react';
import Artikel from '../../assets/image/Kalibrasi-31-Mei.jpeg';
import Safety from '../../assets/image/safety.jpeg';
import Training3 from '../../assets/image/training-3.jpg';

const ContentMenuArt = () => {
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
        <h2 className="mb-3">Menu Artikel</h2>
        <div className="row">
          <div className="card mb-3 p-2" style={{maxWidth: 1400}}>
            <a href="artikel/24-juni-2022" className="text-dark">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={Artikel} className="img-fluid rounded" alt="ph-art" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Ingin Kalibrasi Internal? Yuk Penuhi Beberapa Syaratnya</h5>
                    <p className="card-text">
                      Bulan Mei lalu, MH Consulting berkesempatan mengadakan Public Training Kalibrasi dengan parameter Dimensi, Massa dan Suhu. Berlangsung di Great Hotel Diponegoro, Surabaya selama 2 hari yang diikuti peserta dari
                      Surabaya dan sekitarnya.
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">24 Juni 2022</small>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="card mb-3 p-2" style={{maxWidth: 1400}}>
            <a href="artikel/23-juni-2022" className="text-dark">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={Safety} className="img-fluid rounded w-100 " alt="ph-art" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Cegah Korsleting, Peralatan Listrik Sebaiknya Berlabel SNI</h5>
                    <p className="card-text">
                      {' '}
                      PT PLN (Persero) meminta kepada pelanggan untuk rutin mengecek instalasi listrik di rumah. Pengecekan secara rutin ini untuk menghindari bahaya korsleting listrik yang bisa menimbulkan kebakaran. PLN juga mengimbau
                      agar pemilik rumah menggunakan instalansi listrik sesuai dengan Standar Nasional Indonesia (SNI). Hal ini dilakukan supaya instalasi listrik di rumah terjamin keamanannya.
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">23 Juni 2022</small>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="card mb-3 p-2" style={{maxWidth: 1400}}>
            <a href="news" className="text-dark">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={Training3} className="img-fluid rounded w-100 " alt="ph-art" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Update Project</h5>
                    <p className="card-text">Training yang telah dilakukan oleh Mutual Harmony Consulting.</p>
                    <p className="card-text">
                      <small className="text-body-secondary">20 Juni 2022</small>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default ContentMenuArt;
