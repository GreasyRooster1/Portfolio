// Portfolio homepage — option 7a "Full 2a layout in 3c ice blue on cool slate".
// Imported from the Claude Design doc "Portfolio Homepage".

const C = {
  bg: '#0d0f12',
  surface: '#171a1f',
  text: '#e6e9ee',
  body: '#98a0ac',
  muted: '#828b98',
  faint: '#59616c',
  accent: '#79cbe6',
  barTrack: '#282e36',
  hairline: 'rgba(255,255,255,.1)',
  hairlineStrong: 'rgba(255,255,255,.14)',
  hairlineSoft: 'rgba(255,255,255,.08)',
}

const mono = "'JetBrains Mono', ui-monospace, monospace"
const sans = 'Archivo, Helvetica, system-ui, sans-serif'

const eyebrow = (color = C.faint, letterSpacing = '.14em') => ({
  fontFamily: mono,
  fontWeight: 500,
  fontSize: 10.5,
  lineHeight: 1,
  letterSpacing,
  textTransform: 'uppercase',
  color,
})

const link = { textDecoration: 'none' }

function Cursor() {
  return (
    <span
      style={{
        display: 'inline-block',
        width: 7,
        height: 13,
        background: C.accent,
        marginLeft: 7,
        verticalAlign: -1,
        animation: 'blink 1.1s step-end infinite',
      }}
    />
  )
}

function Placeholder({ height, note }) {
  return (
    <div
      className="phd"
      style={{
        height,
        background: C.surface,
        border: `1px solid ${C.hairline}`,
        backgroundImage:
          'repeating-linear-gradient(135deg, rgba(255,255,255,.07) 0 6px, transparent 6px 13px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        padding: 10,
      }}
    >
      {note && (
        <span
          style={{
            fontFamily: mono,
            fontWeight: 500,
            fontSize: 9.5,
            letterSpacing: '.08em',
            textTransform: 'uppercase',
            color: '#8a929e',
          }}
        >
          {note}
        </span>
      )}
    </div>
  )
}

// Renders a row of inline links separated by a faint slash.
function LinkRow({ links, style }) {
  return (
    <div style={style}>
      {links.map((l, i) => (
        <span key={l.label}>
          {i > 0 && <span style={{ color: C.barTrack, margin: '0 6px' }}>/</span>}
          <a href="#7a" style={{ ...link, color: l.accent ? C.accent : C.muted }}>
            {l.label}
          </a>
        </span>
      ))}
    </div>
  )
}

function Metric({ k, v }) {
  return (
    <div>
      <div style={{ ...eyebrow(C.muted, '.1em'), fontWeight: 400, fontSize: 10 }}>{k}</div>
      <div style={{ fontFamily: mono, fontWeight: 500, fontSize: 24, lineHeight: 1, color: C.text, marginTop: 7 }}>
        {v}
      </div>
    </div>
  )
}

