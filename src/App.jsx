import './App.css'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Publications', href: '#publications' },
  { label: 'Projects', href: '#projects' },
]

const highlights = [
  'MSc student in Computer Science at UC Davis',
  '3 years of software industry experience as a full stack engineer',
  'Looking for new opportunities as graduation approaches',
]

const timeline = {
  work: [
    {
      period: 'February 2024 – September 2024',
      title: 'Software Engineer',
      org: 'MarginEdge',
      bullets: [
        'Maintained and enhanced 15+ production-grade POS and accounting systems used by restaurant clients.',
        'Developed 10+ backend features and fixes using Spring Boot to ensure data consistency and system stability.',
        'Implemented an alternate file transfer mechanism for a legacy POS system to prevent timeout-related failures.',
        'Wrote JUnit and Mockito unit tests to support a thorough and structured code review process.',
        'Worked closely with QA engineers to validate features and reproduce defects before production releases.',
      ],
      stack: ['Java', 'Spring Boot', 'REST APIs', 'JavaScript', 'PostgreSQL', 'AngularJS', 'AWS'],
    },
    {
      period: 'February 2021 – October 2023',
      title: 'Software Engineer',
      org: 'Reve Systems',
      bullets: [
        'Independently designed and delivered a full-stack digital office management (e-Nothi) system under tight deadlines, contributing to a contract that generated approximately 10% of overall project revenue.',
        'Built generic multi-level approval and inspection workflows used by 15+ project modules.',
        'Implemented payment processing by integrating multiple third-party payment APIs with backend validation.',
        'Integrated Redis caching and Eureka-based service discovery, noticeably reducing page load times.',
        'Developed 10+ reusable JavaScript & Thymeleaf components, including file uploaders and photo croppers.',
        'Contributed to major PRP system modules (HR, budget, finance), covering over 50% of project scope.',
        'Collaborated with frontend and QA teams to deliver production-ready features in an enterprise environment.',
      ],
      stack: ['Java', 'Spring Boot', 'REST APIs', 'Thymeleaf', 'JavaScript', 'Oracle', 'MySQL', 'Redis', 'Eureka'],
    },
  ],
  education: [
    {
      period: '2024 - Present',
      title: 'Master of Science in Computer Science',
      org: 'University of California, Davis',
      note: 'CGPA: 4.00/4.00',
    },
    {
      period: '2016 - 2021',
      title: 'Bachelor of Science in Computer Science and Engineering',
      org: 'Bangladesh University of Engineering and Technology',
      note: 'CGPA: 3.87/4.00 (10th/143)',
    },
    {
      period: '2013 - 2015',
      title: 'Higher Secondary Certificate',
      org: 'Rajshahi College',
      note: 'GPA: 5.00, Board Talentpool Scholarship',
    },
    {
      period: '2005 - 2013',
      title: 'Secondary School Certificate',
      org: 'Govt. Laboratory High School, Rajshahi',
      note: 'GPA: 5.00',
    },
  ],
  achievements: [
    'Dean’s List for all 4 years of the undergraduate program',
    'University merit scholarship',
    'Qualified twice for National Math Olympiad with a champion and a 1st runner-up finish at regionals',
    'Stood 8th at the BUET admission test',
  ],
}

const skills = [
  {
    title: 'Languages',
    items: ['C', 'C++', 'Java', 'Python', 'Assembly (80x86)', 'HTML', 'CSS', 'SQL', 'Matlab', 'Bash', 'Dafny'],
  },
  {
    title: 'Databases',
    items: ['Oracle', 'MySQL'],
  },
  {
    title: 'Mobile Application',
    items: ['Android', 'Android Studio'],
  },
  {
    title: 'Frameworks',
    items: ['Spring Boot', 'React', 'Thymeleaf', 'JavaFX', 'OpenGL'],
  },
  {
    title: 'Environments',
    items: ['NetBeans', 'CodeBlocks', 'IntelliJ', 'PyCharm'],
  },
  {
    title: 'Tools & Simulators',
    items: ['Git', 'AWS', 'Z3', 'Lucidchart', 'Wireshark', 'NS-2', 'Logisim', 'Packet Tracer'],
  },
  {
    title: 'ML Libraries',
    items: ['scikit-learn', 'pandas', 'NumPy'],
  },
]

const publications = [
  {
    title: 'Genome-wide alignment-free phylogenetic distance estimation under a no strand-bias model',
    authors: 'M Balaban, NA Bristy, A Faisal, MS Bayzid, S Mirarab',
    venue: 'Bioinformatics Advances',
    description:
      'This paper shows how to calculate distances under a four-parameter no strand-bias model called TK4 without relying on alignments or assemblies.',
  },
]

