import React from 'react'
import './Newproduct.css'
import { Product2 } from '../../index'

const Newproduct = () => {
  return (
    <div className='newproduct'>
        <section className='npHeading'>
            <span>Welcome to Oceania</span>
            <h3>NEW PRODUCTS</h3>
            <p>Browse our latest collection and keep up with most trending design of 2023.</p>
        </section>
        <section className='npgallery'>            
            <Product2 />            
        </section>       
    </div>
  )
}

export default Newproduct;