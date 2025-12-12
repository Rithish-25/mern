import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  return isAuthenticated ? children : <Navigate to="/login" replace />
}

// Public Route Component - redirects to home if already logged in
const PublicRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  return isAuthenticated ? <Navigate to="/" replace /> : children
}

// Component to conditionally show Navbar
const AppContent = () => {
  const location = useLocation()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check authentication status from localStorage
    const authStatus = localStorage.getItem('isAuthenticated') === 'true'
    setIsAuthenticated(authStatus)

    // Listen for storage changes (when login happens)
    const handleStorageChange = () => {
      const authStatus = localStorage.getItem('isAuthenticated') === 'true'
      setIsAuthenticated(authStatus)
    }

    window.addEventListener('storage', handleStorageChange)
    
    // Also listen for custom event for same-tab updates
    window.addEventListener('authChange', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('authChange', handleStorageChange)
    }
  }, [])

  // Don't show navbar on login and register pages
  const showNavbar = isAuthenticated && location.pathname !== '/login' && location.pathname !== '/register'

  return (
    <div className="App">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        {/* Catch all other routes and redirect to login if not authenticated */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App

