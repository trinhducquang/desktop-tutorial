import React, { useState, useEffect } from 'react';
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
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

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
      <Topshop />
      <section>
        <div className='Library-item'>
          <div className='content-container'>

            {products.map((product) => (
              <div className='item' key={product.id}>
                <div
                  className='img-container'
                  onMouseEnter={() => handleMouseEnter(product.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={product.image1}
                    alt={product.name}
                    className={`img1 ${hoveredItem === product.id ? 'hidden' : ''}`}
                  />
                  <img
                    src={product.image2}
                    alt={product.name}
                    className={`imgright ${hoveredItem === product.id ? 'visible' : ''}`}
                  />
                </div>
                <div className='text-container'>
                  <h4>{product.name}</h4>
                  <p>${product.price}</p>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </section>
      <FooterTop />
    </>
  );
};

export default Library;
