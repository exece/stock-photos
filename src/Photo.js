import React from "react";

const Photo = ({
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
}) => {
  return (
    <article className="photo">
      <img src={regular} alt={alt_description}></img>
      <div className="photo-info">
        <div>
          <h2>{name}</h2>
          <p>{likes} likes</p>
        </div>
        <a href={portfolio_url}><img src={medium} alt={name} className='user-img'></img></a>
      </div>
    </article>
  );
};

export default Photo;
