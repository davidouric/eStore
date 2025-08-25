import React from 'react'
import Navbar from './Categorynav'
import Services from './Categorymain'

function Category() {
  return (
    <div>
      <h1 className="bg-blue-950 text-white text-center">Welcome to my estore</h1>
       <Navbar/>
      <Services/>
    </div>
  )
}

export default Category
