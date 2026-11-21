import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Sparkles,
} from 'lucide-react'

import './App.css'

const technologies = [
  'JavaScript',
  'Python',
  'C#',
  'React',
  'Node.js',
  'PostgreSQL',
  'Git',
]

const projects = [
  {
    number: '01',
    name: 'Libria',
    category: 'PLATAFORMA WEB',
    description:
      'Plataforma de lectura y escritura donde los usuarios pueden descubrir libros, publicar historias, explorar autores y gestionar su biblioteca personal.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Supabase'],
    className: 'libria-preview',
    visual: 'libria',
    image: '/images/libria.png',
    link: 'https://github.com/Ana-6/libria/tree/main',
  },
  {
    number: '02',
    name: 'Mabel Activewear',
    category: 'ECOMMERCE',
    description:
      'Tienda online de ropa deportiva y accesorios con catálogo de productos, carrito de compras, autenticación de usuarios, panel administrativo e integración de pagos.',
    technologies: ['JavaScript', 'Node.js', 'Express', 'PostgreSQL', 'Cloudinary'],
    className: 'mabel-preview',
    visual: 'mabel',
    image: '/images/mabel.png',
    link: 'https://github.com/anamilet207-star/mabel-activewear',
  },
  {
    number: '03',
    name: 'AppCenar',
    category: 'SISTEMA DE DELIVERY',
    description:
      'Aplicación web de pedidos que conecta clientes, negocios y repartidores, con gestión de productos, órdenes, perfiles y administración.',
    technologies: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'Handlebars'],
    className: 'libria-preview',
    visual: 'cenar',
    image: '/images/appcenar.png',
    link: 'https://github.com/Ana-6/AppCenar/tree/main',
  },
  {
    number: '04',
    name: 'NexoFEL-RD',
    category: 'FACTURACIÓN ELECTRÓNICA',
    description:
      'Sistema web de facturación electrónica y gestión básica de inventario para pequeñas empresas. Desarrollado en equipo como proyecto académico.',
    technologies: ['C#', '.NET 8', 'ASP.NET Core MVC', 'SQL Server', 'Entity Framework Core'],
    className: 'mabel-preview',
    visual: 'nexo',
    image: '/images/nexofel-rd.png',
    link: 'https://github.com/ramsesarno-dev/NexoFEL-RD',
  },
]

