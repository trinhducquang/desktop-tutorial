import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Handbag.scss';
import banner from '../../../public/Library/banner.avif'; // Bạn có thể thay đổi đường dẫn nếu cần
import FooterTop from '../../components/Footer-top/FooterTop';
import Topshop from '../../components/Topshop/Topshop';
import useHover from '../../Hooks/useHover';
import AdminConfig from '../../Admin/AdminConfig';

const Handbag = () => {
  const { url } = AdminConfig;
  const { hoveredItem, handleMouseEnter, handleMouseLeave } = useHover();
  const [products, setProducts] = useState([]);
  const [productAttributes, setPorductAttributes] = useState([]);
  const [images, setImages] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});

  const fetchData = async (url) => {
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
      setProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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
      setPorductAttributes(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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
    if (!acc[img.product_id]) {
      acc[img.product_id] = [];
    }
    acc[img.product_id].push(img);
    return acc;
  }, {});

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
  };

  useEffect(() => {
    fetchData(url);
    fetchImage();
    fetchProductAttri();
  }, [url]);

  return (
    <>
      <section>
        <div className='Navbar-img Navbar-library'>
          <img src={banner} alt="Library Banner" />
          <div className='img-content'>
            <h2>Handbag</h2>
            <p>Find your perfect handbag</p>
          </div>
        </div>
      </section>

      <Topshop onFilterChange={handleFilterChange} />

      <section>
        <div className='Library-item'>
          <div className='content-container'>
            {
              products
              .filter((product) => product.type === 'Handbag')
              .map((product) => (
                <div className='item' key={product.id}>
                  <div className=''>
                    {
                      Object.entries(groupedImages)
                        .filter(([productId, imageList]) => productId === product.id)
                        .map(([productId, imageList]) => {
                          const [image1, image2] = imageList.slice(0, 2);

                          return (
                            <Link to={`/Booking/${productId}`} key={productId}>
                              <div
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
      </section>
      
      <FooterTop />
    </>
  );
};

export default Handbag;
