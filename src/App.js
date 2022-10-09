import db from './connectDB';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import CreateTaskForm from "./createTaskForm";

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const taskColRef = query(collection(db, 'tasks'), orderBy('created', 'desc'));
        onSnapshot(taskColRef, (snapshot) => {
            setTasks(snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));
        });
    }, [])
    console.log(tasks);

    return (
        <div>
            <CreateTaskForm/>
            <ul>
                {tasks.map(task => (
                    <li key={task.title}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
