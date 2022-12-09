import React, { useEffect } from "react";
import httpService from "../services/httpService";

// create a context 
const TasksContext = React.createContext();

// create a provider
const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = React.useState([]);
    
    const getTasks = async () => {
        const response = await httpService.get("/tasks");
        console.log(response.data);
        setTasks(response.data);
    };
    
    useEffect(() => {
        getTasks();
    }, []);
    
    return (
        <TasksContext.Provider value={{ tasks, setTasks , getTasks}}>
            {children}
        </TasksContext.Provider>
    );
    }


export { TasksContext, TasksProvider };