import React from 'react';
import Collapsible from './collapsible/Collapsible';

class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsibles: props.collapsibleList ?  [...props.collapsibleList]: []
        }
        this.toggleCollapse.bind(this);
    }

    toggleCollapse(index) {
        let collapsibles = [...this.state.collapsibles];
        collapsibles[index].expanded = !collapsibles[index].expanded;
        this.setState({
            collapsibles: collapsibles
        });
        console.log(this.state);
    }

    render() {
        return this.state.collapsibles 
                // Note: Since this list is static, using index as key
                ? this.state.collapsibles.map((elm, index) => {
                    return <Collapsible id={index} key={index}
                            title={elm.title} content={elm.content} 
                            expanded={elm.expanded} 
                            toggleCollapse={this.toggleCollapse}/>;
                }) 
                : <> No data found </>
    }
}

export default Accordion;