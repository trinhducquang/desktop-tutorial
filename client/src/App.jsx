import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from './Hooks/ScrollToTop';
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import InspiringGreatness from './Pages/InspiringGreatness/InspiringGreatness';
import Sitemap from './components/Footer/Sitemap/Sitemap';
import Contact from './components/Footer/Contact/Contact';
import Library from './components/Menu/Library/Library';
import Booking from './components/Booking/Booking';
import Privacy from './components/Footer/Privacy/Privacy';
import Legal from './components/Footer/Legal/Legal';
import Preowned from './components/Footer/Pre-owned/Preowned';
import Complaints from './Pages/Complaints/Complaints';
import Whispers from './Pages/whispers/whispers'
import Faqs from './Pages/Faqs/Faqs';
import Cookie from './Pages/Cookie/Cookie';
import Careers from './Pages/Careers/Careers';

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.includes('/Admin');

  return (
    <div>
      {!isAdminRoute && <Menu />}
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Inspiring-Greatness' element={<InspiringGreatness />} />
        <Route path='/Site-Map' element={<Sitemap />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Library' element={<Library />} />
        <Route path='/Booking' element={<Booking />} />
        <Route path='/Privacy' element={<Privacy />} />
        <Route path='/Legal' element={<Legal />} />
        <Route path='/pre-owned' element={<Preowned />} />
        <Route path='/Complaints' element={<Complaints />} />
        <Route path='/Faqs' element={<Faqs />} />
        <Route path='/whispers' element={<Whispers />} />
        <Route path='/Cookie' element={<Cookie/>}/>
        <Route path='/Careers' element={<Careers/>}/>
      </Routes>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default App;
