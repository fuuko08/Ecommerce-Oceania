import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = () => {
  
  return (
    <>
    <div className='productCard'>
      <Link to={`/shop`}>
        <div className='productImage'>
          <img id='hideOnHover'src="https://re-mm-assets.s3.amazonaws.com/product_photo/48169/large_7.0-tables-36intable-42intall-tt.rwp36_1471510668.jpg" alt="product1" />
          <img src="https://previews.123rf.com/images/giamportone/giamportone1803/giamportone180300110/133407206-buy-now-button-with-hand-clicking-icon.jpg" alt="prdouct1b" />
        </div>
        <div className='productDetail'>
          <h5>Table A</h5>
          <p>$39.99</p>
        </div>
      </Link>
    </div>

    <div className='productCard'>
      <Link to={`/shop`}>
        <div className='productImage'>
          <img id='hideOnHover'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYm3Hqq3X6Wkuk5rYnaQP6GYmcrKzBw1udyg&usqp=CAU" alt="product1" />
          <img src="https://previews.123rf.com/images/giamportone/giamportone1803/giamportone180300110/133407206-buy-now-button-with-hand-clicking-icon.jpg" alt="prdouct1b" />
        </div>
        <div className='productDetail'>
          <h5>Table B</h5>
          <p>$70.00</p>
        </div>
      </Link>
    </div>

    <div className='productCard'>
      <Link to={`/shop`}>
        <div className='productImage'>
          <img id='hideOnHover'src="https://media.istockphoto.com/id/181121628/photo/dining-table.jpg?s=612x612&w=0&k=20&c=EMpXmdc26G6IQ-7-zFNoMf-4oZTmn0qvjJfhG1VTpPw=" alt="product1" />
          <img src="https://previews.123rf.com/images/giamportone/giamportone1803/giamportone180300110/133407206-buy-now-button-with-hand-clicking-icon.jpg" alt="prdouct1b" />
        </div>
        <div className='productDetail'>
          <h5>Table C</h5>
          <p>$25.00</p>
        </div>
      </Link>
    </div>

    <div className='productCard'>
      <Link to={`/shop`}>
        <div className='productImage'>
          <img id='hideOnHover'src="https://www.bludot.com/media/catalog/product/h/p/hp1-lrgtbl-bz_alt34_2.jpg?optimize=medium&fit=bounds&height=488&width=488&canvas=488:488" alt="product1" />
          <img src="https://previews.123rf.com/images/giamportone/giamportone1803/giamportone180300110/133407206-buy-now-button-with-hand-clicking-icon.jpg" alt="prdouct1b" />
        </div>
        <div className='productDetail'>
          <h5>Table D</h5>
          <p>$34.99</p>
        </div>
      </Link>
    </div>
    </>
  )
}
export default Product;