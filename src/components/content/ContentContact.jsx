import React from 'react';

const ContentContact = () => {
  return (
    <article className="m-5">
      <h2 className="mb-3 text-center">Mutual Harmony Consulting</h2>
      <div className="row">
        <div className="col-md-6 col-sm-12 mt-3">
          <h4 className="fw-bold mb-3">Office</h4>
          <h5>
            Ruko Stamford ST 1/38 Peerumahan Citra Harmoni - Sidoarjo
            <br />
            <br />
            <a aria-label="Chat on WhatsApp" className="text-success" href="https://wa.me/6281333575557">
              +62813 3357 5557
            </a>
            <br />
            <a aria-label="Chat on WhatsApp" className="text-success" href="https://wa.me/6281259991928">
              +62812 5999 1928
            </a>
            <br />
            <br />
            Email :
            <br />
          </h5>
          <h5>
            <a className="text-primary" href="mailto:mhconsulting.indonesia@gmail.com">
              mhconsulting.indonesia@gmail.com
            </a>
            <br />
            <a className="text-primary" href="mailto:marketing@mhconsulting-indonesia.com">
              marketing@mhconsulting-indonesia.com
            </a>
            <br />
            <a className="text-primary" href="mailto:cahyo@mhconsulting-indonesia.com">
              cahyo@mhconsulting-indonesia.com
            </a>
          </h5>
        </div>
        <div className="col-md-6 col-sm-12 mt-3" style={{height: 350}}>
          <iframe
            title="gmaps-company"
            className="w-100 h-100"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3956.770558096461!2d112.64018149678957!3d-7.379591599999997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e2eccb0c1773%3A0x17163bc1655354dd!2sKonsultan%20ISO%20Surabaya%20-%20MH%20Consulting!5e0!3m2!1sid!2sid!4v1701048554403!5m2!1sid!2sid"
            style={{border: 0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </article>
  );
};

export default ContentContact;
