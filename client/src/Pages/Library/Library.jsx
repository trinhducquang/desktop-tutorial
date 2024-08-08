import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Library.scss';
import banner from '../../../public/Library/banner.avif';
import FooterTop from '../../components/Footer-top/FooterTop';
import Topshop from '../../components/Topshop/Topshop';
import useHover from '../../Hooks/useHover';
import AdminConfig from '../../Admin/AdminConfig';

const Library = () => {
  const { url } = AdminConfig;
  const { hoveredItem, handleMouseEnter, handleMouseLeave } = useHover();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      let resp = await fetch(`${url}AdminProduct.php`, {
        method: 'GET',
        headers: {
          'X-React-File-Name': 'AdminProduct.jsx'
        }
      });

      if (!resp.ok) {
        throw new Error('Failed to fetch product data.');
      }

      let data = await resp.json();
      // console.log(data);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
    fetchImage();
    fetchProductAttri();
  }, [url]);

  const [productAttributes, setPorductAttributes] = useState([]);

  const fetchProductAttri = async () => {
    try {
      let response = await fetch(`${url}AdminProduct.php`, {
        headers: {
          'X-React-File-Name': 'AdminProductAttri.jsx'
        }
      });
      if (!response.ok) {
        console.log(response);
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // console.log(data);
      setPorductAttributes(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const [images, setImages] = useState([]);

  const fetchImage = async () => {
    try {
      const response = await fetch(`${url}AdminProduct.php`, {
        headers: {
          'X-React-File-Name': 'AdminImage.jsx'
        }
      })
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const groupedImages = images.reduce((acc, img) => {
    // if (img.product_id === products.id) {
    if (!acc[img.product_id]) {
      acc[img.product_id] = [];
    }
    acc[img.product_id].push(img);
    // }
    return acc;
  }, {});


  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({});

  const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters);
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      const filtered = products.filter(product => {
        return Object.entries(filters).every(([attributeType, selectedValues]) => {
          if (selectedValues.length === 0) return true;
          // console.log(product);
          // console.log(productAttributes);
          const productAttriForType = productAttributes.filter(
            pa => pa.product_id === product.id && pa.attribute_value_id && selectedValues.includes(pa.attribute_value_id)
          );
          console.log(productAttriForType.filter(pa => pa.product_id === product.id && pa.attribute_value_id && selectedValues.includes(pa.attribute_value_id)));
          return productAttriForType.length > 0;
        });
      });
      // console.log(filtered);
      setFilteredProducts(filtered);
    };

    applyFilters();
  }, [filters, products, productAttributes]);




  return (
    <>
      <section>
        <div className='Navbar-img Navbar-library'>
          <img src={banner} alt="Library Banner" />
          <div className='img-content'>
            <h2>Library</h2>
            <p>Discover the new range of travel bags for men & women.</p>
          </div>
        </div>
      </section>
      <Topshop onFilterChange={handleFilterChange} />
      <section>
        <div className='Library-item'>
          <div className='content-container'>

            {
              filteredProducts.map((product) => (
                <div className='item' key={product.id}>
                  <div className=''>
                    {
                      // images
                      // .filter(img => img.product_id === product.id)
                      // .map((img) => (
                      Object.entries(groupedImages)
                        .filter(([productId, imageList]) => productId === product.id)
                        .map(([productId, imageList]) => {
                          // console.log(groupedImages);
                          // console.log('Product ID:', productId); // Logs the product_id
                          // console.log('Images:', imageList);    // Logs the associated images
                          // console.log(imageList) || console.log('vao')

                          // Slice the first 2 images from imageList
                          const [image1, image2] = imageList.slice(0, 2);
                          // console.log(image1);

                          return (
                            <Link to={`/Booking/${productId}`}>
                              <div
                                key={productId}
                                className='img-container'
                                onMouseEnter={() => handleMouseEnter(product.id)}
                                onMouseLeave={handleMouseLeave}
                              >
                                {image1 && (
                                  <img
                                    src={image1.image}
                                    alt={`Product ${productId} - Image 1`}
                                    className={`img1 ${hoveredItem === productId ? 'hidden' : ''}`}
                                  />
                                )}
                                {image2 && (
                                  <img
                                    src={image2.image}
                                    alt={`Product ${productId} - Image 2`}
                                    className={`imgright ${hoveredItem === productId ? 'visible' : ''}`}
                                  />
                                )}
                              </div>
                            </Link>
                          );
                          // console.log(img.image) || console.log(img.product_id)
                          // <div
                          //   className='img-container'
                          //   onMouseEnter={() => handleMouseEnter(product.id)}
                          //   onMouseLeave={handleMouseLeave}
                          // >
                          //   <img
                          //     src={img.image[0]}
                          //     alt={product.name}
                          //     className={`img1 ${hoveredItem === product.id ? 'hidden' : ''}`}
                          //   />
                          //   <img
                          //     src={img.image[1]}
                          //     alt={product.name}
                          //     className={`imgright ${hoveredItem === product.id ? 'visible' : ''}`}
                          //   />
                          // </div>

                        })
                    }

                    <div className='text-abc'>
                      <h4>{product.name}</h4>
                      <p>${product.price}</p>
                    </div>

                  </div>
                </div>

              ))
            }
          </div>
        </div>
      </section >
      <FooterTop />
    </>
  );
};

export default Library;
