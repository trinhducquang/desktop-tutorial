import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";

const AdminEdit = () => {
    const { id } = useParams();
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


    useEffect(() => {
        console.log('vaochinh');
        // fetchDataById();


        console.log('avo chinh');
        fetch(`http://localhost/project1%20-%2030-7/desktop-tutorial/client/src/components/Admin/AdminProduct.php/${id}`, {
            headers: {
                'X-React-File-Name': 'AdminEdit.jsx',
                'x-File-Type': 'product'
            }
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data => {
            console.log(data);
            setProducts({
                ...products,
                id: data.id,
                name: data.name ? data.name : '',
                description: data.description ? data.description : '',
                gender: data.gender ? data.gender : '',
                quantity: data.quantity ? data.quantity : '',
                image1: data.image1 ? data.image1 : '',
                image2: data.image2 ? data.image2 : '',
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

    }, [id]);


    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            const base64String = 'data:image/jpeg;base64,' + reader.result.replace('data:', '').replace(/^.+,/, '');
            setProducts({ ...products, picture: base64String });
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };


    const handleSubmit = (event) => {
        event.preventDefault();


        fetch(`http://localhost/project1%20-%2030-7/desktop-tutorial/client/src/components/Admin/AdminProduct.php/${id}`, {
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

                // setProducts(data);
                alert('Product Updated successfully');

                navigate('Admin/product');
            })
            .catch(error => {
                console.log(error);
            });
    }


    return (
        <div className="ccontainer">
            <h1>Update product</h1>

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

                    <div className="form-group">
                        <label htmlFor="type">Type</label>
                        <input required type="text" className="form-control" id="type" name="type" value={products.type} onChange={(event) => setProducts({ ...products, type: event.target.value })} />
                    </div><br />

                    <div className="form-group">
                        <label htmlFor="brand">Brand</label>
                        <input required type="text" className="form-control" id="brand" name="brand" value={products.brand} onChange={(event) => setProducts({ ...products, brand: event.target.value })} />
                    </div><br />

                    <div className="form-group">
                        <label htmlFor="color">Color</label>
                        <input required type="text" className="form-control" id="color" name="color" value={products.color} onChange={(event) => setProducts({ ...products, color: event.target.value })} />
                    </div><br />

                    <div className="form-group">
                        <label htmlFor="size">Size</label>
                        <input required type="text" className="form-control" id="size" name="size" value={products.size} onChange={(event) => setProducts({ ...products, size: event.target.value })} />
                    </div><br />

                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <select name="gender" className="form-control" value={products.gender} onChange={(event) => setProducts({ ...products, gender: event.target.value })}>
                            <option value="">Select gender</option>
                            <option value="1">Gentlman</option>
                            <option value="2">Ladies</option>
                        </select>
                    </div><br />

                    <div className="form-group">
                        <label htmlFor="quantity">Quantity</label>
                        <input required type="text" className="form-control" id="quantity" name="quantity" value={products.quantity} onChange={(event) => setProducts({ ...products, quantity: event.target.value })} />
                    </div><br />

                    <div className="form-group">
                        <label htmlFor="image1">Image1</label>
                        <input type="file" className="form-control" id="image1" name="image1" onChange={handleImageUpload} />
                        {products.image1 && <img src={products.image1} alt="product" className="img-fluid" />}
                    </div><br />

                    <div className="form-group">
                        <label htmlFor="image2">Image2</label>
                        <input type="file" className="form-control" id="image2" name="image2" onChange={handleImageUpload} />
                        {products.image2 && <img src={products.image2} alt="product" className="img-fluid" />}
                    </div><br />

                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input required type="text" className="form-control" id="price" name="price" value={products.price} onChange={(event) => setProducts({ ...products, price: event.target.value })} />
                    </div><br />

                    <button type="submit">Submit</button>
                    <Link to="/Admin/product">Go Back</Link>
                </form>
            }

        </div>
    )
}

export default AdminEdit