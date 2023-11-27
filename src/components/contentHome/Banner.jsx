import React from 'react';
import Banner1 from '../../assets/image/banner1.jpg';
import Banner2 from '../../assets/image/banner2.jpg';
import Banner3 from '../../assets/image/banner3.jpg';
import Banner4 from '../../assets/image/banner4.jpg';
import Banner5 from '../../assets/image/banner5.jpg';
import Banner6 from '../../assets/image/banner6.jpg';

const Banner = () => {
  return (
    <article>
      <div id="BannerInterval" className="carousel slide w-100" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={3000}>
            <img src={Banner1} height={'100%'} className="d-block w-100" alt="gallery-ph" />
          </div>
          <div className="carousel-item" data-bs-interval={3000}>
            <img src={Banner2} height={'100%'} className="d-block w-100" alt="gallery-ph" />
          </div>
          <div className="carousel-item" data-bs-interval={3000}>
            <img src={Banner3} height={'100%'} className="d-block w-100" alt="gallery-ph" />
          </div>
          <div className="carousel-item" data-bs-interval={3000}>
            <img src={Banner4} height={'100%'} className="d-block w-100" alt="gallery-ph" />
          </div>
          <div className="carousel-item" data-bs-interval={3000}>
            <img src={Banner5} height={'100%'} className="d-block w-100" alt="gallery-ph" />
          </div>
          <div className="carousel-item" data-bs-interval={3000}>
            <img src={Banner6} height={'100%'} className="d-block w-100" alt="gallery-ph" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#BannerInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon p-4" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#BannerInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon p-4" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </article>
  );
};

export default Banner;
