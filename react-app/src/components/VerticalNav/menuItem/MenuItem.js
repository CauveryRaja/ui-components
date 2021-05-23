import React from 'react';

class MenuItem extends React.Component {
    render() {
        return (
            <li data-testid={this.props.id}>{this.props.label}</li>
        )
    }
}

export default MenuItem;