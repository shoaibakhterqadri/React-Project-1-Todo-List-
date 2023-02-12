import logo from './logo.svg';
import './App.css';
import {useRef, useState} from 'react'
import TodoList from './components/TodoList';
// import Navbar from './components/Navbar';


function App() {
  // const refElement=useRef("");
  // const [name,setName]=useState("Shoaib Akhter");
  // console.log(refElement)
  // function Reset(){
  //   setName("");
  //   refElement.current.focus()
  // }
  // function ChangeColor(){
  //   refElement.current.style.backgroundColor="red"
  // }
  return (
   <>
{/* <Navbar /> */}
<TodoList />




   {/* <h1>Loading UseRef</h1>
   <input  type="text" value={name} onChange={(e)=>setName(e.target.value)} />
   <button onClick={Reset}>Reset</button>
   <button ref={refElement} onClick={ChangeColor}>Change Color</button> */}
   </>
  );
}

export default App;