function Nav() {
  const links = ['work', 'index', 'about', 'experiments']
  return (
    <nav
      style={{
        padding: '22px 64px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: `1px solid ${C.hairline}`,
        position: 'sticky',
        top: 0,
        background: 'rgba(13,15,18,.92)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 3,
      }}
    >
      <div
        style={{
          fontFamily: mono,
          fontWeight: 700,
          fontSize: 12,
          letterSpacing: '.14em',
          textTransform: 'uppercase',
          color: C.text,
        }}
      >
        Your Name
        <Cursor />
      </div>
      <div
        style={{
          display: 'flex',
          gap: 24,
          fontFamily: mono,
          fontWeight: 500,
          fontSize: 11,
          letterSpacing: '.1em',
          textTransform: 'uppercase',
          color: C.muted,
        }}
      >
        {links.map((l) => (
          <a key={l} href="#7a" className="navlink" style={link}>
            {l}
          </a>
        ))}
        <a href="#7a" className="navlink" style={{ ...link, color: C.accent }}>
          résumé ↓
        </a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header
      style={{
        padding: '104px 64px 0',
        display: 'grid',
        gridTemplateColumns: '1.35fr 1fr',
        gap: 64,
        alignItems: 'end',
      }}
    >
      <div>
        <div style={{ ...eyebrow(C.faint), marginBottom: 26 }}>
          solo developer · graphics · distributed systems · product
        </div>
        <h1
          style={{
            fontFamily: sans,
            fontWeight: 600,
            fontSize: 72,
            lineHeight: 1,
            color: C.text,
            margin: 0,
            letterSpacing: '-.025em',
            maxWidth: '16ch',
          }}
        >
          Interfaces and the <span style={{ color: C.accent }}>machinery</span> underneath them.
        </h1>
      </div>
      <div>
        <p
          style={{
            fontFamily: sans,
            fontWeight: 400,
            fontSize: 16,
            lineHeight: 1.65,
            color: C.body,
            margin: 0,
            textWrap: 'pretty',
          }}
        >
          Eight years taking projects from a blank repo to something people use daily. Everything
          below is live, benchmarked and open source.
        </p>
        <div style={{ display: 'flex', gap: 10, margin: '28px 0 0' }}>
          <a
            href="#7a"
            style={{
              ...eyebrow(C.bg, '.08em'),
              fontWeight: 600,
              fontSize: 11,
              background: C.accent,
              padding: '13px 18px',
              textDecoration: 'none',
            }}
          >
            résumé.pdf
          </a>
          {['github', 'email'].map((l) => (
            <a
              key={l}
              href="#7a"
              style={{
                ...eyebrow(C.text, '.08em'),
                fontWeight: 600,
                fontSize: 11,
                border: '1px solid rgba(255,255,255,.2)',
                padding: '13px 18px',
                textDecoration: 'none',
              }}
            >
              {l}
            </a>
          ))}
        </div>
        <div style={{ fontFamily: mono, fontWeight: 400, fontSize: 11, lineHeight: 1.6, color: C.faint, marginTop: 20 }}>
          available · [City] · replies within a day
        </div>
      </div>
    </header>
  )
}

function FeaturedHero() {
  return (
    <section style={{ margin: '60px 64px 0', position: 'relative' }}>
      <Placeholder height={440} note="hero capture — flagship project, 2240 × 1260" />
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          padding: '28px 30px',
          background:
            'linear-gradient(to top, rgba(13,15,18,.94) 0%, rgba(13,15,18,.78) 55%, rgba(13,15,18,0) 100%)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: 40,
        }}
      >
        <div>
          <div style={{ ...eyebrow(C.accent, '.16em'), fontSize: 10 }}>featured · 2026</div>
          <div
            style={{
              fontFamily: sans,
              fontWeight: 600,
              fontSize: 34,
              lineHeight: 1.1,
              color: C.text,
              letterSpacing: '-.02em',
              marginTop: 12,
            }}
          >
            Realtime collaboration engine
          </div>
          <p
            style={{
              fontFamily: sans,
              fontWeight: 400,
              fontSize: 14.5,
              lineHeight: 1.55,
              color: C.body,
              margin: '9px 0 0',
              maxWidth: '58ch',
              textWrap: 'pretty',
            }}
          >
            CRDT document sync with offline reconciliation and a merge UI for genuine conflicts. Rust
            core compiled to WASM, shared by web and native.
          </p>
          <LinkRow
            links={[{ label: 'live demo', accent: true }, { label: 'source' }, { label: 'writeup' }]}
            style={{
              display: 'flex',
              gap: 16,
              marginTop: 16,
              fontFamily: mono,
              fontWeight: 500,
              fontSize: 10.5,
              letterSpacing: '.08em',
              textTransform: 'uppercase',
            }}
          />
        </div>
        <div style={{ display: 'flex', gap: 26, flex: 'none', paddingBottom: 4 }}>
          <Metric k="p99" v="40 ms" />
          <Metric k="peers" v="1.2 k" />
          <div>
            <div style={{ ...eyebrow(C.muted, '.1em'), fontWeight: 400, fontSize: 10 }}>stack</div>
            <div style={{ fontFamily: mono, fontWeight: 500, fontSize: 13, lineHeight: 1.45, color: C.body, marginTop: 9 }}>
              Rust · WASM
              <br />
              WebSocket
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHead({ title, meta }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        borderBottom: `1px solid ${C.hairlineStrong}`,
        paddingBottom: 12,
      }}
    >
      <div style={{ fontFamily: sans, fontWeight: 600, fontSize: 24, lineHeight: 1, color: C.text, letterSpacing: '-.01em' }}>
        {title}
      </div>
      <div style={eyebrow(C.faint, '.1em')}>{meta}</div>
    </div>
  )
}

