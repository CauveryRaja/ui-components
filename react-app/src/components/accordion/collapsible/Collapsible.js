import React from 'react';
import CollapsibleHeader from '../collapsibleHeader/CollapsibleHeader';

class Collapsible extends React.Component {
    render() {
        return <section data-testid={'collapsible-'+this.props.id}>
            <CollapsibleHeader title={this.props.title} id={this.props.id}
                expanded={this.props.expanded} toggleCollapse={this.props.toggleCollapse}/>
            { this.props.expanded 
                && <p data-testid='content'>{this.props.content}</p> }
        </section>;
    }
}

export default Collapsible;