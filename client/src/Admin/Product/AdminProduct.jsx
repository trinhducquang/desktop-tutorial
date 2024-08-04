import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminConfig from "../AdminConfig";
import Admin from "../Admin";

const AdminProduct = () => {
    const { url } = AdminConfig;
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async (url) => {
        try {
            let resp = await fetch(`${url}AdminProduct.php`, {
                method: 'GET',
                headers: {
                    'X-React-File-Name': 'AdminProduct.jsx'
                }
            });

            if (!resp.ok) {
                throw new Error('Failed to fetch entertainment data.');
            }

            let data = await resp.json();
            console.log(data);

            setProducts(data);
            // console.log(products);
            console.log('vao');
            setLoading(false);
        }
        catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    }


    useEffect(() => {
        fetchData(url);
    }, []);


    const deletePro = async (event, prd) => {
        event.preventDefault();

        let cf = window.confirm("Are you sure you want to delete this product?");
        if (!cf) {
            return;
        }

        setLoading(true);
        try {
            let resp = await fetch(`${url}AdminProduct.php/${prd.id}`, {
                method: "DELETE",
                headers: {
                    'X-React-File-Name': 'AdminDelete.jsx',
                    'X-File-Type': 'product'
                }
            });

            // if (!resp.ok) {
            //     throw new Error('Failed to fetch entertainment data.');
            // }

            let data = await resp.json();
            console.log(data);

            console.log('vao2');
            fetchData(url);
            console.log('vao3');
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className="container">
            <Admin/>
            <div className="admin-product-content">
                {
                    loading && (
                        <div className="loading-overlay">
                            <div className="loading-spinner">Loading...</div>
                        </div>
                    )
                }

                <div className="product-list-header">
                    <h3 className="admin-product-title">Product List</h3>
                    {/* <Link to='/Admin'>Admin</Link><br/> */}
                    <Link to='/Admin/product/new' className="add-new-button">Add New</Link>
                </div>

                <div className="admin-product-table-container">
                    <table className="Admin-table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Type</th>
                                <th>Brand</th>
                                <th>Color</th>
                                <th>Size</th>
                                <th>Gender</th>
                                <th>Quantity</th>
                                <th>Image1</th>
                                <th>Image2</th>
                                <th>Price</th>
                                <th>Rating</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((prd) => {
                                    return (
                                        <tr key={prd.id}>
                                            <td>{prd.id}</td>
                                            <td>{prd.name}</td>
                                            <td>{prd.description}</td>
                                            <td>{prd.type}</td>
                                            <td>{prd.brand}</td>
                                            <td>{prd.color}</td>
                                            <td>{prd.size}</td>
                                            <td>{prd.gender}</td>
                                            <td>{prd.quantity}</td>
                                            <td>
                                                <img src={prd.image1} alt={prd.name} className="product-image" />
                                            </td>
                                            <td>
                                                <img src={prd.image2} alt={prd.name} className="product-image" />
                                            </td>
                                            <td>{prd.price}</td>
                                            <td>{prd.rating}</td>
                                            <td className="action-buttons">
                                                <Link to={`/Admin/product/edit/${prd.id}`}><button className="edit-button">Edit</button></Link>
                                                <button type="button" className="delete-button" onClick={(event) => deletePro(event, prd)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminProduct;