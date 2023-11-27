import React from 'react';
import List from '../../assets/image/sni.png';

const ListSni = () => {
  return (
    <article className="m-5">
      <div>
        <h2>Daftar SNI Kementrian Perindustrian</h2>
        <div className="row my-4">
          <img className="col-sm-12" src={List} alt="list sni" />
        </div>
      </div>
    </article>
  );
};

export default ListSni;
