import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminConfig from "../AdminConfig";
import Admin from "../Admin";

const AdminNew7 = () => {
    const { url } = AdminConfig;
    const navigate = useNavigate();

    const [products, setProducts] = useState({
        id: null,
        name: '',
        type: '',
        link: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();


        fetch(`${url}AdminProduct.php`, {
            method: 'POST',
            headers: {
                'X-React-File-Name': 'AdminNew.jsx',
                'x-File-Type': 'video'
            },
            body: JSON.stringify({
                "fields": {
                    "id": products.id,
                    "name": products.name,
                    "type": products.type,
                    "link": products.link
                }
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);

                alert('video Updated successfully');

                navigate('/Admin/video');
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
                    <h3 className="admin-product-title">Add New video</h3>
                    <Link to="/Admin/video">Go Back</Link>
                </div>




                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input required type="text" className="form-control" id="name" name="name" value={products.name} onChange={(event) => setProducts({ ...products, name: event.target.value })} />
                    </div><br />

                    <div className="form-group">
                        <label htmlFor="type">Type</label>
                        <input required type="text" className="form-control" id="type" name="type" value={products.type} onChange={(event) => setProducts({ ...products, type: event.target.value })} />
                    </div><br />

                    <div className="form-group">
                        <label htmlFor="link">Link</label>
                        <input required type="text" className="form-control" id="link" name="link" value={products.link} onChange={(event) => setProducts({ ...products, link: event.target.value })} />
                    </div><br />

                    <button type="submit">Submit</button>
                    {/* <Link to="/Admin/link">Go Back</Link> */}
                </form>

            </div>
        </div>

    )
}

export default AdminNew7;