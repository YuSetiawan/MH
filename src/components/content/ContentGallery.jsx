import React from 'react';
import Carousell from '../contentHome/Carousell';
import LongCarousell from '../contentHome/LongCarousel';

const ContentGallery = () => {
  return (
    <article className="m-5">
      <h2>Training Gallery</h2>
      <p>Beberapa dokumentasi pada masa pelatihan yang dilakukan oleh Mutual Harmony Consultant di beberapa perusahaan</p>
      <Carousell />
      <div className="my-3">
        <LongCarousell />
      </div>
    </article>
  );
};

export default ContentGallery;
