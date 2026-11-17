import {useState} from 'react'
import './index.css'

const TaskForm = props => {
  const {onAddTask} = props

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [errorMessage, setErrorMessage] = useState('')

  const handleTitleChange = event => {
    setTitle(event.target.value)
    setErrorMessage('')
  }

  const handleDescriptionChange = event => {
    setDescription(event.target.value)
  }

  const handlePriorityChange = event => {
    setPriority(event.target.value)
  }

  const getCreatedDate = () => {
    const today = new Date()
    return today.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  }

  const handleAddTask = event => {
    event.preventDefault()

    const trimmedTitle = title.trim()
    const trimmedDescription = description.trim()

    if (trimmedTitle === '') {
      setErrorMessage('Please enter a task title.')
      return
    }

    const newTask = {
      id: Date.now(),
      title: trimmedTitle,
      description: trimmedDescription,
      priority,
      isCompleted: false,
      createdAt: getCreatedDate(),
    }

    onAddTask(newTask)

    setTitle('')
    setDescription('')
    setPriority('Medium')
    setErrorMessage('')
  }

  const titleInputClass =
    errorMessage === '' ? 'form-input' : 'form-input input-error'

  return (
    <section id="add-task" className="form-section">
      <h2 className="section-heading">Add New Task</h2>
      <form className="task-form" onSubmit={handleAddTask} noValidate>
        <div className="form-row">
          <div className="form-field title-field">
            <label htmlFor="taskTitle" className="form-label">
              Task Title *
            </label>
            <input
              type="text"
              id="taskTitle"
              className={titleInputClass}
              placeholder="Enter task title"
              value={title}
              maxLength={60}
              onChange={handleTitleChange}
            />
            {errorMessage !== '' && (
              <p className="error-message">{errorMessage}</p>
            )}
          </div>

          <div className="form-field priority-field">
            <label htmlFor="taskPriority" className="form-label">
              Priority
            </label>
            <select
              id="taskPriority"
              className="form-input"
              value={priority}
              onChange={handlePriorityChange}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="taskDescription" className="form-label">
            Task Description (optional)
          </label>
          <textarea
            id="taskDescription"
            className="form-input form-textarea"
            placeholder="Write a short description"
            value={description}
            maxLength={200}
            onChange={handleDescriptionChange}
          />
        </div>

        <button type="submit" className="add-task-button">
          Add Task
        </button>
      </form>
    </section>
  )
}

export default TaskForm
