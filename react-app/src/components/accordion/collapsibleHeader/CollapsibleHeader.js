import React from 'react';

class CollapsibleHeader extends React.Component {
    render() {
        return <header data-testid='title'>
            {this.props.title}
        </header>
    }
}

export default CollapsibleHeader;