import React from 'react'
import './Product2.css'
import { Link } from 'react-router-dom';

const Product2 = () => {
  
  return (
    <>
    <div className='productCard'>
      <Link to={`/shop`}>
        <div className='productImage'>
          <img id='hideOnHover'src="https://www.realsimple.com/thmb/cGmby1TenVzY2TSmsZGHF4MxkyA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/RS-best-storage-furniture-fd09702a2c21450bb1b5a175016b207d.jpg" alt="product1" />
          <img src="https://previews.123rf.com/images/giamportone/giamportone1803/giamportone180300110/133407206-buy-now-button-with-hand-clicking-icon.jpg" alt="prdouct1b" />
        </div>
        <div className='productDetail'>
          <h5>Brand New Chair</h5>
          <p>$79.99</p>
        </div>
      </Link>
    </div>

    <div className='productCard'>
      <Link to={`/shop`}>
        <div className='productImage'>
          <img id='hideOnHover'src="https://hips.hearstapps.com/hmg-prod/images/45206375ac-010-b-1554481474.jpeg" alt="product1" />
          <img src="https://previews.123rf.com/images/giamportone/giamportone1803/giamportone180300110/133407206-buy-now-button-with-hand-clicking-icon.jpg" alt="prdouct1b" />
        </div>
        <div className='productDetail'>
          <h5>Brand New Drawer</h5>
          <p>$172.00</p>
        </div>
      </Link>
    </div>

    <div className='productCard'>
      <Link to={`/shop`}>
        <div className='productImage'>
          <img id='hideOnHover'src="https://media.architecturaldigest.com/photos/5f4d7b384ae6112506ca11f4/master/w_650,h_634,c_limit/prod17400286_E412777867_TQ.jpeg" alt="product1" />
          <img src="https://previews.123rf.com/images/giamportone/giamportone1803/giamportone180300110/133407206-buy-now-button-with-hand-clicking-icon.jpg" alt="prdouct1b" />
        </div>
        <div className='productDetail'>
          <h5>Super Good Chair</h5>
          <p>$125.00</p>
        </div>
      </Link>
    </div>

    <div className='productCard'>
      <Link to={`/shop`}>
        <div className='productImage'>
          <img id='hideOnHover'src="https://www.mycreativedays.com/wp-content/uploads/2022/05/Repurposed-Hutch-Makeover-top-open.jpg" alt="product1" />
          <img src="https://previews.123rf.com/images/giamportone/giamportone1803/giamportone180300110/133407206-buy-now-button-with-hand-clicking-icon.jpg" alt="prdouct1b" />
        </div>
        <div className='productDetail'>
          <h5>Super Good Shelf</h5>
          <p>$156.99</p>
        </div>
      </Link>
    </div>
    </>
  )
}
export default Product2;