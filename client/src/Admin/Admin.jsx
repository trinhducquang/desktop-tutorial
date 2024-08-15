import React from "react"
import { Link } from "react-router-dom"
import useScrollTranslate from '../Hooks/useScrollTranslate';
import './Admin.scss'

const Admin = () => {

    const scrollRef = useScrollTranslate(9000);

    return (
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
    )

}

export default Admin;