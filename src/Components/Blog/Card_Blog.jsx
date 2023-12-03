import React from "react";
import { UserIcon, CalendarIcon, TagIcon } from "../Icons";

const Card_Blog = ({ blog }) => {
  const { name, date, tag, title, content, link, image01 } = blog;

  return (
    <div className="card_blog">
      <div className="card_blog__img">
        <img src={image01} alt="" />
      </div>
      <div className="card_blog__infos">
        <div className="card_blog__infos__info">
          <UserIcon />
          <p>{name}</p>
        </div>
        <div className="card_blog__infos__info">
          <CalendarIcon />
          <p>{date}</p>
        </div>
        <div className="card_blog__infos__info">
          <TagIcon />
          <p>{tag}</p>
        </div>
      </div>
      <div className="card_blog__title">
        <h1>{title}</h1>
        <p>{content}</p>
        <button>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </button>
      </div>
    </div>
  );
};

export default Card_Blog;
