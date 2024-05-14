import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCheckSquare,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

interface TodoDoneProps {
  todo: TodoItem[];
  handleDeleteTask: (taskId: number) => void;
  handleUpdateTaskTitle: (taskId: number, newTitle: string) => void;
  handleCheck: (taskId: number) => void;
}

const TodoItem: React.FC<TodoDoneProps> = ({
  todo,
  handleDeleteTask,
  handleUpdateTaskTitle,
  handleCheck,
}) => {
  const promptForNewTitle = (taskId: number, currentTitle: string) => {
    const newTitle = window.prompt("Enter new title", currentTitle);
    if (newTitle !== null) {
      handleUpdateTaskTitle(taskId, newTitle);
    }
  };
  return (
    <>
      {todo && (
        <div className={`mx-auto text-light`}>
          {todo.map((task) => (
            <div
              key={task.id}
              className="d-flex justify-content-between align-items-center mx-auto text-light"
            >
              <div className="data">
                <div className="today">
                  <h4>{task.title}</h4>
                </div>
              </div>
              <div>
                <FontAwesomeIcon
                  style={{ marginRight: "0.3em" }}
                  icon={task.isCompleted ? faCheckSquare : faCheck}
                  className="pointer"
                  onClick={() => handleCheck(task.id)}
                />

                <FontAwesomeIcon
                  style={{
                    marginRight: "0.3em",
                  }}
                  icon={faPenToSquare}
                  className="pointer"
                  onClick={() => promptForNewTitle(task.id, task.title)}
                />
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className="pointer"
                  onClick={() => handleDeleteTask(task.id)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default TodoItem;