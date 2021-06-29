import React from 'react';
import CollapsibleHeader from '../collapsibleHeader/CollapsibleHeader';

class Collapsible extends React.Component {
    render() {
        return <section data-testid={this.props.id}>
            <CollapsibleHeader title={this.props.title} 
                expanded={this.props.expanded} toggleCollapse={this.props.toggleCollapse}/>
            <p data-testid='content'>{this.props.content}</p>
        </section>;
    }
}

export default Collapsible;