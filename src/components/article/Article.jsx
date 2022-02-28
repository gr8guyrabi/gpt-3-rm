import React from 'react'

import './article.css'

const Article = ({ date, title, imgUrl, articleUrl }) => {
  return (
    <div className="gpt3__blog-container_article">
        <div className="gpt3__blog-container_article-img">
            <img src={imgUrl} alt="blog_image" />
        </div>
        <div className="gpt3__blog-container_article-content">
            <p>{date}</p>
            <h3>{title}</h3>
            <a href={articleUrl} target="__blank" rel="noreferrer">Read Full Article</a>
        </div>
    </div>
  )
}

export default Article