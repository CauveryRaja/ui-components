import React from 'react';
import { getElementByType } from '../VerticalNav.service';

class Menu extends React.Component {
    render() {
        return (
            <li data-testid={this.props.id}>
                {this.props.label}
                <ul>
                {
                    this.props.items.map(item => getElementByType(item))
                }
                </ul>
            </li>
        )
    }
}

export default Menu;