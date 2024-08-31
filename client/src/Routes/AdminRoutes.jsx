import { Route, Routes } from 'react-router-dom';
import { Admin, AdminProduct, AdminEdit, AdminNew, AdminAttribute, AdminEdit2, AdminNew2, AdminAttriValue, 
         AdminEdit3, AdminNew3, AdminUsers, AdminEdit4, AdminNew4, AdminOrders, AdminEdit5, AdminOrderDetail, 
         AdminEdit6, AdminVideo, AdminEdit7, AdminNew7, AdminImage, AdminEdit8, AdminNew8 } from '../index';

const AdminRoutes = () => {
  return (
    <Routes>
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
      <Route path='/Admin/order_detail/:id' element={<AdminOrderDetail />}/>
      <Route path='/Admin/order_detail/edit/:id' element={<AdminEdit6 />}/>

      <Route path='/Admin/video' element={<AdminVideo />}/>
      <Route path='/Admin/video/edit/:id' element={<AdminEdit7 />}/>
      <Route path='/Admin/video/new' element={<AdminNew7 />}/>

      <Route path='/Admin/image/:id' element={<AdminImage />}/>
      <Route path='/Admin/image/edit/:id' element={<AdminEdit8 />}/>
      <Route path='/Admin/image/new/:id' element={<AdminNew8 />}/>
    </Routes>
  );
};

export default AdminRoutes;
