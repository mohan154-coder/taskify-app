import './index.css'

const EmptyState = props => {
  const {heading, message} = props

  return (
    <div className="empty-state">
      <div className="empty-icon">📝</div>
      <h3 className="empty-heading">{heading}</h3>
      <p className="empty-message">{message}</p>
    </div>
  )
}

export default EmptyState
