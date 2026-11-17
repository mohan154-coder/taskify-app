import './index.css'

const DashboardStats = props => {
  const {totalCount, activeCount, completedCount} = props

  const statsList = [
    {
      id: 'total',
      label: 'Total Tasks',
      count: totalCount,
      icon: '📋',
      className: 'stat-card total-card',
    },
    {
      id: 'active',
      label: 'Active Tasks',
      count: activeCount,
      icon: '⏳',
      className: 'stat-card active-card',
    },
    {
      id: 'completed',
      label: 'Completed Tasks',
      count: completedCount,
      icon: '✅',
      className: 'stat-card completed-card',
    },
  ]

  return (
    <section className="stats-section" id="dashboard">
      <ul className="stats-list">
        {statsList.map(eachStat => {
          const {id, label, count, icon, className} = eachStat

          return (
            <li className={className} key={id}>
              <div className="stat-icon">{icon}</div>
              <div className="stat-details">
                <p className="stat-label">{label}</p>
                <p className="stat-count">{count}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default DashboardStats
