import React from 'react';
import PropTypes from 'prop-types';

class VerticalNav extends React.Component {
    render() {
        return (
            <>
                <div>Welcome to React !!!</div>
                <ul>
                {
                    this.props.menuList.map(menu => {
                        return (
                            <li data-testid={menu.id} key={menu.id}>
                            {
                                if(menu['children']) {

                                }
                            }
                            </li>
                        )
                    })
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