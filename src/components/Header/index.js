import './index.css'

const Header = () => (
  <header className="header">
    <div className="header-container">
      <div className="brand">
        <div className="logo">✓</div>
        <div className="brand-text">
          <h1 className="app-title">Taskify</h1>
          <p className="app-tagline">Organize your day, achieve more.</p>
        </div>
      </div>
      <nav className="nav">
        <a href="#dashboard" className="nav-link">
          Dashboard
        </a>
        <a href="#add-task" className="nav-link">
          Add Task
        </a>
        <a href="#tasks" className="nav-link">
          Tasks
        </a>
      </nav>
    </div>
  </header>
)

export default Header
