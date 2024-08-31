import { useLocation } from 'react-router-dom';
import { ScrollToTop, Footer, MenuComponent, CartProvider } from './index';
import AdminRoutes from './Routes/AdminRoutes';
import UserRoutes from './Routes/UserRoutes';

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/Admin');

  return (
    <CartProvider>
      <div>
        {!isAdminRoute && <MenuComponent />}
        <ScrollToTop />
        {isAdminRoute ? <AdminRoutes /> : <UserRoutes />}
        {!isAdminRoute && <Footer />}
      </div>
    </CartProvider>
  );
};

export default App;
