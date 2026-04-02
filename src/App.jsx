import { useState } from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Transfers from './pages/Transfers'

function App() {
  const [user, setUser] = useState(null)
  const [page, setPage] = useState('dashboard')

  if (!user) {
    return <Login onLogin={(username) => setUser(username)} />
  }

  return (
    <div className="app">
      <nav className="navbar">
        <span className="brand">Acme Bank</span>
        <div className="nav-links">
          <button
            className={page === 'dashboard' ? 'active' : ''}
            onClick={() => setPage('dashboard')}
          >
            Dashboard
          </button>
          <button
            className={page === 'transfers' ? 'active' : ''}
            onClick={() => setPage('transfers')}
          >
            Transfers
          </button>
        </div>
        <div className="user-info">
          <span>{user}</span>
          <button className="logout" onClick={() => setUser(null)}>Log Out</button>
        </div>
      </nav>
      <main className="content">
        {page === 'dashboard' && <Dashboard />}
        {page === 'transfers' && <Transfers />}
      </main>
    </div>
  )
}

export default App
