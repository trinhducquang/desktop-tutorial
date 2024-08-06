import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AdminConfig from "../AdminConfig";
import Admin from "../Admin";

const AdminImage = () => {
    const { url } = AdminConfig;
    const { id } = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async (url) => {
        try {
            let resp = await fetch(`${url}AdminProduct.php/${id}`, {
                method: 'GET',
                headers: {
                    'X-React-File-Name': 'AdminById.jsx',
                    'X-File-Type': 'image_by_Id'
                }
            });

            if (!resp.ok) {
                throw new Error('Failed to fetch image data.');
            }

            let data = await resp.json();
            console.log(data);

            setProducts(data);
            // console.log(products);
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

        let cf = window.confirm("Are you sure you want to delete this image?");
        if (!cf) {
            return;
        }

        setLoading(true);
        try {
            let resp = await fetch(`${url}AdminProduct.php/${prd.id}`, {
                method: "DELETE",
                headers: {
                    'X-React-File-Name': 'AdminDelete.jsx',
                    'X-File-Type': 'image'
                }
            });

            // if (!resp.ok) {
            //     throw new Error('Failed to fetch entertainment data.');
            // }

            let data = await resp.json();
            console.log(data);

            fetchData(url);
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
                    <h3 className="admin-product-title">Image List</h3>
                    <Link to={`/Admin/image/new/${id}`} className="add-new-button">Add New</Link>
                    <Link to='/Admin/product' className="add-new-button">Go Back</Link>
                </div>

                <div className="admin-product-table-container">
                    <table className="Admin-table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Product Id</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((prd) => {
                                    return (
                                        <tr key={prd.id}>
                                            <td>{prd.id}</td>
                                            <td>{prd.product_id}</td>
                                            <td>
                                                <img src={prd.image} alt={prd.name} className="product-image" />
                                            </td>
                                            
                                            <td className="action-buttons">
                                                <Link to={`/Admin/image/edit/${prd.id}`}><button className="edit-button">Edit</button></Link>
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

export default AdminImage;