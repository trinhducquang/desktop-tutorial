import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import AdminConfig from "../AdminConfig";
import Admin from "../Admin";


const AdminEdit8 = () => {
    const { url } = AdminConfig;
    const { id } = useParams();
    const navigate = useNavigate();

    const [products, setProducts] = useState({
        id: null,
        product_id: null,
        image: ''
    });


    useEffect(() => {
        // console.log('vaochinh');
        fetch(`${url}AdminProduct.php/${id}`, {
            headers: {
                'X-React-File-Name': 'AdminById.jsx',
                'x-File-Type': 'image'
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
                product_id: data.product_id,
                image: data.image ? data.image : ''
            });
        }).catch(error => {
            console.error('Fetch error:', error);
        });
        
    }, []);


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


        fetch(`${url}AdminProduct.php/${id}`, {
            method: 'PATCH',
            headers: {
                'X-React-File-Name': 'AdminEdit.jsx',
                'x-File-Type': 'image'
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

                // setProducts(data);
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
                    <h3 className="admin-product-title">Update image</h3>
                    <Link to={`/Admin/image/${products.product_id}`}>Go Back</Link>
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
                            <label htmlFor="product_id">Product Id</label>
                            <input required type="text" className="form-control" id="product_id" name="product_id" value={products.product_id} onChange={(event) => setProducts({ ...products, product_id: event.target.value })} disabled />
                        </div><br />

                        <div className="form-group">
                            <label htmlFor="image">Image</label>
                            <input type="file" className="form-control" id="image" name="image" onChange={handleImageUpload} />
                            {products.image && <img src={products.image} alt="product" className="img-fluid" />}
                        </div><br />


                        <button type="submit">Submit</button>
                        {/* <Link to="/Admin/image">Go Back</Link> */}
                    </form>
                }

            </div>


        </div>
    )
}

export default AdminEdit8;