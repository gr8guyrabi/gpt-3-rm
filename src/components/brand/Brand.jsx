import React from 'react'

import * as brands from './imports'
import './brand.css'

const Brand = () => {
    return (
    <div className="gpt3__brands section__padding">
        { Object.keys(brands).map((brand_key, index) => (
            <div key={brand_key + index}>
                <img src={brands[brand_key]} alt="brand" />
            </div>
        )) }
    </div>
  )
}

export default Brand