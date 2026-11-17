import './index.css'

const filterOptions = [
  {id: 'all', label: 'All Tasks'},
  {id: 'active', label: 'Active Tasks'},
  {id: 'completed', label: 'Completed Tasks'},
]

const TaskFilters = props => {
  const {activeFilter, onFilterChange} = props

  const handleFilterChange = event => {
    const selectedFilter = event.currentTarget.value
    onFilterChange(selectedFilter)
  }

  return (
    <section id="tasks" className="filters-section">
      <h2 className="filters-heading">Your Tasks</h2>
      <div className="filter-buttons">
        {filterOptions.map(eachOption => {
          const {id, label} = eachOption
          const buttonClass =
            activeFilter === id
              ? 'filter-button active-filter'
              : 'filter-button'

          return (
            <button
              key={id}
              type="button"
              value={id}
              className={buttonClass}
              onClick={handleFilterChange}
            >
              {label}
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default TaskFilters
