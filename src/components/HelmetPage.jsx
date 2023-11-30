import React from 'react';
import {Helmet} from 'react-helmet-async';

export const HelmetPage = ({title, content, link, keyword}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={content} />
        <meta name="keywords" content={keyword} />
        <link rel="cannonical" href={link} />
      </Helmet>
    </>
  );
};
