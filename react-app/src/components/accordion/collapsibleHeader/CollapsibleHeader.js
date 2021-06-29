import React from 'react';

class CollapsibleHeader extends React.Component {

    render() {
        return <header>
            <h2 data-testid='title'>{this.props.title}</h2>
            { 
                this.props.expanded
                ? <button data-testid='collapse-btn'>-</button> 
                : <button data-testid='expand-btn'>+</button> 
            }
        </header>
    }
}

export default CollapsibleHeader;