import React, { useState } from 'react';
import './HiddenSearch.css';

const HiddenSearch = () => {
    let [isVisible, setVisible] = useState(false);

    const toggleSearch = () => {
        setVisible(!isVisible);
    }

    return (
        <div className="search-bar">
            <input className={"search-box" + (isVisible ? ' visible' : '')} type="text" name="search-box" placeholder="Search"/>
            <button className="search-btn" onClick={toggleSearch}>
                {/* <i className="fa fa-search"></i> */}
                C
            </button>
        </div>
    )
};

export default HiddenSearch;