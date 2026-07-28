// Portfolio homepage — option 3c "ice blue on cool slate".
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
}

const mono = "'JetBrains Mono', ui-monospace, monospace"
const sans = 'Archivo, Helvetica, system-ui, sans-serif'

const label = (color = C.faint) => ({
  fontFamily: mono,
  fontWeight: 500,
  fontSize: 10,
  letterSpacing: '.14em',
  textTransform: 'uppercase',
  color,
})

function Cursor() {
  return (
    <span
      style={{
        display: 'inline-block',
        width: 6,
        height: 11,
        background: C.accent,
        marginLeft: 6,
        verticalAlign: -1,
        animation: 'blink 1.1s step-end infinite',
      }}
    />
  )
}

function Placeholder({ height, note }) {
  return (
    <div
      style={{
        height,
        background: C.surface,
        border: `1px solid ${C.hairline}`,
        backgroundImage:
          'repeating-linear-gradient(135deg, rgba(255,255,255,.07) 0 6px, transparent 6px 13px)',
        display: 'flex',
        alignItems: 'flex-end',
        padding: 10,
      }}
    >
      {note && (
        <span style={{ ...label('#8a929e'), fontSize: 9.5, letterSpacing: '.08em' }}>{note}</span>
      )}
    </div>
  )
}

function Nav() {
  const links = ['work', 'index', 'about']
  return (
    <nav
      style={{
        padding: '18px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: `1px solid ${C.hairline}`,
      }}
    >
      <div
        style={{
          fontFamily: mono,
          fontWeight: 700,
          fontSize: 11,
          letterSpacing: '.14em',
          textTransform: 'uppercase',
          color: C.text,
        }}
      >
        Your Name
        <Cursor />
      </div>
      <div style={{ display: 'flex', gap: 16 }}>
        {links.map((l) => (
          <a key={l} href={`#${l}`} style={{ ...label(C.muted), textDecoration: 'none' }}>
            {l}
          </a>
        ))}
        <a href="#resume" style={{ ...label(C.accent), textDecoration: 'none' }}>
          résumé ↓
        </a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header style={{ padding: '40px 30px 0' }}>
      <div style={label()}>solo developer · graphics · distributed systems</div>
      <h1
        style={{
          fontFamily: sans,
          fontWeight: 600,
          fontSize: 40,
          lineHeight: 1,
          color: C.text,
          margin: '18px 0 0',
          letterSpacing: '-.025em',
        }}
      >
        Interfaces and the <span style={{ color: C.accent }}>machinery</span> underneath them.
      </h1>
      <div style={{ display: 'flex', gap: 8, margin: '22px 0 0' }}>
        <a
          href="#resume"
          style={{
            fontFamily: mono,
            fontWeight: 600,
            fontSize: 10,
            letterSpacing: '.08em',
            textTransform: 'uppercase',
            background: C.accent,
            color: C.bg,
            padding: '11px 15px',
            textDecoration: 'none',
          }}
        >
          résumé.pdf
        </a>
        <a
          href="#github"
          style={{
            fontFamily: mono,
            fontWeight: 600,
            fontSize: 10,
            letterSpacing: '.08em',
            textTransform: 'uppercase',
            border: '1px solid rgba(255,255,255,.2)',
            color: C.text,
            padding: '11px 15px',
            textDecoration: 'none',
          }}
        >
          github
        </a>
      </div>
    </header>
  )
}

function Metric({ value, unit }) {
  return (
    <span style={{ fontFamily: mono, fontWeight: 500, fontSize: 15, color: C.text }}>
      {value}
      <span style={{ fontSize: 9.5, color: C.muted, marginLeft: 5 }}>{unit}</span>
    </span>
  )
}

function FeaturedHero() {
  return (
    <section style={{ margin: '28px 30px 0', position: 'relative' }}>
      <Placeholder height={230} note="hero capture" />
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          padding: 20,
          background:
            'linear-gradient(to top, rgba(13,15,18,.94), rgba(13,15,18,.7) 55%, rgba(13,15,18,0))',
        }}
      >
        <div style={{ ...label(C.accent), fontSize: 9, letterSpacing: '.16em' }}>featured · 2026</div>
        <h2
          style={{
            fontFamily: sans,
            fontWeight: 600,
            fontSize: 22,
            lineHeight: 1.1,
            color: C.text,
            margin: '9px 0 0',
            letterSpacing: '-.02em',
          }}
        >
          Realtime collaboration engine
        </h2>
        <div style={{ display: 'flex', gap: 20, marginTop: 12, alignItems: 'baseline' }}>
          <Metric value="40 ms" unit="P99" />
          <Metric value="1.2 k" unit="PEERS" />
          <a
            href="#demo"
            style={{
              ...label(C.accent),
              letterSpacing: '.08em',
              fontSize: 10,
              textDecoration: 'none',
              borderBottom: `1px solid ${C.accent}`,
              paddingBottom: 2,
            }}
          >
            live demo
          </a>
        </div>
      </div>
    </section>
  )
}

