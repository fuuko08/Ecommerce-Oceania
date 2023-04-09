import React from 'react'
import './Ourstore.css'
import { Product } from '../../index'

const Ourstore = () => {
  return (
    <div className='ourStore'>
        <section className='storeHeading'>
            <span>Welcome to Oceania</span>
            <h3>CHECK OUT THE NEW DESIGNS</h3>
            <p>Create the home space that you deserve. Browse our best selling collection according to the design that matches your style.</p>
        </section>
        <section className='storegallery'>        
          <Product />       
        </section>
       
    </div>
  )
}

export default Ourstore;