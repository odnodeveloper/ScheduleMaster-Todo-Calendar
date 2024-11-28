import { useState } from 'react';

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const addTask = () => {
        if (taskInput.trim()) {
            setTasks([...tasks, taskInput.trim()]); // Add task to array
            setTaskInput(''); // Clear input field
        }
    }

    // const deleteTask = (index: number) => {
    //     setTasks(tasks.filter((_, i) => i !== index)) // Remove the task at the specified index
    // }

    return (
        <div className='task-input-container'>
            {/* Input Field and Button */}
            <div className="flex gap-2 mb-3">
                <input 
                    type='text'
                    placeholder='Add a task'
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    className='flex-1 border border-grey-300 rounded'
                />
                <button 
                    onClick={addTask} 
                    className='bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition duration-200'
                >
                    +
                </button>
            </div>
            {/* Task List */}
            <div className="task-list-container">
                <div className='flex gap-2'>
                    <ul className='border border-grey-300'>
                        {tasks.map((task, index) => 
                            <li key={index}>{task}</li>
                        )}
                    </ul>
                    <button 
                        onClick={addTask} 
                        className='bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition duration-200'
                        >
                            delete
                    </button>
                </div>
             </div>
        </div>
    )
}

export default TaskList
