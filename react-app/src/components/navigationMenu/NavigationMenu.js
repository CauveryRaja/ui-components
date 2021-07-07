import React, { Component } from 'react';

class NavigationMenu extends Component {
    render() {
        return <ul>
        {
            this.props.menuList.map(elm => {
                return <li key={elm.id} data-testid={elm.id}></li>
            })
        }
        </ul>
    }
}

export default NavigationMenu;