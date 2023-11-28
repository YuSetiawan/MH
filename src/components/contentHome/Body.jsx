import React from 'react';
import phPrl from '../../assets/image/visibg.png';
import prl2 from '../../assets/image/prl2.png';
import Icon1 from '../../assets/icon/management.png';
import Icon2 from '../../assets/icon/analysis.png';
import Icon3 from '../../assets/icon/certificate.png';
import Icon4 from '../../assets/icon/labor.png';
import Icon5 from '../../assets/icon/licensing.png';
import Icon6 from '../../assets/icon/search.png';
import IconWhy1 from '../../assets/icon/professional-services.png';
import IconWhy2 from '../../assets/icon/coexistence.png';
import IconWhy3 from '../../assets/icon/best-price.png';
import IconWhy4 from '../../assets/icon/24-hours-support.png';
import IconWhy5 from '../../assets/icon/reputation-management.png';
import IconWhy6 from '../../assets/icon/connection.png';
import Partner1 from '../../assets/image/Slide1.jpeg';
import Partner2 from '../../assets/image/Slide2.jpeg';
import Partner3 from '../../assets/image/Slide3.jpeg';
import Carousell from './Carousell';

const Body = () => {
  return (
    <>
      <style jsx>
        {`
          .parallax {
            background-image: url(${phPrl});

            min-height: 400px;

            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }
          #prlx {
            background-image: url(${prl2});

            min-height: 400px;

            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }
          #textHome {
            color: #2b2a4c;
          }
        `}
      </style>
      <article className="m-5">
        <h1 id="textHome" className="text-center mb-5 fw-bolder">
          WELCOME TO MH CONSULTING
        </h1>
        <p style={{fontSize: 24}}>
          <b>Mutual Harmony Consulting </b>
          berdiri pada tahun 2010 dilatar belakangi akan pentingnya dan bernilainya peranan sumber daya manusia. Industri dan organisasi mempunyai keunikan dan karakteristik yang berbeda-beda, atas dasar hal tersebutlah kami eksisi dan
          berkomitmen menjalin partner perusahaan atau instansi pemerintah yang membutuhkan pelayanan kami. Komitmen kami adalah memberikan pelayanan terbaik setiap kebutuhan mitra kami dari service yang kami miliki yaitu Training &
          Consulting. Kami merancang dan menciptakan system kerjasama yang saling menguntungkan dan selaras dengan visi dan misi antara perusahaan kami dengan perusahaan mitra.”
        </p>
        <div className="text-center my-5">
          <iframe
            className=" col-lg-8"
            width={'100%'}
            height={'350'}
            src="https://www.youtube.com/embed/8ASDSoDVNmo?si=t2y8JQ3e4WP2qP_Y"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>{' '}
        </div>
      </article>
      {/* Visi Misi */}
      <div className="parallax">
        <div className="text-light text-center row m-5">
          <div className="col-sm-6 mt-3">
            <h1 style={{fontSize: 55}} className="my-5">
              VISI
            </h1>
            <p style={{fontSize: 20}} className="p-3">
              "Menjadi perusahaan konsultan yang kreatif, terpercaya dengan kredibilitas dan pelayanan prima yang memiliki SDM profesional dan jaringan luas."
            </p>
          </div>
          <div className="col-sm-6 mt-3">
            <h1 style={{fontSize: 55}} className="my-5">
              MISI
            </h1>
            <p style={{fontSize: 20}} className="p-3">
              "Melayani perusahaan mitra dengan kreatif dan inovatif serta kredibiltas yang tinggi. Menjalin kemitraan dengan harmonis. Menciptakan Sumber Daya yang berkualitas dan produktif."
            </p>
            <br />
          </div>
        </div>
      </div>
      {/* Our Service */}
      <article className="m-5">
        <h1 id="textHome" className="text-center mb-5 fw-bolder">
          SERVICE KAMI
        </h1>
        <div className="row">
          <div className="col-sm-4 text-center">
            <img src={Icon1} alt="icn-service" className="col-6 mb-3" />
            <p className="mx-3">
              <b>Manajemen System Consulting</b>
              <br />
              ISO 9001, ISO 14001, ISO 22000, ISO 45001, ISO 27001, ISO 31000, ISO 37001, SMK3 PP 50 tahun 2012, FCCA, SMETA AUDIT, SCS and etc
            </p>
          </div>
          <div className="col-sm-4 text-center">
            <img src={Icon2} alt="icn-service" className="col-6 mb-3" />
            <p className="mx-3">
              <b>Training</b>
              <br />
              Training SDM, Training Manajemen, Training sales Marketing and etc
            </p>
          </div>
          <div className="col-sm-4 text-center">
            <img src={Icon3} alt="icn-service" className="col-6 mb-3" />
            <p className="mx-3">
              <b>Sertifikasi SNI</b>
              <br />
              Seluruh produk wajib SNI dan SNI Sukarela
            </p>
          </div>
          <div className="col-sm-4 mt-3 text-center">
            <img src={Icon4} alt="icn-service" className="col-6 mb-3" />
            <p className="mx-3">
              <b>Perizinan Konstruksi</b>
              <br />
            </p>
          </div>
          <div className="col-sm-4 mt-3 text-center">
            <img src={Icon5} alt="icn-service" className="col-6 mb-3" />
            <p className="mx-3">
              <b>Perizinan Penyalur Alat Kesehatan</b>
              <br />
            </p>
          </div>
          <div className="col-sm-4 mt-3 text-center">
            <img src={Icon6} alt="icn-service" className="col-6 mb-3" />
            <p className="mx-3">
              <b>SMETA SEDEX</b>
              <br />
            </p>
          </div>
        </div>
      </article>
      {/* Why choose Us */}
      <article id="prlx">
        <div className="m-5 pb-5">
          <h1 className="text-center text-light my-5 pt-5 fw-bolder">KENAPA MEMILIH KAMI?</h1>
          <div className="row">
            <div className="col-sm-4 text-center bg-white p-4 ">
              <img src={IconWhy1} alt="icn-service" className="col-6 mb-3" />
              <p className="mx-3">
                <b>Konsultan Professional & Berpengalaman</b>
                <br />
              </p>
            </div>
            <div className="col-sm-4 text-center bg-white p-4">
              <img src={IconWhy2} alt="icn-service" className="col-6 mb-3" />
              <p className="mx-3">
                <b>Menyesuaikan dengan Kebutuhan Klien dan Solutif</b>
                <br />
              </p>
            </div>
            <div className="col-sm-4 text-center bg-white p-4">
              <img src={IconWhy3} alt="icn-service" className="col-6 mb-3" />
              <p className="mx-3">
                <b>Biaya Terbaik dan Bersahabat</b>
                <br />
              </p>
            </div>
            <div className="col-sm-4 text-center bg-white p-4">
              <img src={IconWhy4} alt="icn-service" className="col-6 mb-3" />
              <p className="mx-3">
                <b>One Stop Services 24 Jam</b>
                <br />
              </p>
            </div>
            <div className="col-sm-4 text-center bg-white p-4">
              <img src={IconWhy5} alt="icn-service" className="col-6 mb-3" />
              <p className="mx-3">
                <b>Jaminan Lulus dari Badan Sertifikasi Ternama</b>
                <br />
              </p>
            </div>
            <div className="col-sm-4 text-center bg-white p-4">
              <img src={IconWhy6} alt="icn-service" className="col-6 mb-3" />
              <p className="mx-3">
                <b>Berjaringan Luas</b>
                <br />
              </p>
            </div>
          </div>
        </div>
      </article>
      {/* Galerry Training */}
      <article className="m-5">
        <h1 id="textHome" className="text-center mb-5 fw-bolder">
          PROYEK KAMI
        </h1>
      </article>
      <Carousell />
      {/* Partner */}
      <article className="m-5">
        <h1 id="textHome" className="text-center mb-5 fw-bolder">
          PARTNER KAMI
        </h1>
        <div className="row">
          <div className="col-sm-4 text-center">
            <img src={Partner1} alt="icn-partner" className="col-12 mb-3" />
          </div>
          <div className="col-sm-4 text-center">
            <img src={Partner2} alt="icn-partner" className="col-12 mb-3" />
          </div>
          <div className="col-sm-4 text-center">
            <img src={Partner3} alt="icn-partner" className="col-12 mb-3" />
          </div>
        </div>
      </article>
    </>
  );
};

export default Body;
