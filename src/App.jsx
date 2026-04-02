import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Dashboard from './pages/Dashboard'
import Transfers from './pages/Transfers'

function App() {
  const { isAuthenticated, isLoading, user, loginWithRedirect, logout } = useAuth0()
  const [page, setPage] = useState('dashboard')

  if (isLoading) {
    return (
      <div className="login-container">
        <div className="login-card" style={{ textAlign: 'center' }}>
          <h1>Acme Bank</h1>
          <p className="subtitle">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="login-container">
        <div className="login-card">
          <h1>Acme Bank</h1>
          <p className="subtitle">Online Banking Portal</p>
          <button className="btn-primary" onClick={() => loginWithRedirect()}>
            Sign In
          </button>
        </div>
      </div>
    )
  }

  const displayName = user?.name || user?.email || 'User'

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
          <span>{displayName}</span>
          <button
            className="logout"
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
          >
            Log Out
          </button>
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