const WORK = [
  {
    title: 'Realtime collaboration engine',
    year: '2026',
    note: 'screenshot 4:3',
    imgH: 310,
    desc: 'CRDT document sync with offline reconciliation and a merge UI for genuine conflicts. Rust core compiled to WASM, shared by web and native.',
    stats: [{ k: 'p99', v: '40 ms' }, { k: 'peers', v: '1.2 k' }],
    bar: { pct: 24, note: 'vs. 165 ms baseline' },
    links: [{ label: 'demo', accent: true }, { label: 'source' }, { label: 'writeup' }],
  },
  {
    title: 'GPU particle simulator',
    year: '2025',
    note: 'screen capture / gif',
    imgH: 310,
    desc: 'Compute-shader fluid field with zero CPU readback — sorting and binning happen entirely on device.',
    stats: [{ k: 'particles', v: '2.0 M' }, { k: 'frame', v: '16 ms' }],
    links: [{ label: 'demo', accent: true }, { label: 'source' }],
  },
  {
    title: 'Distributed job scheduler',
    year: '2025',
    note: 'architecture diagram',
    imgH: 250,
    desc: 'Work-stealing queue with exactly-once delivery, Raft-replicated leases and a replay log for post-mortems.',
    stats: [{ k: 'throughput', v: '12 k/s' }, { k: 'dupes', v: '0 / 40 M' }],
    links: [{ label: 'source' }, { label: 'writeup' }],
  },
  {
    title: 'Vector search engine',
    year: '2024',
    note: 'benchmark chart',
    imgH: 250,
    desc: 'HNSW index written from scratch with hand-tuned SIMD distance kernels and a memory-mapped store.',
    stats: [{ k: 'p50', v: '1.8 ms' }, { k: 'corpus', v: '10 M' }],
    links: [{ label: 'bench', accent: true }, { label: 'source' }],
  },
]

function WorkCard({ note, imgH, title, year, desc, stats, bar, links }) {
  return (
    <div className="gcard" style={{ transition: 'transform .25s ease' }}>
      <Placeholder height={imgH} note={note} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 18 }}>
        <div style={{ fontFamily: sans, fontWeight: 600, fontSize: 21, lineHeight: 1.2, color: C.text }}>{title}</div>
        <div style={{ fontFamily: mono, fontWeight: 400, fontSize: 11, lineHeight: 1, color: C.faint }}>{year}</div>
      </div>
      <p style={{ fontFamily: sans, fontWeight: 400, fontSize: 14.5, lineHeight: 1.6, color: C.body, margin: '9px 0 0', textWrap: 'pretty' }}>
        {desc}
      </p>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 26, marginTop: 16 }}>
        {stats.map((s) => (
          <div key={s.k}>
            <div style={{ ...eyebrow(C.faint, '.1em'), fontWeight: 400, fontSize: 10 }}>{s.k}</div>
            <div style={{ fontFamily: mono, fontWeight: 500, fontSize: 22, lineHeight: 1, color: C.text, marginTop: 6 }}>{s.v}</div>
          </div>
        ))}
        {bar && (
          <div style={{ flex: 1 }}>
            <div style={{ height: 7, background: C.accent, width: `${bar.pct}%` }} />
            <div style={{ height: 7, background: C.barTrack, width: '100%', marginTop: 5 }} />
            <div style={{ fontFamily: mono, fontWeight: 400, fontSize: 9.5, lineHeight: 1, color: C.faint, marginTop: 6 }}>{bar.note}</div>
          </div>
        )}
      </div>
      <LinkRow
        links={links}
        style={{ display: 'flex', gap: 16, marginTop: 16, fontFamily: mono, fontWeight: 500, fontSize: 10.5, letterSpacing: '.08em', textTransform: 'uppercase' }}
      />
    </div>
  )
}

