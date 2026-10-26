import type { TaskItemProps, TaskStatus } from '../../types';

const status: Record<TaskStatus, TaskStatus> = {
    'pending': 'in-progress',
    'in-progress': 'completed',
    'completed': 'pending',
};

const buttonLabel: Record<TaskStatus, string> = {
    'pending': 'Start',
    'in-progress': 'Finish',
    'completed': 'Restart',
};

export default function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
    return (
        <li className={`task-item status-${task.status} priority-${task.priority}`}>
            <div className="task-top">
                <h3 className={task.status === 'completed' ? 'done' : ''}>{task.title}</h3>
                <span className={`${task.priority}`}>{task.priority}</span>
            </div>


        </li>
    )
}