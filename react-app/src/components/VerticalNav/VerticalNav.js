import React from 'react';
import PropTypes from 'prop-types';
import Menu from './menu/Menu';
import MenuItem from './menuItem/MenuItem';

class VerticalNav extends React.Component {
    render() {
        return (
            <>
                <ul>
                {
                    this.props.menuList.map(elm => {
                        let outputElm;
                        switch(elm.type) {
                            case 'list': 
                                outputElm = <Menu id={elm.id} key={elm.id}
                                                label={elm.name.displayName} value={elm.name.actualName}
                                                items={elm?.children}/>;
                                            break;
                            case 'item':
                                outputElm = <MenuItem id={elm.id} key={elm.id}
                                                active={elm?.active} label={elm.name.displayName} value={elm.name.actualName} />;
                                            break;
                        }
                        return outputElm;
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