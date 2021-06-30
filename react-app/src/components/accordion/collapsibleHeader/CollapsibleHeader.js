import React from 'react';

class CollapsibleHeader extends React.Component {

    render() {
        return <header>
            <h2 data-testid='title'>{this.props.title}</h2>
            { 
                this.props.expanded
                ? <button data-testid='collapse-btn' onClick={this.props.toggleCollapse}>-</button> 
                : <button data-testid='expand-btn' onClick={this.props.toggleCollapse}>+</button> 
            }
        </header>
    }
}

export default CollapsibleHeader;