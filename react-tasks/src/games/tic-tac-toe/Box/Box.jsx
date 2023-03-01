import './Box.css'

const Box = ({value, clickListener}) => {
    return <button className="box" onClick={clickListener}>
        {value}
    </button>
}

export default Box;