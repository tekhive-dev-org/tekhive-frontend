import React from 'react'
import { BlogProvider } from '../../context/BlogContext/BlogContext';
import BlogOne from "./BlogOne/BlogOne"

const Blog = () => {
  return (
     <BlogProvider>
      <BlogOne />
    </BlogProvider>
  )
}

export default Blog