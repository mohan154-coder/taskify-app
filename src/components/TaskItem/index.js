import './index.css'

const TaskItem = props => {
  const {task, onToggleTask, onDeleteTask} = props
  const {id, title, description, priority, isCompleted, createdAt} = task

  const handleToggleTask = () => {
    onToggleTask(id)
  }

  const handleDeleteTask = () => {
    onDeleteTask(id)
  }

  const cardClass = isCompleted ? 'task-item task-completed' : 'task-item'
  const priorityClass = `priority-badge priority-${priority.toLowerCase()}`
  const statusClass = isCompleted ? 'status-text status-done' : 'status-text'
  const statusText = isCompleted ? 'Completed' : 'Active'
  const toggleButtonText = isCompleted ? 'Undo' : 'Complete'
  const descriptionText =
    description === '' ? 'No description added.' : description

  return (
    <li className={cardClass}>
      <div className="task-top-row">
        <span className={priorityClass}>{priority}</span>
        <span className={statusClass}>{statusText}</span>
      </div>

      <h3 className="task-title">{title}</h3>
      <p className="task-description">{descriptionText}</p>
      <p className="task-date">Created: {createdAt}</p>

      <div className="task-buttons">
        <button
          type="button"
          className="toggle-button"
          onClick={handleToggleTask}
        >
          {toggleButtonText}
        </button>
        <button
          type="button"
          className="delete-button"
          onClick={handleDeleteTask}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default TaskItem
