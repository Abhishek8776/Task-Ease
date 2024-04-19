import ListTodo from "./components/ListTodo"
import AddTodo from "./components/AddTodo"



function App() {

  return (
    <div className="bg-slate-500 w-3/12 rounded p-2">
      <AddTodo />
      <ListTodo />
    </div>
  );
}

export default App
