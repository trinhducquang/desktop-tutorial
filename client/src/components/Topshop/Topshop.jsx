import React, { useState } from 'react';
import './topshop.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Topshop = () => {
    const [activeDropdown, setActiveDropdown] = useState('');

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? '' : dropdown);
    };

    const colors = [
        { name: 'Black', color: '#000000' },
        { name: 'Blue', color: '#0000FF' },
        { name: 'Green', color: '#008000' },
        { name: 'Grey', color: '#808080' },
        { name: 'Pink', color: '#FFC0CB' },
        { name: 'White', color: '#f3f3f3' },
        { name: 'Silver', color: '#C0C0C0' },
    ];

    return (
        <div>
            <section>
                <div className='topshort-text-container'>
                    <div className='topshop-container'>
                        <div className='topshop-container-item'>
                            {['COLOUR', 'CATEGORY', 'MATERIAL', 'COLLECTION', 'SIZE', 'FEATURES'].map(item => (
                                <div key={item}>
                                    <h5 onClick={() => toggleDropdown(item)}>{item}</h5>
                                    <KeyboardArrowDownIcon />
                                    {activeDropdown === item && item === 'COLOUR' && (
                                        <div className='dropdown-menu colors-menu'>
                                            {colors.map(color => (
                                                <div key={color.name} className='color-option'>
                                                    <div className='color-box' style={{ backgroundColor: color.color }}></div>
                                                    <p>{color.name}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {activeDropdown === item && item !== 'COLOUR' && (
                                        <div className='dropdown-menu'>
                                            <p>Select {item}</p>
                                            {/* Add more options as needed */}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className='sort-container'>
                            <p>50 products</p>
                            <p onClick={() => toggleDropdown('SORT_BY')}>sort by <KeyboardArrowDownIcon /></p>
                            {activeDropdown === 'SORT_BY' && (
                                <div className='dropdown-menu'>
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
