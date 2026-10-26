import type { TaskItemProps, TaskStatus } from '../../types';

const nextStatus: Record<TaskStatus, TaskStatus> = {
  pending: 'in-progress',
  'in-progress': 'completed',
  completed: 'pending',
};

const buttonLabel: Record<TaskStatus, string> = {
  pending: 'Start',
  'in-progress': 'Finish',
  completed: 'Restart',
};

export default function TaskItem({
  task,
  onStatusChange,
  onDelete,
}: TaskItemProps) {
  return (
    <li className={`task-item status-${task.status} priority-${task.priority}`}>
      <div className="task-top">
        <h3 className={task.status === 'completed' ? 'done' : ''}>
          {task.title}
        </h3>
        <span className={`${task.priority}`}>{task.priority}</span>
      </div>

      <p>{task.description}</p>
      <small>Due: {task.dueDate}</small>
      <div className="task-staus">Status: {task.status}</div>

      {task.status === 'completed' && (
        <div className="well-done">Great Job!</div>
      )}

      <div className="task-button">
        <button onClick={() => onStatusChange(task.id, nextStatus[task.status])}>
          {buttonLabel[task.status]}
        </button>
        <button className="delete" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}