function App() {
  return (
    <main>
      <header className="navbar">
        <a href="#inicio" className="brand">
          <span className="brand-symbol">a.</span>
          <span>anamilet<span className="brand-period">soto</span></span>
        </a>

        <nav className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#tecnologias">Tecnologías</a>
        </nav>

        <a href="#contacto" className="nav-contact">
          Hablemos <ArrowUpRight size={16} />
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-content">
          <div className="availability">
            <span className="availability-dot"></span>
            ABIERTA A NUEVAS OPORTUNIDADES
          </div>

          <p className="hero-intro">Hola, soy Anamilet.</p>

          <h1>
            Desarrollo
            <span className="hero-title-accent">ideas</span>
            <span>en experiencias</span>
            digitales<span className="hero-period">.</span>
          </h1>

          <p className="hero-description">
            Estudiante de término de Desarrollo de Software en ITLA.
            Me gusta aprender, experimentar y construir soluciones
            digitales que tengan un propósito.
          </p>

          <div className="hero-actions">
            <a href="#proyectos" className="button-primary">
              Ver mis proyectos <ArrowUpRight size={18} />
            </a>
            <a href="#sobre-mi" className="button-text">
              Un poco sobre mí <ArrowDown size={16} />
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Ana-6" target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={14} />
            </a>
            <a href="https://www.linkedin.com/in/anamilet-soto-86532a271" target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={14} />
            </a>
            <a href="mailto:anamiletsoto5@gmail.com">
              Email <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="hero-art">
          <div className="art-topline">
            <span>PORTAFOLIO PERSONAL</span>
            <span>2026 — PRESENTE</span>
          </div>

          <div className="art-composition">
            <div className="art-back-shape"></div>
            <div className="art-main-card">
              <span className="art-small-label">DESARROLLO DE SOFTWARE</span>
              <div className="art-monogram">AS<span>.</span></div>
              <div className="art-card-bottom">
                <span>CREATIVIDAD</span>
                <span className="art-cross">✳</span>
                <span>TECNOLOGÍA</span>
              </div>
            </div>
            <div className="art-side-note">
              <Sparkles size={18} />
              <span>Ideas en<br />construcción</span>
            </div>
            <div className="art-sticker">
              <span>KEEP</span>
              <strong>EXPLORING</strong>
              <span>AND BUILDING</span>
            </div>
            <div className="art-number">01</div>
          </div>

          <div className="art-bottomline">
            <span>DISEÑAR · DESARROLLAR · APRENDER</span>
            <span>REPÚBLICA DOMINICANA</span>
          </div>
        </div>

        <div className="hero-scroll">
          <span className="scroll-line"></span>
          DESLIZA PARA EXPLORAR
        </div>
      </section>

      <section className="intro-band">
        <div className="intro-band-label">MI ENFOQUE</div>
        <div className="intro-band-item">
          <span>01</span>
          <strong>Construir</strong>
        </div>
        <div className="intro-band-item">
          <span>02</span>
          <strong>Experimentar</strong>
        </div>
        <div className="intro-band-item">
          <span>03</span>
          <strong>Seguir aprendiendo</strong>
        </div>
      </section>

      <section className="about-section" id="sobre-mi">
        <div className="about-aside">
          <span className="section-index">01 / SOBRE MÍ</span>
          <div className="about-decoration">✳</div>
          <span className="aside-caption">UN PASO A LA VEZ.</span>
        </div>

        <div className="about-content">
          <p className="section-kicker">UN POCO SOBRE MI CAMINO</p>
          <h2>
            La tecnología es mi herramienta.
            <span> La curiosidad, mi punto de partida.</span>
          </h2>
          <p className="about-description">
            Actualmente estoy finalizando mi formación en Desarrollo
            de Software en el Instituto Tecnológico de las Américas
            (ITLA). Durante este recorrido he trabajado en proyectos
            que me han permitido explorar el desarrollo web, las bases
            de datos y la construcción de aplicaciones.
          </p>
          <p className="about-description">
            Me interesa seguir creciendo profesionalmente, enfrentar
            nuevos retos y convertir lo que voy aprendiendo en
            soluciones útiles.
          </p>
          <a href="#proyectos" className="inline-link">
            Conoce mi trabajo <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <section className="skills-section" id="tecnologias">
        <div className="skills-heading">
          <div>
            <span className="section-index">02 / HERRAMIENTAS</span>
            <h2>Con qué me gusta <span>trabajar.</span></h2>
          </div>
          <p>
            Tecnologías y herramientas que he utilizado durante mi
            formación y en el desarrollo de mis proyectos.
          </p>
        </div>

        <div className="skills-layout">
          <div className="skills-feature">
            <div className="skills-feature-icon"><Code2 size={25} /></div>
            <span>01 — DESARROLLO</span>
            <h3>Del concepto<br />al código.</h3>
            <p>Explorando distintas formas de construir aplicaciones y experiencias web.</p>
          </div>

          <div className="skills-list">
            {technologies.map((technology, index) => (
              <div className="skill-item" key={technology}>
                <span className="skill-number">0{index + 1}</span>
                <span>{technology}</span>
                <ArrowUpRight size={16} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section" id="proyectos">
        <div className="projects-top">
          <div>
            <span className="section-index">03 / PROYECTOS</span>
            <h2>Trabajo en <span>progreso.</span></h2>
          </div>
          <p>
            Proyectos que representan parte de lo que he aprendido,
            las ideas que he explorado y los retos que he asumido.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-item" key={project.number}>
              <div className={`project-art ${project.className} project-art-${project.visual}`}>
                <div className="project-art-top">
                  <span>{project.category}</span>
                  <span>{project.number} / 04</span>
                </div>

                <img
                  className="project-screenshot"
                  src={project.image}
                  alt={`Captura de pantalla de ${project.name}`}
                  loading="lazy"
                />
              </div>

              <div className="project-info">
                <div className="project-info-top">
                  <span>{project.number} — {project.category}</span>
                  <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Ver ${project.name} en GitHub`}>
                    <ArrowUpRight size={20} />
                  </a>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                  Explorar código en GitHub <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div className="contact-top">
          <span className="section-index">04 / CONTACTO</span>
          <span className="contact-symbol">✳</span>
        </div>
        <p>¿TIENES UNA IDEA O UNA OPORTUNIDAD?</p>
        <h2>
          Hagamos algo<br />
          <span>interesante.</span>
        </h2>
        <a href="mailto:anamiletsoto5@gmail.com" className="contact-button">
          Escríbeme <ArrowUpRight size={19} />
        </a>
      </section>

      <footer className="footer">
        <a href="#inicio" className="brand footer-brand">
          <span className="brand-symbol">a.</span>
          <span>anamilet<span className="brand-period">soto</span></span>
        </a>

        <span className="footer-description">Desarrollo de Software · ITLA</span>

        <div className="footer-links">
          <a href="https://github.com/Ana-6" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/anamilet-soto-86532a271" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:anamiletsoto5@gmail.com">Email</a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Anamilet Soto Franco</span>
          <a href="#inicio">VOLVER ARRIBA ↑</a>
          <span>HECHO CON DEDICACIÓN.</span>
        </div>
      </footer>
    </main>
  )
}

export default App
