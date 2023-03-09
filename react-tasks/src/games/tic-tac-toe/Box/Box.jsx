import './Box.css'

const Box = ({value, highlight, clickListener}) => {
    return <button className={`box ${highlight && 'highlight'}`} onClick={clickListener}>
        {value}
    </button>
}

export default Box;