import React from 'react';
import './menu-item.scss';

const MenuItem = ({ title , imageUrl, size}) => (
    <div className = {`${size ? size : ''} menu-item`}>
    <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}/>
        {/* or use this  to prevent getting 'undefined' in DOM className={`menu-item ${size || ''}`} */}
                <div className = "content">
                    <h1 className = "title">{title.toUpperCase()}</h1>
                    <span className = "subtitle">SHOP NOW</span>
                </div>
            </div>
);

export default MenuItem;