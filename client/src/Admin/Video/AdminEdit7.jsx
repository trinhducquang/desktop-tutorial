import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import AdminConfig from "../AdminConfig";
import Admin from "../Admin";


const AdminEdit7 = () => {
    const { url } = AdminConfig;
    const { id } = useParams();
    const navigate = useNavigate();

    const [products, setProducts] = useState({
        id: null,
        name: '',
        type: '',
        link: ''
    });


    useEffect(() => {
        // console.log('vaochinh');
        fetch(`${url}AdminProduct.php/${id}`, {
            headers: {
                'X-React-File-Name': 'AdminById.jsx',
                'x-File-Type': 'video'
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
                name: data.name ? data.name : '',
                type: data.type ? data.type : '',
                link: data.link ? data.link : ''

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

                // setProducts(data);
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
                    <h3 className="admin-product-title">Update video</h3>
                    <Link to="/Admin/video">Go Back</Link>
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
                        {/* <Link to="/Admin/product">Go Back</Link> */}
                    </form>
                }

            </div>


        </div>
    )
}

export default AdminEdit7