const projects = [
  {
    title: 'Customs Bond Management System (CBMS)',
    image: '/cbms_project.png',
    meta: 'Reve Systems for National Board of Revenue, Bangladesh',
    description:
      'Built to digitalize bond registration and monitoring so the current and future bonders can manage the process more easily.',
    bullets: [
      'Implemented using Java Spring Boot and Thymeleaf',
      'Oracle database',
      'JavaScript and jQuery on the frontend',
    ],
  },
  {
    title: 'Parliament Resource Planning (PRP)',
    image: '/prp_project.png',
    meta: 'Reve Systems for Bangladesh Parliament',
    description:
      'Developed to digitalize parliament office work, with contributions to crucial modules including HR, finance, and budget.',
    bullets: [
      'Implemented using Java Servlet and JSP',
      'MySQL database',
      'JavaScript and jQuery on the frontend',
    ],
  },
  {
    title: 'MarginEdge - Restaurant Management Software',
    image: '/me_software_project.png',
    meta: 'Software Engineer at MarginEdge',
    description:
      'Worked on a product that helps restaurant owners manage operations efficiently, take financial decisions, and integrate with POS and accounting systems.',
    bullets: [
      'Worked with Java, Spring Boot, and AngularJS',
      'Part of the integration team',
      'Integrated new POS and accounting systems and maintained existing integrations',
    ],
  },
  {
    title: 'ParkIn - A Simple Parking App',
    meta: 'Software Engineering Sessional, BUET',
    description:
      'A collaboration that lets car owners find parking and gives free-space owners a way to rent out available spots.',
    bullets: [
      'MySQL database with PHP backend',
      'Implemented using Android Java',
      'Used several Google Maps APIs',
      'Firebase email authentication',
    ],
    link: 'https://github.com/hridoy100/ParkInAndroid',
  },
  {
    title: 'Database Management System',
    meta: 'Database Sessional, BUET',
    description:
      'A restaurant-focused management project for food ordering, revenue management, and other digitalized tasks.',
    bullets: [
      'Collaborated with one classmate',
      'MySQL database',
      'Implemented using Java FXML',
      'Dynamic user interface',
    ],
    link: 'https://github.com/ahnaf005/Restaurent-Management-System',
  },
  {
    title: 'A Simple Meeting Scheduler',
    meta: 'Object Oriented Programming Sessional, BUET',
    description:
      'Built to demonstrate Java networking and threading by letting users arrange meetings and send notifications.',
    bullets: ['Implemented using Java FXML', 'Used Java networking and threads'],
    link: 'https://github.com/ahnaf005/MeetingSchelduler',
  },
  {
    title: 'Two Player Chess Game',
    meta: 'Structured Programming Sessional, BUET',
    description:
      'A two-player chess game that follows conventional chess rules.',
    bullets: ['Implemented using iGraphics C', 'Designed for two local players'],
    link: 'https://github.com/ahnaf005/Two_Player_Chess_Using_iGraphics',
  },
  {
    title: 'Dictionary Attack',
    meta: 'Computer Security Sessional, BUET',
    description:
      'A security project demonstrating dictionary attacks and practical defenses against them.',
    bullets: [
      'Used a SEED Apache server and Wireshark for attack demonstration',
      'Showcases offline file password cracking with or without salt',
      'Demonstrates simple defense mechanisms',
    ],
    link: 'https://github.com/ahnaf005/security_seed',
  },
  {
    title: 'Remote Controlled Car',
    meta: 'Micro Controller Sessional, BUET',
    description:
      'A hardware project where the car is controlled through hand gestures.',
    bullets: ['Car controlled using hand position', 'Implemented using an AVR microcontroller'],
    link: 'https://youtu.be/1xpMrz84sdY',
    linkLabel: 'Watch demo',
  },
  {
    title: 'Evaluating LLM-Generated Bug Reports Using CI Failures and Code Diffs',
    meta: 'Analysis on Software Artifacts, UC Davis',
    description:
      'Created bug reports with two separate LLMs and evaluated them using predefined metrics based on build logs and code diffs from BugSwarm.',
    bullets: [
      'Compared multiple prompting techniques',
      'Generated reports from build logs and code diffs',
      'Created evaluation metrics and scored the generated reports',
    ],
    link: 'https://github.com/ahnaf005/llm-bug-report',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#home">
          <span className="brand-mark">AF</span>
          <span className="brand-copy">
            <strong>Ahnaf Faisal</strong>
            <span>Software Engineer and Graduate Student</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Ahnaf Faisal</p>
            <h1>Graduate student at UC Davis with full stack software experience.</h1>
            <p className="hero-text">
              Hi, I&apos;m Ahnaf Faisal, a graduate student at the University of
              California, Davis pursuing an MSc in Computer Science.
            </p>
            <p className="hero-text">
              I also have three years of work experience in the software
              industry as a full stack engineer, and I&apos;m nearing my graduation
              at UC Davis while looking for opportunities again.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View Projects
              </a>
              <a className="button button-secondary" href="#publications">
                Read Publication
              </a>
            </div>

            <div className="hero-social">
              <a href="mailto:ahnaffaisalalavi@gmail.com">Email</a>
              <a href="https://www.linkedin.com/in/ahnaf-faisal-94b4b01b6/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/ahnaf005" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://scholar.google.com/citations?user=kNNfEqUAAAAJ" target="_blank" rel="noreferrer">Scholar</a>
            </div>

            <ul className="highlight-list">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <img
                src="/profile_picture.jpg"
                alt="Ahnaf Faisal standing by the coastline"
              />
            </div>
            <div className="hero-card">
              <span>Current Stage</span>
              <strong>Finishing graduate study at UC Davis and exploring next opportunities.</strong>
            </div>
          </div>
        </section>

        <section className="content-section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>From BUET to industry to graduate study at UC Davis.</h2>
          </div>

          <div className="about-grid">
            <article className="panel">
              <p>
                From childhood, I was drawn to computers and always dreamed of
                studying them deeply. That came to fruition when I stood 8th in
                the BUET admission test and earned the privilege to study
                Computer Science and Engineering.
              </p>
              <p>
                I had the opportunity to work under Dr. Md. Shamsuzzoha Bayzid
                for my bioinformatics thesis. After graduating with an excellent
                result, I started my career as a software engineer at Reve
                Systems in Bangladesh and later worked remotely as a software
                engineer for MarginEdge.
              </p>
              <p>
                I am now pursuing an MSc in Computer Science as a graduate
                student at UC Davis.
              </p>
            </article>

            <aside className="panel detail-panel">
              <h3>Quick Facts</h3>
              <dl>
                <div>
                  <dt>Current Program</dt>
                  <dd>MSc in Computer Science, UC Davis</dd>
                  <dd>CGPA 4.00/4.00</dd>
                </div>
                <div>
                  <dt>Undergraduate</dt>
                  <dd>BSc in Computer Science, BUET</dd>
                  <dd>CGPA 3.87/4.00</dd>
                </div>
                <div>
                  <dt>Industry</dt>
                  <dd>Reve Systems and MarginEdge</dd>
                </div>
              </dl>
            </aside>
          </div>

          <article className="panel tools-panel">
            <h3>Education</h3>
            <div className="timeline-list">
              {timeline.education.map((item) => (
                <div className="timeline-item" key={`${item.period}-${item.title}`}>
                  <p className="timeline-period">{item.period}</p>
                  <strong>{item.title}</strong>
                  <p>{item.org}</p>
                  {item.note ? <p>{item.note}</p> : null}
                </div>
              ))}
            </div>
          </article>

          <article className="panel tools-panel">
            <h3>Work Experience</h3>
            <div className="work-grid">
              {timeline.work.map((item) => (
                <div className="work-card" key={`${item.period}-${item.org}`}>
                  <p className="timeline-period">{item.period}</p>
                  <strong className="work-title">{item.title}</strong>
                  <p className="work-org">{item.org}</p>
                  <ul className="work-bullets">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="stack-tags">
                    {item.stack.map((tag) => (
                      <span className="stack-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <div className="panel tools-panel">
            <h3>Honors and Achievements</h3>
            <ul className="tool-list single-column">
              {timeline.achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="content-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Tools, languages, frameworks, and environments used across coursework and industry work.</h2>
          </div>

          <div className="skill-grid">
            {skills.map((skill) => (
              <article className="panel skill-card" key={skill.title}>
                <h3>{skill.title}</h3>
                <ul className="skill-chips">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="publications">
          <div className="section-heading">
            <p className="eyebrow">Publications</p>
            <h2>Papers published.</h2>
          </div>

          <div className="card-grid publication-grid">
            {publications.map((item) => (
              <article className="panel publication-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.authors}</p>
                <p>{item.venue}</p>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Industry systems, course projects, and research-oriented software work.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-image-wrap">
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <div className="project-placeholder">
                      <span>{project.meta}</span>
                      <strong>{project.title}</strong>
                    </div>
                  )}
                </div>
                <div className="project-copy">
                  <p className="project-meta">{project.meta}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="project-bullets">
                    {project.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      {project.linkLabel ?? 'Open link'}
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}

export default App
