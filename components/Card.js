import React from "react";
import { urlFor } from "../lib/sanity";
import Tag from "./Tag";
import { forwardRef } from 'react'

const Card = forwardRef(({ onClick, href, post }, ref) => {
    const {title, publishedAt, mainImage, username, authorImage, categories} = post
  return (
    <div className="card-container" href={href} onClick={onClick} ref={ref}>
      <h2>{title}</h2>
      <p>Published on: {new Date(publishedAt).toDateString()}</p>

      <img
        src={urlFor(mainImage)}
        alt={title + " image"}
        className="main-image"
      />

      <hr />

      <div className="info-container">
        <img
          src={urlFor(authorImage)}
          alt={username + " avatar"}
          className="avatar"
        />
        <p>Posted by: {username}</p>
      </div>

      <div className="tag-container">
        {categories.map((category) => (
          <>{category && <Tag key={category.id} title={category?.title} />}</>
        ))}
      </div>
    </div>
  );
});

export default Card;
