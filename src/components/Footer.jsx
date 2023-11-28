import msgIcon from '../assets/icon/conversating.png';
export default function Footer() {
  return (
    <>
      <style jsx>{`
        footer {
          background-color: #2b2a4c;
          padding: 1px;
        }

        hr {
          border-top: 3px solid #ffffff;
        }
        .floatWa {
          position: fixed;
          width: 100px;
          height: 100px;
          bottom: 0;
          right: 0;
          margin: 35px 50px;
          z-index: 10;
        }
        @media only screen and (max-width: 600px) {
          h6 {
            font-size: normal;
          }
        }
      `}</style>
      <div>
        <footer>
          <div className="container mt-5">
            <div className="my-2">
              <p className="text-center text-light">
                <b>PARTNERSHIP WITH MUTUAL & HARMONY</b>
              </p>
              <p className="text-light">
                <b>
                  PT MUTUAL HARMONY SUKSES INDONESIA <br />
                </b>
                <b>ISO Consulting : </b>
                9001:2015 | 14001:2015 | 45001:2018 | 17025:2017 | 27001:2018 | 31000:2018 | 50001:2018 | 37001:2016 <br />
                <b>Food Safety Consulting : </b>
                GMP | HACCP | 22000:2018 | BRC (British Retail Consortium) | FSSC 22000 | FSMA | BAP <br />
                <b>Domestic Requirements : </b>
                SNI | BPOM | Halal | SMK3 PP 50/2012 | Proper KLH | CDAKB | CPPKRTB <br />
                <b>Social Audit : </b>
                SMETA Audit (SEDEX) | SA 8000 | BSCI | Walmart Audit (SCS, C-TPAT, FCCA) | GRS <br />
                <b>Improvement : </b>
                5S | TPM | TQM | 7 QC Tools | MSA | FMEA | SPC | SCM | Balanced Score Card | Energy Audit & Efficiency <br />
                <b>Training : </b>
                Outbound | Leadership | Motivation | Sales & Marketing | Public Speaking | Service Excellence | Complaint Management | KPI | TNA | Assessment Kompetensi | K3 Sertifikasi Kemenakertrans <br />
                <br />
              </p>
            </div>
            <div className="row">
              <div className="col-sm-8 my-3">
                <p className="text-right text-light">
                  <b>OFFICE</b>
                  <br />
                  Ruko Citra Harmony ST1 No 38, Sidoarjo
                  <br />
                  Telp: 031 - 9978 4015
                  <br />
                  <br />
                  <b>Email:</b>
                  <br />
                  <a className="text-light" href="mailto:mhconsulting.indonesia@gmail.com">
                    mhconsulting.indonesia@gmail.com
                  </a>
                  <br />
                  <br />
                  <b>Mobile dan WhatsApp :</b>
                  <br />
                  <a aria-label="Chat on WhatsApp" className="text-light" href="https://wa.me/6281333575557">
                    +62813 3357 5557
                  </a>
                  <br />
                  <a aria-label="Chat on WhatsApp" className="text-light" href="https://wa.me/6281259991928">
                    +62812 5999 1928
                  </a>
                  <br />
                </p>
              </div>
              <div className="col-sm-4 my-3">
                <p className="text-light">
                  <b>RELATED LINKS</b>
                  <br />
                  <a className="text-light" href="https://www.isosnisurabaya.com/">
                    Konsultan SNI
                  </a>
                  <br />
                  <a className="text-light" href="https://www.ukas.com/">
                    UKAS
                  </a>
                  <br />
                  <a className="text-light" href="https://www.jasanz.org/">
                    JAS-ANZ
                  </a>
                  <br />
                  <a className="text-light" href="https://www.kan.or.id/">
                    KAN
                  </a>
                  <br />
                  <a className="text-light" href="https://www.menlhk.go.id/">
                    Kementerian Lingkungan Hidup
                  </a>
                  <br />
                  <a className="text-light" href="https://www.bsn.go.id/">
                    Badan Standardisasi Nasional
                  </a>
                  <br />
                  <a className="text-light" href="https://www.quality.org/">
                    IRCA
                  </a>
                  <br />
                </p>
              </div>
            </div>
            <hr className="my-3" />
            <div className="row d-flex justify-content-between">
              <div className="col-lg-8 mb-3">
                <h7 className="text-light">&copy; 2023 Mutual Harmony Consulting.</h7>
              </div>
            </div>
          </div>
        </footer>
        <div className="floatWa">
          <div className="btn-group dropup m-4">
            <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img className="" src={msgIcon} height={60} alt="Wa-icon" />
            </button>
            <ul className="dropdown-menu bg-success">
              <li className="mt-2 text-center text-light">
                <p style={{fontSize: 18}}>
                  <b>Ada yang bisa kami bantu?</b>
                </p>
              </li>
              <div className="bg-white m-2 p-2 rounded">
                <li className="mx-3">
                  <p>
                    <b>Whatsapp / Phone</b>
                    <br />
                    <a className="text-success fw-bold" aria-label="Chat on WhatsApp" href="https://wa.me/6281333575557">
                      +62813 3357 5557
                    </a>
                  </p>
                </li>
                <li>
                  <hr class="dropdown-divider bg-white" />
                </li>
                <li className="mx-3">
                  <p>
                    <b>Whatsapp / Phone</b>
                    <br />
                    <a className="text-success fw-bold" aria-label="Chat on WhatsApp" href="https://wa.me/6281259991928">
                      +62812 5999 1928
                    </a>
                  </p>
                </li>
                <li>
                  <hr class="dropdown-divider bg-white bg-white" />
                </li>
                <li className="mx-3">
                  <p>
                    <b>Office Phone</b>
                    <br />
                    <b className="text-primary">03199784015</b>
                  </p>
                </li>
                <li>
                  <hr class="dropdown-divider bg-white" />
                </li>
                <li className="mx-3">
                  <p>
                    <b>Office Email</b>
                    <p>
                      <a className="text-primary fw-bold" href="mailto:mhconsulting.indonesia@gmail.com">
                        mhconsulting.indonesia@gmail.com
                      </a>
                    </p>
                  </p>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
