import { useState } from "react";

function App() {
  const [todo, setTodo] = useState(["hello", "Everyone", "Jai", "Shree"]);
  const [input, setInput] = useState("");

  const AddItem=()=>{
    if(input.trim()==="")return;
    setTodo([...todo , input])
    setInput("");

  }

  return(
    <>
    <div> {todo
    .map((v , idx)=> 
    <li key={idx}>{v}</li>
    )}
    </div>
    <br />
    <input type="text"
    value={input} 
    onChange={(e)=> setInput(e.target.value)}
    placeholder="Add todo"/>

    <button onClick={AddItem}>Add</button>
    </>
  )
}

export default App;
