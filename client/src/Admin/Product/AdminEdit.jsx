import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import AdminConfig from "../AdminConfig";
import Admin from "../Admin";


const AdminEdit = () => {
    const { url } = AdminConfig;
    const { id } = useParams();
    const navigate = useNavigate();

    const [products, setProducts] = useState({
        id: null,
        name: '',
        description: '',
        gender: '',
        quantity: '',
        // image1: '',
        // image2: '',
        link: '',
        price: '',
        rating: '',
        color: '',
        size: '',
        brand: '',
        type: ''
    });


    useEffect(() => {
        // console.log('vaochinh');
        fetch(`${url}AdminProduct.php/${id}`, {
            headers: {
                'X-React-File-Name': 'AdminById.jsx',
                'x-File-Type': 'product'
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
                description: data.description ? data.description : '',
                gender: data.gender ? data.gender : '',
                quantity: data.quantity ? data.quantity : '',
                // image1: data.image1 ? data.image1 : '',
                // image2: data.image2 ? data.image2 : '',
                link: data.link ? data.link : '',
                price: data.price ? data.price : '',
                rating: data.rating ? data.rating : '',
                color: data.color ? data.color : '',
                size: data.size ? data.size : '',
                brand: data.brand ? data.brand : '',
                type: data.type ? data.type : ''

            });
        }).catch(error => {
            console.error('Fetch error:', error);
        });

        fetchAttri();
        fetchAttriValue();
    }, []);

    const [attributes, setAttirbutes] = useState([]);
    const [attributeValue, setAttirbuteValue] = useState([]);

    // useEffect(() => {
    // }, []);

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

    const fetchAttriValue = async () => {
        try {
            const response = await fetch(`${url}AdminProduct.php`, {
                headers: {
                    'X-React-File-Name': 'AdminAttriValue.jsx'
                }
            })
            if (!response.ok) {
                console.log(response);
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // console.log(data);
            setAttirbuteValue(data);
            // console.log(attributeValue);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    };


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
                'x-File-Type': 'product'
            },
            body: JSON.stringify({
                "fields": {
                    "id": products.id,
                    "name": products.name,
                    "description": products.description,
                    "gender": products.gender,
                    "quantity": products.quantity,
                    // "image1": products.image1,
                    // "image2": products.image2,
                    "link": products.link,
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

                // setProducts(data);
                alert('Product Updated successfully');

                navigate('/Admin/product');
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
                    <h3 className="admin-product-title">Update product</h3>
                    <Link to="/Admin/product">Go Back</Link>
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
                                onEditorChange={(content, editor) => setProducts({ ...products, description: content })}
                                onInit={(evt, editor) => editor.setContent(products.description)}
                            />
                        </div><br />

                        {
                            attributes.map((attri) => {
                                const attri_type = products[attri.attribute_type]
                                return (
                                // console.log(attri.id) ||
                                // console.log(attributeValue.filter(attri_value => attri_value.attribute_id === attri.id)) ||
                                <div className="form-group" key={attri.attribute_type}>
                                    <label htmlFor={attri.attribute_type}>{attri.attribute_type.toUpperCase()}</label>

                                    <select
                                        name={attri.attribute_type}
                                        className="form-control"
                                        value={attri_type}
                                        // value={4}
                                        onChange={(event) => setProducts({ ...products, [attri.attribute_type]: event.target.value })}>

                                        <option value="" disabled>Select {attri.attribute_type}</option>
                                        {
                                            attributeValue
                                                .filter(attri_value => attri_value.attribute_id === attri.id) // Filter based on attribute_id
                                                .map((attri_value) => (
                                                    <option key={attri_value.id} value={attri_value.id}>
                                                        {attri_value.value}
                                                    </option>
                                                    // console.log(`<option key=${attri_value.id} value=${attri_value.id}>
                                                    //     ${attri_value.value}
                                                    // </option>`)
                                                ))
                                        }

                                        {/* <option value="4">1</option>
                                    <option value="5">2</option>
                                    <option value="11">3</option>
                                    <option value="14">4</option> */}

                                    </select>
                                </div>
                            )})


                        }<br />

                        <div className="form-group">
                            <label htmlFor="gender">Gender</label>
                            <select name="gender" className="form-control" value={products.gender} onChange={(event) => setProducts({ ...products, gender: event.target.value })}>
                                <option value="" disabled>Select gender</option>
                                <option value="gentlman">Gentlman</option>
                                <option value="ladies">Ladies</option>
                            </select>
                        </div><br />

                        <div className="form-group">
                            <label htmlFor="quantity">Quantity</label>
                            <input required type="text" className="form-control" id="quantity" name="quantity" value={products.quantity} onChange={(event) => setProducts({ ...products, quantity: event.target.value })} />
                        </div><br />

                        {/* <div className="form-group">
                            <label htmlFor="image1">Image1</label>
                            <input type="file" className="form-control" id="image1" name="image1" onChange={handleImageUpload} />
                            {products.image1 && <img src={products.image1} alt="product" className="img-fluid" />}
                        </div><br />

                        <div className="form-group">
                            <label htmlFor="image2">Image2</label>
                            <input type="file" className="form-control" id="image2" name="image2" onChange={handleImageUpload} />
                            {products.image2 && <img src={products.image2} alt="product" className="img-fluid" />}
                        </div><br /> */}

                        <div className="form-group">
                            <label htmlFor="link">Link</label>
                            <input required type="text" className="form-control" id="link" name="link" value={products.link} onChange={(event) => setProducts({ ...products, link: event.target.value })} />
                        </div><br />

                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input required type="text" className="form-control" id="price" name="price" value={products.price} onChange={(event) => setProducts({ ...products, price: event.target.value })} />
                        </div><br />

                        <button type="submit">Submit</button>
                        {/* <Link to="/Admin/product">Go Back</Link> */}
                    </form>
                }

            </div>


        </div>
    )
}

export default AdminEdit