const INDEX_COLS = '44px 1fr 190px 160px 108px'

const INDEX_ROWS = [
  { n: '01', title: 'Realtime collaboration engine', sub: 'CRDT sync with offline reconciliation', stack: 'Rust · WASM', result: '40 ms p99', links: [{ label: 'demo', accent: true }, { label: 'src' }] },
  { n: '02', title: 'GPU particle simulator', sub: 'Compute-shader fluid field, zero readback', stack: 'WebGPU · TS', result: '2 M @ 60 fps', links: [{ label: 'demo', accent: true }, { label: 'src' }] },
  { n: '03', title: 'Distributed job scheduler', sub: 'Work-stealing queue, exactly-once', stack: 'Go · Raft', result: '12 k jobs/s', links: [{ label: 'writeup' }] },
  { n: '04', title: 'Toy language + compiler', sub: 'Parser, SSA IR, LLVM backend', stack: 'C++ · LLVM', result: 'Self-hosting, 9 k LOC', links: [{ label: 'src' }] },
  { n: '05', title: 'Vector search engine', sub: 'HNSW from scratch, SIMD kernels', stack: 'Rust · AVX2', result: '1.8 ms p50', links: [{ label: 'bench', accent: true }, { label: 'src' }] },
  { n: '06', title: 'Offline-first mobile client', sub: 'Local SQLite as source of truth', stack: 'Swift · Kotlin', result: 'Works at 0 bars', links: [{ label: 'video' }] },
  { n: '07', title: 'Path-traced renderer', sub: 'BVH build, importance sampling, denoiser', stack: 'C++ · TBB', result: '90 s → 4 s / frame', links: [{ label: 'gallery' }] },
  { n: '08', title: 'Log ingestion pipeline', sub: 'Backpressure-aware fan-out with replay', stack: 'Kafka · ClickHouse', result: '200 k events/s', links: [{ label: 'writeup' }] },
]

function IndexRow({ n, title, sub, stack, result, links, last }) {
  return (
    <div
      className="trow"
      style={{
        display: 'grid',
        gridTemplateColumns: INDEX_COLS,
        alignItems: 'center',
        padding: '17px 0',
        borderBottom: `1px solid ${last ? C.hairlineStrong : C.hairlineSoft}`,
        transition: 'background .15s',
      }}
    >
      <div style={{ fontFamily: mono, fontWeight: 500, fontSize: 12, lineHeight: 1, color: C.faint }}>{n}</div>
      <div>
        <div style={{ fontFamily: sans, fontWeight: 500, fontSize: 17, lineHeight: 1.2, color: C.text }}>{title}</div>
        <div style={{ fontFamily: sans, fontWeight: 400, fontSize: 12.5, lineHeight: 1.4, color: C.muted, marginTop: 3 }}>{sub}</div>
      </div>
      <div style={{ fontFamily: mono, fontWeight: 400, fontSize: 11.5, lineHeight: 1.5, color: C.muted }}>{stack}</div>
      <div style={{ fontFamily: mono, fontWeight: 500, fontSize: 12.5, lineHeight: 1.4, color: C.text }}>{result}</div>
      <LinkRow
        links={links}
        style={{ textAlign: 'right', fontFamily: mono, fontWeight: 500, fontSize: 10.5, lineHeight: 1, color: C.muted }}
      />
    </div>
  )
}

