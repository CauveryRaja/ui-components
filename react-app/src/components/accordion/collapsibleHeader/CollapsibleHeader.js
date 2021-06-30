import React from 'react';

class CollapsibleHeader extends React.Component {

    clickListener = () => this.props.toggleCollapse(this.props.id)

    render() {
        return <header>
            <h2 data-testid='title'>{this.props.title}</h2>
            { 
                this.props.expanded
                ? <button data-testid='collapse-btn' onClick={this.clickListener}>-</button> 
                : <button data-testid='expand-btn' onClick={this.clickListener}>+</button> 
            }
        </header>
    }
}

export default CollapsibleHeader;