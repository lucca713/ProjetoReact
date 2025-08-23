import { ChevronRightIcon, DeleteIcon } from "lucide-react";

function Tasks(props) {
  console.log(props);
  return (
    <ul className=" space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            //mudando diretamente a classe com js
            className={` bg-slate-400 text-white p-2 rounded-md w-full ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button className="bg-slate-400 p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>

          {/* importante para a minha refatoracao de codigo */}
          <button
            onClick={() => props.onTaskRemove(task.id)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <DeleteIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