const EXPERIMENTS = [
  { name: 'Terminal typing trainer', tag: 'GO' },
  { name: 'Chord voicing explorer', tag: 'WEBAUDIO' },
  { name: 'Regex → NFA visualiser', tag: 'CANVAS' },
  { name: '+ 6 more', tag: 'ALL', faint: true },
]

const ABOUT_STATS = [
  { v: '8 yrs', k: 'shipping', valueColor: '#79cbe6' },
  { v: '[City]', k: 'based' },
  { v: 'Open', k: 'to senior roles' },
]

function AboutAndExperiments() {
  return (
    <section id="about" style={{ padding: '104px 64px 0', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64 }}>
      <div>
        <div style={eyebrow()}>About</div>
        <p style={{ fontFamily: sans, fontWeight: 400, fontSize: 20, lineHeight: 1.55, color: C.text, margin: '18px 0 0', textWrap: 'pretty' }}>
          Placeholder bio — a few lines in your own voice about the work you want more of, how you
          make decisions, and what you're looking for next.
        </p>
        <div style={{ display: 'flex', gap: 40, marginTop: 30 }}>
          {ABOUT_STATS.map((s) => (
            <div key={s.k}>
              <div style={{ fontFamily: mono, fontWeight: 500, fontSize: 16, lineHeight: 1, color: s.valueColor || C.text }}>{s.v}</div>
              <div style={{ fontFamily: mono, fontWeight: 400, fontSize: 12, lineHeight: 1, color: C.faint, marginTop: 7 }}>{s.k}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div style={eyebrow()}>Experiments — one evening each</div>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 16 }}>
          {EXPERIMENTS.map((e, i) => (
            <a
              key={e.name}
              href="#7a"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                padding: '14px 0',
                borderBottom: i === EXPERIMENTS.length - 1 ? 'none' : `1px solid ${C.hairlineSoft}`,
                textDecoration: 'none',
                fontFamily: sans,
                fontWeight: 400,
                fontSize: 15,
                lineHeight: 1,
                color: e.faint ? C.faint : C.text,
              }}
            >
              {e.name}
              <span style={{ fontFamily: mono, fontWeight: 400, fontSize: 10.5, lineHeight: 1, color: C.faint }}>{e.tag}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer
      style={{
        margin: '96px 0 0',
        padding: '28px 64px',
        borderTop: `1px solid ${C.hairlineStrong}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        ...eyebrow(C.faint, '.08em'),
        fontSize: 11,
      }}
    >
      <div style={{ color: C.text }}>
        you@example.com
        <Cursor />
      </div>
      <div>github / linkedin / rss</div>
    </footer>
  )
}

export default function App() {
  return (
    <div style={{ background: C.bg, fontFamily: sans, maxWidth: 1180, margin: '0 auto' }}>
      <Nav />
      <Hero />
      <FeaturedHero />
      <section id="work" style={{ padding: '96px 64px 0' }}>
        <SectionHead title="Selected work" meta="4 featured · placeholder imagery" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px 44px', marginTop: 48, alignItems: 'start' }}>
          {WORK.map((w) => (
            <WorkCard key={w.title} {...w} />
          ))}
        </div>
      </section>
      <section id="index" style={{ padding: '104px 64px 0' }}>
        <SectionHead title="Everything else" meta="8 projects · full index" />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: INDEX_COLS,
            padding: '14px 0',
            borderBottom: `1px solid ${C.hairlineSoft}`,
            ...eyebrow(C.faint, '.1em'),
          }}
        >
          <div>№</div>
          <div>project</div>
          <div>stack</div>
          <div>result</div>
          <div style={{ textAlign: 'right' }}>links</div>
        </div>
        {INDEX_ROWS.map((r, i) => (
          <IndexRow key={r.n} {...r} last={i === INDEX_ROWS.length - 1} />
        ))}
      </section>
      <AboutAndExperiments />
      <Footer />
    </div>
  )
}
