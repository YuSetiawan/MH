import React from 'react';
import Training1 from '../../assets/image/training-1.jpg';
import Training2 from '../../assets/image/training-2.jpg';
import Training3 from '../../assets/image/training-3.jpg';
import Training4 from '../../assets/image/training-4.jpg';
import Training5 from '../../assets/image/training-5.jpg';
import Training6 from '../../assets/image/training-6.jpg';
import Training7 from '../../assets/image/training-7.jpg';
import Training8 from '../../assets/image/training-8.jpg';
import Training9 from '../../assets/image/training-9.jpg';
import Training10 from '../../assets/image/training-10.jpg';
import Training11 from '../../assets/image/training-11.jpg';
import Training12 from '../../assets/image/training-12.jpg';

const ContentTraining = () => {
  return (
    <article className="container my-3">
      <h2>Training</h2>
      <div className="row">
        <div className="col-md-6 col-sm-12 mt-3">
          <h5>
            MH TRAINING adalah provider training dibawah naungan PT Mutual Harmony Sukses Indonesia atau lebih dikenal dengan MH Consulting yang bergerak dibidang Training & Consulting. MH Consulting lebih dulu malang melintang dibidang
            konsultansi sistem manajemen dan membuka ruang dibidang pengembangan sdm berupa training. Tahun 2010 kami telah mengembangkan dan memberikan pelayanan training kepada dinas-dinas pemerintah berupa pelatihan komunikasi pada
            petugas penyuluh pajak daerah. Dengan komitmen memberikan manfaat dan berbagi ilmu dan pengetahuan dengan metode pembelajaran standart dari kami.
          </h5>
        </div>
        <div id="carouselExampleInterval" className="carousel slide col-md-6 col-sm-12 mt-3" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={2500}>
              <img src={Training1} height={400} className="d-block w-100" alt="training-ph" />
            </div>
            <div className="carousel-item" data-bs-interval={2500}>
              <img src={Training2} height={400} className="d-block w-100" alt="training-ph" />
            </div>
            <div className="carousel-item" data-bs-interval={2500}>
              <img src={Training3} height={400} className="d-block w-100" alt="training-ph" />
            </div>
            <div className="carousel-item" data-bs-interval={2500}>
              <img src={Training4} height={400} className="d-block w-100" alt="training-ph" />
            </div>
            <div className="carousel-item" data-bs-interval={2500}>
              <img src={Training5} height={400} className="d-block w-100" alt="training-ph" />
            </div>
            <div className="carousel-item" data-bs-interval={2500}>
              <img src={Training6} height={400} className="d-block w-100" alt="training-ph" />
            </div>
            <div className="carousel-item" data-bs-interval={2500}>
              <img src={Training7} height={400} className="d-block w-100" alt="training-ph" />
            </div>
            <div className="carousel-item" data-bs-interval={2500}>
              <img src={Training8} height={400} className="d-block w-100" alt="training-ph" />
            </div>
            <div className="carousel-item" data-bs-interval={2500}>
              <img src={Training9} height={400} className="d-block w-100" alt="training-ph" />
            </div>
            <div className="carousel-item" data-bs-interval={2500}>
              <img src={Training10} height={400} className="d-block w-100" alt="training-ph" />
            </div>
            <div className="carousel-item" data-bs-interval={2500}>
              <img src={Training11} height={400} className="d-block w-100" alt="training-ph" />
            </div>
            <div className="carousel-item" data-bs-interval={2500}>
              <img src={Training12} height={400} className="d-block w-100" alt="training-ph" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-md-6 col-sm-12 mt-3" data-bs-ride="carousel">
          <p>
            <b>TRAINING ISO</b>
            <br />
            ISO 9001:2015 (Sistem Manajemen Mutu) <br />
            ISO 13501:2015 (Sistem Manajemen Lingkungan) <br />
            ISO 45001:2018 (Sistem Manajemen Kesehatan & Keselamatan Kerja)
            <br />
            ISO 37001:2016 (Sistem Manajemen Anti Suap)
            <br />
            ISO 17025:2017 (Sistem Manajemen Mutu Laboratorium)
            <br />
            ISO 13485:2016 (Sistem Manajemen Mutu Alat Kesehatan)
            <br />
            ISO 31000:2018 (Sistem Manajemen Resiko)
            <br />
            Internal Audit Based on ISO 19011:2018
            <br />
          </p>
        </div>
        <div className="col-md-6 col-sm-12 mt-3" data-bs-ride="carousel">
          <p>
            <b>TRAINING FOOD SAFETY</b> <br />
            HACCP (Hazard Critical Control Point)
            <br />
            ISO 22000:2018 (Sistem Manajemen Keamanan Pangan)
            <br />
            FSSC VER 5.1 (Food Safety System Certificate)
            <br />
            BRC ISSUE 9 (Global Standard for Food Manufacturing)
            <br />
            BRC IoP (Global Standard for Food Packaging & Packaging Product)
            <br />
            FSPCA (Hazard Analysis and Preventive Control for Human Food)
            <br />
            Personal Hygiene
            <br />
            Basic Microbiology
            <br />
          </p>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-md-6 col-sm-12 mt-3" data-bs-ride="carousel">
          <p>
            <b>TRAINING K3 & LINGKUNGAN</b>
            <br />
            Training Lock Out Tag Out (LOTO)
            <br />
            Mechanical Safety
            <br />
            Penanganan Limbah B3
            <br />
            Proper KLH
            <br />
            Sertifikasi Ahli K3
            <br />
            Ahli K3 Umum
            <br />
            Ahli K3 Listrik
            <br />
            Sertifikasi Operator
            <br />
            Operator Forklift
            <br />
            Operator Crane
            <br />
            Operator Boiler
            <br />
            Operator Genset
            <br />
            Petugas Pemadam Kebakaran
            <br />
            Petugas P3K
            <br />
          </p>
        </div>
        <div className="col-md-6 col-sm-12 mt-3" data-bs-ride="carousel">
          <p>
            <b>TRAINING IMPROVEMENT</b>
            <br />
            Dasar-dasar QC, SPC & QC 7 Tools
            <br />
            SWOT Analysis Training
            <br />
            RCA (Root Cause Analysis)
            <br />
            PPIC (Production Planning & Inventory Control)
            <br />
            SCM (Supply Chain Management)
            <br />
            Purchasing & Vendor Evaluation Training
            <br />
            SEDEX/SMETA
            <br />
          </p>
        </div>
      </div>
      <div className="my-3">
        <p>
          <b>TRAINING SDM</b>
          <br />
          Problem Solving
          <br />
          Masa Persiapan Pensiun
          <br />
          OutBound - Team Building
          <br />
          Sinergy Building for Leader
          <br />
          Effective Supervisory Skill
          <br />
          Service Excellent
          <br />
          Training Need Analysis
          <br />
        </p>
      </div>
    </article>
  );
};

export default ContentTraining;
