import {useState, useEffect} from "react"
import { Link, useLocation, Navigate } from "react-router-dom"
import useScrollTranslate from '../Hooks/useScrollTranslate';
import './Admin.scss'
import Cookies from 'js-cookie';

const Admin = () => {

    const scrollRef = useScrollTranslate(99999);

    const [isAuthorized, setIsAuthorized] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const checkRole = () => {
            const userRole = Cookies.get('userRole');
            // Assuming 'admin' is the role required for this route
            setIsAuthorized(userRole === 'admin');
        };

        checkRole();
    }, []);

    if (isAuthorized === null) {
        return <div>Loading...</div>;
    }

    return (
        isAuthorized ? (

            <div className="admin-container">
                <div><p>Admin</p></div>
                <div ref={scrollRef} className="admin-item">
                    <Link to="/Admin/product">Product</Link>
                    <Link to="/Admin/attri">Attribute</Link>
                    <Link to="/Admin/user">Users</Link>
                    <Link to="/Admin/order">Orders</Link>
                    <Link to="/Admin/video">Video</Link>
                    {/* <Link to="/Admin/attri_value">Attribute Value</Link> */}

                </div>
            </div>
        ): (
            <Navigate to="/404" state={{ from: location }} />
        )
    )

}

export default Admin;