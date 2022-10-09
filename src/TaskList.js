import db from './connectDB';
import {collection, query, onSnapshot, orderBy, deleteDoc, doc} from 'firebase/firestore';
import {useEffect, useState} from 'react';

function TaskList() {
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

    const onDeleteTask = (id) => {
        deleteDoc(doc(db,'tasks', id))
            .then(r => console.log(r))
            .catch(err => console.log(err))
    }

    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>{task.title}
                    <button onClick={() => onDeleteTask(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
