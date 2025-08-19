import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
//importando o css do tailwind
import "./output.css";

function App() {
  //valor padrao nome do estado, funcao que muda o estado = o valor padrao do esrtado
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programacao",
      description: " Estudar prog para me tornar um full stack",
      isCompleted: false,
    },
    {
      id: 2,
      title: "debugar codigos",
      description: " Debugar codigos de maratona",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Refatorar codigo",
      description: "refatorar codigos antigos",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTask);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        {/* estou falando que a props de Tasks vai se chamar tasks que recebe o estado tasks, tudo que vc passa dentro do componente é uma props */}
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
        <AddTasks />
      </div>
    </div>
  );
}

export default App;
