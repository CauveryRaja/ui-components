import Menu from './menu/Menu';
import MenuItem from './menuItem/MenuItem';

export const getElementByType = (elm) => {
    switch(elm.type) {
        case 'list': 
            return <Menu id={elm.id} key={elm.id}
                            label={elm.name.displayName} value={elm.name.actualName}
                            items={elm?.children}/>;
        case 'item':
            return <MenuItem id={elm.id} key={elm.id}
                            active={elm?.active} label={elm.name.displayName} 
                            value={elm.name.actualName} />;
    }
}