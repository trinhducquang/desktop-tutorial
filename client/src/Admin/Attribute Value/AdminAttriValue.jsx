import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AdminConfig from "../AdminConfig";
import Admin from "../Admin";

const AdminAttriValue = () => {
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
                    'X-File-Type': 'attri_value_ID'
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
        fetchAttri();
    }, []);

    const [attributes, setAttirbutes] = useState([]);

    const fetchAttri = async () => {
        try {
            let response = await fetch(`${url}AdminProduct.php`, {
                headers: {
                    'X-React-File-Name': 'AdminAttribute.jsx'
                }
            })
            if (!response.ok) {
                console.log(response);
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // console.log(data);
            setAttirbutes(data);
            // console.log(attributes);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    };


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
                    'X-File-Type': 'attri_value'
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
                    <h3 className="admin-product-title">Attribute Value List</h3>
                    <Link to={`/Admin/attri_value/new/${id}`} className="add-new-button">Add New</Link>
                    <Link to='/Admin/attri' className="add-new-button">Go Back</Link>
                </div>

                <div className="admin-product-table-container">
                    <table className="Admin-table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Attribute Id</th>
                                <th>Value</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((prd) => {
                                    return (
                                        <tr key={prd.id}>
                                            <td>{prd.id}</td>
                                            {/* <td>{prd.attribute_id}</td> */}
                                            {
                                                // console.log(attributes[0].id == prd.attribute_id)
                                                // console.log(attributes[0].id) ||
                                                // console.log(prd.attribute_id)
                                                attributes
                                                .filter((attri) => attri.id == prd.attribute_id)
                                                .map((attri) =>(
                                                    // console.log(attri.id === prd.attribute_id)
                                                    <td key={attri.id}>{attri.attribute_type}</td>
                                                ))
                                            }
                                            <td>{prd.value}</td>
                                            <td>{prd.description}</td>
                                            
                                            <td className="action-buttons">
                                                <Link to={`/Admin/attri_value/edit/${prd.id}`}><button className="edit-button">Edit</button></Link>
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

export default AdminAttriValue;