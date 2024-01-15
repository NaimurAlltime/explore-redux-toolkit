import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counterSlice";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="flex border border-purple-300 bg-slate-50 p-10 rounded-md">
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
        </div>
      </div>
    </>
  );
}

export default App;
