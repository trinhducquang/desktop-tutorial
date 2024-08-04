import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import AdminConfig from "../AdminConfig";
import Admin from "../Admin";


const AdminEdit6 = () => {
    const { url } = AdminConfig;
    const { id } = useParams();
    const navigate = useNavigate();

    const [products, setProducts] = useState({
        id: null,
        attribute_id: null,
        value: '',
        description: ''
    });


    useEffect(() => {
        // console.log('vaochinh');
        fetch(`${url}AdminProduct.php/${id}`, {
            headers: {
                'X-React-File-Name': 'AdminById.jsx',
                'x-File-Type': 'attri_value'
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
                attribute_id: data.attribute_id,
                value: data.value ? data.value : '',
                description: data.description ? data.description : ''

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
                'x-File-Type': 'attri_value'
            },
            body: JSON.stringify({
                "fields": {
                    "id": products.id,
                    "attribute_id": products.attribute_id,
                    "value": products.value,
                    "description": products.description
                }
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);

                // setProducts(data);
                alert('attri Updated successfully');

                navigate('/Admin/attri_value');
            })
            .catch(error => {
                console.log(error);
            });
    }



    return (
        <div className="container">
            <Admin/>
            <div className="admin-product-content">
                <div className="product-list-header">
                    <h3 className="admin-product-title">Update Attribute Value</h3>
                    <Link to={`/Admin/attri_value/${id}`}>Go Back</Link>
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
                            <label htmlFor="attribute_id">Attribute Id</label>
                            <input required type="text" className="form-control" id="attribute_id" name="attribute_id" value={products.attribute_id} onChange={(event) => setProducts({ ...products, attribute_id: event.target.value })} disabled />
                        </div><br />

                        <div className="form-group">
                            <label htmlFor="value">Value</label>
                            <input required type="text" className="form-control" id="value" name="value" value={products.value} onChange={(event) => setProducts({ ...products, value: event.target.value })} />
                        </div><br />

                        <div className="form-group mb-3">
                            <label htmlFor="description">Description</label>
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

                        <button type="submit">Submit</button>
                        {/* <Link to="/Admin/attri_value">Go Back</Link> */}
                    </form>
                }
            </div>

        </div>
    )
}

export default AdminEdit6;