import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AdminConfig from "../AdminConfig";
import Admin from "../Admin";

const AdminNew8 = () => {
    const { url } = AdminConfig;
    const { id } = useParams();
    const navigate = useNavigate();

    const [products, setProducts] = useState({
        id: null,
        product_id: '',
        image: ''
    });

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            const base64String = 'data:image/jpeg;base64,' + reader.result.replace('data:', '').replace(/^.+,/, '');
            setProducts({ ...products, [event.target.name]: base64String });
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`${url}AdminProduct.php`, {
            method: 'POST',
            headers: {
                'X-React-File-Name': 'AdminNew.jsx',
                'x-File-Type': 'image',
            },
            body: JSON.stringify({
                "fields": {
                    "id": products.id,
                    "product_id": products.product_id,
                    "image": products.image,
                }
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // alert('image Updated successfully');
                navigate(`/Admin/image/${products.product_id}`); 
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
                    <h3 className="admin-product-title">Add New image</h3>
                    <Link to={`/Admin/image/${id}`}>Go Back</Link>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="product_id">Product Id</label>
                        <input required type="text" className="form-control" id="product_id" name="product_id" 
                        value={products.product_id = id} onChange={(event) => setProducts({ ...products, product_id: event.target.value })} disabled />
                    </div><br />

                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input type="file" className="form-control" id="image" name="image" onChange={handleImageUpload} />
                        {products.image && <img src={products.image} alt="product" className="img-fluid" />}
                    </div><br />


                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AdminNew8;
