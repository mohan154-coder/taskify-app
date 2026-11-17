import TaskItem from '../TaskItem'
import EmptyState from '../EmptyState'
import './index.css'

const emptyMessages = {
  all: {
    heading: 'No tasks yet',
    message: 'Add your first task using the form above to get started.',
  },
  active: {
    heading: 'No active tasks',
    message: 'Great job! You have no pending tasks right now.',
  },
  completed: {
    heading: 'No completed tasks',
    message: 'Complete a task and it will show up here.',
  },
}

const TaskList = props => {
  const {tasks, activeFilter, onToggleTask, onDeleteTask} = props

  const hasTasks = tasks.length > 0
  const {heading, message} = emptyMessages[activeFilter]

  const renderTasks = () => (
    <ul className="task-list">
      {tasks.map(eachTask => (
        <TaskItem
          key={eachTask.id}
          task={eachTask}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  )

  const renderEmptyState = () => (
    <EmptyState heading={heading} message={message} />
  )

  return (
    <section className="tasks-section">
      {hasTasks ? renderTasks() : renderEmptyState()}
    </section>
  )
}

export default TaskList
