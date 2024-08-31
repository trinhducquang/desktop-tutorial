import { Route, Routes } from 'react-router-dom';
import { Home, InspiringGreatness, Sitemap, Contact, Library, Booking, Privacy, Ownership, Legal, Preowned, 
         Complaints, Vali, Handbag, Packpack, Gentlement, Ladies, Faqs, Whispers, Cookie, Careers, Login, 
         InspiringSeries, Luxury, Muse, Page1, Page2, Page3, Page4, Page5, Page6, User, Success, Failed, NotFound,Resgiter } 
         from '../index';

const UserRoutes = () => {
  return (
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
    </Routes>
  );
};

export default UserRoutes;
