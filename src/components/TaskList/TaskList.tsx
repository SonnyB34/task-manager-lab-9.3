import type { TaskListProps } from '../../types';
import TaskItem from '../TaskItem/TaskItem';

export default function TaskiList({ tasks, onStatusChange, onDelete }: TaskListProps) {
    if (tasks.length === 0) {
        return <p className="empty">No tasks. Take a break!</p>;
    }

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <TaskItem
                key={task.id}
                task={task}
                onStatusChange={onStatusChange}
                onDelete={onDelete}
                />
            ))}
        </ul>
    );
}