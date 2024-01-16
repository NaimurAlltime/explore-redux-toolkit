import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="flex border border-purple-300 bg-slate-50 p-10 rounded-md">
          <button
            onClick={() => dispatch(incrementByValue(5))}
            className="bg-green-600 text-white px-3 py-2 rounded-md font-medium mr-5"
          >
            IncrementBy 5
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="bg-green-600 text-white px-3 py-2 rounded-md font-medium"
          >
            Increment
          </button>
          <h1 className="mx-10 text-3xl">{count}</h1>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-500 text-white px-3 py-2 rounded-md font-medium"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(decrementByValue(5))}
            className="bg-green-600 text-white px-3 py-2 rounded-md font-medium ms-5"
          >
            DecrementBy 5
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
