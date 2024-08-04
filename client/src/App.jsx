import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from './Hooks/ScrollToTop';
import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer';
import InspiringGreatness from './Pages/InspiringGreatness/InspiringGreatness';
import Sitemap from './Pages/Sitemap/Sitemap';
import Contact from './Pages/Contact/Contact';
import Library from './Pages/Library/Library';
import Booking from './Pages/Booking/Booking';
import Privacy from './Pages/Privacy/Privacy';
import Legal from './Pages/Legal/Legal';
import Preowned from './Pages/Pre-owned/Preowned';
import Complaints from './Pages/Complaints/Complaints';
import Admin from './Admin/Admin';
import AdminProduct from './Admin/Product/AdminProduct';
import AdminEdit from './Admin/Product/AdminEdit';
import AdminNew from './Admin/Product/AdminNew';
import AdminAttribute from './Admin/Attribute/AdminAttribute';
import AdminEdit2 from './Admin/Attribute/AdminEdit2';
import AdminNew2 from './Admin/Attribute/AdminNew2';
import AdminAttriValue from './Admin/Attribute Value/AdminAttriValue';
import AdminEdit3 from './Admin/Attribute Value/AdminEdit3';
import AdminNew3 from './Admin/Attribute Value/AdminNew3';
import AdminUsers from './Admin/Users/AdminUsers';
import AdminEdit4 from './Admin/Users/AdminEdit4';
import AdminNew4 from './Admin/Users/AdminNew4';
import AdminOrders from './Admin/Orders/AdminOrders';
import AdminEdit5 from './Admin/Orders/AdminEdit5';
// import AdminNew5 from './components/Admin/Orders/AdminNew5';
import AdminOrderDetail from './Admin/OrderDetail/AdminOrderDetail';
import AdminEdit6 from './Admin/OrderDetail/AdminEdit6';
// import AdminNew6 from './components/Admin/OrderDetail/AdminNew6';
import AdminVideo from './Admin/Video/AdminVideo';
import AdminEdit7 from './Admin/Video/AdminEdit7';
import AdminNew7 from './Admin/Video/AdminNew7';

import Whispers from './Pages/whispers/whispers'
import Faqs from './Pages/Faqs/Faqs';
import Cookie from './Pages/Cookie/Cookie';
import Careers from './Pages/Careers/Careers';
import MenuComponent from './components/Menu/MenuComponent';
import InspiringSeries from './Pages/InspiringSeries/InspiringSeries';
import Bespoke from './Pages/Bespoke/Bespoke';
import Muse from './Pages/Muse/Muse';

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
        <Route path='/pre-owned' element={<Preowned/>}/>
        <Route path='/Complaints' element={<Complaints/>}/>

        <Route path='/pre-owned' element={<Preowned />} />
        <Route path='/Complaints' element={<Complaints />} />
        <Route path='/Faqs' element={<Faqs />} />
        <Route path='/whispers' element={<Whispers />} />
        <Route path='/Cookie' element={<Cookie/>}/>
        <Route path='/Careers' element={<Careers/>}/>
        <Route path='/Inspiring-Series' element={<InspiringSeries/>}/>
        <Route path='/Bespoke' element={<Bespoke/>}/>
        <Route path='/Muse' element={<Muse/>}/>

        <Route path='/Admin' element={<Admin/>}/>

        <Route path='/Admin/product' element={<AdminProduct/>}></Route>
        <Route path='/Admin/product/edit/:id' element={<AdminEdit/>}></Route>
        <Route path='/Admin/product/new' element={<AdminNew/>}></Route>

        <Route path='/Admin/attri' element={<AdminAttribute/>}></Route>
        <Route path='/Admin/attri/edit/:id' element={<AdminEdit2/>}></Route>
        <Route path='/Admin/attri/new' element={<AdminNew2/>}></Route>
        
        <Route path='/Admin/attri_value/:id' element={<AdminAttriValue/>}></Route>
        <Route path='/Admin/attri_value/edit/:id' element={<AdminEdit3/>}></Route>
        <Route path='/Admin/attri_value/new/:id' element={<AdminNew3/>}></Route>

        <Route path='/Admin/user/' element={<AdminUsers/>}></Route>
        <Route path='/Admin/user/edit/:id' element={<AdminEdit4/>}></Route>
        <Route path='/Admin/user/new/' element={<AdminNew4/>}></Route>

        <Route path='/Admin/order' element={<AdminOrders/>}></Route>
        <Route path='/Admin/order/edit/:id' element={<AdminEdit5/>}></Route>
        {/* <Route path='/Admin/order/new' element={<AdminNew5/>}></Route> */}
        
        <Route path='/Admin/order_detail/:id' element={<AdminOrderDetail/>}></Route>
        <Route path='/Admin/order_detail/edit/:id' element={<AdminEdit6/>}></Route>
        {/* <Route path='/Admin/order_detail/new/:id' element={<AdminNew6/>}></Route> */}

        <Route path='/Admin/video' element={<AdminVideo/>}></Route>
        <Route path='/Admin/video/edit/:id' element={<AdminEdit7/>}></Route>
        <Route path='/Admin/video/new' element={<AdminNew7/>}></Route>

      </Routes>

      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default App;
