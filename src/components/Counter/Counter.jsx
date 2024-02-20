import "./styles.css";

import Button from "../Button/Button";

function Counter() {
  return (
    <div className="counter-wrapper">
      <div className="button-control">
        <Button name="-" />
      </div>
      <p className="count">0</p>
      <div className="button-control">
        <Button name="+" />
      </div>
    </div>
  );
}

export default Counter;