import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from 'react-router-dom'; 
import './topshop.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AdminConfig from '../../Admin/AdminConfig';

const Topshop = ({ onFilterChange }) => {
    const { url } = AdminConfig;
    const location = useLocation(); 
    const [activeDropdown, setActiveDropdown] = useState('');

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? '' : dropdown);
    };

    const closeDropdown = () => {
        setActiveDropdown('');
    };

    const handleClickOutside = useCallback((event) => {
        if (!event.target.closest('.dropdown-menu') && !event.target.closest('.topshop-container-item-1')) {
            closeDropdown();
        }
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    const [attributes, setAttirbutes] = useState([]);
    const [attributeValues, setAttirbuteValues] = useState([]);

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
            setAttirbutes(data);
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
            setAttirbuteValues(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchAttri();
        fetchAttriValue();
    }, []);

    const [selectedFilters, setSelectedFilters] = useState({});

    const handleCheckboxChange = useCallback((attributeType, valueId) => {
        setSelectedFilters(prevFilters => {
            const newFilters = { ...prevFilters };
            if (!newFilters[attributeType]) {
                newFilters[attributeType] = [];
            }
            const index = newFilters[attributeType].indexOf(valueId);
            if (index > -1) {
                newFilters[attributeType].splice(index, 1);
            } else {
                newFilters[attributeType].push(valueId);
            }
            return newFilters;
        });
    }, []);

    useEffect(() => {
        console.log(selectedFilters);
        onFilterChange(selectedFilters);
    }, [selectedFilters, onFilterChange]);

    const shouldHideType = ['/Vali', '/Handbag', '/Backpack', '/Gentlemen', '/Ladies'].includes(location.pathname);

    return (
        <div>
            <section>
                <div className='topshort-text-container'>
                    <div className='topshop-container'>
                        <div className='topshop-container-item'>
                            {
                                ['COLOR', 'TYPE', 'BRAND', 'SIZE', 'COLLECTION', 'FEATURES'].map(item => (
                                    <div key={item}>
                                        {(item === 'TYPE' && shouldHideType) ? null : (
                                            <div className="topshop-container-item-1">
                                                <h5 onClick={() => toggleDropdown(item)}>{item}</h5>
                                                {item === 'TYPE' && shouldHideType ? null : <KeyboardArrowDownIcon />}
                                            </div>
                                        )}
                                        {activeDropdown === item && item !== 'COLLECTION' && item !== 'FEATURES' && (
                                            <div className='dropdown-menu colors-menu' onClick={(e) => e.stopPropagation()}>
                                                {
                                                    attributes
                                                        .filter((attri) => attri.attribute_type === item.toLowerCase())
                                                        .map((attri) => (
                                                            <div key={attri.attribute_type}>
                                                                {
                                                                    attributeValues
                                                                        .filter(attri_value => attri_value.attribute_id === attri.id)
                                                                        .map((attri_value) => (
                                                                            <div key={attri_value.id} className='color-option'>
                                                                                <input
                                                                                    type="checkbox" className="color-box"
                                                                                    id={`filter-${attri_value.id}`}
                                                                                    checked={selectedFilters[item.toLowerCase()]?.includes(attri_value.id) || false}
                                                                                    onChange={() => handleCheckboxChange(item.toLowerCase(), attri_value.id)}
                                                                                />
                                                                                <label htmlFor={`filter-${attri_value.id}`}>{attri_value.value}</label>
                                                                            </div>
                                                                        ))
                                                                }
                                                            </div>
                                                        ))
                                                }
                                            </div>
                                        )}
                                        {activeDropdown === item && (item === 'COLLECTION' || item === 'FEATURES') && (
                                            <div className='dropdown-menu' onClick={(e) => e.stopPropagation()}>
                                                <p>Select {item}</p>
                                                {/* Add more options as needed */}
                                            </div>
                                        )}
                                    </div>
                                ))
                            }
                        </div>
                        <div className='sort-container'>
                            <p>50 products</p>
                            <p onClick={() => toggleDropdown('SORT_BY')}>sort by <KeyboardArrowDownIcon /></p>
                            {activeDropdown === 'SORT_BY' && (
                                <div className='dropdown-menu' onClick={(e) => e.stopPropagation()}>
                                    <p>Select sorting option</p>
                                    {/* Add sorting options as needed */}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Topshop;
