import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import AdminConfig from "../AdminConfig";
import Admin from "../Admin";


const AdminEdit5 = () => {
    const { url } = AdminConfig;
    const { id } = useParams();
    const navigate = useNavigate();

    const [products, setProducts] = useState({
        id: null,
        user_id: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        order_date: '',
        total_amount: '',
        status: ''
    });


    useEffect(() => {
        // console.log('vaochinh');
        fetch(`${url}AdminProduct.php/${id}`, {
            headers: {
                'X-React-File-Name': 'AdminById.jsx',
                'x-File-Type': 'order'
            }
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data => {
            // console.log(data);
            setProducts({
                ...products,
                id: data.id,
                user_id: data.user_id,
                name: data.name ? data.name : '',
                email: data.email ? data.email : '',
                phone: data.phone ? data.phone : '',
                address: data.address ? data.address : '',
                order_date: data.order_date ? data.order_date : '',
                total_amount: data.total_amount ? data.total_amount : '',
                status: data.status ? data.status : ''
            });
        }).catch(error => {
            console.error('Fetch error:', error);
        });

    }, []);


    const handleSubmit = (event) => {
        event.preventDefault();


        fetch(`${url}AdminProduct.php/${id}`, {
            method: 'PATCH',
            headers: {
                'X-React-File-Name': 'AdminEdit.jsx',
                'x-File-Type': 'order'
            },
            body: JSON.stringify({
                "fields": {
                    "id": products.id,
                    "user_id": products.user_id,
                    "name": products.name,
                    "email": products.email,
                    "phone": products.phone,
                    "address": products.address,
                    "order_date": products.order_date,
                    "total_amount": products.total_amount,
                    "status": products.status
                }
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);

                // setProducts(data);
                alert('order Updated successfully');

                navigate('/Admin/order');
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
                    <h3 className="admin-product-title">Update order</h3>
                    <Link to="/Admin/order">Go Back</Link>
                </div>



                {
                    // console.log(products)
                    products.id !== null &&
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="id">Id</label>
                            <input required type="text" className="form-control" id="id" name="id" value={products.id} onChange={(event) => setProducts({ ...products, id: event.target.value })} disabled />
                        </div><br />

                        <div className="form-group">
                            <label htmlFor="user_id">User ID</label>
                            <input required type="text" className="form-control" id="user_id" name="user_id" value={products.user_id} onChange={(event) => setProducts({ ...products, user_id: event.target.value })} disabled />
                        </div><br />

                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input required type="text" className="form-control" id="name" name="name" value={products.name} onChange={(event) => setProducts({ ...products, name: event.target.value })} disabled />
                        </div><br />

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input required type="text" className="form-control" id="email" name="email" value={products.email} onChange={(event) => setProducts({ ...products, email: event.target.value })} disabled />
                        </div><br />

                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input required type="text" className="form-control" id="phone" name="phone" value={products.phone} onChange={(event) => setProducts({ ...products, phone: event.target.value })} disabled />
                        </div><br />

                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input required type="text" className="form-control" id="address" name="address" value={products.address} onChange={(event) => setProducts({ ...products, address: event.target.value })} disabled />
                        </div><br />

                        <div className="form-group">
                            <label htmlFor="order_date">Order Date</label>
                            <input required type="text" className="form-control" id="order_date" name="order_date" value={products.order_date} onChange={(event) => setProducts({ ...products, order_date: event.target.value })} disabled />
                        </div><br />

                        <div className="form-group">
                            <label htmlFor="total_amount">Total Amount</label>
                            <input required type="text" className="form-control" id="total_amount" name="total_amount" value={products.total_amount} onChange={(event) => setProducts({ ...products, total_amount: event.target.value })} disabled />
                        </div><br />

                        <div className="form-group">
                            <label htmlFor="status">Status</label>
                            <select name="status" className="form-control" value={products.status} onChange={(event) => setProducts({ ...products, status: event.target.value })}>
                                <option value="" disabled>Select status</option>
                                <option value="paid">Paid</option>
                                <option value="unpaid">Unpaid</option>
                            </select>
                        </div><br />

                        <button type="submit">Submit</button>
                        {/* <Link to="/Admin/attri">Go Back</Link> */}
                    </form>
                }

            </div>
        </div>
    )
}

export default AdminEdit5;