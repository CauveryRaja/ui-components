import React from 'react';
import PropTypes from 'prop-types';
import { getElementByType } from './VerticalNav.service';

class VerticalNav extends React.Component {
    render() {
        return (
            <>
                <ul>
                {
                    this.props.menuList.map(elm => getElementByType(elm))
                }
                </ul>
            </>
        )
    }
}

VerticalNav.propTypes = {
    menuList: PropTypes.array.isRequired
}

export default VerticalNav;