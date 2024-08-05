import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import AdminConfig from "../AdminConfig";
import Admin from "../Admin";

const AdminNew = () => {
    const { url } = AdminConfig;
    const navigate = useNavigate();

    const [products, setProducts] = useState({
        id: null,
        name: '',
        description: '',
        gender: '',
        quantity: '',
        image1: '',
        image2: '',
        price: '',
        rating: '',
        color: '',
        size: '',
        brand: '',
        type: ''
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
                'x-File-Type': 'product',
            },
            body: JSON.stringify({
                "fields": {
                    "id": products.id,
                    "name": products.name,
                    "description": products.description,
                    "gender": products.gender,
                    "quantity": products.quantity,
                    "image1": products.image1,
                    "image2": products.image2,
                    "price": products.price,
                    "rating": products.rating,
                    "color": products.color,
                    "size": products.size,
                    "brand": products.brand,
                    "type": products.type
                }
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert('Product Updated successfully');
                navigate('/Admin/product');
            })
            .catch(error => {
                console.log(error);
            });
    }

    const [attributes, setAttributes] = useState([]);
    const [attributeValues, setAttributeValues] = useState([]);

    useEffect(() => {
        fetchAttri();
        fetchAttriValue();
    }, []);

    const fetchAttri = async () => {
        try {
            let response = await fetch(`${url}AdminProduct.php`, {
                headers: {
                    'X-React-File-Name': 'AdminAttribute.jsx'
                }
            });
            if (!response.ok) {
                console.log(response);
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setAttributes(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchAttriValue = async () => {
        try {
            const response = await fetch(`${url}AdminProduct.php`, {
                headers: {
                    'X-React-File-Name': 'AdminAttriValue.jsx'
                }
            });
            if (!response.ok) {
                console.log(response);
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setAttributeValues(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="container">
            <Admin />

            <div className="admin-product-content">
                <div className="product-list-header">
                    <h3 className="admin-product-title">Add New product</h3>
                    <Link to="/Admin/product">Go Back</Link>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={products.name}
                            onChange={(event) => setProducts({ ...products, name: event.target.value })}
                        />
                    </div><br />

                    <div className="form-group mb-3">
                        <label htmlFor="descr">Description</label>
                        <Editor
                            value={products.description}
                            init={{
                                height: 300,
                                menubar: true,
                                plugins: [],
                                toolbar: []
                            }}
                            apiKey="lq7do16j36or80re6ywmzmdpp02ifk10sgtkclo61gagp6l5"
                            onChange={(event) => setProducts({ ...products, description: event.target.getContent() })}
                        />
                    </div><br />

                    {
    attributes.map((attri) => (
        <div className="form-group" key={attri.attribute_type}>
            <label htmlFor={attri.attribute_type}>{attri.attribute_type.toUpperCase()}</label>

            <select
                name={attri.attribute_type}
                className="form-control"
                value={products[attri.attribute_type]}
                onChange={(event) => setProducts({ ...products, [attri.attribute_type]: event.target.value })}>

<<<<<<< HEAD
                <option value="" disabled>Select {attri.attribute_type}</option>
                {
                    attributeValues
                        .filter(attri_value => attri_value.attribute_id === attri.id)
                        .map((attri_value) => (
                            <option key={attri_value.id} value={attri_value.id}>
                                {attri_value.value}
                            </option>
=======
                                    <option value="" disabled>Select {attri.attribute_type}</option>
                                    {
                                        attributeValues
                                            .filter(attri_value => attri_value.attribute_id === attri.id)
                                            .map((attri_value) => (
                                                // console.log('vao')
                                                // {...(product.location_id === `${location.id}` ? { selected: true } : {})}
                                                <option key={attri_value.id} {...(products[attri.attribute_type] === `${attri_value.id}` ? { selected: true } : {})} value={attri_value.id}>
                                                    {attri_value.value}
                                                </option>
                                            ))
                                    }

                                </select>
                            </div>
>>>>>>> ff06a5c420f57e9e2623e7dac40faeee3272e0d6
                        ))
                }

            </select>
        </div>
    ))
}
<br />

                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <select
                            name="gender"
                            className="form-control"
                            value={products.gender || ''}
                            onChange={(event) => setProducts({ ...products, gender: event.target.value })}
                        >
                            <option value="" disabled>Select gender</option>
                            <option {...(products.gender === `gentlman` ? { selected: true } : {})} value="gentlman">Gentlman</option>
                            <option {...(products.gender === `ladies` ? { selected: true } : {})} value="ladies">Ladies</option>
                        </select>
                    </div><br />

                    <div className="form-group">
                        <label htmlFor="quantity">Quantity</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            id="quantity"
                            name="quantity"
                            value={products.quantity}
                            onChange={(event) => setProducts({ ...products, quantity: event.target.value })}
                        />
                    </div><br />

                    <div className="form-group">
                        <label htmlFor="image1">Image1</label>
                        <input
                            type="file"
                            className="form-control"
                            id="image1"
                            name="image1"
                            onChange={handleImageUpload}
                        />
                        {products.image1 && <img src={products.image1} alt="product" className="img-fluid" />}
                    </div><br />

                    <div className="form-group">
                        <label htmlFor="image2">Image2</label>
                        <input
                            type="file"
                            className="form-control"
                            id="image2"
                            name="image2"
                            onChange={handleImageUpload}
                        />
                        {products.image2 && <img src={products.image2} alt="product" className="img-fluid" />}
                    </div><br />

                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            id="price"
                            name="price"
                            value={products.price}
                            onChange={(event) => setProducts({ ...products, price: event.target.value })}
                        />
                    </div><br />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AdminNew;
