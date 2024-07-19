import { createContext, useState } from "react";

export const TaskContext = createContext(null);

export const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState([])

    return (
        <TaskContext.Provider value={{tasks, setTasks}}>
            {children}
        </TaskContext.Provider>
    )
}