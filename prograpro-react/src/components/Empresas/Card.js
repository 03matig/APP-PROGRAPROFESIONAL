import "./assets/css/card_styles.css"
import {useNavigate} from 'react-router-dom';

function Card({title}) {
    return(<div className="Card">
        <h2>{title}</h2>
    </div>)
}

export default Card;