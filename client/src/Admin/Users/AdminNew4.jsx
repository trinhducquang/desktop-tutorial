import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import AdminConfig from "../AdminConfig";
import Admin from "../Admin";

const AdminNew4 = () => {
    const { url } = AdminConfig;
    const navigate = useNavigate();

    const [products, setProducts] = useState({
        id: null,
        name: '',
        password: '',
        email: '',
        phone: '',
        address: '',
        role: ''
    });


    const handleSubmit = (event) => {
        event.preventDefault();


        fetch(`${url}AdminProduct.php`, {
            method: 'POST',
            headers: {
                'X-React-File-Name': 'AdminNew.jsx',
                'x-File-Type': 'user'
            },
            body: JSON.stringify({
                "fields": {
                    "id": products.id,
                    "name": products.name,
                    "password": products.password,
                    "email": products.email,
                    "phone": products.phone,
                    "address": products.address,
                    "role": products.role
                }
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);

                alert('user Updated successfully');

                navigate('/Admin/user');
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="container">
            <Admin />

            <div className="admin-product-content">
                <div className="product-list-header">
                    <h3 className="admin-product-title">Add New user</h3>
                    <Link to="/Admin/user">Go Back</Link>
                </div>




                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input required type="text" className="form-control" id="name" name="name" value={products.name} onChange={(event) => setProducts({ ...products, name: event.target.value })} />
                    </div><br />
                    
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input required type="password" className="form-control" id="password" name="password" value={products.password} onChange={(event) => setProducts({ ...products, password: event.target.value })} />
                    </div><br />

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input required type="email" className="form-control" id="email" name="email" value={products.email} onChange={(event) => setProducts({ ...products, email: event.target.value })} />
                    </div><br />
                    
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input required type="text" className="form-control" id="phone" name="phone" value={products.phone} onChange={(event) => setProducts({ ...products, phone: event.target.value })} />
                    </div><br />
                    
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input required type="text" className="form-control" id="address" name="address" value={products.address} onChange={(event) => setProducts({ ...products, address: event.target.value })} />
                    </div><br />
                    
                    <div className="form-group">
                        <label htmlFor="role">Role</label>
                        <select name="role" className="form-control" value={products.role} onChange={(event) => setProducts({ ...products, role: event.target.value })} >
                            <option value="" disabled>Select role</option>
                            <option value="admin">Admin</option>
                            <option value="customer">Customer</option>
                        </select>
                    </div><br />
                    
                    <button type="submit">Submit</button>
                    {/* <Link to="/Admin/product">Go Back</Link> */}
                </form>

            </div>
        </div>

    )
}

export default AdminNew4;