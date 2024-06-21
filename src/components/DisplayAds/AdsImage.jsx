import React from 'react';

const AdsImage = ({ imageUrl, linkUrl, altText, title }) => {
  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer">
      <img className="lazyload fade" src={imageUrl} alt={altText} title={title} />
    </a>
  );
};

export default AdsImage;
