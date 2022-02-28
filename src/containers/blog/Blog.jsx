import React from 'react'

import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import './blog.css'

const articlesData = [
    {
        date: 'Sep 26, 2021',
        title: 'GPT-3 and Open  AI is the future. Let us explore how it is?',
        imgUrl: blog01,
        articleUrl: '#'
    },
    {
        date: 'Sep 26, 2021',
        title: 'GPT-3 and Open  AI is the future. Let us explore how it is?',
        imgUrl: blog02,
        articleUrl: '#'
    },
    {
        date: 'Sep 26, 2021',
        title: 'GPT-3 and Open  AI is the future. Let us explore how it is?',
        imgUrl: blog03,
        articleUrl: '#'
    },
    {
        date: 'Sep 26, 2021',
        title: 'GPT-3 and Open  AI is the future. Let us explore how it is?',
        imgUrl: blog04,
        articleUrl: '#'
    },
    {
        date: 'Sep 26, 2021',
        title: 'GPT-3 and Open  AI is the future. Let us explore how it is?',
        imgUrl: blog05,
        articleUrl: '#'
    },
]

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
        <div className="gpt3__blog-heading">
            <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
        </div>
        <div className="gpt3__blog-container">
            {articlesData.map((article, index) => (
                <Article
                    key={`article_${index}`}
                    date={article.date}
                    title={article.title}
                    imgUrl={article.imgUrl}
                    articleUrl={article.articleUrl}
                />
            ))}
        </div>
    </div>
  )
}

export default Blog