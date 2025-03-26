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
      <div>
        <a href="#" class="logo footer-logo">Danh Nguyen</a>
        <p class="footer-intro">
          Senior AI & MLOps Engineer specializing in building scalable machine learning systems and innovative AI solutions.
        </p>
      </div>
      <div>
        <h3>Quick Links</h3>
        <ul class="footer-links">
          <li><a href="#about" class="footer-link">About</a></li>
          <li><a href="#projects" class="footer-link">Projects</a></li>
          <li><a href="#certificates" class="footer-link">Certificates</a></li>
          <li><a href="#contact" class="footer-link">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3>Connect</h3>
        <div class="social-links">
          <a href="https://www.linkedin.com" target="_blank" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"/></svg>
          </a>
          <a href="https://www.github.com" target="_blank" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"/></svg>
          </a>
          <a href="https://www.medium.com" target="_blank" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.5 21.5c5.969 0 10.5-4.531 10.5-10.5S19.469.5 13.5.5 3 5.031 3 11s4.531 10.5 10.5 10.5zm-2-16.262c.113.037.225.079.336.127h.001l.003.002.01.003.043.016.034.014c.022.008.044.018.066.028l4.29 1.796-.001.015c.02.051.03.103.03.157v6.428c0 .531-.42.957-.938.957-.159 0-.308-.039-.44-.108L8.684 13l-.016-.007 2.9-7.008 2.172 1.242L8.1 13l.018-.019a.953.953 0 01-.118.466l-.216.524a.956.956 0 01-.88.602.958.958 0 01-.939-.958v-.004l.006-6.246 4.135-1.73c.349-.146.726-.14 1.07.002zM19 11c0 3.037-2.463 5.5-5.5 5.5-1.025 0-1.993-.28-2.816-.766l2.918-1.219 2.787 1.219c.15.066.312.1.476.1.212 0 .418-.059.599-.169A.959.959 0 0017.5 14.8V8.307c0-.45-.308-.848-.742-.952l-2.003-.388a4.4 4.4 0 01-.255-.06V6.73L18.998 7.5 19 11z"/></svg>
          </a>
        </div>
      </div>
    </div>
    <div class="container">
      <p class="copyright">© 2024 Danh Nguyen. All rights reserved.</p>
    </div>
  </footer>

  <!-- Back to Top Button -->
  <div class="back-to-top">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"/>
    </svg>
  </div>
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
  anchor.addEventListener('click', function(this: HTMLAnchorElement, e) {
    e.preventDefault()
    const target = document.querySelector((this).getAttribute('href')!)
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

// Back to top button functionality
const backToTopButton = document.querySelector<HTMLDivElement>('.back-to-top')!

// Show button when page is scrolled down
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('visible')
  } else {
    backToTopButton.classList.remove('visible')
  }
})

// Scroll to top when button is clicked
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
