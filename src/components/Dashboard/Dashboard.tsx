import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Calendar, { CalendarProps} from 'react-calendar';
import TaskList from './TaskList';


const Dashboard: React.FC = () => {
    const [currentDate, setCurrentDate] = useState<Date | null>(new Date());

    const handleMonthChange: CalendarProps['onChange'] = (date) => {
        if (Array.isArray(date)) {
            setCurrentDate(date[0]); // In case of selecting a range, take the first date
        } else {
            setCurrentDate(date);
        }
    };

  return (
    <div className="dashboard-container p-8 bg-gray-100">
        {/* Add the Header component */}
        <Header />

        <h2 className="text-2xl font-bold text-gray-800">Monthly Todos</h2>
        <div className="sub-container flex-shrink-0 p-6 bg-pink-300 flex">
            {/* Task Container - 1/4 width */}
            <div className="task-container p-4 mr-4 bg-white w-1/4 min-h-[200px]">
                <h3 className="text-center">Tasks</h3>
                <TaskList />
            </div>
            {/* Calendar - Container - 3/4 width */}
            <div className="calendar-container p-4 bg-white w-3/4 min-h-[200px]">
                <Calendar 
                    onChange={handleMonthChange}
                    value={currentDate}
                    view="month"
                />
            </div>
        </div>

        {/* Add the Footer component */}
        <Footer />
    </div>
  )
  
}

export default Dashboard;