import React from 'react';

class Menu extends React.Component {
    render() {
        return <ul data-testid={this.props.id}>
            {
                this.props.list.map(item => {
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

export default Menu;