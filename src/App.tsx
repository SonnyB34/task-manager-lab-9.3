import TaskList from './components/TaskList/TaskList';
import TaskFilter from './components/TaskFilter/TaskFilter';
import type { Task, TaskStatus } from './types';
import { useState } from 'react';
import './App.css';

const startingTasks: Task[] = [
  {
    id: '1',
    title: 'Wash dishes',
    description: 'Wash all the dishes',
    status: 'in-progress',
    priority: 'high',
    dueDate: '2026-10-29',
  },
  {
    id: '2',
    title: 'Walk the dog',
    description: 'Take the dog for 5 min walk',
    status: 'pending',
    priority: 'medium',
    dueDate: '2026-10-28',
  },
  {
    id: '3',
    title: 'Fold laundry',
    description: 'Fold all hampers of laundry',
    status: 'completed',
    priority: 'low',
    dueDate: '2026-10-27',
  },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(startingTasks);
  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: 'low' | 'medium' | 'high';
  }>({});

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks(
      tasks.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t)),
    );
  };

  const handleDelete = (taskId: string) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  const visibleTasks = tasks.filter(
    (t) =>
      (!filters.status || t.status === filters.status) &&
      (!filters.priority || t.priority === filters.priority),
  );
  return (
    <main>
      <h1>My Task Manager</h1>
      <TaskFilter onFilterChange={setFilters} />
      <TaskList
        tasks={visibleTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </main>
  );
}

export default App;
