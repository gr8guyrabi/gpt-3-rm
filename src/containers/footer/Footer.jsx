import React from 'react'

import gpt3Logo from '../../assets/logo.svg'
import './footer.css'

const footerData = [
    {
        title: 'links',
        contents: [
            {
                name: 'Overons',
                url: '#'
            },
            {
                name: 'Social Media',
                url: '#'
            },
            {
                name: 'Counters',
                url: '#'
            },
            {
                name: 'Contact',
                url: '#'
            },
        ]
    },
    {
        title: 'company',
        contents: [
            {
                name: 'Terms & Conditions',
                url: '#'
            },
            {
                name: 'Privacy Policy',
                url: '#'
            },
            {
                name: 'Contact',
                url: '#'
            },
        ]
    },
    {
        title: 'get in touch',
        contents: [
            {
                name: 'Crechterwoord K12 182 DK Alknjkcb',
            },
            {
                name: '085-132567',
            },
            {
                name: 'info@payme.net',
                url: '#'
            },
        ]
    },
]

const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">Do you want to step in to the future before others</h1>
            </div>
            <div className="gpt3__footer-btn">
                <p>Request Early Access</p>
            </div>

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={gpt3Logo} alt="logo" />
                    <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                </div>
                {footerData.map((data, index) => (
                    <div key={`title_${index}`} className="gpt3__footer-links_div">
                        <h4>{data.title}</h4>
                        {data?.contents?.map((content, index) => (
                            <p key={`subtitle_${data.title}_${index}`}>{ content.url ? <a href={content.url}>{content.name}</a> : content.name }</p>
                        ))}
                    </div>
                ))}
            </div>
            <div className="gpt3__footer-copyright">
                <p>© 2021 GPT-3. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer