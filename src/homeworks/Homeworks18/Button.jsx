import { type } from "@testing-library/user-event/dist/type";
import "./styles.css";

const Button=props =>{
    const {login,type,onClick} = props;
    return (<button type={type} className="button" onClick={onClick}>
        {login}
    </button>);
    }
export default Button;