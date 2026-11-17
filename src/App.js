import {useState, useEffect} from 'react'
import Header from './components/Header'
import DashboardStats from './components/DashboardStats'
import TaskForm from './components/TaskForm'
import TaskFilters from './components/TaskFilters'
import TaskList from './components/TaskList'
import './App.css'

const STORAGE_KEY = 'taskifyTasks'

const getInitialTasks = () => {
  try {
    const savedTasks = localStorage.getItem(STORAGE_KEY)

    if (savedTasks === null) {
      return []
    }

    const parsedTasks = JSON.parse(savedTasks)

    if (Array.isArray(parsedTasks)) {
      return parsedTasks
    }

    return []
  } catch (error) {
    return []
  }
}

const App = () => {
  const [tasks, setTasks] = useState(getInitialTasks)
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
    } catch (error) {
      // Saving can fail if browser storage is full. The app still works.
    }
  }, [tasks])

  const addTask = newTask => {
    setTasks([newTask, ...tasks])
  }

  const toggleTask = taskId => {
    const updatedTasks = tasks.map(eachTask => {
      if (eachTask.id === taskId) {
        return {...eachTask, isCompleted: !eachTask.isCompleted}
      }
      return eachTask
    })
    setTasks(updatedTasks)
  }

  const deleteTask = taskId => {
    const remainingTasks = tasks.filter(eachTask => eachTask.id !== taskId)
    setTasks(remainingTasks)
  }

  const changeFilter = selectedFilter => {
    setActiveFilter(selectedFilter)
  }

  const activeTasks = tasks.filter(eachTask => !eachTask.isCompleted)
  const completedTasks = tasks.filter(eachTask => eachTask.isCompleted)

  const getFilteredTasks = () => {
    if (activeFilter === 'active') {
      return activeTasks
    }
    if (activeFilter === 'completed') {
      return completedTasks
    }
    return tasks
  }

  const filteredTasks = getFilteredTasks()

  const totalCount = tasks.length
  const activeCount = activeTasks.length
  const completedCount = completedTasks.length

  return (
    <div className="app">
      <Header />
      <main className="main-container">
        <DashboardStats
          totalCount={totalCount}
          activeCount={activeCount}
          completedCount={completedCount}
        />
        <TaskForm onAddTask={addTask} />
        <TaskFilters
          activeFilter={activeFilter}
          onFilterChange={changeFilter}
        />
        <TaskList
          tasks={filteredTasks}
          activeFilter={activeFilter}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      </main>
    </div>
  )
}

export default App
