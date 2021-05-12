import React from 'react';

class VerticalNav extends React.Component {
    render() {
        return (
            <>
                <div>Welcome to React !!!</div>
                <ul>
                {
                    this.props.menuList.forEach(menu => {
                        return (
                            <li data-testid={menu.id}></li>
                        )
                    })
                }
                </ul>
            </>
        )
    }
}

export default VerticalNav;