function SectionTitle({ children }) {
  return (
    <h3
      style={{
        fontFamily: sans,
        fontWeight: 600,
        fontSize: 16,
        lineHeight: 1,
        color: C.text,
        margin: 0,
        borderBottom: `1px solid ${C.hairlineStrong}`,
        paddingBottom: 10,
      }}
    >
      {children}
    </h3>
  )
}

function WorkCard({ title, desc, metricLabel, metricValue, barPct }) {
  return (
    <article style={{ marginTop: 20 }}>
      <Placeholder height={150} note="screenshot" />
      <h4
        style={{
          fontFamily: sans,
          fontWeight: 600,
          fontSize: 17,
          lineHeight: 1.2,
          color: C.text,
          margin: '14px 0 0',
        }}
      >
        {title}
      </h4>
      <p
        style={{
          fontFamily: sans,
          fontSize: 13,
          lineHeight: 1.55,
          color: C.body,
          margin: '7px 0 0',
        }}
      >
        {desc}
      </p>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 22, marginTop: 12 }}>
        <div>
          <div style={{ ...label(), fontSize: 9.5, letterSpacing: '.1em' }}>{metricLabel}</div>
          <div
            style={{
              fontFamily: mono,
              fontWeight: 500,
              fontSize: 18,
              color: C.text,
              marginTop: 5,
            }}
          >
            {metricValue}
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ height: 6, background: C.accent, width: `${barPct}%` }} />
          <div style={{ height: 6, background: C.barTrack, width: '100%', marginTop: 4 }} />
        </div>
      </div>
    </article>
  )
}

const INDEX_ROWS = [
  { n: '03', title: 'Distributed job scheduler', result: '12 k jobs/s', link: 'SRC' },
  { n: '04', title: 'Toy language + compiler', result: '9 k LOC', link: 'SRC' },
  { n: '05', title: 'Vector search engine', result: '1.8 ms p50', link: 'BENCH', hot: true },
]

function IndexRow({ n, title, result, link, hot, last }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '32px 1fr 108px 62px',
        alignItems: 'center',
        padding: '13px 0',
        borderBottom: last ? 'none' : '1px solid rgba(255,255,255,.08)',
      }}
    >
      <span style={{ fontFamily: mono, fontWeight: 500, fontSize: 11, color: C.faint }}>{n}</span>
      <span style={{ fontFamily: sans, fontWeight: 500, fontSize: 14, color: C.text }}>{title}</span>
      <span style={{ fontFamily: mono, fontWeight: 500, fontSize: 11, color: C.text }}>{result}</span>
      <a
        href="#index"
        style={{
          textAlign: 'right',
          fontFamily: mono,
          fontWeight: 500,
          fontSize: 9.5,
          color: hot ? C.accent : C.muted,
          textDecoration: 'none',
        }}
      >
        {link}
      </a>
    </div>
  )
}

export default function App() {
  return (
    <div style={{ background: C.bg, fontFamily: sans, maxWidth: 620, margin: '0 auto' }}>
      <Nav />
      <Hero />
      <FeaturedHero />
      <section id="work" style={{ padding: '36px 30px 0' }}>
        <SectionTitle>Selected work</SectionTitle>
        <WorkCard
          title="GPU particle simulator"
          desc="Compute-shader fluid field with zero CPU readback."
          metricLabel="particles"
          metricValue="2.0 M"
          barPct={26}
        />
      </section>
      <section id="index" style={{ padding: '34px 30px 30px' }}>
        <SectionTitle>Everything else</SectionTitle>
        {INDEX_ROWS.map((r, i) => (
          <IndexRow key={r.n} {...r} last={i === INDEX_ROWS.length - 1} />
        ))}
      </section>
    </div>
  )
}
