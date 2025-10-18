import React from 'react'
import Layout from '../pages/layout/Layout.jsx'
import Home from "../pages/Home.jsx"
import Contact from "../pages/Contact.jsx"
import ConferenceTopics from '../pages/ConferenceTopics.jsx'
import Patrons from "../pages/Patrons.jsx"
import About from '../pages/About.jsx'
import Advisors from "../pages/Advisors.jsx"
import Registration from "../pages/Registration.jsx"
import Publication from "../pages/Publication.jsx"
import { Routes, Route } from 'react-router-dom'
import Accommodation from '../pages/Accommodation.jsx'
import Speakers from '../pages/Speakers.jsx'
import Sponsores from '../pages/Sponsores.jsx'
import Workshop from '../pages/Workshop.jsx'

const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/workshop' element={<Workshop/>}/>
                <Route path='/conference-topics' element={<ConferenceTopics/>}/>
                <Route path='/publication' element={<Publication/>}/>
                <Route path='/patrons' element={<Patrons/>}/>
                <Route path='/advisory-committee' element={<Advisors/>}/>
                <Route path='/speakers' element={<Speakers/>}/>
                <Route path='/sponsores' element={<Sponsores/>}/>
                <Route path='/accommodation' element={<Accommodation/>}/>
                <Route path='/registration' element={<Registration/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default AppRoutes