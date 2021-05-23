import React from 'react';
import MenuItem from '../menuItem/MenuItem'

class Menu extends React.Component {
    render() {
        return (
            <li data-testid={this.props.id}>
                {this.props.label}
                <ul>
                {
                    this.props.items.map(item => {
                        return (
                            <MenuItem id={item.id} key={item.id}
                                active={item?.active} label={item.name.displayName} value={item.name.actualName} />
                        )
                    })
                }
                </ul>
            </li>
        )
    }
}

export default Menu;