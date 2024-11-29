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

    const deleteTask = (index: number) => {
        setTasks(tasks.filter((_, i) => i !== index)) // Remove the task at the specified index
    }

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
                    className='bg-blue-600 text-white w-10 py-1 rounded hover:bg-blue-700 transition duration-200'
                >
                    +
                </button>
            </div>
            {/* Task List */}
            <div className='task-list-container'>
                <ul>
                    {tasks.map((task, index) => 
                        <li 
                            key={index}
                            className='flex justify-between items-center my-2 gap-2'
                        >
                            {/* Checkbox */}
                            <input 
                                type='checkbox'
                                className='w-5 h-5'
                            />
                            <span>{task}</span>
                            <button 
                                onClick={() => deleteTask(index)} 
                                className='bg-pink-300 text-white w-10 py-1 rounded hover:bg-pink-400 transition duration-200 flex justify-center items'
                            >
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke-width="1.5" 
                                    stroke="currentColor" 
                                    className="size-6"
                                >
                                    <path 
                                        stroke-linecap="round" 
                                        stroke-linejoin="round" 
                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" 
                                    />
                                </svg>
                            </button>
                        </li>
                    )}
                </ul>
             </div>
        </div>
    )
}

export default TaskList
