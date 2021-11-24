import { useSelector, useDispatch } from "react-redux";
import { sayHelloStart, saySomething } from "./store/actions/hello";
import { incrementStart, decrementStart } from "./store/actions/counter";

function App() {
  const hello = useSelector(state => state.hello.data);
  const counter = useSelector(state => state.counter.data);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(sayHelloStart());
  };

  const handleShow = () => {
    dispatch(saySomething("Happy hacking!"));
  };

  const handleIncrement = () => {
    dispatch(incrementStart());
  };

  const handleDecrement = () => {
    dispatch(decrementStart());
  };

  return (
    <div>
      <h1>{hello}</h1>
      <button onClick={handleClick}>change text</button>
      <button onClick={handleShow}>show something</button>
      <br />
      <br />
      <br />
      <br />
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
