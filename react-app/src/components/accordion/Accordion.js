import React from 'react';
import Collapsible from './collapsible/Collapsible';

class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsibles: props.collapsibleList ?  [...props.collapsibleList]: []
        }
    }

    toggleCollapse(id) {
        let collapsibles = [...this.state.collapsibles];
        // collapsibles[index].expanded = !collapsibles[index].expanded;
        // collapsibles.filter(elm => elm.id === id)[0] = 
        this.setState({
            collapsibles: collapsibles
        })
    }

    render() {
        return this.state.collapsibles 
                ? this.state.collapsibles.map(elm => {
                    return <Collapsible id={elm.id} key={elm.id}
                            title={elm.title} content={elm.content} 
                            expanded={elm.expanded} 
                            toggleCollapse={this.toggleCollapse}/>;
                }) 
                : <> No data found </>
    }
}

export default Accordion;