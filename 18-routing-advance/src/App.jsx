import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Women from './pages/Women'
import Men from './pages/Men'
import Courses from './pages/Courses'
import CoursesDetail from './pages/CoursesDetail'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>

      <Navbar />
      <Navbar2 />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

        {/* Dinamic Routing */}
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:courseId' element={<CoursesDetail />} />
        
        {/* nested routing */}
        <Route path='/product' element={<Product />}>
            <Route path='women' element={<Women />} />
            <Route path='men' element={<Men />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App