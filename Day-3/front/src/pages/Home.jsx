import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My Website</h1>
          <p className="hero-subtitle">
            Your modern web application with beautiful UI and seamless experience
          </p>
          <div className="hero-buttons">
            <Link to="/register" className="btn btn-primary">
              Get Started
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Fast & Modern</h3>
              <p>Built with React and Vite for optimal performance</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Works seamlessly on all devices and screen sizes</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Beautiful UI</h3>
              <p>Modern and attractive interface design</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

