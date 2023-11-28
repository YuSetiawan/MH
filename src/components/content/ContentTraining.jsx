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
      <h2>Training List </h2>
      <div className="row">
        <div className="col-md-6 col-sm-12 mt-3">
          <p style={{fontSize: 18}}>
            <b>MH TRAINING </b>
            adalah provider training dibawah naungan PT Mutual Harmony Sukses Indonesia atau lebih dikenal dengan MH Consulting yang bergerak dibidang Training & Consulting. MH Consulting lebih dulu malang melintang dibidang konsultansi
            sistem manajemen dan membuka ruang dibidang pengembangan sdm berupa training. Tahun 2010 kami telah mengembangkan dan memberikan pelayanan training kepada dinas-dinas pemerintah berupa pelatihan komunikasi pada petugas penyuluh
            pajak daerah. Dengan komitmen memberikan manfaat dan berbagi ilmu dan pengetahuan dengan metode pembelajaran standart dari kami.
          </p>
        </div>
        {/* Carousell */}
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
        {/* Carousell End*/}
      </div>
      <div className="row my-3">
        <div className="col-md-6 col-sm-12 mt-3" data-bs-ride="carousel">
          <p>
            <b>TRAINING ISO</b>
            <br />
            <a href="/training/training-iso-9001">
              <button type="button" class="btn btn-light text-center">
                ISO 9001:2015 (Sistem Manajemen Mutu)
              </button>
            </a>
            <br />
            <a href="/training/training-iso-14001">
              <button type="button" class="btn btn-light text-center">
                ISO 14001:2015 (Sistem Manajemen Lingkungan)
              </button>
            </a>
            <br />
            <a href="/training/training-iso-45001">
              <button type="button" class="btn btn-light text-center">
                ISO 45001:2018 (Sistem Manajemen Kesehatan & Keselamatan Kerja)
              </button>
            </a>
            <br />
            <a href="/iso37001">
              <button type="button" class="btn btn-light text-center">
                ISO 37001:2016 (Sistem Manajemen Anti Suap)
              </button>
            </a>
            <br />
            <a href="/training/training-iso-17025">
              <button type="button" class="btn btn-light text-center">
                ISO 17025:2017 (Sistem Manajemen Mutu Laboratorium)
              </button>
            </a>
            <br />
            <a href="/training/training-iso-13485">
              <button type="button" class="btn btn-light text-center">
                ISO 13485:2016 (Sistem Manajemen Mutu Alat Kesehatan)
              </button>
            </a>
            <br />
            <a href="/training/training-iso-31000">
              <button type="button" class="btn btn-light text-center">
                ISO 31000:2018 (Sistem Manajemen Resiko)
              </button>
            </a>
            <br />
            <a href="/training/training-iso-19011">
              <button type="button" class="btn btn-light text-center">
                Internal Audit Based on ISO 19011:2018
              </button>
            </a>
            <br />
          </p>
        </div>
        <div className="col-md-6 col-sm-12 mt-3" data-bs-ride="carousel">
          <p>
            <b>TRAINING FOOD SAFETY</b> <br />
            <a href="/training/training-food-haccp">
              <button type="button" class="btn btn-light text-center">
                HACCP (Hazard Critical Control Point)
              </button>
            </a>
            <br />
            <a href="/training/training-food-iso-22000">
              <button type="button" class="btn btn-light text-center">
                ISO 22000:2018 (Sistem Manajemen Keamanan Pangan)
              </button>
            </a>
            <br />
            <a href="/training/training-food-fssc">
              <button type="button" class="btn btn-light text-center">
                FSSC VER 5.1 (Food Safety System Certificate)
              </button>
            </a>
            <br />
            <a href="/training/training-food-brc">
              <button type="button" class="btn btn-light text-center">
                BRC ISSUE 9 (Global Standard for Food Manufacturing)
              </button>
            </a>
            <br />
            <button type="button" class="btn btn-light text-center">
              BRC IoP (Global Standard for Food Packaging & Packaging Product)
            </button>
            <br />
            <a href="/training/training-food-fspca">
              <button type="button" class="btn btn-light text-center">
                FSPCA (Hazard Analysis and Preventive Control for Human Food)
              </button>
            </a>
            <br />
            <a href="/training/training-food-personal-hygiene">
              <button type="button" class="btn btn-light text-center">
                Personal Hygiene
              </button>
            </a>
            <br />
            <button type="button" class="btn btn-light text-center">
              Basic Microbiology
            </button>
            <br />
          </p>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-md-6 col-sm-12 mt-3" data-bs-ride="carousel">
          <p>
            <b>TRAINING K3 & LINGKUNGAN</b>
            <br />
            <a href="/training/training-k3-loto">
              <button type="button" class="btn btn-light text-center">
                Training Lock Out Tag Out (LOTO)
              </button>
            </a>
            <br />
            <a href="/training/training-k3-mechanical-safety">
              <button type="button" class="btn btn-light text-center">
                Mechanical Safety
              </button>
            </a>
            <br />
            <a href="/training/training-k3-limbah">
              <button type="button" class="btn btn-light text-center">
                Penanganan Limbah B3
              </button>
            </a>
            <br />
            <a href="/training/training-k3-proper">
              <button type="button" class="btn btn-light text-center">
                Proper KLH
              </button>
            </a>
            <br />
            <b>Sertifikasi Ahli K3</b>
            <br />
            - Ahli K3 Umum
            <br />
            - Ahli K3 Listrik
            <br />
            <b>Sertifikasi Operator</b>
            <br />
            - Operator Forklift
            <br />
            - Operator Crane
            <br />
            - Operator Boiler
            <br />
            - Operator Genset
            <br />
            - Petugas Pemadam Kebakaran
            <br />
            - Petugas P3K
            <br />
          </p>
        </div>
        <div className="col-md-6 col-sm-12 mt-3" data-bs-ride="carousel">
          <p>
            <b>TRAINING IMPROVEMENT</b>
            <br />
            <a href="/training/training-improvement-ppic">
              <button type="button" class="btn btn-light text-center">
                Dasar-dasar QC, SPC & QC 7 Tools
              </button>
            </a>
            <br />
            <a href="/training/training-improvement-swot">
              <button type="button" class="btn btn-light text-center">
                SWOT Analysis Training
              </button>
            </a>
            <br />
            <button type="button" class="btn btn-light text-center">
              RCA (Root Cause Analysis)
            </button>
            <br />
            <a href="/training/training-improvement-ppic">
              <button type="button" class="btn btn-light text-center">
                PPIC (Production Planning & Inventory Control)
              </button>
            </a>
            <br />
            <a href="/training/training-improvement-scm">
              <button type="button" class="btn btn-light text-center">
                SCM (Supply Chain Management)
              </button>
            </a>
            <br />
            <button type="button" class="btn btn-light text-center">
              Purchasing & Vendor Evaluation Training
            </button>
            <br />
            <button type="button" class="btn btn-light text-center">
              SEDEX/SMETA
            </button>
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
          <br />
        </p>
      </div>
    </article>
  );
};

export default ContentTraining;
