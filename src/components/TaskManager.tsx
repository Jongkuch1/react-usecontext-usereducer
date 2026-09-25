import { useReducer, useState } from "react";
import { taskReducer } from "../reducers/taskReducer";
import { useTheme } from "../context/ThemeContext";
import { LIGHT_THEME } from "../constants/theme";
import styles from "./TaskManager.module.css";

const TaskManager = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [task, setTask] = useState("");
  const { theme } = useTheme();
  const isLight = theme === LIGHT_THEME;

  const addTask = () => {
    dispatch({ type: "add", payload: task });
    setTask("");
  };

  return (
    <div className={`${styles.container} ${isLight ? styles.light : styles.dark}`}>
      <h2>Task Manager</h2>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button
        className={`${styles.addButton} ${isLight ? styles.addButtonLight : styles.addButtonDark}`}
        onClick={addTask}
        disabled={!task.trim()}
      >
        Add Task
      </button>
      <ul className={styles.list}>
        {tasks.map((t) => (
          <li key={t.id} className={styles.listItem}>
            {t.text}
            <button className={styles.removeButton} onClick={() => dispatch({ type: "remove", payload: t.id })}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
