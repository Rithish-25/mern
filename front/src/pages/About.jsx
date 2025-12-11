import './About.css'

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">Learn more about our mission and values</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              We are dedicated to creating exceptional web experiences that combine
              cutting-edge technology with beautiful design. Our goal is to build
              applications that are not only functional but also delightful to use.
            </p>
          </div>

          <div className="about-section">
            <h2>What We Do</h2>
            <p>
              We specialize in developing modern, responsive web applications using
              the latest technologies. Our focus is on creating user-friendly interfaces
              that work seamlessly across all devices and platforms.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Innovation</h3>
                <p>We embrace new technologies and creative solutions</p>
              </div>
              <div className="value-item">
                <h3>Quality</h3>
                <p>We strive for excellence in everything we build</p>
              </div>
              <div className="value-item">
                <h3>User-Centric</h3>
                <p>Our users are at the heart of every decision</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

