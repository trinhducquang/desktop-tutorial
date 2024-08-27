import { Route, Routes, useLocation } from 'react-router-dom';
import { ScrollToTop, Home, Footer, InspiringGreatness, Sitemap, Contact, Library, Booking, Privacy, Ownership, 
         Legal, Preowned, Complaints, Vali, Handbag, Packpack, Gentlement, Ladies, Admin, AdminProduct, AdminEdit, 
         AdminNew, AdminAttribute, AdminEdit2, AdminNew2, AdminAttriValue, AdminEdit3, AdminNew3, AdminUsers, AdminEdit4, 
         AdminNew4, AdminOrders, AdminEdit5, AdminOrderDetail, AdminEdit6, AdminVideo, AdminEdit7, AdminNew7, Whispers, Faqs, 
         Cookie, Careers, MenuComponent, InspiringSeries, Luxury, Muse, Page1, Page2, Page3, Page4, Page5, Page6, User, AdminImage, 
         AdminEdit8, AdminNew8, Login, Resgiter, Success, Failed, CartProvider, NotFound
       } from './index';

  const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.includes('/Admin');

  return (

    <CartProvider>
      <div>
        {!isAdminRoute && <MenuComponent />}
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Inspiring-Greatness' element={<InspiringGreatness />} />
          <Route path='/Site-Map' element={<Sitemap />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Library' element={<Library />} />
          <Route path='/Booking/:id' element={<Booking />} />
          <Route path='/Privacy' element={<Privacy />} />
          <Route path='/Legal' element={<Legal />} />
          <Route path='/pre-owned' element={<Preowned />} />
          <Route path='/Complaints' element={<Complaints />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Resgiter' element={<Resgiter />}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path="/404" element={<NotFound />} />
          <Route path='/Success' element={<Success/>}/>
          <Route path='/Failed' element={<Failed/>}/>

          <Route path='/pre-owned' element={<Preowned />} />
          <Route path='/Complaints' element={<Complaints />} />
          <Route path='/Faqs' element={<Faqs />} />
          <Route path='/whispers' element={<Whispers />} />
          <Route path='/Cookie' element={<Cookie />} />
          <Route path='/Careers' element={<Careers />} />
          <Route path='/Inspiring-Series' element={<InspiringSeries />} />
          <Route path='/Luxury' element={<Luxury />} />
          <Route path='/User' element={<User />} />
          <Route path='/Ownership' element={<Ownership/>}/>

          <Route path='/Vali' element={<Vali />} />
          <Route path='/Handbag' element={<Handbag />} />
          <Route path='/Backpack' element={<Packpack />} />
          <Route path='/Gentlemen' element={<Gentlement />} />
          <Route path='/Ladies' element={<Ladies />} />

          <Route path='/Muse' element={<Muse />} />
          <Route path='/Page1' element={<Page1 />} />
          <Route path='/Page2' element={<Page2 />} />
          <Route path='/Page3' element={<Page3 />} />
          <Route path='/Page4' element={<Page4 />} />
          <Route path='/Page5' element={<Page5 />} />
          <Route path='/Page6' element={<Page6 />} />

          {/* <Route path='/product-details/:id' element={<Booking />} /> */}

          <Route path='/Admin' element={<Admin />} />

          <Route path='/Admin/product' element={<AdminProduct />}/>
          <Route path='/Admin/product/edit/:id' element={<AdminEdit />}/>
          <Route path='/Admin/product/new' element={<AdminNew />}/>

          <Route path='/Admin/attri' element={<AdminAttribute />}/>
          <Route path='/Admin/attri/edit/:id' element={<AdminEdit2 />}/>
          <Route path='/Admin/attri/new' element={<AdminNew2 />}/>

          <Route path='/Admin/attri_value/:id' element={<AdminAttriValue />}/>
          <Route path='/Admin/attri_value/edit/:id' element={<AdminEdit3 />}/>
          <Route path='/Admin/attri_value/new/:id' element={<AdminNew3 />}/>

          <Route path='/Admin/user/' element={<AdminUsers />}/>
          <Route path='/Admin/user/edit/:id' element={<AdminEdit4 />}/>
          <Route path='/Admin/user/new/' element={<AdminNew4 />}/>

          <Route path='/Admin/order' element={<AdminOrders />}/>
          <Route path='/Admin/order/edit/:id' element={<AdminEdit5 />}/>
          {/* <Route path='/Admin/order/new' element={<AdminNew5/>}></Route> */}

          <Route path='/Admin/order_detail/:id' element={<AdminOrderDetail />}/>
          <Route path='/Admin/order_detail/edit/:id' element={<AdminEdit6 />}/>
          {/* <Route path='/Admin/order_detail/new/:id' element={<AdminNew6/>}></Route> */}

          <Route path='/Admin/video' element={<AdminVideo />}/>
          <Route path='/Admin/video/edit/:id' element={<AdminEdit7 />}/>
          <Route path='/Admin/video/new' element={<AdminNew7 />}/>

          <Route path='/Admin/image/:id' element={<AdminImage />}/>
          <Route path='/Admin/image/edit/:id' element={<AdminEdit8 />}/>
          <Route path='/Admin/image/new/:id' element={<AdminNew8 />}/>

        </Routes>

        {!isAdminRoute && <Footer />}
      </div>
    </CartProvider>
  );
};

export default App;
