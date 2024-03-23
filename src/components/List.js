import React, {useEffect, useState} from "react";

function List() {

    const [tasks, updateTasks] = useState([]);
    const [checklist, updateChecklist] = useState('');
    let title = ''
    let day = ''
    let time = ''

    useEffect(() => {
        updateChecklist(tasks.map(renderTask));
    }, []);

    const renderTask = (t) => {
        return (
            <div className="task">
                <p>{t[0]}</p>
                <p>{t[1]}</p>
                <p>{t[2]}</p>
                {/* <button onClick={deleteTask}>Remove</button> */}
            </div>
        )
    }

    // const deleteTask = () => {
    //     console.log("This task will be removed");
    // }

    const addTask = () => {
        if (title && day && time) {
            let updatedTasks = tasks;
            updatedTasks.push([title, day, time]);
            updateTasks(updatedTasks);
            updateChecklist(tasks.map(renderTask));
            title = '';
            day = '';
            time = '';
            document.getElementById("title").value = '';
            document.getElementById("day").value = '';
            document.getElementById("time").value = '';
        }
    }

    const taskForm = (
        <div>
            <p>Title: <input type="text" id="title" onChange={(e)=> title=e.target.value}/></p>
            <p>Day: <input type="text" id="day" onChange={(e)=> day=e.target.value}/></p>
            <p>Time: <input type="text" id="time" onChange={(e)=> time=e.target.value}/></p>
            <button onClick={addTask}>Add</button>
        </div>
    )

    return (
        <div>
            <h3>Tasks</h3>
            <p>Showing {tasks.length} tasks</p>
            <div className="task">
                <h4>Title</h4>
                <h4>Day</h4>
                <h4>Time</h4>
            </div>
            {checklist}
            <h3>Create A Task</h3>
            {taskForm}
        </div>
    );

}

export default List;