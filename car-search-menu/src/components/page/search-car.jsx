import React from 'react'
import Navbar from '../layouts/navbar'
import Herosearch from '../layouts/herosearch'
import Footer from '../layouts/footer'
import Search from '../layouts/search-panel'

const search = () => {
  return (
    <div>
      <Navbar/>
      <Herosearch/>
      <Search/>
      <Footer/>
    </div>
  )
}

export default search