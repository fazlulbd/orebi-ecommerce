import React, { useState } from 'react'
import { Toast } from 'react-bootstrap'

const Sidebar = () => {
    const [colorShow, setColorShow] = useState(true);
    const [brandShow, setBrandShow] = useState(true);
    const handleColor = () => setColorShow(!colorShow);
    const handleBrand = () => setBrandShow(!brandShow);

    return (
        <>
            <div className="sidbar_wrapper">
                <div className="sidebar-inner">
                    <h3>Shop by Category</h3>
                </div>
                <ul>
                    <li>New Arrivals</li>
                    <li>Gudgets</li>
                    <li>Accessories</li>
                    <li>Electronics</li>
                    <li>Others</li>
                </ul>
            </div>
            <div className="sidbar_wrapper">
             <div className="sidebar_button">
                <h3 onClick={handleColor}>Shop by Color</h3>
             </div>
                <Toast show={colorShow} onClose={handleColor}>
                    <ul>
                        <li>Green</li>
                        <li>Gray</li>
                        <li>Red</li>
                        <li>Yellow</li>
                        <li>Blue</li>
                    </ul>
                </Toast>
            </div>
            <div className="sidbar_wrapper">
             <div className="sidebar_button">
                <h3 onClick={handleBrand}>Shop by Brand</h3>
             </div>
                <Toast show={brandShow} onClose={handleBrand}>
                    <ul>
                        <li>Apple</li>
                        <li>Zara</li>
                        <li>Walton</li>
                        <li>No brand</li>
                    </ul>
                </Toast>
            </div>
        </>
    )
}

export default Sidebar
