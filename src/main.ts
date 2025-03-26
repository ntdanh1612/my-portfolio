import './style.css'
import AOS from 'aos'

// Initialize AOS animation library
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false
})

// Create the portfolio content
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <!-- Header -->
  <header class="header">
    <div class="container header-container">
      <a href="#" class="logo">Danh Nguyen</a>
      <nav>
        <ul class="nav-links">
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#certificates" class="nav-link">Certificates</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
          <li><a href="/cv.docx" class="nav-link download-cv" download>Download CV</a></li>
        </ul>
      </nav>
      <button class="mobile-menu-btn">
        <span>≡</span>
      </button>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="hero-content" data-aos="fade-up">
        <h1 class="hero-title">Senior AI & MLOps Engineer</h1>
        <p class="hero-subtitle">Building intelligent systems and scalable ML infrastructure to solve complex problems.</p>
        <div class="hero-actions">
          <a href="#contact" class="hero-cta">Get in Touch</a>
          <a href="/cv.docx" class="hero-cta secondary" download>Download CV</a>
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">About Me</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        I'm a passionate Senior AI/MLOps Engineer with 6 years of experience in building and deploying machine learning systems at scale.
        My focus is on creating robust ML pipelines, optimizing model performance, and ensuring seamless integration
        between data science and engineering teams.
      </p>
      
      <div class="highlights" data-aos="fade-up" data-aos-delay="150">
        <ul>
          <li>Strong experience in Deep Learning, AI/Machine Learning, especially in Computer Vision, LLM/RAG & MLOps</li>
          <li>Researching, designing architecture and developing AI applications</li>
          <li>Experience in on-premise and cloud based infrastructure development (AWS/Azure)</li>
          <li>Proficient in Kubernetes deployment, data streaming for analytics, and deploying ML/AI algorithms</li>
          <li>Strong experience in developing RESTful APIs</li>
          <li>Skilled in technical consulting support, innovation, and optimization</li>
        </ul>
      </div>
      
      <div class="about-grid">
        <div class="about-card glass" data-aos="fade-right">
          <h3>Technical Skills</h3>
          
          <div class="skill-category">
            <h4>Programming</h4>
            <div class="skill-list">
              <span class="skill-tag">Python</span>
              <span class="skill-tag">R</span>
              <span class="skill-tag">C/C++</span>
              <span class="skill-tag">Java</span>
            </div>
          </div>
          
          <div class="skill-category">
            <h4>AI/ML Techniques</h4>
            <div class="skill-list">
              <span class="skill-tag">TensorFlow</span>
              <span class="skill-tag">PyTorch</span>
              <span class="skill-tag">Scikit-learn</span>
              <span class="skill-tag">OpenCV</span>
              <span class="skill-tag">LangChain</span>
              <span class="skill-tag">LlamaIndex</span>
              <span class="skill-tag">RAG</span>
              <span class="skill-tag">Computer Vision</span>
              <span class="skill-tag">NLP</span>
            </div>
          </div>
          
          <div class="skill-category">
            <h4>Infrastructure & DevOps</h4>
            <div class="skill-list">
              <span class="skill-tag">Docker</span>
              <span class="skill-tag">Kubernetes</span>
              <span class="skill-tag">AWS</span>
              <span class="skill-tag">Azure</span>
              <span class="skill-tag">CI/CD</span>
              <span class="skill-tag">Terraform</span>
            </div>
          </div>
          
          <div class="skill-category">
            <h4>Databases</h4>
            <div class="skill-list">
              <span class="skill-tag">MySQL</span>
              <span class="skill-tag">PostgreSQL</span>
              <span class="skill-tag">MongoDB</span>
              <span class="skill-tag">Elasticsearch</span>
              <span class="skill-tag">Milvus</span>
            </div>
          </div>
        </div>
        
        <div class="about-card glass" data-aos="fade-left">
          <h3>Specialized Expertise</h3>
          <ul class="expertise-list">
            <li>
              <strong>Computer Vision</strong>
              <p>Image Classification, Object Detection & Tracking, Object Segmentation</p>
            </li>
            <li>
              <strong>LLM & Generative AI</strong>
              <p>RAG, LLM Orchestration, LLM Observation & Evaluation, Stable Diffusion, ControlNet, Lora</p>
            </li>
            <li>
              <strong>MLOps</strong>
              <p>End-to-end ML pipelines, Model deployment, Monitoring, Scaling ML infrastructure</p>
            </li>
            <li>
              <strong>Cloud & Infrastructure</strong>
              <p>Kubernetes, Data Streaming, Bare Metal K8s Clusters, Infrastructure as Code</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="projects">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Projects</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Here are some of the key projects I've worked on throughout my career.
      </p>
      
      <div class="projects-grid">
        <div class="project-card glass" data-aos="fade-up">
          <h3 class="project-title">Telehealth Multi-Tenancy Knowledge Based Chatbot</h3>
          <p class="project-role">AI Team Leader</p>
          <p>
            The client is a telehealth provider offering consultations through video, phone, and in-person visits, 
            faced challenges managing a high volume of customers, long wait times on live chat and phone calls resulted in lost customers.
          </p>
          <div class="project-details">
            <div>
              <h4>Duties</h4>
              <ul>
                <li>Research new technologies</li>
                <li>Design architecture for the full solution</li>
                <li>Consult on AI approaches</li>
                <li>Develop core AI backend</li>
                <li>Build AI Agents + MCP</li>
                <li>Build infrastructure on Azure</li>
              </ul>
            </div>
          </div>
          <div class="project-tags">
            <span class="project-tag">Azure</span>
            <span class="project-tag">RAG</span>
            <span class="project-tag">LlamaIndex</span>
            <span class="project-tag">AutoGen</span>
            <span class="project-tag">FastAPI</span>
          </div>
        </div>
        
        <div class="project-card glass" data-aos="fade-up" data-aos-delay="100">
          <h3 class="project-title">Online Training Course Generator</h3>
          <p class="project-role">AI Team Leader</p>
          <p>
            The AI-powered LMS Course Creator Module is designed to transform educational content creation through advanced 
            generative AI technologies, enabling educators to quickly develop comprehensive, high-quality materials.
          </p>
          <div class="project-details">
            <div>
              <h4>Duties</h4>
              <ul>
                <li>Research new technologies</li>
                <li>Design architecture</li>
                <li>Consult on AI approaches</li>
                <li>Develop core AI backend</li>
                <li>Integrate with LMS</li>
                <li>Deploy AI application</li>
              </ul>
            </div>
          </div>
          <div class="project-tags">
            <span class="project-tag">GPT-4o</span>
            <span class="project-tag">LangChain</span>
            <span class="project-tag">Promptflow</span>
            <span class="project-tag">Azure</span>
            <span class="project-tag">FastAPI</span>
          </div>
        </div>
        
        <div class="project-card glass" data-aos="fade-up" data-aos-delay="200">
          <h3 class="project-title">Real-Time People Tracking and Analytics System</h3>
          <p class="project-role">Team Leader - Solution Architecture</p>
          <p>
            A cutting-edge Real-time People Tracking & Analytics Project, powered by an AI pipeline accelerated on 
            Nvidia DeepStream framework, designed for scalability and cost-effectiveness.
          </p>
          <div class="project-details">
            <div>
              <h4>Duties</h4>
              <ul>
                <li>Manage team members, technical support</li>
                <li>Research new technologies & design architecture</li>
                <li>Consult on AI approaches & develop core AI</li>
              </ul>
            </div>
          </div>
          <div class="project-tags">
            <span class="project-tag">Nvidia DeepStream</span>
            <span class="project-tag">Triton</span>
            <span class="project-tag">Kafka</span>
            <span class="project-tag">ELK</span>
            <span class="project-tag">Computer Vision</span>
          </div>
        </div>
        
        <div class="project-card glass" data-aos="fade-up">
          <h3 class="project-title">Data Platform on Bare Metal K8s Cluster</h3>
          <p class="project-role">Technical Lead | Infrastructure</p>
          <p>
            Harness the full potential of data with the solution hosted on a bare-metal Kubernetes cluster, providing 
            secure, high-performance data management, analytics, and processing capabilities.
          </p>
          <div class="project-details">
            <div>
              <h4>Duties</h4>
              <ul>
                <li>Lead Infrastructure team</li>
                <li>Setup & Manage K8s cluster</li>
                <li>Deploy DataStacks on K8s</li>
                <li>Discuss and work with other teams</li>
              </ul>
            </div>
          </div>
          <div class="project-tags">
            <span class="project-tag">Kubernetes</span>
            <span class="project-tag">RKE2</span>
            <span class="project-tag">Prometheus</span>
            <span class="project-tag">Kafka</span>
            <span class="project-tag">Airflow</span>
          </div>
        </div>
        
        <div class="project-card glass" data-aos="fade-up" data-aos-delay="100">
          <h3 class="project-title">Phishing Defense System – Cyber Security</h3>
          <p class="project-role">AI/Infrastructure Engineer</p>
          <p>
            Built an Isolation Environment and Phishing Detection System to prevent phishing from malicious links 
            using Machine Learning models, deployed on cloud infrastructure.
          </p>
          <div class="project-details">
            <div>
              <h4>Duties</h4>
              <ul>
                <li>Setup and deploy infrastructure as Code</li>
                <li>Data analytics</li>
                <li>Train, evaluate and deploy AI/ML Models</li>
                <li>Develop RESTful APIs</li>
              </ul>
            </div>
          </div>
          <div class="project-tags">
            <span class="project-tag">AWS</span>
            <span class="project-tag">SageMaker</span>
            <span class="project-tag">Object Detection</span>
            <span class="project-tag">Random Forest</span>
            <span class="project-tag">Tornado</span>
          </div>
        </div>
      </div>
      
      <div class="view-more-container" data-aos="fade-up">
        <a href="#" class="view-more-btn">View More Projects</a>
      </div>
    </div>
  </section>

  <!-- Certificates Section -->
  <section id="certificates" class="certificates">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Certificates</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Professional certifications that validate my expertise in AI and MLOps.
      </p>
      
      <div class="certificates-grid">
        <div class="certificate-card glass" data-aos="fade-up">
          <img src="/images/SAA_1.png" alt="AWS Certified Solution Architect Associate" class="certificate-logo">
          <h3 class="certificate-title">AWS Certified Solution Architect – Associate (C03)</h3>
          <p class="certificate-issuer">Amazon Web Services</p>
          <p class="certificate-year">2022</p>
          <a target="_blank" rel="noopener noreferrer" href="https://www.credly.com/badges/36b5ec8d-0351-40be-bb22-d87ff33f2212" class="certificate-link">View Certificate</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Get in Touch</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Interested in working together? Feel free to reach out to me.
      </p>
      
      <div class="contact-grid">
        <div class="contact-info" data-aos="fade-right">
          <div class="contact-item">
            <div class="contact-icon">
              <span>📧</span>
            </div>
            <div>
              <h3>Email</h3>
              <p>thanhdanhit17@gmail.com</p>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <span>📱</span>
            </div>
            <div>
              <h3>Phone</h3>
              <p>TBD</p>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <span>📍</span>
            </div>
            <div>
              <h3>Location</h3>
              <p>Viet Nam, Quy Nhon City</p>  
            </div>
          </div>
          
          <div class="cv-download-container">
            <a href="/cv.docx" class="cv-download-btn" download>
              <span class="download-icon">📄</span>
              Download CV
            </a>
          </div>
        </div>
        
        <form class="contact-form glass" data-aos="fade-left">
          <div class="form-group">
            <label for="name" class="form-label">Name</label>
            <input type="text" id="name" class="form-input" required>
          </div>
          
          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input type="email" id="email" class="form-input" required>
          </div>
          
          <div class="form-group">
            <label for="message" class="form-label">Message</label>
            <textarea id="message" class="form-textarea" required></textarea>
          </div>
          
          <button type="submit" class="form-button">Send Message</button>
        </form>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container footer-container">
      <a href="#" class="footer-logo">Danh Nguyen | AI/MLOps Engineer</a>
      
      <ul class="footer-links">
        <li><a href="#about" class="footer-link">About</a></li>
        <li><a href="#projects" class="footer-link">Projects</a></li>
        <li><a href="#certificates" class="footer-link">Certificates</a></li>
        <li><a href="#contact" class="footer-link">Contact</a></li>
        <li><a href="/cv.docx" class="footer-link" download>Download CV</a></li>
      </ul>
      
      <div class="social-links">
        <a href="#" class="social-link">
          <span>in</span>
        </a>
        <a href="#" class="social-link">
          <span>gh</span>
        </a>
        <a href="#" class="social-link">
          <span>tw</span>
        </a>
      </div>
      
      <p class="copyright">© ${new Date().getFullYear()} Danh Nguyen. All rights reserved.</p>
    </div>
  </footer>
