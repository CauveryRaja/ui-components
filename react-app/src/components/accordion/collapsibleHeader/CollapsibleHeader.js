import React from 'react';
import './CollapsibleHeader.css';

class CollapsibleHeader extends React.Component {

    clickListener = () => this.props.toggleCollapse(this.props.id)

    render() {
        return <header>
            <span data-testid='title' className='title'>{this.props.title}</span>
            { 
                this.props.expanded
                ? <button data-testid='collapse-btn' onClick={this.clickListener}>-</button> 
                : <button data-testid='expand-btn' onClick={this.clickListener}>+</button> 
            }
        </header>
    }
}

export default CollapsibleHeader;