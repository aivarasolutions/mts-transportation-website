import React, { useState } from 'react';
import { Menu, X, Truck, Cloud, BarChart3, Users, Shield, Phone, Mail, MapPin } from 'lucide-react';
import './App.css';

// Import images
import heroImage from './assets/mts-hero-image.png';
import dashboardImage from './assets/wuJ1xYFHS8Mq.png';
import fleetImage from './assets/l3D4JNjZUa3y.jpg';
import analyticsImage from './assets/T13mFsRNl3yb.webp';
import mtsLogo from './assets/mts-logo.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={mtsLogo} alt="MTS Transportation" className="logo-image" />
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" className="nav-link" onClick={() => scrollToSection('home')}>Home</a>
            <a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>About</a>
            <a href="#solutions" className="nav-link" onClick={() => scrollToSection('solutions')}>Solutions</a>
            <a href="#industries" className="nav-link" onClick={() => scrollToSection('industries')}>Industries</a>
            <a href="#technology" className="nav-link" onClick={() => scrollToSection('technology')}>Technology</a>
            <a href="#why-choose-us" className="nav-link" onClick={() => scrollToSection('why-choose-us')}>Why Choose Us</a>
            <a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>Contact</a>
          </div>

          <div className="nav-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <img src={heroImage} alt="Professional transportation" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Smarter Transportation. Seamless Logistics.</h1>
          <p className="hero-subtitle">
            MTS Transportation provides cloud-based solutions to simplify dispatching, tracking, and managing your freight—all in real time.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
              Request a Demo
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('solutions')}>
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Driven by Innovation. Powered by Trust.</h2>
            <p className="section-description">
              At MTS Transportation, our mission is to empower carriers, brokers, and shippers with tools that make logistics easier, faster, and more reliable. With years of industry expertise, we understand the challenges of transportation—and we're here to simplify them with technology that puts you in control.
            </p>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <div className="about-icon">
                <Truck />
              </div>
              <h3>Industry Expertise</h3>
              <p>Years of experience in transportation and logistics management</p>
            </div>
            <div className="about-card">
              <div className="about-icon">
                <Cloud />
              </div>
              <h3>Cloud Technology</h3>
              <p>Cutting-edge cloud-based solutions for modern logistics</p>
            </div>
            <div className="about-card">
              <div className="about-icon">
                <Users />
              </div>
              <h3>Customer Focus</h3>
              <p>Dedicated to empowering our clients with the right tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="section section-gray">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Solutions Built for Every Mile</h2>
          </div>
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-icon">
                <BarChart3 />
              </div>
              <h3>Load Management</h3>
              <p>Dispatch, assign, and track loads in one place.</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon">
                <Users />
              </div>
              <h3>Driver Management</h3>
              <p>Keep driver details, schedules, and compliance in check.</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon">
                <MapPin />
              </div>
              <h3>Real-Time Tracking</h3>
              <p>End-to-end freight visibility with live updates.</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon">
                <Shield />
              </div>
              <h3>Compliance Tools</h3>
              <p>Ensure DOT and FMCSA standards are met with ease.</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon">
                <BarChart3 />
              </div>
              <h3>Reporting & Analytics</h3>
              <p>Gain insights to optimize efficiency and reduce costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Supporting Every Corner of Logistics</h2>
            <p className="section-description">
              From small fleets to nationwide carriers, MTS Transportation is built to serve:
            </p>
          </div>
          <div className="industries-grid">
            <div className="industry-card">
              <h3>Shippers</h3>
              <p>Seeking reliable load visibility</p>
            </div>
            <div className="industry-card">
              <h3>Brokers</h3>
              <p>Managing multiple carriers</p>
            </div>
            <div className="industry-card">
              <h3>Carriers</h3>
              <p>Looking for streamlined dispatching</p>
            </div>
            <div className="industry-card">
              <h3>Manufacturers</h3>
              <p>Needing efficient supply chain support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="section section-gray">
        <div className="container">
          <div className="technology-content">
            <div className="technology-text">
              <h2 className="section-title">Cloud-Based, Future-Ready</h2>
              <p className="section-description">
                Our platform runs on the latest cloud technology—secure, scalable, and accessible from anywhere. With automation tools, mobile-ready dashboards, and smart integrations, MTS Transportation helps you stay ahead in a fast-moving industry.
              </p>
              <div className="tech-features">
                <div className="tech-feature">
                  <Cloud className="tech-icon" />
                  <span>Secure Cloud Platform</span>
                </div>
                <div className="tech-feature">
                  <BarChart3 className="tech-icon" />
                  <span>Real-time Analytics</span>
                </div>
                <div className="tech-feature">
                  <Shield className="tech-icon" />
                  <span>Enterprise Security</span>
                </div>
              </div>
            </div>
            <div className="technology-image">
              <img src={dashboardImage} alt="Transportation management dashboard" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The MTS Advantage</h2>
          </div>
          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="advantage-icon">
                <BarChart3 />
              </div>
              <h3>Efficiency</h3>
              <p>Save time with automated workflows.</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">
                <MapPin />
              </div>
              <h3>Visibility</h3>
              <p>Know where your freight is at all times.</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">
                <Cloud />
              </div>
              <h3>Scalability</h3>
              <p>From 1 truck to 1,000, we grow with you.</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">
                <Users />
              </div>
              <h3>Support</h3>
              <p>Dedicated experts to help you succeed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-gray">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="section-title">Let's Move Forward Together</h2>
              <p className="section-description">
                Have questions or ready to see how MTS Transportation can help your business? Contact us today.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <MapPin className="contact-icon" />
                  <span>Houston, TX</span>
                </div>
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <span>info@mtstransportation.com</span>
                </div>
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <span>(281) 223-3468</span>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Company" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Message" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src={mtsLogo} alt="MTS Transportation" className="footer-logo-image" />
              </div>
              <p>Smarter Transportation. Seamless Logistics.</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
              <a href="#about" onClick={() => scrollToSection('about')}>About</a>
              <a href="#solutions" onClick={() => scrollToSection('solutions')}>Solutions</a>
              <a href="#industries" onClick={() => scrollToSection('industries')}>Industries</a>
              <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
            </div>
            <div className="footer-contact">
              <h4>Contact Info</h4>
              <div className="footer-contact-item">
                <MapPin size={16} />
                <span>Houston, TX</span>
              </div>
              <div className="footer-contact-item">
                <Mail size={16} />
                <span>info@mtstransportation.com</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={16} />
                <span>(281) 223-3468</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 MTS Transportation. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
