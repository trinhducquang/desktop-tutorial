import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import AdminConfig from "../AdminConfig";
import Admin from "../Admin";

const AdminNew2 = () => {
    const { url } = AdminConfig;
    const navigate = useNavigate();

    const [products, setProducts] = useState({
        id: null,
        attribute_type: '',
        description: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();


        fetch(`${url}AdminProduct.php`, {
            method: 'POST',
            headers: {
                'X-React-File-Name': 'AdminNew.jsx',
                'x-File-Type': 'attri'
            },
            body: JSON.stringify({
                "fields": {
                    "id": products.id,
                    "attribute_type": products.attribute_type,
                    "description": products.description
                }
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);

                alert('attri Updated successfully');

                navigate('/Admin/attri');
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
                    <h3 className="admin-product-title">Add New attribute</h3>
                    <Link to="/Admin/attri">Go Back</Link>
                </div>


                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="attribute_type">Attribute Type</label>
                        <input required type="text" className="form-control" id="attribute_type" name="attribute_type" value={products.attribute_type} onChange={(event) => setProducts({ ...products, attribute_type: event.target.value })} />
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

                    <button type="submit">Submit</button>
                    {/* <Link to="/Admin/attri">Go Back</Link> */}
                </form>
            </div>
        </div>

    )
}

export default AdminNew2;