`

// Add scroll event listener for header
const header = document.querySelector('.header') as HTMLElement
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn') as HTMLButtonElement
const navLinks = document.querySelector('.nav-links') as HTMLElement

mobileMenuBtn.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex'
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault()
    const target = document.querySelector((this as HTMLAnchorElement).getAttribute('href')!)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      })
      // Close mobile menu if open
      if (window.innerWidth < 768) {
        navLinks.style.display = 'none'
      }
    }
  })
})

// Form submission handling
const contactForm = document.querySelector('.contact-form') as HTMLFormElement
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault()
  const nameInput = document.getElementById('name') as HTMLInputElement
  const emailInput = document.getElementById('email') as HTMLInputElement
  const messageInput = document.getElementById('message') as HTMLTextAreaElement
  
  // Simple validation
  if (nameInput.value && emailInput.value && messageInput.value) {
    // In a real application, you would send this data to your backend
    alert('Thank you for your message! I will get back to you soon.')
    contactForm.reset()
  } else {
    alert('Please fill in all fields.')
  }
})

// View more projects functionality
const viewMoreBtn = document.querySelector('.view-more-btn') as HTMLAnchorElement
viewMoreBtn?.addEventListener('click', (e) => {
  e.preventDefault()
  alert('More projects will be displayed in a future update.')
})
