import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";
import actionTypes from "../../redux/actionTypes";

function Counter() {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.counter);

  const incrementIfOdd = () => {
    if (Math.abs(counter) % 2 === 1) {
      dispatch({ type: actionTypes.INCREMENT });
    }
  };

  const incrementAsync = () => {
    setTimeout(() => dispatch({ type: actionTypes.INCREMENT }), 1000);
  };

  return (
    <div>
      <span>Clicked {counter} times</span>
      <span>
        <button onClick={() => dispatch({ type: actionTypes.INCREMENT })}>
          +
        </button>
      </span>
      <span>
        <button onClick={() => dispatch({ type: actionTypes.DECREMENT })}>
          -
        </button>
      </span>
      <span>
        <button onClick={incrementIfOdd}>Increment if odd</button>
      </span>
      <span>
        <button onClick={incrementAsync}>Increment async</button>
      </span>
    </div>
  );
}

export default Counter;
