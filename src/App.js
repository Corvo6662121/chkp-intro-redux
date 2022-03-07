import './App.css';
import  {useSelector,useDispatch} from "react-redux";
import {increment, decrement} from "./JS/actions/action"


function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state)=>state.countReducer.count) // Zero

const handleInc = ()=>{
  dispatch(increment())
} 

  return (
    <div>
     <h1> intro redux</h1>

<button onClick={handleInc}>+</button>
<h3> {counter } </h3>
<button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
