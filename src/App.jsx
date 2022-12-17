import { useRef, useState } from 'react'
import './App.css'
import InputForm from './Components/InputForm';
import TaskList from './Components/TaskList'


function App() {

  const [toDo, setToDo] = useState("");
  const [toDos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);


  function handleSubmit(e) {
    e.preventDefault();

    if (toDo !== "") {
      setTodos([{ id: `${Date.now()}`, toDo }, ...toDos])
      setToDo("")
    }
  }

  console.log(toDos)


  function handleDelete(id){
    const delTodos = toDos.filter((t)=> t.id!== id);
      setTodos([...delTodos]);
  }

  function handleEdit(id){
    setEditId(id);
    console.log(id)
 }

 const editRef = useRef()
 function saveEdit(){
    let val = editRef.current.value;
    const editedTodos = toDos.map((todo)=>{
      if(editId === todo.id){
        todo.toDo = val
      }
      return todo;
    })
    setTodos(()=>[...editedTodos])
    setEditId(0)
}

 
  return (
    <div className="App">
      <h1>ToDo-List</h1>
      <InputForm handleSubmit={handleSubmit} toDo={toDo} setToDo={setToDo}/>
      <TaskList toDos={toDos} editId={editId} handleDelete={handleDelete} handleEdit={handleEdit} editRef={editRef} saveEdit={saveEdit}/>
      
      <button style={{marginTop: "5px"}} onClick={()=> setTodos([])}>Completed All</button>
    </div>
  )
}

export default App
