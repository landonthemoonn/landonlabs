import { MessInfo } from './components/MessInfo';

const projects = [
  {
    number: '01',
    name: 'MESS',
    status: 'Active prototype',
    type: 'AI canvas',
    year: '2026',
    mood: 'raw material -> working system',
    specimen: 'mess',
    description:
      'An AI-native creative canvas for references, prompts, files, screenshots, scraps, and unfinished ideas before they become clean enough to explain.',
  },
  {
    number: '02',
    name: 'Me Gen',
    status: 'In motion',
    type: 'Visual remix tool',
    year: '2026',
    mood: 'aesthetic mutation engine',
    specimen: 'megen',
    description:
      'A generation and remix surface for turning images, references, and visual instincts into prompt directions, style systems, and new creative routes.',
  },
  {
    number: '03',
    name: 'ADHDkit',
    status: 'Prototype',
    type: 'External brain',
    year: '2026',
    mood: 'gentle structure for loud brains',
    specimen: 'adhdkit',
    description:
      'A practical toolkit for capture, reminders, tiny routines, focus loops, and the kind of planning that has to survive real attention.',
  },
  {
    number: '04',
    name: 'DOG Trax',
    status: 'Personal system',
    type: 'Care tracker',
    year: '2026',
    mood: 'small life, serious data',
    specimen: 'dogtrax',
    description:
      'A tiny but serious tracking system for walks, meals, meds, notes, routines, and the logistics of caring for a very important dog.',
  },
  {
    number: '05',
    name: 'IT Dashboard',
    status: 'Operational UI',
    type: 'Support system',
    year: '2026',
    mood: 'calm command center',
    specimen: 'dashboard',
    description:
      'A support dashboard for devices, tickets, accounts, security posture, and the daily operational fog that good internal tools can make readable.',
  },
  {
    number: '06',
    name: 'Bloom',
    status: 'Concept build',
    type: 'Growth interface',
    year: '2026',
    mood: 'soft planning, sharp edges',
    specimen: 'bloom',
    description:
      'A softer planning surface for goals, habits, reflections, and personal systems that need care instead of another productivity cage.',
  },
  {
    number: '07',
    name: 'Knowledge Base UI',
    status: 'Product surface',
    type: 'Search + docs',
    year: '2026',
    mood: 'answers without archaeology',
    specimen: 'knowledge',
    description:
      'A structured knowledge interface for finding the right answer fast, connecting docs, context, and operational memory without making people dig.',
  },
];

const notes = [
  ['Disturb', 'interrupt the obvious version'],
  ['Mutate', 'let the inputs collide until something better appears'],
  ['Refine', 'turn rough instinct into working tools'],
  ['Polish', 'make the final thing feel inevitable'],
];

function SpecimenPanel({ mode, label }: { mode: string; label: string }) {
  return (
    <div className={`specimen specimen-${mode}`} aria-hidden="true">
      <span className="corner corner-tl">+</span>
      <span className="corner corner-tr">+</span>
      <span className="corner corner-bl">+</span>
      <span className="corner corner-br">+</span>
      <div className="specimen-grid" />
      <div className="specimen-orbit orbit-a" />
      <div className="specimen-orbit orbit-b" />
      <div className="specimen-chip chip-a" />
      <div className="specimen-chip chip-b" />
      <div className="specimen-lines">
        <span />
        <span />
        <span />
      </div>
      <div className="specimen-columns">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="specimen-dots" />
      <div className="specimen-bars">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="specimen-label">{label}</div>
    </div>
  );
}

function ProjectRow({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <article className="project-row" id={project.name.toLowerCase().replace(/\s+/g, '-')}>
      <div className="project-index">
        <span>{project.number}</span>
        <span>{project.year}</span>
      </div>
      <SpecimenPanel mode={project.specimen} label={project.name} />
      <div className="project-copy">
        <div className="project-meta">
          <span>{project.status}</span>
          <span>{project.type}</span>
        </div>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <div className="project-mood">{project.mood}</div>
      </div>
    </article>
  );
}

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const isMessPage = pathname === '/mess';

  return (
    <main className="site-shell">
      <header className="topbar">
        <a href="/" className="brand">Landon Labs</a>
        <nav aria-label="Primary navigation">
          <a href={isMessPage ? '/#work' : '#work'}>Work</a>
          <a href={isMessPage ? '/#about' : '#about'}>About</a>
          <a href={isMessPage ? '/#contact' : '#contact'}>Contact</a>
          <a href={isMessPage ? 'https://mess.landonlabs.com' : '/mess'} className="nav-box">
            Mess
          </a>
        </nav>
      </header>

      {isMessPage ? (
        <MessInfo />
      ) : (
        <>
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-side left">Tuesday</div>
            <div className="hero-side right">San Francisco</div>
            <div className="hero-inner">
              <p className="tiny-label">creative chaos / made usable</p>
              <h1 id="hero-title">
                <span>Everything</span>
                <span>Starts</span>
                <span>Out</span>
                <span>A</span>
                <span>Mess</span>
              </h1>
              <p className="hero-copy">
                Landon Labs builds creative technology for the strange unfinished stage, when ideas are still raw, useful, and starting to take shape.
              </p>
            </div>
          </section>

          <section className="manifesto-band" aria-label="Landon Labs manifesto">
            <div className="manifesto-mark">utopie</div>
            <p>
              A folder full of screenshots. A note that almost makes sense. A prompt that keeps mutating.
              Landon Labs turns the early creature-stage of an idea into something polished enough to use.
            </p>
          </section>

          <section className="work-section" id="work">
            <div className="section-rail">
              <span>Work</span>
              <span>2026</span>
            </div>
            <div className="project-list">
              {projects.map((project, index) => (
                <ProjectRow key={project.name} project={project} index={index} />
              ))}
            </div>
          </section>

          <section className="notes-section" id="about">
            <div className="section-rail">
              <span>About</span>
              <span>Method</span>
            </div>
            <div className="notes-grid">
              <div>
                <h2>Messy creature. Polished system.</h2>
                <p>
                  Landon Labs is the creative technology practice of Landon Strempel: part product lab,
                  part interface archive, part external brain for ideas that refuse to stay tidy.
                </p>
              </div>
              <dl>
                {notes.map(([term, detail]) => (
                  <div key={term}>
                    <dt>{term}</dt>
                    <dd>{detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <footer className="footer" id="contact">
            <div className="footer-title">Have a messy idea?</div>
            <a href="mailto:landon@landonlabs.com">landon@landonlabs.com</a>
            <div className="footer-meta">
              <span>Landon Labs</span>
              <span>Pretty systems for messy ideas.</span>
              <span>All experiments reserved.</span>
            </div>
          </footer>
        </>
      )}
    </main>
  );
}
