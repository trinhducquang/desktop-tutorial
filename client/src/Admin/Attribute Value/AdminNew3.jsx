import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import AdminConfig from "../AdminConfig";
import Admin from "../Admin";

const AdminNew3 = () => {
    const { url } = AdminConfig;
    const { id } = useParams();
    const navigate = useNavigate();

    const [products, setProducts] = useState({
        id: null,
        attribute_id: null,
        value: '',
        description: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();


        fetch(`${url}AdminProduct.php`, {
            method: 'POST',
            headers: {
                'X-React-File-Name': 'AdminNew.jsx',
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

                alert('attri_value Updated successfully');

                navigate(`/Admin/attri_value/${products.attribute_id}`);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const [attributes, setAttirbutes] = useState([]);

    useEffect(() => {
        fetchAttri();
    }, [])

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


    return (
        <div className="container">
            <Admin />
            <div className="admin-product-content">

                <div className="product-list-header">
                    <h3 className="admin-product-title">Add New Attribute Value</h3>
                    <Link to={`/Admin/attri_value/${id}`}>Go Back</Link>
                </div>


                <form onSubmit={handleSubmit}>
                    {/* <div className="form-group">
                        <label htmlFor="attribute_id">Attribute Id</label>
                        <input required type="text" className="form-control" id="attribute_id" name="attribute_id" value={products.attribute_id} onChange={(event) => setProducts({ ...products, attribute_id: event.target.value })} />
                    </div><br /> */}
                    <div className="form-group">
                            <label htmlFor="attribute_id">Attribute Id</label>
                            <select id="attribute_id" name="attribute_id" className="form-control" value=""
                                        onChange={(event) => setProducts({ ...products, attribute_id: event.target.value })}>
                                <option value="" disabled>Select attri</option>
                                {
                                    attributes.map((attri) => (
                                        <option key={attri.id} value={attri.id}>
                                            {attri.attribute_type}
                                        </option>

                                    ))
                                }
                            </select>
                        </div>

                    <div className="form-group">
                        <label htmlFor="value">Value</label>
                        <input required type="text" className="form-control" id="value" name="value" value={products.value} onChange={(event) => setProducts({ ...products, value: event.target.value })} />
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

export default AdminNew3;