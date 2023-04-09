import React from 'react'
import './Blog.css'
import { RingLoader } from '../../components'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div className='blog'>
      <div className='blogTitle'>
        <h2>Blog</h2>
        <p>
          <Link to='/'>
            <strong>Home </strong>
          </Link>
          / Blog
        </p>
      </div>
      <div className='blogArea'>
        <section className='allBlogs'>
            <div className='loader'>
              <RingLoader />
            </div>
        </section>
        <section className='latestBlogs'>
          {/* <span className='searchBar'>
            <input type="text" />
            <button><VscSearch /></button>
          </span> */}
          <h4>Latest Posts</h4>         
            <RingLoader />
        </section>
      </div>
    </div>
  )
}

export default Blog;