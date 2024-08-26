import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminConfig from "../AdminConfig";
import Admin from "../Admin";

const AdminOrders = () => {
    const { url } = AdminConfig;
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async (url) => {
        try {
            let resp = await fetch(`${url}AdminProduct.php`, {
                method: 'GET',
                headers: {
                    'X-React-File-Name': 'AdminOrders.jsx'
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
        fetchOrderDetail(url);
    }, []);

    const [orderDetails, setOrderDetails] = useState([]);

    const fetchOrderDetail = async (url) => {
        try {
            let resp = await fetch(`${url}AdminProduct.php`, {
                method: 'GET',
                headers: {
                    'X-React-File-Name': 'AdminOrderDetail.jsx'
                }
            });

            if (!resp.ok) {
                throw new Error('Failed to fetch entertainment data.');
            }

            let data = await resp.json();
            // console.log(data);

            setOrderDetails(data);
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }



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
                    'X-File-Type': 'order'
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


    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(7);

    // Calculate total number of pages
    const totalPages = Math.ceil(products.length / itemsPerPage);

    // Get current page items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


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
                    <h3 className="admin-product-title">Orders List</h3>
                    {/* <Link to='/Admin'>Admin</Link><br/> */}
                    {/* <Link to='/Admin/order/new' className="add-new-button">Add New</Link> */}
                </div>

                <div className="admin-product-table-container">
                    <table className="Admin-table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>User ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Order Date</th>
                                <th>Total Amount</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                currentItems.map((prd) => {
                                    return (
                                        <tr key={prd.id}>
                                            <td>{prd.id}</td>
                                            <td>{prd.user_id}</td>
                                            <td>{prd.name}</td>
                                            <td>{prd.email}</td>
                                            <td>{prd.phone}</td>
                                            <td>{prd.address}</td>
                                            <td>{new Date(prd.order_date).toLocaleDateString()}</td>
                                            <td>${prd.total_amount}</td>
                                            {/* <td>${prd.total_amount.toFixed(2)}</td> */}
                                            <td>{prd.status}</td>

                                            <td className="action-buttons">
                                                <Link to={`/Admin/order_detail/${prd.id}`}><button className="show-button">Show</button></Link>
                                                <Link to={`/Admin/order/edit/${prd.id}`}><button className="edit-button">Edit</button></Link>
                                                {/* <button type="button" className="delete-button" onClick={(event) => deletePro(event, prd)}>Delete</button> */}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="pagination-container">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                        <button
                            key={number}
                            onClick={() => paginate(number)}
                            className={`pagination-button ${currentPage === number ? 'active' : ''}`}>
                            {number}
                        </button>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default AdminOrders;