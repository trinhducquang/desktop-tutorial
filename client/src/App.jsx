import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from './Hooks/ScrollToTop';
import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer';
import InspiringGreatness from './Pages/InspiringGreatness/InspiringGreatness';
import Sitemap from './Pages/Sitemap/Sitemap';
import Contact from './Pages/Contact/Contact';
import Library from './Pages/Library/Library';
import Booking from './components/Booking/Booking';
import Privacy from './Pages/Privacy/Privacy';
import Legal from './Pages/Legal/Legal';
import Preowned from './Pages/Pre-owned/Preowned';
import Complaints from './Pages/Complaints/Complaints';
import Whispers from './Pages/whispers/whispers'
import Faqs from './Pages/Faqs/Faqs';
import Cookie from './Pages/Cookie/Cookie';
import Careers from './Pages/Careers/Careers';
import MenuComponent from './components/Menu/MenuComponent';

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.includes('/Admin');

  return (
    <div>
      {!isAdminRoute && <MenuComponent />}
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
