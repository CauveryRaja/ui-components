import React, { Component } from 'react';
import Menu from './menu/Menu';

class NavigationMenu extends Component {
    render() {
        return <ul>
        {
            this.props.menuList.map(item => {
                switch(item.type) {
                    case 'item': 
                        return <li key={item.id} data-testid={item.id}></li>
                    case 'list': 
                        return <Menu key={item.id} id={item.id}
                                label={item.label} list={item.children}></Menu>
                };
            })
        }
        </ul>
    }
}

export default NavigationMenu;