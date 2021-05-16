import React from 'react';
import PropTypes from 'prop-types';

class VerticalNav extends React.Component {
    render() {
        return (
            <>
                <ul>
                {
                    this.props.menuList.map(menu => {
                        return (
                            <li data-testid={menu.id} key={menu.id}>
                                {menu.name['displayName']}
                            {
                                menu['children']
                                && <VerticalNav menuList={menu['children']}/>
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