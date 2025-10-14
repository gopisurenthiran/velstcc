// components/seo/OpenGraphMeta.jsx
import React from 'react';

const OpenGraphMeta = ({ title, description, url, image, type = 'website' }) => {
  return (
    <>
      {/* Basic SEO Meta Tags */}
      <meta name="description" content={description} />

      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </>
  );
};

export default OpenGraphMeta;