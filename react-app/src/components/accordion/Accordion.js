import React from 'react';
import Collapsible from './collapsible/Collapsible';

class Accordion extends React.Component {
    render() {
        return this.props.collapsibleList 
                ? this.props.collapsibleList.map(elm => {
                    return <Collapsible id={elm.id} key={elm.id}
                            title={elm.title} content={elm.content} />;
                }) 
                : <> No data found </>
    }
}

export default Accordion;