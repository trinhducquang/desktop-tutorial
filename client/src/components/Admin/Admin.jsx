import React from "react"
import { Link } from "react-router-dom"
import './Admin.scss'

const Admin = () => {

    return (
            <div className="admin-container">
                <div><p>Admin</p></div>
                <div className="admin-item">
                    <Link to="/Admin/product">Product</Link>

                </div>
            </div>
    )

}

export default Admin;