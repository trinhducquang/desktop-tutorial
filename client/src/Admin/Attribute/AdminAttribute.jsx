import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminConfig from "../AdminConfig";
import Admin from "../Admin";

const AdminAttribute = () => {
    const { url } = AdminConfig;
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async (url) => {
        try {
            let resp = await fetch(`${url}AdminProduct.php`, {
                method: 'GET',
                headers: {
                    'X-React-File-Name': 'AdminAttribute.jsx'
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
                    'X-File-Type': 'attri'
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
            <Admin />
            <div className="admin-product-content">
                {
                    loading && (
                        <div className="loading-overlay">
                            <div className="loading-spinner">Loading...</div>
                        </div>
                    )
                }

                <div className="product-list-header">
                    <h3 className="admin-product-title">Attribute List</h3>
                    {/* <Link to='/Admin'>Admin</Link><br/> */}
                    {/* <Link to='/Admin/attri/new' className="add-new-button">Add New</Link> */}
                </div>

                <div className="admin-product-table-container">
                    <table className="Admin-table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Attribute Type</th>
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
                                            <td>{prd.attribute_type}</td>
                                            <td>{prd.description}</td>

                                            <td className="action-buttons">
                                                <Link to={`/Admin/attri_value/${prd.id}`}><button className="show-button">Show</button></Link>
                                                <Link to={`/Admin/attri/edit/${prd.id}`}><button className="edit-button">Edit</button></Link>
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

export default AdminAttribute;