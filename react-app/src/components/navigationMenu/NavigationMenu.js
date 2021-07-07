import React, { Component } from 'react';
import Menu from './'

class NavigationMenu extends Component {
    render() {
        return <ul>
        {
            this.props.menuList.map(elm => {
                switch(elm.type) {
                    case 'item': return <li key={elm.id} data-testid={elm.id}></li>
                    case 'list': return 
                }
            })
        }
        </ul>
    }
}

export default NavigationMenu;