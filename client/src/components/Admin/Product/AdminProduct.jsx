import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminProduct = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            let resp = await fetch(`http://localhost/project1%20-%2030-7/desktop-tutorial/client/src/components/Admin/AdminProduct.php`, {
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
        fetchData();
    }, []);


    const deletePro = async (event, prd) => {
        event.preventDefault();

        let cf = window.confirm("Are you sure you want to delete this product?");
        if (!cf) {
            return;
        }

        setLoading(true);
        try {
            let resp = await fetch(`http://localhost/project1%20-%2030-7/desktop-tutorial/client/src/components/Admin/AdminProduct.php/${prd.id}`, {
                method: "DELETE",
                headers: {
                    'X-React-File-Name': 'AdminDelete.jsx',
                    'X-File-Type': 'product'
                }
            });

            if (!resp.ok) {
                throw new Error('Failed to fetch entertainment data.');
            }

            let data = await resp.json();
            console.log(data);

            console.log('vao2');
            fetchData();
            console.log('vao3');
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className="container">
            {
                loading && (
                    <div>
                        <div>Loading...</div>
                    </div>
                )
            }

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
                        <th>Image1</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((prd) => {
                            return (
                                // console.log('vao');
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
                                    <td>
                                        <Link to={`/Admin/product/edit/${prd.id}`}><button>Edit</button></Link>
                                        <button type="button" onClick={(event) => deletePro(event, prd)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}

export default AdminProduct;