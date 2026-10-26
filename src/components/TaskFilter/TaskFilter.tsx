import type { TaskFilterProps, TaskStatus } from '../../types';
import { useState } from 'react';

type Priority = 'low' | 'medium' | 'high';

export default function TaskFilter({ onFilterChange }: TaskFilterProps) {
  const [status, setStatus] = useState<TaskStatus | ''>('');
  const [priority, setPriority] = useState<Priority | ''>('');

  const update = (newStatus: TaskStatus | '', newPriority: Priority | '') => {
    setStatus(newStatus);
    setPriority(newPriority);
    onFilterChange({
      status: newStatus || undefined,
      priority: newPriority || undefined,
    });
  };

  return (
    <div className="task-filter">
      <label>
        Status
        <select
          value={status}
          onChange={(e) => update(e.target.value as TaskStatus | '', priority)}>
          <option value="">All</option>
          <option value="pending">In progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>

      <label>
        Priority
        <select
          value={priority}
          onChange={(e) => update(status, e.target.value as Priority | '')}>
          <option value="">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
    </div>
  );
}
