import { useState, useEffect, useRef, type FormEvent } from 'react'
import DeviceMockupImport from './imports/DeviceMockup'
import SbVideoMockup from './imports/Video'
import logoSVG from './imports/Group.svg'
import photo1 from './imports/073A0096-Edit.JPG.jpeg'
import photo2 from './imports/073A0053-Edit.jpg.jpeg'
import photo3 from './imports/073A0069.jpg.jpeg'
import photoArms from './imports/073A0080-Edit.JPG_1.png'
import photoSuit from './imports/073A0096-Edit.JPG_1.png'
import photoFolded from './imports/073A0080.png'
import logoKawts from './imports/Kawts-2.png'
import logoRivnl from './imports/RIVNL-2.png'
import logoRockRealty from './imports/Rock_Realty-2.png'
import logoStringify from './imports/Stringify_Consulting-2.png'
import logoSturdie from './imports/Sturdie-2.png'
import logoTantalizer from './imports/Tantalizer-2.png'
import logoTheNod from './imports/The_Nod-2.png'
import logoHaShem from './imports/Ha-Shem-1.png'
import prosHQ from './imports/ProsHQ.png'
import myQura from './imports/MyQura.png'
import surebase from './imports/Surebase.png'
import sbTabletMockup         from './imports/image.png'
import sbInsurancePartners    from './imports/Surebase_-_Insurance_Partners.png'
import sbWebInsurance         from './imports/Surebase_-_Insurance_Partners-1.png'
import sbWebBrokers           from './imports/Surebase_-_Brokers-1.png'
import sbWebCorporate         from './imports/Surebase_-_Corporate_Partners.png'
import sbInsuranceDashboard   from './imports/Surebase_-_Insurance_Partners_Dashboard.png'
import sbInsuranceProducts    from './imports/Surebase_-_Insurance_Partners_Products.png'
import sbInsuranceDist        from './imports/Surebase_-_Insurance_Partners_Distribution.png'
import sbBrokers              from './imports/Surebase_-_Brokers.png'
import sbBrokersDashboard     from './imports/Surebase_-_Brokers_Dashboard.png'
import sbBrokersCustomers     from './imports/Surebase_-_Brokers_Customers.png'
import sbBrokersWallet        from './imports/Surebase_-_Brokers_Wallet.png'
import phqHeroHome from './imports/Homepage_-_Pros_HQ.png'
import phqWebFindJobs from './imports/Web_-_Find_Jobs.png'
import phqWebHome from './imports/Web_-_Home.png'
import phqClientDashboard from './imports/The_Client_Dashboard.png'
import phqClientApplicants from './imports/Client_-_Applicants_Page.png'
import phqClientTaskPosted from './imports/Client_-_Task_Posted_Successfully.png'
import phqClientRate from './imports/Client_-_Rate_Professional.png'
import phqMobileFindJobs from './imports/Mobile_-_Find_Jobs.png'
import phqMobileHome from './imports/Mobile_-_Home.png'
import phqDeviceMockup from './imports/Pros_HQ_Landing_Page_-_Device___Mobile.png'
import phqVideoDesktop from './imports/New_ProsHQ.mp4'
import phqVideoMobile from './imports/Mobile_ProsHQ.mp4'
import proDashboard      from './imports/Professional_-_Dashboard_Overview.png'
import proAvailTasks     from './imports/Professional_-_Available_Tasks.png'
import proActiveTask     from './imports/Professional_-_Active_Task.png'
import proEarnings       from './imports/Professional_-_Earnings.png'
import proVerified       from './imports/Professional_-_Account_Verified.png'
import proProfile        from './imports/Professional_-_Profile.png'
import mqSlide1 from './imports/Slider_Screen_1-1.png'
import mqSlide2 from './imports/Slider_Screen_2-1.png'
import mqSlide3 from './imports/Slider_Screen_3-1.png'
import mqSlide4 from './imports/Slider_Screen_4-1.png'
import mqSlide5 from './imports/Slider_Screen_5-1.png'
import mqFlash from './imports/MyQura_Flash_1.png'
import mqHome from './imports/MyQura_Home_1.png'
import mqOnboard1 from './imports/MyQura_Onbarding_1.png'
import mqOnboard2 from './imports/MyQura_Onbarding_2.png'
import mqOnboard3 from './imports/MyQura_Onbarding_3.png'
import mqPro1 from './imports/MyQura_Professional_1.png'
import mqPro2 from './imports/MyQura_Professional_2.png'
import mqPro3 from './imports/MyQura_Professional_3.png'
import mqAdmin from './imports/Admin_Portal.png'

type Page = 'home' | 'about' | 'projects' | 'myqura' | 'proshq' | 'surebase'

const C = {
  bg:     '#0a0a0a',
  ink:    '#eeece8',
  muted:  'rgba(238,236,232,0.5)',
  dim:    'rgba(238,236,232,0.32)',
  gold:   '#E8B84B',
  border: 'rgba(238,236,232,0.07)',
  panel:  'rgba(238,236,232,0.03)',
  font:   "'Plus Jakarta Sans', sans-serif",
} as const

// ── Social icons ──────────────────────────────────────────────────────────────

function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
function IconX() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}
function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
function IconEmail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  )
}

// ── Ambient background ────────────────────────────────────────────────────────

function Ambient({ cursorX, cursorY }: { cursorX: number; cursorY: number }) {
  return (
    <div aria-hidden style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {/* Slow drifting blobs */}
      <div style={{
        position: 'absolute', top: '-25%', right: '-15%',
        width: '60vw', height: '60vw',
        background: 'radial-gradient(circle, rgba(25,55,110,0.32) 0%, transparent 70%)',
        animation: 'blobA 20s ease-in-out infinite',
        filter: 'blur(2px)',
      }} />
      <div style={{
        position: 'absolute', bottom: '-20%', left: '-12%',
        width: '55vw', height: '55vw',
        background: 'radial-gradient(circle, rgba(232,184,75,0.08) 0%, transparent 70%)',
        animation: 'blobB 26s ease-in-out infinite',
        filter: 'blur(2px)',
      }} />
      <div style={{
        position: 'absolute', top: '40%', left: '30%',
        width: '40vw', height: '40vw',
        background: 'radial-gradient(circle, rgba(60,80,140,0.12) 0%, transparent 70%)',
        animation: 'blobC 32s ease-in-out infinite',
      }} />
      {/* Cursor-following glow */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none',
        background: `radial-gradient(700px at ${cursorX}px ${cursorY}px, rgba(232,184,75,0.045), transparent 80%)`,
        transition: 'background 0.1s',
      }} />
    </div>
  )
}

// ── Contact modal ─────────────────────────────────────────────────────────────

function ContactModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const body = `Hi Lawal,\n\nName: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    window.location.href = `mailto:lajimohofficial@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Enquiry')}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', fn)
    return () => document.removeEventListener('keydown', fn)
  }, [onClose])

  const Field = ({ label, id, type = 'text', multiline = false }: { label: string; id: keyof typeof form; type?: string; multiline?: boolean }) => (
    <div style={{ marginBottom: '2rem' }}>
      <label style={{
        display: 'block', fontFamily: C.font, fontSize: '0.68rem',
        fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
        color: focused === id ? C.gold : C.dim, marginBottom: '0.5rem',
        transition: 'color 0.2s',
      }}>{label}</label>
      {multiline ? (
        <textarea
          className="cf-field"
          rows={4}
          placeholder={`Your ${label.toLowerCase()}…`}
          value={form[id]}
          onChange={set(id)}
          onFocus={() => setFocused(id)}
          onBlur={() => setFocused(null)}
        />
      ) : (
        <input
          className="cf-field"
          type={type}
          placeholder={`Your ${label.toLowerCase()}…`}
          value={form[id]}
          onChange={set(id)}
          onFocus={() => setFocused(id)}
          onBlur={() => setFocused(null)}
        />
      )}
    </div>
  )

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{ position: 'absolute', inset: 0, background: 'rgba(5,5,5,0.8)', backdropFilter: 'blur(10px)', animation: 'overlayIn 0.25s ease both' }}
      />

      {/* Modal */}
      <div style={{
        position: 'relative', width: '100%', maxWidth: 520,
        background: '#111214',
        border: `1px solid rgba(238,236,232,0.1)`,
        borderTop: `2px solid ${C.gold}`,
        borderRadius: 16,
        padding: '2.5rem',
        animation: 'modalIn 0.3s cubic-bezier(0.22,1,0.36,1) both',
        boxShadow: '0 40px 100px rgba(0,0,0,0.7)',
      }}>
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '1.25rem', right: '1.25rem',
            background: 'none', border: 'none', cursor: 'pointer',
            color: C.dim, fontSize: '1.25rem', lineHeight: 1, padding: '0.25rem',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = C.ink)}
          onMouseLeave={e => (e.currentTarget.style.color = C.dim)}
        >
          ×
        </button>

        {!sent ? (
          <>
            <p style={{ fontFamily: C.font, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.gold, margin: '0 0 0.75rem' }}>Get in touch</p>
            <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: C.ink, margin: '0 0 2.25rem', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              Let&#39;s talk about<br />your project.
            </h2>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 1.5rem' }}>
                <Field label="Name" id="name" />
                <Field label="Email" id="email" type="email" />
              </div>
              <Field label="Subject" id="subject" />
              <Field label="Message" id="message" multiline />
              <button type="submit" className="pill pill-gold" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', padding: '1rem' }}>
                Send message →
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✦</div>
            <h3 style={{ fontFamily: C.font, fontSize: '1.5rem', fontWeight: 700, color: C.ink, margin: '0 0 0.75rem' }}>Message sent!</h3>
            <p style={{ fontFamily: C.font, fontSize: '0.95rem', color: C.muted, marginBottom: '2rem' }}>Your email client should have opened. If not, reach out at lajimohofficial@gmail.com</p>
            <button className="pill pill-ghost" onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  )
}

// ── Nav ───────────────────────────────────────────────────────────────────────

function Nav({ page, setPage, onContact }: { page: Page; setPage: (p: Page) => void; onContact: () => void }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 68, display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', padding: '0 2.5rem',
      background: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? `1px solid ${C.border}` : 'none',
      transition: 'background 0.3s',
    }}>
      <button onClick={() => setPage('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, lineHeight: 0 }}>
        <img src={logoSVG} alt="LA" style={{ height: 38 }} />
      </button>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
        {(['home', 'about', 'projects'] as const).map(p => (
          <NavBtn key={p} label={p} active={page === p || (p === 'projects' && (page === 'myqura' || page === 'proshq' || page === 'surebase'))} onClick={() => setPage(p)} />
        ))}

        <button
          onClick={onContact}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            background: C.panel, border: `1px solid ${C.border}`,
            borderRadius: 100, padding: '0.3rem 0.75rem 0.3rem 0.3rem',
            cursor: 'pointer', transition: 'border-color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(232,184,75,0.35)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}
        >
          <img src={photo3} alt="" style={{ width: 28, height: 28, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top' }} />
          <span style={{ fontFamily: C.font, fontSize: '0.75rem', fontWeight: 500, color: C.muted }}>
            <span style={{ color: '#4ade80', marginRight: '0.3rem', fontSize: '0.55rem' }}>●</span>
            Available
          </span>
        </button>
      </div>
    </nav>
  )
}

function NavBtn({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  const [hov, setHov] = useState(false)
  return (
    <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      background: 'none', border: 'none', cursor: 'pointer',
      fontFamily: C.font, fontSize: '0.85rem', fontWeight: 500,
      color: active ? C.ink : hov ? C.ink : C.muted,
      textTransform: 'capitalize', padding: 0, transition: 'color 0.18s',
    }}>{label}</button>
  )
}

// ── Marquee ───────────────────────────────────────────────────────────────────

function Marquee() {
  const items = ['Design Systems', 'Product Strategy', 'Mobile Apps', 'Web Platforms', 'AI Tools', 'UI/UX Design', 'User Research', 'Prototyping']
  const doubled = [...items, ...items]
  return (
    <div style={{ overflow: 'hidden', borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: '1rem 0' }}>
      <div style={{ display: 'flex', gap: '3rem', animation: 'marquee 30s linear infinite', width: 'max-content' }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontFamily: C.font, fontSize: '0.83rem', fontWeight: 400,
            whiteSpace: 'nowrap', color: i % 2 === 0 ? C.gold : C.dim,
            display: 'flex', alignItems: 'center', gap: '3rem',
          }}>
            {item}<span style={{ fontSize: '0.35rem' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// ── Work cards ────────────────────────────────────────────────────────────────

const FEATURED = [
  {
    img: prosHQ, name: 'ProsHQ', type: 'Web Platform', year: '2024',
    desc: 'Trust-first marketplace connecting Nigerian professionals with vetted service providers.',
    bg: 'linear-gradient(160deg, #0d1410 0%, #0a0a0a 60%)',
    num: '01',
  },
  {
    img: myQura, name: 'MyQura', type: 'Mobile App', year: '2024',
    desc: 'Care services app bridging healthcare professionals with patients and families.',
    bg: 'linear-gradient(160deg, #0a0e18 0%, #0a0a0a 60%)',
    num: '02',
  },
  {
    img: surebase, name: 'Surebase', type: 'Web Platform', year: '2024',
    desc: 'B2B insurance aggregation platform unifying an entire industry on one API.',
    bg: 'linear-gradient(160deg, #0e0a16 0%, #0a0a0a 60%)',
    num: '03',
  },
]

function WorkCards({ onViewAll, onMyQura, onProsHQ, onSurebase }: { onViewAll: () => void; onMyQura: () => void; onProsHQ: () => void; onSurebase: () => void }) {
  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2.5rem' }}>
        <div>
          <p style={{ fontFamily: C.font, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.gold, margin: '0 0 0.5rem' }}>
            Selected Work
          </p>
          <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: C.ink, margin: 0, letterSpacing: '-0.02em' }}>
            Three of ten.
          </h2>
        </div>
        <button className="pill pill-ghost" onClick={onViewAll} style={{ fontSize: '0.8rem' }}>
          View all →
        </button>
      </div>

      {/* Cards row — staggered heights */}
      <div className="cards-row" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
        {FEATURED.map((p, i) => (
          <div
            key={i}
            className="work-card"
            onClick={p.name === 'MyQura' ? onMyQura : p.name === 'ProsHQ' ? onProsHQ : p.name === 'Surebase' ? onSurebase : undefined}
            style={{
              background: p.bg,
              marginTop: i === 1 ? '-3rem' : 0,
              cursor: (p.name === 'MyQura' || p.name === 'ProsHQ' || p.name === 'Surebase') ? 'pointer' : 'default',
            }}
          >
            {/* Card top: number + year */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '1.75rem 1.75rem 0',
            }}>
              <span style={{ fontFamily: C.font, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: C.gold }}>{p.num}</span>
              <span style={{ fontFamily: C.font, fontSize: '0.7rem', letterSpacing: '0.08em', color: C.dim }}>{p.year}</span>
            </div>

            {/* Title block */}
            <div style={{ padding: '1.25rem 1.75rem 1.5rem' }}>
              <h3 style={{
                fontFamily: C.font, fontWeight: 800, color: C.ink,
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', margin: '0 0 0.5rem',
                letterSpacing: '-0.025em', lineHeight: 1.1, textTransform: 'uppercase',
              }}>{p.name}</h3>
              <span style={{
                display: 'inline-block',
                fontFamily: C.font, fontSize: '0.68rem', fontWeight: 600,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: C.gold, marginBottom: '0.75rem',
              }}>{p.type}</span>
              <p style={{ fontFamily: C.font, fontSize: '0.83rem', fontWeight: 400, lineHeight: 1.7, color: C.muted, margin: 0 }}>
                {p.desc}
              </p>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: C.border, margin: '0 1.75rem' }} />

            {/* Screenshot preview */}
            <div style={{ margin: '1.25rem 1.25rem 0', borderRadius: '10px 10px 0 0', overflow: 'hidden', flex: 1, minHeight: 180, background: '#111' }}>
              <img src={p.img} alt={p.name} className="card-img" style={{ minHeight: 180, objectFit: 'cover', objectPosition: 'top' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── About teaser (iamarnob-style: floating person, giant monogram bg) ─────────

function AboutTeaser({ onAbout }: { onAbout: () => void }) {
  const [hov, setHov] = useState(false)

  return (
    <section style={{ position: 'relative', borderTop: `1px solid ${C.border}`, overflow: 'hidden' }}>

      {/* Giant logo watermark behind the photo */}
      <img
        src={logoSVG}
        aria-hidden
        alt=""
        style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(260px, 38vw, 560px)',
          height: 'auto',
          opacity: 0.07,
          pointerEvents: 'none', userSelect: 'none',
          zIndex: 0,
          filter: 'brightness(2)',
        }}
      />

      <div
        className="about-3col"
        style={{
          maxWidth: 1340, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 380px 1fr',
          minHeight: '88vh', position: 'relative', zIndex: 1,
        }}
      >
        {/* Left column — bio */}
        <div style={{
          padding: 'clamp(3rem,6vw,5.5rem) clamp(2rem,3.5vw,4rem) clamp(3rem,6vw,5.5rem) clamp(2rem,3.5vw,3rem)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          borderRight: `1px solid ${C.border}`,
        }}>
          <p style={{ fontFamily: C.font, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.gold, margin: '0 0 2rem' }}>
            About
          </p>
          <p style={{
            fontFamily: C.font, fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
            fontStyle: 'italic', fontWeight: 400, lineHeight: 1.9,
            color: C.ink, margin: '0 0 1.5rem',
          }}>
            I&#39;m Lawal Olanrewaju — a product designer who believes the best
            design is the kind you don&#39;t notice.
          </p>
          <p style={{ fontFamily: C.font, fontSize: '0.9rem', fontWeight: 400, lineHeight: 1.85, color: C.muted, margin: '0 0 1.5rem' }}>
            It simply works, feels right, and disappears into the experience.
            Every pixel has a purpose. Every flow has a rationale.
          </p>
          <p style={{ fontFamily: C.font, fontSize: '0.9rem', fontWeight: 400, lineHeight: 1.85, color: C.muted, margin: '0 0 2.5rem' }}>
            From care apps that restore dignity to patients, to insurance
            infrastructure serving an entire industry — rigour, warmth, and
            relentless attention to detail in every engagement.
          </p>
          <button className="pill pill-ghost" onClick={onAbout} style={{ alignSelf: 'flex-start', fontSize: '0.82rem' }}>
            Full story →
          </button>
        </div>

        {/* Center — floating photo, hover to swap */}
        <div
          className="col-photo"
          style={{ position: 'relative', overflow: 'hidden', cursor: 'crosshair' }}
          onMouseEnter={() => setHov(true)}
          onMouseLeave={() => setHov(false)}
        >
          {/* Arms folded — static */}
          <img
            src={photoArms}
            alt="Lawal Olanrewaju, arms folded"
            style={{
              position: 'absolute', bottom: 0, left: '50%',
              transform: 'translateX(-50%)',
              width: '105%', height: '108%',
              objectFit: 'cover', objectPosition: 'center top',
              mixBlendMode: 'screen',
              opacity: hov ? 0 : 1,
              transition: 'opacity 0.6s cubic-bezier(0.4,0,0.2,1)',
            }}
          />
          {/* Buttoning suit — hover */}
          <img
            src={photoSuit}
            alt="Lawal Olanrewaju, buttoning suit"
            style={{
              position: 'absolute', bottom: 0, left: '50%',
              transform: 'translateX(-50%)',
              width: '105%', height: '108%',
              objectFit: 'cover', objectPosition: 'center top',
              mixBlendMode: 'screen',
              opacity: hov ? 1 : 0,
              transition: 'opacity 0.6s cubic-bezier(0.4,0,0.2,1)',
            }}
          />
        </div>

        {/* Right column — pull quote + stats */}
        <div style={{
          padding: 'clamp(3rem,6vw,5.5rem) clamp(2rem,3.5vw,3rem) clamp(3rem,6vw,5.5rem) clamp(2rem,3.5vw,4rem)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          borderLeft: `1px solid ${C.border}`,
        }}>
          <p style={{
            fontFamily: C.font, fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
            fontWeight: 700, fontStyle: 'italic', lineHeight: 1.65,
            color: C.ink, margin: '0 0 2.5rem',
          }}>
            "Not just an interface designer. A product thinker who makes
            complexity invisible."
          </p>

          {[
            { label: '10+',       sub: 'Products delivered'               },
            { label: '3',         sub: 'Sectors: Healthtech · Fintech · Insurtech' },
            { label: '6',         sub: 'Core design disciplines'          },
          ].map(f => (
            <div key={f.label} style={{
              display: 'flex', gap: '1.25rem', alignItems: 'baseline',
              padding: '1.1rem 0', borderBottom: `1px solid ${C.border}`,
            }}>
              <span style={{
                fontFamily: C.font, fontSize: '1.3rem', fontWeight: 800,
                color: C.gold, minWidth: 52, lineHeight: 1,
              }}>{f.label}</span>
              <span style={{
                fontFamily: C.font, fontSize: '0.8rem', fontWeight: 400,
                color: C.muted, lineHeight: 1.55,
              }}>{f.sub}</span>
            </div>
          ))}

          <p style={{ fontFamily: C.font, fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.06em', color: C.dim, margin: '2rem 0 0' }}>
            Lagos, Nigeria &nbsp;·&nbsp; Open to remote
          </p>
        </div>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  const socials = [
    { icon: <IconInstagram />, href: 'https://www.instagram.com/lajimohofficial/', label: 'Instagram' },
    { icon: <IconX />,         href: 'https://x.com/lajimohofficial',              label: 'X / Twitter' },
    { icon: <IconLinkedIn />,  href: 'https://www.linkedin.com/in/lawal-jimoh/',   label: 'LinkedIn' },
    { icon: <IconEmail />,     href: 'mailto:lajimohofficial@gmail.com',            label: 'Email' },
  ]

  return (
    <footer style={{ borderTop: `1px solid ${C.border}`, padding: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
      <img src={logoSVG} alt="LA" style={{ height: 32 }} />
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {socials.map(s => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            aria-label={s.label}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 40, height: 40, borderRadius: '50%',
              background: C.panel, border: `1px solid ${C.border}`,
              color: C.muted, textDecoration: 'none',
              transition: 'color 0.2s, border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.color = C.gold
              el.style.borderColor = 'rgba(232,184,75,0.4)'
              el.style.background = 'rgba(232,184,75,0.06)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.color = C.muted
              el.style.borderColor = C.border
              el.style.background = C.panel
            }}
          >
            {s.icon}
          </a>
        ))}
      </div>
      <p style={{ fontFamily: C.font, fontSize: '0.75rem', color: C.dim, margin: 0 }}>
        © 2025 Lawal Olanrewaju
      </p>
    </footer>
  )
}

// ── Home Page ─────────────────────────────────────────────────────────────────

function HomePage({ setPage, onContact }: { setPage: (p: Page) => void; onContact: () => void }) {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>

      {/* Hero */}
      <section style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '68px 2.5rem 4rem', textAlign: 'center',
        position: 'relative',
      }}>
        {/* Role badge */}
        <div className="anim-in" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: C.panel, border: `1px solid ${C.border}`,
          borderRadius: 100, padding: '0.4rem 1rem', marginBottom: '2.5rem',
        }}>
          <span style={{ fontFamily: C.font, fontSize: '0.78rem', fontWeight: 500, color: C.muted, letterSpacing: '0.04em' }}>Product Designer</span>
          <span style={{ color: C.border }}>·</span>
          <span style={{ fontFamily: C.font, fontSize: '0.78rem', fontWeight: 500, color: C.muted }}>Lagos, Nigeria</span>
        </div>

        {/* Headline */}
        <h1 className="anim-in-2" style={{
          fontFamily: C.font, fontWeight: 800, lineHeight: 1.05,
          letterSpacing: '-0.035em', margin: '0 0 2rem',
          fontSize: 'clamp(3.2rem, 7.5vw, 7rem)',
          maxWidth: '14ch', color: C.ink,
        }}>
          Great design<br />
          is hard.{' '}
          <em style={{ fontStyle: 'italic', fontWeight: 700, color: C.gold }}>
            I&nbsp;make&nbsp;it&nbsp;easy.
          </em>
        </h1>

        {/* Sub */}
        <p className="anim-in-3" style={{
          fontFamily: C.font, fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
          fontWeight: 400, lineHeight: 1.8, color: C.muted,
          margin: '0 0 3rem', maxWidth: '48ch',
        }}>
          I design digital products that connect with people and move businesses forward —
          from first sketch to shipped experience.
        </p>

        {/* CTAs */}
        <div className="anim-in-4" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button className="pill pill-gold" onClick={() => setPage('projects')}>
            View Work ↓
          </button>
          <button className="pill pill-ghost" onClick={onContact}>
            Let&#39;s Talk →
          </button>
        </div>

        {/* Scroll nudge */}
        <div style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', opacity: 0.3 }}>
          <div style={{ width: 1, height: 36, background: `linear-gradient(to bottom, transparent, ${C.ink})` }} />
          <span style={{ fontFamily: C.font, fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.ink }}>Scroll</span>
        </div>
      </section>

      <Marquee />

      {/* Selected Work */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '6rem 2.5rem' }}>
        <WorkCards onViewAll={() => setPage('projects')} onMyQura={() => setPage('myqura')} onProsHQ={() => setPage('proshq')} onSurebase={() => setPage('surebase')} />
      </section>

      {/* About teaser */}
      <AboutTeaser onAbout={() => setPage('about')} />

      {/* Services */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '6rem 2.5rem' }}>
        <p style={{ fontFamily: C.font, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.gold, margin: '0 0 1rem' }}>Services</p>
        <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: C.ink, margin: '0 0 3rem', letterSpacing: '-0.02em' }}>
          What I bring to your product
        </h2>
        <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {[
            { n: 'Product Strategy',                        d: 'Connecting user needs to business goals through decisions that compound over time.' },
            { n: 'End-to-end System Design',               d: 'From discovery and architecture to shipped UI — owning the full design lifecycle.' },
            { n: 'AI-augmented Design Velocity',           d: 'Leveraging AI tools to ideate, prototype, and iterate at a pace that surprises teams.' },
            { n: 'Design Systems & Scalability',           d: 'Scalable component libraries that grow with your product and unify every touchpoint.' },
            { n: 'Stakeholder & Cross-functional Facilitation', d: 'Translating between engineering, business, and users — keeping every team aligned.' },
            { n: 'Regulated-industry Domain Expertise',    d: 'Deep familiarity with healthtech, fintech, and insurtech constraints and compliance.' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '2rem 1.75rem',
              borderRight: (i + 1) % 3 !== 0 ? `1px solid ${C.border}` : 'none',
              borderBottom: i < 3 ? `1px solid ${C.border}` : 'none',
            }}>
              <div style={{ fontFamily: C.font, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, marginBottom: '0.75rem' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 style={{ fontFamily: C.font, fontSize: '0.95rem', fontWeight: 700, color: C.ink, margin: '0 0 0.5rem' }}>{s.n}</h3>
              <p style={{ fontFamily: C.font, fontSize: '0.83rem', fontWeight: 400, lineHeight: 1.75, color: C.muted, margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ borderTop: `1px solid ${C.border}`, padding: '7rem 2.5rem', textAlign: 'center' }}>
        <p style={{ fontFamily: C.font, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.gold, margin: '0 0 2rem' }}>
          Open to opportunities
        </p>
        <h2 style={{
          fontFamily: C.font, fontWeight: 800, letterSpacing: '-0.03em',
          fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', lineHeight: 1.05,
          color: C.ink, margin: '0 0 2.5rem', maxWidth: '18ch', marginLeft: 'auto', marginRight: 'auto',
        }}>
          Let&#39;s build something remarkable.
        </h2>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="pill pill-gold" onClick={onContact}>
            Get in touch →
          </button>
          <a className="pill pill-ghost" href="https://wa.me/2348182319625" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// ── Tool chip ─────────────────────────────────────────────────────────────────

function ToolChip({ name, abbr, accent }: { name: string; abbr: string; accent: string }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Tooltip */}
      <div style={{
        position: 'absolute', bottom: '100%', left: '50%',
        transform: `translateX(-50%) translateY(${hov ? '-6px' : '0px'})`,
        background: '#1a1a1a', border: `1px solid ${C.border}`,
        borderRadius: 6, padding: '0.3rem 0.65rem',
        fontFamily: C.font, fontSize: '0.7rem', fontWeight: 600,
        color: C.ink, whiteSpace: 'nowrap', marginBottom: '0.4rem',
        opacity: hov ? 1 : 0,
        transition: 'opacity 0.2s, transform 0.2s',
        pointerEvents: 'none',
      }}>
        {name}
        <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '4px solid transparent', borderRight: '4px solid transparent', borderTop: `4px solid ${C.border}` }} />
      </div>

      {/* Chip */}
      <div style={{
        width: 56, height: 56, borderRadius: 14,
        background: hov ? `rgba(${hexToRgb(accent)}, 0.1)` : 'rgba(238,236,232,0.04)',
        border: `1px solid ${hov ? accent : C.border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background 0.2s, border-color 0.2s',
        cursor: 'default',
      }}>
        <span style={{
          fontFamily: C.font, fontSize: '0.75rem', fontWeight: 800,
          letterSpacing: '0.02em',
          color: hov ? accent : C.muted,
          transition: 'color 0.2s',
        }}>{abbr}</span>
      </div>
    </div>
  )
}

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r},${g},${b}`
}

// ── Logo Marquee ──────────────────────────────────────────────────────────────

const CLIENT_LOGOS = [
  { src: logoKawts,      alt: 'Kawts' },
  { src: logoRivnl,      alt: 'RIVNL' },
  { src: logoRockRealty, alt: 'Rock Realty' },
  { src: logoStringify,  alt: 'Stringify Consulting' },
  { src: logoSturdie,    alt: 'Sturdie' },
  { src: logoTantalizer, alt: 'Tantalizer' },
  { src: logoTheNod,     alt: 'The Nod' },
  { src: logoHaShem,     alt: 'Ha-Shem' },
]

function LogoMarquee() {
  const doubled = [...CLIENT_LOGOS, ...CLIENT_LOGOS]
  return (
    <div style={{ overflow: 'hidden', padding: '2.5rem 0' }}>
      <div style={{ display: 'flex', gap: '3.5rem', animation: 'marqueeLogos 32s linear infinite', width: 'max-content' }}>
        {doubled.map((logo, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            height: 44, minWidth: 100, padding: '0 0.5rem',
            opacity: 0.85, transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.85')}
          >
            <img src={logo.src} alt={logo.alt} style={{ height: '100%', width: 'auto', maxWidth: 130, objectFit: 'contain' }} />
          </div>
        ))}
      </div>
    </div>
  )
}

// ── About Page ────────────────────────────────────────────────────────────────

const EXPERIENCES = [
  { period: 'Mar 2023 – Nov 2023', role: 'Intern Product Designer', company: 'Handiworker',          location: 'Remote', current: false },
  { period: 'Aug 2023 – Feb 2024', role: 'Intern Product Designer', company: 'Fiducia Data Service', location: 'Remote', current: false },
  { period: 'Feb 2024 – Apr 2025', role: 'Product Designer',        company: 'Stringify Consulting', location: 'Remote', current: false },
  { period: 'Apr 2025 – Present',  role: 'Product Designer',        company: 'Ha-Shem Consulting',   location: 'Remote', current: true  },
]

const TOOLS = [
  { name: 'Figma',      abbr: 'Fi', accent: '#F24E1E' },
  { name: 'Midjourney', abbr: 'MJ', accent: '#4A6CF7' },
  { name: 'Khroma',     abbr: 'Kh', accent: '#A855F7' },
  { name: 'Visily',     abbr: 'Vi', accent: '#3B82F6' },
  { name: 'Claude',     abbr: 'Cl', accent: '#D97706' },
  { name: 'Notion AI',  abbr: 'No', accent: '#E2E8F0' },
  { name: 'Dovetail',   abbr: 'Dv', accent: '#F43F5E' },
  { name: 'Loom AI',    abbr: 'Lo', accent: '#625DF5' },
  { name: 'Framer',     abbr: 'Fr', accent: '#0055FF' },
  { name: 'Miro AI',    abbr: 'Mi', accent: '#FFD02F' },
]

const SKILLS_ABOUT = [
  { name: 'Product Strategy',                        desc: 'Connecting user needs to business goals through decisions that compound over time.' },
  { name: 'End-to-end System Design',               desc: 'From discovery and architecture to shipped UI — owning the full design lifecycle.' },
  { name: 'AI-augmented Design Velocity',           desc: 'Leveraging AI tools to ideate, prototype, and iterate at a pace that surprises teams.' },
  { name: 'Design Systems & Scalability',           desc: 'Scalable component libraries that grow with your product and unify every touchpoint.' },
  { name: 'Stakeholder & Cross-functional Facilitation', desc: 'Translating between engineering, business, and users — keeping every team aligned.' },
  { name: 'Regulated-industry Domain Expertise',   desc: 'Deep familiarity with healthtech, fintech, and insurtech constraints and compliance.' },
]

function AboutPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div style={{ position: 'relative', zIndex: 1, paddingTop: 68 }}>

      {/* ── Hero bio ── */}
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '5rem 2.5rem 4rem' }}>
        <p style={{ fontFamily: C.font, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.gold, margin: '0 0 1.25rem' }}>About</p>
        <h1 style={{ fontFamily: C.font, fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.05, letterSpacing: '-0.03em', color: C.ink, margin: '0 0 3rem' }}>
          The designer<br /><em style={{ fontStyle: 'italic', color: C.gold }}>behind the work.</em>
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'stretch' }} className="about-3col">
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              {[
                "I'm Lawal Olanrewaju — a product designer who believes the best design is the kind you don't notice. It simply works, feels right, and disappears into the experience.",
                "My work sits at the intersection of strategy and craft. Every pixel has a purpose, every flow has a rationale, and every decision traces back to a real person with a real need.",
                "From care apps that restore dignity, to insurance infrastructure serving an entire industry — I bring rigour, warmth, and relentless attention to detail to every engagement.",
              ].map((p, i) => (
                <p key={i} style={{ fontFamily: C.font, fontSize: '1.05rem', fontWeight: 400, lineHeight: 1.85, color: C.muted, margin: '0 0 1.5rem' }}>{p}</p>
              ))}
            </div>

            {/* Social icon links */}
            <div style={{ display: 'flex', gap: '0.6rem', paddingTop: '1rem' }}>
              {[
                { icon: <IconInstagram />, href: 'https://www.instagram.com/lajimohofficial/', label: 'Instagram' },
                { icon: <IconX />,         href: 'https://x.com/lajimohofficial',              label: 'X' },
                { icon: <IconLinkedIn />,  href: 'https://www.linkedin.com/in/lawal-jimoh/',   label: 'LinkedIn' },
                { icon: <IconEmail />,     href: 'mailto:lajimohofficial@gmail.com',            label: 'Email' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={s.label}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 42, height: 42, borderRadius: '50%',
                    background: C.panel, border: `1px solid ${C.border}`,
                    color: C.muted, textDecoration: 'none',
                    transition: 'color 0.2s, border-color 0.2s, background 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = C.gold
                    e.currentTarget.style.borderColor = 'rgba(232,184,75,0.4)'
                    e.currentTarget.style.background = 'rgba(232,184,75,0.06)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = C.muted
                    e.currentTarget.style.borderColor = C.border
                    e.currentTarget.style.background = C.panel
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div style={{ position: 'relative', overflow: 'hidden', minHeight: 520, borderRadius: 12, background: 'rgba(238,236,232,0.03)' }}>
            <img
              src={photoFolded}
              alt="Lawal Olanrewaju, hands folded"
              style={{
                position: 'absolute', bottom: 0, left: '50%',
                transform: 'translateX(-50%)',
                height: '100%', width: 'auto', maxWidth: 'none',
                objectFit: 'contain', objectPosition: 'bottom center',
                display: 'block',
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Experience + Tools (side by side) ── */}
      <section style={{ borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '5rem 2.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'stretch' }} className="about-3col">

            {/* Experience */}
            <div>
              <p style={{ fontFamily: C.font, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.gold, margin: '0 0 1rem' }}>Experience</p>
              <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.3rem, 2vw, 1.75rem)', fontWeight: 800, color: C.ink, margin: '0 0 2.5rem', letterSpacing: '-0.02em' }}>Where I&#39;ve worked</h2>

              <div style={{ position: 'relative', paddingLeft: '2rem' }}>
                <div style={{ position: 'absolute', left: 0, top: 8, bottom: 8, width: 1, background: `linear-gradient(to bottom, ${C.gold}, rgba(232,184,75,0.08))` }} />
                {EXPERIENCES.map((e, i) => (
                  <div key={i} style={{ position: 'relative', paddingBottom: i < EXPERIENCES.length - 1 ? '2rem' : 0 }}>
                    <div style={{
                      position: 'absolute', left: -26, top: 7,
                      width: 9, height: 9, borderRadius: '50%',
                      background: e.current ? C.gold : 'transparent',
                      border: `1.5px solid ${e.current ? C.gold : 'rgba(232,184,75,0.35)'}`,
                      boxShadow: e.current ? `0 0 10px ${C.gold}55` : 'none',
                    }} />
                    <span style={{ fontFamily: C.font, fontSize: '0.7rem', fontWeight: 500, color: C.dim, display: 'block', marginBottom: '0.25rem' }}>{e.period}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: C.font, fontSize: '0.95rem', fontWeight: 700, color: C.ink }}>{e.role}</span>
                      {e.current && (
                        <span style={{ fontFamily: C.font, fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.bg, background: C.gold, padding: '0.15rem 0.5rem', borderRadius: 100 }}>Current</span>
                      )}
                    </div>
                    <span style={{ fontFamily: C.font, fontSize: '0.83rem', color: C.muted }}>
                      {e.company} &nbsp;·&nbsp; {e.location}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div style={{ borderLeft: `1px solid ${C.border}`, paddingLeft: '3rem' }}>
              <p style={{ fontFamily: C.font, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.gold, margin: '0 0 1rem' }}>Tools</p>
              <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.3rem, 2vw, 1.75rem)', fontWeight: 800, color: C.ink, margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>My stack</h2>
              <p style={{ fontFamily: C.font, fontSize: '0.83rem', color: C.muted, margin: '0 0 2rem' }}>Hover to see the tool name.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
                {TOOLS.map(t => (
                  <ToolChip key={t.name} name={t.name} abbr={t.abbr} accent={t.accent} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Companies I've worked with ── */}
      <section style={{ borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '4rem 2.5rem 0' }}>
          <p style={{ fontFamily: C.font, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.gold, margin: '0 0 0.5rem', textAlign: 'center' }}>Companies</p>
          <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.3rem, 2vw, 1.75rem)', fontWeight: 800, color: C.ink, margin: '0 auto 0.5rem', letterSpacing: '-0.02em', textAlign: 'center' }}>
            Brands I&#39;ve worked with
          </h2>
          <p style={{ fontFamily: C.font, fontSize: '0.83rem', color: C.muted, textAlign: 'center', margin: '0 auto' }}>
            From startups to consulting firms — across industries.
          </p>
        </div>
        <LogoMarquee />
      </section>

      {/* ── What I do best ── */}
      <section style={{ borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '5rem 2.5rem' }}>
          <p style={{ fontFamily: C.font, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.gold, margin: '0 0 1rem' }}>Proficiencies</p>
          <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: C.ink, margin: '0 0 3rem', letterSpacing: '-0.02em' }}>What I do best</h2>
          <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {SKILLS_ABOUT.map((s, i) => (
              <div key={i} style={{
                padding: '2rem 1.75rem',
                borderRight: (i + 1) % 3 !== 0 ? `1px solid ${C.border}` : 'none',
                borderBottom: i < 3 ? `1px solid ${C.border}` : 'none',
              }}>
                <div style={{ fontFamily: C.font, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, marginBottom: '0.75rem' }}>{String(i + 1).padStart(2, '0')}</div>
                <h3 style={{ fontFamily: C.font, fontSize: '0.95rem', fontWeight: 700, color: C.ink, margin: '0 0 0.5rem' }}>{s.name}</h3>
                <p style={{ fontFamily: C.font, fontSize: '0.83rem', fontWeight: 400, lineHeight: 1.75, color: C.muted, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ borderTop: `1px solid ${C.border}`, padding: '7rem 2.5rem', textAlign: 'center' }}>
        <p style={{ fontFamily: C.font, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.gold, margin: '0 0 2rem' }}>
          Open to opportunities
        </p>
        <h2 style={{
          fontFamily: C.font, fontWeight: 800, letterSpacing: '-0.03em',
          fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', lineHeight: 1.05,
          color: C.ink, margin: '0 auto 2.5rem', maxWidth: '18ch',
        }}>
          Let&#39;s build something remarkable.
        </h2>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="pill pill-gold" onClick={() => setPage('home')}>
            Get in touch →
          </button>
          <a className="pill pill-ghost" href="https://wa.me/2348182319625" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// ── Projects Page ─────────────────────────────────────────────────────────────

function ProjectsPage({ setPage }: { setPage: (p: Page) => void }) {
  const projects = [
    { img: prosHQ,   name: 'ProsHQ',   type: 'Web Platform', year: '2024', mission: 'Connect busy Nigerian professionals with vetted, reliable service providers — within hours.', desc: 'A trust-first web platform with escrow-protected payments, background-checked provider profiles, and a booking flow that converts at every step.', tags: ['UX Research', 'Web Design', 'Design System', 'Prototyping'] },
    { img: myQura,   name: 'MyQura',   type: 'Mobile App',   year: '2024', mission: 'Healthcare is about restoring dignity, creating access, and weaving families and caregivers together.', desc: 'Dual user journeys for caregivers and patients — unified by a compassionate, accessible interface on iOS and Android.', tags: ['Mobile Design', 'Dual-Role UX', 'Accessibility', 'iOS & Android'] },
    { img: surebase, name: 'Surebase', type: 'Web Platform', year: '2024', mission: 'A B2B insurance aggregation platform consolidating all insurance products into a single, unified API.', desc: 'Enterprise-grade insurance infrastructure. Designed for scalability and multi-tenancy — translating complex API data into dashboards brokers trust.', tags: ['B2B Design', 'Dashboard UX', 'Design System', 'Enterprise'] },
  ]

  return (
    <div style={{ position: 'relative', zIndex: 1, paddingTop: 68 }}>
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '5rem 2.5rem 3rem' }}>
        <p style={{ fontFamily: C.font, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.gold, margin: '0 0 1.25rem' }}>Projects</p>
        <h1 style={{ fontFamily: C.font, fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.05, letterSpacing: '-0.03em', color: C.ink, margin: '0 0 1rem' }}>
          Work that<br /><em style={{ fontStyle: 'italic', color: C.gold }}>speaks.</em>
        </h1>
        <p style={{ fontFamily: C.font, fontSize: '1rem', color: C.muted, maxWidth: '50ch', lineHeight: 1.75, margin: 0 }}>
          10 products shipped across healthcare, fintech, insurtech, and professional services.
        </p>
      </section>
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1rem 2.5rem 6rem' }}>
        {projects.map((p, i) => (
          <div
            key={i}
            style={{ padding: '3rem 0', borderBottom: `1px solid ${C.border}`, cursor: (p.name === 'MyQura' || p.name === 'ProsHQ' || p.name === 'Surebase') ? 'pointer' : 'default' }}
            onClick={p.name === 'MyQura' ? () => setPage('myqura') : p.name === 'ProsHQ' ? () => setPage('proshq') : p.name === 'Surebase' ? () => setPage('surebase') : undefined}
          >
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.75rem', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: C.font, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.bg, background: C.gold, padding: '0.28rem 0.8rem', borderRadius: 100 }}>{p.type}</span>
              <span style={{ fontFamily: C.font, fontSize: '0.75rem', color: C.dim }}>{p.year}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }} className="about-3col">
              <div>
                <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: C.ink, margin: '0 0 1rem', letterSpacing: '-0.025em' }}>{p.name}</h2>
                <p style={{ fontFamily: C.font, fontSize: '0.9rem', fontStyle: 'italic', color: C.gold, margin: '0 0 1.25rem', lineHeight: 1.65 }}>"{p.mission}"</p>
                <p style={{ fontFamily: C.font, fontSize: '0.9rem', fontWeight: 400, lineHeight: 1.8, color: C.muted, margin: '0 0 1.5rem' }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ fontFamily: C.font, fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.muted, background: C.panel, border: `1px solid ${C.border}`, padding: '0.28rem 0.65rem', borderRadius: 100 }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ borderRadius: 10, overflow: 'hidden', background: '#111', aspectRatio: '16/10' }}>
                <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        ))}
        <div style={{ padding: '3rem 0', textAlign: 'center' }}>
          <p style={{ fontFamily: C.font, fontSize: '0.85rem', color: C.dim, marginBottom: '2rem' }}>
            7 additional projects available under NDA · Case studies on request
          </p>
          <a className="pill pill-gold" href="mailto:lajimohofficial@gmail.com">
            Request full case studies →
          </a>
        </div>
      </section>
      <Footer />
    </div>
  )
}

// ── Device mockup with videos composited into screen slots ───────────────────

// Figma canvas is 2000×1500. Screen slot positions (px at full scale):
// Desktop screen: top=338  left=376  w=1088  h=660  radius=16
// Mobile  screen: top=554  left=1294 w=332   h=702  radius=40
const CANVAS_W = 2000
const CANVAS_H = 1500
const DESKTOP_SLOT = { top: 338, left: 376,  width: 1088, height: 660, radius: 16 }
const MOBILE_SLOT  = { top: 554, left: 1294, width: 332,  height: 702, radius: 40 }

function useAutoplayRef() {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.play().catch(() => {}); else el.pause() },
      { threshold: 0.25 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function DeviceMockupWithVideos({ desktopSrc, mobileSrc }: { desktopSrc: string; mobileSrc: string }) {
  const wrapRef  = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const desktopRef = useAutoplayRef()
  const mobileRef  = useAutoplayRef()

  useEffect(() => {
    const update = () => {
      if (wrapRef.current) setScale(wrapRef.current.offsetWidth / CANVAS_W)
    }
    update()
    const ro = new ResizeObserver(update)
    if (wrapRef.current) ro.observe(wrapRef.current)
    return () => ro.disconnect()
  }, [])

  const slot = (s: typeof DESKTOP_SLOT, vref: React.RefObject<HTMLVideoElement | null>, src: string) => (
    <video
      ref={vref}
      src={src}
      muted loop playsInline
      style={{
        position: 'absolute',
        top: s.top, left: s.left,
        width: s.width, height: s.height,
        borderRadius: s.radius,
        objectFit: 'cover',
        display: 'block',
      }}
    />
  )

  return (
    <div ref={wrapRef} style={{ position: 'relative', width: '100%', height: CANVAS_H * scale }}>
      <div style={{ position: 'absolute', top: 0, left: 0, transformOrigin: 'top left', transform: `scale(${scale})` }}>
        <DeviceMockupImport />
        {slot(DESKTOP_SLOT, desktopRef, desktopSrc)}
        {slot(MOBILE_SLOT,  mobileRef,  mobileSrc)}
      </div>
    </div>
  )
}

// ── ProsHQ Professional Slider ────────────────────────────────────────────────

const PRO_SLIDES = [
  { src: proVerified,   label: 'Account Verified'     },
  { src: proDashboard,  label: 'Dashboard Overview'   },
  { src: proAvailTasks, label: 'Available Tasks'      },
  { src: proActiveTask, label: 'Active Task'          },
  { src: proEarnings,   label: 'Earnings'             },
  { src: proProfile,    label: 'Profile'              },
]

function ProsHQSlider() {
  const [active, setActive] = useState(0)
  const [prev,   setPrev]   = useState<number | null>(null)
  const n = PRO_SLIDES.length
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = (i: number) => {
    if (i === active) return
    setPrev(active)
    setActive(i)
  }
  const go = (dir: 1 | -1) => goTo((active + dir + n) % n)

  // Auto-advance
  useEffect(() => {
    timerRef.current = setTimeout(() => go(1), 3500)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [active])

  // Clear prev after transition ends
  useEffect(() => {
    if (prev === null) return
    const t = setTimeout(() => setPrev(null), 700)
    return () => clearTimeout(t)
  }, [prev])

  return (
    <div>
      {/* Stacked image crossfade */}
      <div style={{ position: 'relative', width: '100%', lineHeight: 0, borderRadius: 12, overflow: 'hidden' }}>
        {/* Base layer — always the active slide (no transition, instant) */}
        <img
          src={PRO_SLIDES[active].src}
          alt={PRO_SLIDES[active].label}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
        {/* Outgoing slide fades out on top */}
        {prev !== null && (
          <img
            key={prev}
            src={PRO_SLIDES[prev].src}
            alt={PRO_SLIDES[prev].label}
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%', objectFit: 'cover',
              animation: 'proSlideOut 0.65s cubic-bezier(0.4,0,0.2,1) forwards',
              pointerEvents: 'none',
            }}
          />
        )}

        {/* Arrow buttons */}
        {(['prev', 'next'] as const).map(dir => (
          <button
            key={dir}
            onClick={() => go(dir === 'prev' ? -1 : 1)}
            style={{
              position: 'absolute', top: '50%',
              [dir === 'prev' ? 'left' : 'right']: '1.25rem',
              transform: 'translateY(-50%)',
              width: 40, height: 40, borderRadius: '50%',
              background: C.panel, border: `1px solid ${C.border}`,
              color: C.ink, fontSize: '1.3rem', lineHeight: 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', zIndex: 10,
              backdropFilter: 'blur(8px)',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(232,184,75,0.1)'
              e.currentTarget.style.borderColor = 'rgba(232,184,75,0.4)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = C.panel
              e.currentTarget.style.borderColor = C.border
            }}
            aria-label={dir === 'prev' ? 'Previous screen' : 'Next screen'}
          >
            {dir === 'prev' ? '‹' : '›'}
          </button>
        ))}
      </div>

      {/* Tab strip */}
      <div style={{
        display: 'flex', gap: '0.5rem', flexWrap: 'wrap',
        marginTop: '1.5rem', justifyContent: 'center',
      }}>
        {PRO_SLIDES.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              fontFamily: C.font, fontSize: '0.7rem', fontWeight: 600,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '0.35rem 0.85rem', borderRadius: 100,
              border: `1px solid ${i === active ? 'rgba(232,184,75,0.5)' : C.border}`,
              background: i === active ? 'rgba(232,184,75,0.1)' : C.panel,
              color: i === active ? C.gold : C.dim,
              cursor: 'pointer', transition: 'all 0.2s',
            }}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  )
}

// ── ProsHQ Case Study ─────────────────────────────────────────────────────────

function ScreenMockup({ src, alt, style }: { src: string; alt: string; style?: React.CSSProperties }) {
  return (
    <div style={{ filter: 'drop-shadow(0 24px 56px rgba(0,0,0,0.65))', ...style }}>
      <img src={src} alt={alt} style={{ width: '100%', height: 'auto', display: 'block' }} />
    </div>
  )
}

function ProsHQPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div style={{ position: 'relative', zIndex: 1, paddingTop: 68 }}>

      {/* ── Hero ── */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem 0' }}>
        <button
          onClick={() => setPage('projects')}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: C.font, fontSize: '0.78rem', color: C.dim,
            padding: 0, marginBottom: '3rem', transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = C.ink)}
          onMouseLeave={e => (e.currentTarget.style.color = C.dim)}
        >
          ← Back to Projects
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 480px', gap: '4rem', alignItems: 'center' }} className="about-3col">
          <div>
            <SectionLabel>Case Study · 2024</SectionLabel>
            <h1 style={{
              fontFamily: C.font, fontWeight: 800,
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              lineHeight: 1.0, letterSpacing: '-0.035em',
              color: C.ink, margin: '0 0 1.25rem',
            }}>
              Pros<em style={{ fontStyle: 'italic', color: C.gold }}>HQ</em>
            </h1>
            <p style={{
              fontFamily: C.font, fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
              lineHeight: 1.8, color: C.muted,
              margin: '0 0 2rem', maxWidth: '46ch',
            }}>
              A trust-first, two-sided digital marketplace connecting Nigerian
              clients with verified artisans and service professionals —
              moving service hiring from informal to structured, safe, and scalable.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
              {['Web Platform', 'Lead Designer', '2024', 'Marketplace', 'Nigeria'].map(t => (
                <CaseTag key={t} label={t} />
              ))}
            </div>
            <div style={{ display: 'flex', gap: '2.5rem' }}>
              {[
                { n: '2', l: 'User Groups' },
                { n: '7', l: 'Core Systems' },
                { n: '3', l: 'App Surfaces' },
              ].map(s => (
                <div key={s.l}>
                  <div style={{ fontFamily: C.font, fontSize: '2rem', fontWeight: 800, color: C.gold, lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontFamily: C.font, fontSize: '0.75rem', color: C.dim, marginTop: '0.25rem' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image: web Find Jobs page on laptop */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: '-20%',
              background: 'radial-gradient(circle, rgba(232,184,75,0.1) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <ScreenMockup src={phqHeroHome} alt="ProsHQ homepage" />
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: C.border, maxWidth: 1100, margin: '5rem auto 0' }} />

      {/* ── Overview + Details ── */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '5rem', alignItems: 'start' }} className="about-3col">
          <div>
            <SectionLabel>Overview</SectionLabel>
            <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: C.ink, margin: '0 0 1.5rem', letterSpacing: '-0.02em' }}>
              Formalising Nigeria's informal service economy
            </h2>
            <p style={{ fontFamily: C.font, fontSize: '1rem', lineHeight: 1.9, color: C.muted, margin: '0 0 1.25rem' }}>
              Pros HQ is a two-sided digital marketplace that connects clients — people who need services — with verified taskers: artisans and service providers. The platform focuses on solving trust, reliability, and payment issues in Nigeria's informal service market.
            </p>
            <p style={{ fontFamily: C.font, fontSize: '1rem', lineHeight: 1.9, color: C.muted, margin: '0 0 1.25rem' }}>
              Most Nigerians still hire plumbers, electricians, and cleaners through word-of-mouth or WhatsApp vendors — methods that are unscalable, unreliable, and risk-prone. Pros HQ introduces identity verification, escrow-based payments, and structured task management to create a trusted, accountable alternative.
            </p>
            <p style={{ fontFamily: C.font, fontSize: '1rem', lineHeight: 1.9, color: C.muted, margin: 0 }}>
              The goal: move service hiring from{' '}
              <em style={{ color: C.ink, fontStyle: 'italic' }}>informal → structured, safe, and scalable.</em>
            </p>
          </div>

          <div style={{ borderLeft: `1px solid ${C.border}`, paddingLeft: '2.5rem' }}>
            <SectionLabel>Project Details</SectionLabel>
            {[
              { label: 'Client',    value: 'Pros HQ' },
              { label: 'My Role',   value: 'Lead Designer' },
              { label: 'Year',      value: '2024' },
              { label: 'Platform',  value: 'Web (responsive) + Mobile' },
              { label: 'Scope',     value: 'End-to-end product design' },
            ].map(d => (
              <div key={d.label} style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontFamily: C.font, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.dim, marginBottom: '0.3rem' }}>{d.label}</div>
                <div style={{ fontFamily: C.font, fontSize: '0.9rem', fontWeight: 600, color: C.ink }}>{d.value}</div>
              </div>
            ))}
            <div style={{ paddingTop: '1.5rem', borderTop: `1px solid ${C.border}` }}>
              <div style={{ fontFamily: C.font, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.dim, marginBottom: '0.85rem' }}>Three Pillars</div>
              {[
                { icon: '✦', label: 'Identity Verification' },
                { icon: '✦', label: 'Escrow-based Payments' },
                { icon: '✦', label: 'Structured Task Management' },
              ].map(p => (
                <div key={p.label} style={{ display: 'flex', gap: '0.65rem', alignItems: 'center', marginBottom: '0.6rem' }}>
                  <span style={{ color: C.gold, fontSize: '0.55rem' }}>{p.icon}</span>
                  <span style={{ fontFamily: C.font, fontSize: '0.85rem', color: C.muted }}>{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem + Solution ── */}
      <section style={{ background: 'rgba(238,236,232,0.02)', borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }} className="about-3col">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(232,184,75,0.1)', border: `1px solid rgba(232,184,75,0.25)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: C.font, fontSize: '0.65rem', fontWeight: 800, color: C.gold }}>01</span>
                </div>
                <SectionLabel>The Problem</SectionLabel>
              </div>
              <h3 style={{ fontFamily: C.font, fontSize: '1.4rem', fontWeight: 800, color: C.ink, margin: '0 0 1.25rem', letterSpacing: '-0.02em' }}>
                Trust is broken in Nigeria's service market
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {[
                  'Difficulty finding skilled professionals quickly',
                  'No guarantee of quality or accountability',
                  'High risk of fraud or incomplete work',
                  'Lack of structured pricing and transparency',
                ].map(p => (
                  <div key={p} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'rgba(232,184,75,0.5)', fontSize: '0.65rem', marginTop: '0.3rem', flexShrink: 0 }}>–</span>
                    <span style={{ fontFamily: C.font, fontSize: '0.88rem', lineHeight: 1.7, color: C.muted }}>{p}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontFamily: C.font, fontSize: '0.88rem', lineHeight: 1.8, color: C.muted, borderLeft: `2px solid rgba(232,184,75,0.3)`, paddingLeft: '1rem', fontStyle: 'italic' }}>
                Most users rely on word-of-mouth and WhatsApp vendors — methods that are unscalable, unreliable, and risk-prone. This creates a strong need for a <strong style={{ color: C.ink, fontStyle: 'normal' }}>trusted, structured marketplace.</strong>
              </p>
            </div>

            <div style={{ borderLeft: `1px solid ${C.border}`, paddingLeft: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(232,184,75,0.1)', border: `1px solid rgba(232,184,75,0.25)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: C.font, fontSize: '0.65rem', fontWeight: 800, color: C.gold }}>02</span>
                </div>
                <SectionLabel>The Solution</SectionLabel>
              </div>
              <h3 style={{ fontFamily: C.font, fontSize: '1.4rem', fontWeight: 800, color: C.ink, margin: '0 0 1.25rem', letterSpacing: '-0.02em' }}>
                End-to-end task completion with trust built in
              </h3>
              <p style={{ fontFamily: C.font, fontSize: '0.88rem', lineHeight: 1.8, color: C.muted, margin: '0 0 1.25rem' }}>
                The MVP focuses on enabling end-to-end task completion — from job posting to payment. The goal is not perfection, but market validation. Every interaction is designed to build trust at each step.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { label: 'For Clients',        items: ['Quickly find verified professionals', 'Avoid scams through escrow protection', 'Track work progress in real time', 'Make informed decisions using ratings'] },
                  { label: 'For Professionals',   items: ['Access a steady stream of jobs', 'Guaranteed payment after job completion', 'Build a verified professional reputation'] },
                ].map(g => (
                  <div key={g.label} style={{ background: C.panel, border: `1px solid ${C.border}`, borderRadius: 10, padding: '1.25rem' }}>
                    <div style={{ fontFamily: C.font, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, marginBottom: '0.65rem' }}>{g.label}</div>
                    {g.items.map(it => (
                      <div key={it} style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.4rem' }}>
                        <span style={{ color: C.gold, fontSize: '0.55rem', marginTop: '0.3rem', flexShrink: 0 }}>✦</span>
                        <span style={{ fontFamily: C.font, fontSize: '0.82rem', color: C.muted }}>{it}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Target Users ── */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem' }}>
        <SectionLabel>Target Users</SectionLabel>
        <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: C.ink, margin: '0 0 3rem', letterSpacing: '-0.02em' }}>
          Two sides of one marketplace
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="about-3col">
          <div style={{ padding: '2.5rem', borderRadius: 12, background: C.panel, border: `1px solid ${C.border}`, borderTop: `2px solid ${C.gold}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(232,184,75,0.12)', border: `1px solid rgba(232,184,75,0.3)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: C.font, fontSize: '1.1rem', fontWeight: 800, color: C.gold }}>C</div>
              <div>
                <div style={{ fontFamily: C.font, fontSize: '1rem', fontWeight: 700, color: C.ink }}>The Client</div>
                <div style={{ fontFamily: C.font, fontSize: '0.78rem', color: C.dim }}>Primary User · Demand Side</div>
              </div>
            </div>
            <p style={{ fontFamily: C.font, fontSize: '0.88rem', lineHeight: 1.8, color: C.muted, margin: '0 0 1.5rem' }}>
              Urban professionals in Lagos, Abuja, and Port Harcourt. They have limited time, prefer convenience, and are willing to pay for reliability. They already transact online and use smartphones regularly.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {[
                { icon: '⏱', label: 'Limited time' },
                { icon: '📱', label: 'Smartphone native' },
                { icon: '💳', label: 'Transacts online' },
                { icon: '🔒', label: 'Values reliability' },
              ].map(t => (
                <div key={t.label} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', padding: '0.6rem 0.8rem', background: 'rgba(238,236,232,0.03)', borderRadius: 8, border: `1px solid ${C.border}` }}>
                  <span style={{ fontSize: '0.9rem' }}>{t.icon}</span>
                  <span style={{ fontFamily: C.font, fontSize: '0.78rem', color: C.muted }}>{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: '2.5rem', borderRadius: 12, background: C.panel, border: `1px solid ${C.border}`, borderTop: `2px solid rgba(238,236,232,0.2)` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(238,236,232,0.06)', border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: C.font, fontSize: '1.1rem', fontWeight: 800, color: C.ink }}>P</div>
              <div>
                <div style={{ fontFamily: C.font, fontSize: '1rem', fontWeight: 700, color: C.ink }}>The Professional</div>
                <div style={{ fontFamily: C.font, fontSize: '0.78rem', color: C.dim }}>Supply Side · Tasker</div>
              </div>
            </div>
            <p style={{ fontFamily: C.font, fontSize: '0.88rem', lineHeight: 1.8, color: C.muted, margin: '0 0 1.5rem' }}>
              Semi-formal workers and artisans with real skills but inconsistent demand. They struggle with payment reliability and lack visibility to potential clients beyond their immediate network.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {[
                { icon: '🔧', label: 'Has the skills' },
                { icon: '📣', label: 'Needs visibility' },
                { icon: '💰', label: 'Payment struggles' },
                { icon: '📈', label: 'Wants credibility' },
              ].map(t => (
                <div key={t.label} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', padding: '0.6rem 0.8rem', background: 'rgba(238,236,232,0.03)', borderRadius: 8, border: `1px solid ${C.border}` }}>
                  <span style={{ fontSize: '0.9rem' }}>{t.icon}</span>
                  <span style={{ fontFamily: C.font, fontSize: '0.78rem', color: C.muted }}>{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── The Design: Website ── */}
      <section style={{ background: 'rgba(238,236,232,0.02)', borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem' }}>
          <SectionLabel>The Design — Website</SectionLabel>
          <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: C.ink, margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>
            Public-facing platform
          </h2>
          <p style={{ fontFamily: C.font, fontSize: '0.9rem', color: C.muted, margin: '0 0 3.5rem', maxWidth: '52ch', lineHeight: 1.75 }}>
            The web platform serves both user groups from the same URL. Clients land on the homepage to post tasks; professionals land on "Find Jobs" to discover and apply for work.
          </p>

          {/* Device mockup with videos composited inside */}
          <div style={{ marginBottom: '4rem' }}>
            <DeviceMockupWithVideos desktopSrc={phqVideoDesktop} mobileSrc={phqVideoMobile} />
          </div>

          {/* Design callouts */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="skills-grid">
            {[
              { n: '01', t: 'Hero that converts', d: 'The homepage leads with a bold value prop — "Hire Verified Artisans You Can Trust" — followed by two CTAs: Find a Professional and Post a Task.' },
              { n: '02', t: 'Search-first UX', d: 'Find Jobs opens with a prominent search bar (service + location) and an orange CTA. Popular categories are surfaced as quick chips below.' },
              { n: '03', t: 'Job feed with context', d: 'Jobs are displayed as cards with title, budget, location, category tag, and time posted. Both "View Details" and "Apply" are visible without extra clicks.' },
              { n: '04', t: 'Fully responsive', d: 'Every page was designed mobile-first, with the same feature parity across desktop and phone — no compromises on capability or clarity.' },
            ].map(d => (
              <div key={d.n} style={{ padding: '1.5rem', background: C.panel, border: `1px solid ${C.border}`, borderRadius: 10 }}>
                <div style={{ fontFamily: C.font, fontSize: '0.63rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, marginBottom: '0.5rem' }}>{d.n}</div>
                <h4 style={{ fontFamily: C.font, fontSize: '0.88rem', fontWeight: 700, color: C.ink, margin: '0 0 0.4rem' }}>{d.t}</h4>
                <p style={{ fontFamily: C.font, fontSize: '0.8rem', lineHeight: 1.7, color: C.muted, margin: 0 }}>{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Competitive Positioning ── */}
      <section style={{ background: 'rgba(238,236,232,0.02)', borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem' }}>
          <SectionLabel>Competitive Analysis</SectionLabel>
          <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: C.ink, margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>
            A fragmented market. One clear gap.
          </h2>
          <p style={{ fontFamily: C.font, fontSize: '0.9rem', color: C.muted, margin: '0 0 3rem', maxWidth: '52ch', lineHeight: 1.75 }}>
            Nigeria's service marketplace is dominated by informal channels and a few structured platforms — all of which share the same critical weakness: low trust.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', border: `1px solid ${C.border}`, borderRadius: 12, overflow: 'hidden' }}>
            {[
              { name: 'Jiji Nigeria',   type: 'General classifieds', gap: 'No verification, no escrow, no structured workflow — high scam risk.' },
              { name: 'OList Nigeria',  type: 'Classified ads',       gap: 'No trust or verification system. No payment integration or job tracking.' },
              { name: 'SweepSouth',    type: 'On-demand home services', gap: 'Not deeply localised for Nigerian informal market. Less flexible pricing.' },
              { name: 'TaskRabbit',    type: 'Global marketplace',     gap: 'Not localised. Not adapted to the informal artisan economy.' },
              { name: 'Fiverr',        type: 'Digital services',       gap: 'Focused on digital services only — misses physical/local service needs.' },
            ].map((c, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '180px 1fr 1fr',
                padding: '1.25rem 1.75rem', gap: '1.5rem', alignItems: 'center',
                background: i % 2 === 0 ? C.panel : 'transparent',
                borderBottom: i < 4 ? `1px solid ${C.border}` : 'none',
              }}>
                <div>
                  <div style={{ fontFamily: C.font, fontSize: '0.88rem', fontWeight: 700, color: C.ink }}>{c.name}</div>
                  <div style={{ fontFamily: C.font, fontSize: '0.72rem', color: C.dim }}>{c.type}</div>
                </div>
                <div style={{ fontFamily: C.font, fontSize: '0.82rem', color: C.muted, lineHeight: 1.6 }}>{c.gap}</div>
                <div style={{ fontFamily: C.font, fontSize: '0.75rem', fontStyle: 'italic', color: C.gold, lineHeight: 1.5 }}>
                  Opportunity for Pros HQ →
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginTop: '3rem' }}>
            {[
              { n: '01', t: 'Trust-First',       d: 'Mandatory verification, ratings, and escrow — trust is structural, not optional.' },
              { n: '02', t: 'End-to-End',        d: 'Task posting → Matching → Execution → Payment → Review. No handoffs to WhatsApp.' },
              { n: '03', t: 'Localised',         d: 'Built for Nigerian users with Paystack, local pricing, and the informal artisan economy in mind.' },
              { n: '04', t: 'Speed',             d: 'Fast task posting, quick tasker matching, and real-time progress updates throughout.' },
            ].map(d => (
              <div key={d.n} style={{ padding: '1.75rem', background: C.panel, border: `1px solid ${C.border}`, borderTop: `2px solid ${C.gold}`, borderRadius: 10 }}>
                <div style={{ fontFamily: C.font, fontSize: '0.63rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, marginBottom: '0.6rem' }}>{d.n}</div>
                <h4 style={{ fontFamily: C.font, fontSize: '0.9rem', fontWeight: 700, color: C.ink, margin: '0 0 0.4rem' }}>{d.t}</h4>
                <p style={{ fontFamily: C.font, fontSize: '0.8rem', lineHeight: 1.7, color: C.muted, margin: 0 }}>{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Design: Client Experience ── */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem' }}>
        <SectionLabel>The Design — Client Experience</SectionLabel>
        <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: C.ink, margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>
          From task posting to professional selection
        </h2>
        <p style={{ fontFamily: C.font, fontSize: '0.9rem', color: C.muted, margin: '0 0 3.5rem', maxWidth: '52ch', lineHeight: 1.75 }}>
          The client experience is designed to remove every friction point between "I need help" and "the right professional is on their way."
        </p>

        {/* Unified flow panel */}
        <div style={{
          background: C.panel,
          border: `1px solid ${C.border}`,
          borderRadius: 16,
          padding: '2rem',
          marginBottom: '4rem',
        }}>
          {/* Screenshots — 2×2 grid */}
          <div className="phq-flow-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {[
              { n: '01', label: 'Client Dashboard',         src: phqClientDashboard,  alt: 'Client dashboard showing active tasks, completed count, available balance and client rating' },
              { n: '02', label: 'Applicants Page',          src: phqClientApplicants, alt: 'Applicants page showing verified professionals with ratings, quotes, and assign buttons' },
              { n: '03', label: 'Task Posted Successfully', src: phqClientTaskPosted, alt: 'Task posted successfully confirmation screen' },
              { n: '04', label: 'Rate a Professional',      src: phqClientRate,       alt: 'Client rating a professional after task completion' },
            ].map((img, i) => (
              <div key={i}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.6rem' }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
                    background: C.gold, fontFamily: C.font,
                    fontSize: '0.52rem', fontWeight: 800, color: C.bg,
                  }}>{img.n}</span>
                  <span style={{ fontFamily: C.font, fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.muted }}>{img.label}</span>
                </div>
                <div style={{
                  borderRadius: 10, overflow: 'hidden',
                  border: `1px solid ${C.border}`,
                  background: '#0d0d0d',
                }}>
                  <img src={img.src} alt={img.alt} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Design callouts */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0' }}>
          {[
            { n: '01', t: 'Dashboard clarity',   d: 'The client dashboard leads with "Your craft journey starts here" — a wallet balance, active task count, completed count, and a client rating front and centre.' },
            { n: '02', t: 'Transparent applicants', d: 'The applicants page shows each professional\'s photo, verified badge, star rating, completed task count, proposed quote, and cover message. No black boxes.' },
            { n: '03', t: 'Confirmation moments', d: 'Task posted successfully screens reassure the client at key moments — reinforcing trust and signalling exactly what happens next.' },
            { n: '04', t: 'Escrow-protected flow', d: 'Budget is locked in escrow on task creation and released only after client approval — protecting both parties throughout the engagement.' },
            { n: '05', t: 'Ratings close the loop', d: 'After task completion, the client rates the professional 1–5 stars. Reviews are public and directly update the professional\'s profile score.' },
            { n: '06', t: '18-step client journey', d: 'From sign-up to review, every touchpoint was mapped and designed — ensuring no drop-off point goes unaddressed in the flow.' },
          ].map((d, i) => (
            <div key={i} style={{
              padding: '2rem 1.75rem',
              borderRight: (i + 1) % 3 !== 0 ? `1px solid ${C.border}` : 'none',
              borderBottom: i < 3 ? `1px solid ${C.border}` : 'none',
              borderTop: `1px solid ${C.border}`,
            }}>
              <div style={{ fontFamily: C.font, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, marginBottom: '0.75rem' }}>{d.n}</div>
              <h4 style={{ fontFamily: C.font, fontSize: '0.92rem', fontWeight: 700, color: C.ink, margin: '0 0 0.5rem' }}>{d.t}</h4>
              <p style={{ fontFamily: C.font, fontSize: '0.82rem', lineHeight: 1.75, color: C.muted, margin: 0 }}>{d.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── The Design: Professional Experience ── */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem' }}>
        <SectionLabel>The Design — Professional Experience</SectionLabel>
        <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: C.ink, margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>
          Built for the professional on the move
        </h2>
        <p style={{ fontFamily: C.font, fontSize: '0.9rem', color: C.muted, margin: '0 0 3rem', maxWidth: '52ch', lineHeight: 1.75 }}>
          A dedicated dashboard giving professionals full visibility over their tasks, earnings, and profile — all in one place.
        </p>
        <ProsHQSlider />
      </section>

      {/* ── Core Systems ── */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem' }}>
        <SectionLabel>Core Systems</SectionLabel>
        <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: C.ink, margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>
          7 systems that power the platform
        </h2>
        <p style={{ fontFamily: C.font, fontSize: '0.9rem', color: C.muted, margin: '0 0 3.5rem', maxWidth: '52ch', lineHeight: 1.75 }}>
          Every feature in the PRD was designed from first principles — with clear functional requirements and acceptance criteria for each system.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0' }}>
          {[
            { n: '01', t: 'Authentication',         d: 'Email-verified registration for both Clients and Professionals. JWT-based access control with role switching (client ↔ professional).' },
            { n: '02', t: 'Task Management',         d: 'Clients create tasks with title, description, budget, location, and date. Tasks appear instantly in the professional dashboard and can be edited before assignment.' },
            { n: '03', t: 'Professional Application', d: 'Verified professionals browse available tasks, filter by skill and location, and apply. Only one professional can be assigned per task.' },
            { n: '04', t: 'Verification System',     d: 'Professionals submit ID (BVN/NIN) and a selfie. Admin reviews and approves, granting a Verified badge visible on all profile cards.' },
            { n: '05', t: 'Escrow Payments',         d: 'Clients fund a wallet via Paystack. Budget is locked on task creation and held until client approval. Split: 80% tasker / 20% platform.' },
            { n: '06', t: 'Progress Tracking',       d: 'Professionals update stages sequentially: On My Way → Arrived → In Progress → Completed. Each stage is timestamped and reflected instantly on the client dashboard.' },
            { n: '07', t: 'Ratings & Reviews',       d: 'Post-completion, both parties rate each other 1–5 stars with text reviews. Ratings are public, linked to tasks, and update profile scores.' },
          ].map((d, i) => (
            <div key={i} style={{
              padding: '2rem 1.75rem',
              borderRight: (i + 1) % 3 !== 0 ? `1px solid ${C.border}` : 'none',
              borderBottom: i < Math.ceil(7 / 3) * 3 - 3 ? `1px solid ${C.border}` : i < 6 ? `1px solid ${C.border}` : 'none',
              borderTop: `1px solid ${C.border}`,
            }}>
              <div style={{ fontFamily: C.font, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, marginBottom: '0.75rem' }}>{d.n}</div>
              <h4 style={{ fontFamily: C.font, fontSize: '0.92rem', fontWeight: 700, color: C.ink, margin: '0 0 0.5rem' }}>{d.t}</h4>
              <p style={{ fontFamily: C.font, fontSize: '0.82rem', lineHeight: 1.75, color: C.muted, margin: 0 }}>{d.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Next Project CTA ── */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '6rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <p style={{ fontFamily: C.font, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.dim, margin: '0 0 0.5rem' }}>Next Project</p>
          <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)', fontWeight: 800, color: C.ink, margin: 0, letterSpacing: '-0.025em' }}>MyQura →</h2>
          <p style={{ fontFamily: C.font, fontSize: '0.85rem', color: C.muted, margin: '0.5rem 0 0' }}>Care services mobile app</p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button className="pill pill-ghost" onClick={() => setPage('projects')}>All Projects</button>
          <button className="pill pill-gold" onClick={() => setPage('myqura')}>View MyQura →</button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// ── MyQura Slider ─────────────────────────────────────────────────────────────

function MyQuraSlider() {
  const slides = [
    { src: mqSlide1, alt: 'MyQura client home — services overview' },
    { src: mqSlide2, alt: 'Dementia care service detail' },
    { src: mqSlide3, alt: 'Book care service screen' },
    { src: mqSlide4, alt: 'Active care session screen' },
    { src: mqSlide5, alt: 'Care professional booking confirmation' },
  ]
  const n = slides.length
  const [active, setActive] = useState(0)
  const [phoneW, setPhoneW] = useState(220)
  const [gap, setGap]       = useState(210)
  const touchX = useRef(0)
  const dragX  = useRef(0)
  const dragging = useRef(false)

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 520) { setPhoneW(150); setGap(148) }
      else if (window.innerWidth < 768) { setPhoneW(185); setGap(178) }
      else { setPhoneW(220); setGap(210) }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const getOffset = (i: number) => {
    const half = Math.floor(n / 2)
    return ((i - active + n + half) % n) - half
  }

  const prev = () => setActive(a => (a - 1 + n) % n)
  const next = () => setActive(a => (a + 1) % n)

  const handleSwipeEnd = (endX: number) => {
    const diff = touchX.current - endX
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
  }

  const containerH = phoneW * 2.18 // approx phone aspect ratio

  return (
    <div
      style={{
        background: 'linear-gradient(150deg, #0d0d0d 0%, #111418 40%, rgba(232,184,75,0.06) 100%)',
        borderRadius: 20,
        padding: '3rem 0 2rem',
        overflow: 'hidden',
        position: 'relative',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
      onTouchStart={e => { touchX.current = e.touches[0].clientX }}
      onTouchEnd={e => handleSwipeEnd(e.changedTouches[0].clientX)}
      onMouseDown={e => { dragging.current = true; dragX.current = e.clientX }}
      onMouseMove={e => { if (!dragging.current) return }}
      onMouseUp={e => {
        if (!dragging.current) return
        dragging.current = false
        handleSwipeEnd(e.clientX)
      }}
      onMouseLeave={() => { dragging.current = false }}
    >
      {/* Slide track */}
      <div style={{ position: 'relative', height: containerH, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {slides.map((slide, i) => {
          const offset = getOffset(i)
          const abs    = Math.abs(offset)
          const scale   = abs === 0 ? 1 : abs === 1 ? 0.78 : 0.62
          const opacity = abs === 0 ? 1 : abs === 1 ? 0.55 : 0.22
          const tx      = offset * gap
          const zIndex  = 10 - abs
          return (
            <div
              key={i}
              onClick={() => abs > 0 && setActive(i)}
              style={{
                position: 'absolute',
                width: phoneW,
                transform: `translateX(${tx}px) scale(${scale})`,
                opacity,
                transition: 'transform 0.42s cubic-bezier(0.4,0,0.2,1), opacity 0.42s ease',
                zIndex,
                cursor: abs > 0 ? 'pointer' : 'default',
              }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                draggable={false}
                style={{ width: '100%', height: 'auto', display: 'block', pointerEvents: 'none' }}
              />
            </div>
          )
        })}
      </div>

      {/* Prev / Next arrows */}
      {(['prev', 'next'] as const).map(dir => (
        <button
          key={dir}
          onClick={dir === 'prev' ? prev : next}
          style={{
            position: 'absolute', top: '50%',
            [dir === 'prev' ? 'left' : 'right']: '1.25rem',
            transform: 'translateY(-50%)',
            width: 40, height: 40, borderRadius: '50%',
            background: C.panel,
            border: `1px solid ${C.border}`,
            color: C.ink, fontSize: '1.3rem', lineHeight: 1,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', zIndex: 20,
            backdropFilter: 'blur(8px)',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(232,184,75,0.1)')}
          onMouseLeave={e => (e.currentTarget.style.background = C.panel)}
          aria-label={dir === 'prev' ? 'Previous screen' : 'Next screen'}
        >
          {dir === 'prev' ? '‹' : '›'}
        </button>
      ))}

      {/* Slide label */}
      <p style={{
        fontFamily: C.font, fontSize: '0.75rem', fontWeight: 500,
        color: C.muted, textAlign: 'center',
        margin: '0.75rem 0 1rem', letterSpacing: '0.04em',
        minHeight: '1.2em',
      }}>
        {slides[active].alt}
      </p>

      {/* Dot indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', paddingBottom: '0.25rem' }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: i === active ? 24 : 8, height: 8,
              borderRadius: 4, border: 'none', padding: 0, cursor: 'pointer',
              background: i === active ? C.gold : 'rgba(238,236,232,0.2)',
              transition: 'all 0.3s ease',
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// ── MyQura Case Study ─────────────────────────────────────────────────────────

function PhoneMockup({ src, alt, style }: { src: string; alt: string; style?: React.CSSProperties }) {
  return (
    <div style={{
      position: 'relative', display: 'inline-block',
      filter: 'drop-shadow(0 32px 64px rgba(0,0,0,0.7))',
      ...style,
    }}>
      <img src={src} alt={alt} style={{ width: '100%', height: 'auto', display: 'block' }} />
    </div>
  )
}

function CaseTag({ label }: { label: string }) {
  return (
    <span style={{
      fontFamily: C.font, fontSize: '0.68rem', fontWeight: 600,
      letterSpacing: '0.1em', textTransform: 'uppercase',
      color: C.muted, background: C.panel, border: `1px solid ${C.border}`,
      padding: '0.28rem 0.7rem', borderRadius: 100,
    }}>{label}</span>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: C.font, fontSize: '0.68rem', fontWeight: 700,
      letterSpacing: '0.18em', textTransform: 'uppercase',
      color: C.gold, margin: '0 0 1rem',
    }}>{children}</p>
  )
}

function MyQuraPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div style={{ position: 'relative', zIndex: 1, paddingTop: 68 }}>

      {/* ── Hero ── */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem 0' }}>
        {/* Back */}
        <button
          onClick={() => setPage('projects')}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: C.font, fontSize: '0.78rem', color: C.dim,
            padding: 0, marginBottom: '3rem',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = C.ink)}
          onMouseLeave={e => (e.currentTarget.style.color = C.dim)}
        >
          ← Back to Projects
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: '4rem', alignItems: 'center' }} className="about-3col">
          {/* Left: title + meta */}
          <div>
            <SectionLabel>Case Study · 2024</SectionLabel>
            <h1 style={{
              fontFamily: C.font, fontWeight: 800,
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              lineHeight: 1.0, letterSpacing: '-0.035em',
              color: C.ink, margin: '0 0 1.25rem',
            }}>
              My<em style={{ fontStyle: 'italic', color: C.gold }}>Qura</em>
            </h1>
            <p style={{
              fontFamily: C.font, fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
              fontWeight: 400, lineHeight: 1.75, color: C.muted,
              margin: '0 0 2.5rem', maxWidth: '44ch',
            }}>
              A dual-sided mobile platform connecting Nigerian families with
              vetted care professionals — bringing compassion and transparency
              to home healthcare.
            </p>

            {/* Meta pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
              <CaseTag label="Mobile App" />
              <CaseTag label="Lead Designer" />
              <CaseTag label="3 Months" />
              <CaseTag label="Healthtech" />
              <CaseTag label="iOS & Android" />
            </div>

            {/* Quick-stat row */}
            <div style={{ display: 'flex', gap: '2.5rem' }}>
              {[
                { n: '2', l: 'User Journeys' },
                { n: '6', l: 'Responsibilities' },
                { n: '3', l: 'App Surfaces' },
              ].map(s => (
                <div key={s.l}>
                  <div style={{ fontFamily: C.font, fontSize: '2rem', fontWeight: 800, color: C.gold, lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontFamily: C.font, fontSize: '0.75rem', color: C.dim, marginTop: '0.25rem' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: flash screen */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: '-20%',
              background: 'radial-gradient(circle, rgba(232,184,75,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <PhoneMockup src={mqFlash} alt="MyQura splash screen" style={{ maxWidth: 280, margin: '0 auto', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ height: 1, background: C.border, maxWidth: 1100, margin: '5rem auto 0' }} />

      {/* ── Overview + Responsibilities ── */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '5rem', alignItems: 'start' }} className="about-3col">
          <div>
            <SectionLabel>Overview</SectionLabel>
            <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: C.ink, margin: '0 0 1.5rem', letterSpacing: '-0.02em' }}>
              Care As A Service
            </h2>
            <p style={{ fontFamily: C.font, fontSize: '1rem', lineHeight: 1.9, color: C.muted, margin: '0 0 1.25rem' }}>
              MyCare Assistant is a leading Nigerian home healthcare service provider
              dedicated to delivering comprehensive and compassionate care. Driven by a
              vision of creating a robust and accessible health solution, MyCare Assistant
              offers a diverse range of services tailored to meet the unique needs of
              individuals requiring care in the comfort of their own homes.
            </p>
            <p style={{ fontFamily: C.font, fontSize: '1rem', lineHeight: 1.9, color: C.muted, margin: 0 }}>
              The spectrum of services includes elderly care, specialised dementia care,
              mental health support, and creative support — demonstrating a commitment to
              addressing a wide array of care requirements. This platform is the digital
              home of that mission: <em style={{ color: C.ink }}>"MyQura by MyCare Assistant."</em>
            </p>
          </div>

          <div style={{ borderLeft: `1px solid ${C.border}`, paddingLeft: '2.5rem' }}>
            <SectionLabel>Project Details</SectionLabel>
            {[
              { label: 'Client',       value: 'MyQura / MyCare Assistant' },
              { label: 'My Role',      value: 'Lead Designer' },
              { label: 'Timeline',     value: '3 months' },
              { label: 'Type',         value: 'Mobile App (iOS & Android)' },
            ].map(d => (
              <div key={d.label} style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontFamily: C.font, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.dim, marginBottom: '0.3rem' }}>{d.label}</div>
                <div style={{ fontFamily: C.font, fontSize: '0.9rem', fontWeight: 600, color: C.ink }}>{d.value}</div>
              </div>
            ))}
            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: `1px solid ${C.border}` }}>
              <div style={{ fontFamily: C.font, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.dim, marginBottom: '0.85rem' }}>Responsibilities</div>
              {['User Research', 'User Flows & Wireframes', 'Design Direction', 'Storyboarding', 'Visual Design', 'Prototyping'].map(r => (
                <div key={r} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.55rem' }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: C.gold, flexShrink: 0 }} />
                  <span style={{ fontFamily: C.font, fontSize: '0.85rem', color: C.muted }}>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem + Solution ── */}
      <section style={{ background: 'rgba(238,236,232,0.02)', borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }} className="about-3col">
            {/* Problem */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(232,184,75,0.1)', border: `1px solid rgba(232,184,75,0.25)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: C.font, fontSize: '0.65rem', fontWeight: 800, color: C.gold }}>01</span>
                </div>
                <SectionLabel>The Problem</SectionLabel>
              </div>
              <h3 style={{ fontFamily: C.font, fontSize: '1.4rem', fontWeight: 800, color: C.ink, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
                A personal tragedy became a systemic one
              </h3>
              <p style={{ fontFamily: C.font, fontSize: '0.9rem', lineHeight: 1.9, color: C.muted, margin: '0 0 1rem' }}>
                The founder's relative suffered a major health challenge, and inadequate
                and costly support services led to her death. This tragedy founded MyCare
                Assistant.
              </p>
              <p style={{ fontFamily: C.font, fontSize: '0.9rem', lineHeight: 1.9, color: C.muted, margin: 0 }}>
                As the company grew, volume of clients and care professionals increased —
                the manual approach became unsustainable, creating friction for every
                stakeholder in the care chain.
              </p>
            </div>

            {/* Solution */}
            <div style={{ borderLeft: `1px solid ${C.border}`, paddingLeft: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(232,184,75,0.1)', border: `1px solid rgba(232,184,75,0.25)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: C.font, fontSize: '0.65rem', fontWeight: 800, color: C.gold }}>02</span>
                </div>
                <SectionLabel>The Solution</SectionLabel>
              </div>
              <h3 style={{ fontFamily: C.font, fontSize: '1.4rem', fontWeight: 800, color: C.ink, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
                One app. Two journeys. Total transparency.
              </h3>
              <p style={{ fontFamily: C.font, fontSize: '0.9rem', lineHeight: 1.9, color: C.muted, margin: '0 0 1rem' }}>
                A mobile application built for both clients and care professionals. Clients
                can monitor care professional activities including clock-in and clock-out
                times — providing transparency and peace of mind.
              </p>
              <p style={{ fontFamily: C.font, fontSize: '0.9rem', lineHeight: 1.9, color: C.muted, margin: 0 }}>
                Care professionals manage their schedules, accept or decline service
                requests based on availability, and access courses designed to enhance their
                professional development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Storyboarding ── */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem' }}>
        <SectionLabel>Storyboarding</SectionLabel>
        <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: C.ink, margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>
          The user journey, end to end
        </h2>
        <p style={{ fontFamily: C.font, fontSize: '0.9rem', color: C.muted, margin: '0 0 3.5rem', maxWidth: '52ch', lineHeight: 1.75 }}>
          To achieve both business and design goals, I mapped the full human story before touching a single screen.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0' }}>
          {[
            { n: '01', t: 'The need arises', d: 'Oluwatobi is living in Canada with her family. Her dad has been sick and is discharged from hospital, needing ongoing care.' },
            { n: '02', t: 'Discovery', d: "In search of a healthcare service provider, Oluwatobi's friend introduces her to MyQura." },
            { n: '03', t: 'Onboarding', d: 'Oluwatobi signs up, registers her dad as a patient, and requests care professionals matched to his needs.' },
            { n: '04', t: 'Professional match', d: 'Care professionals log in, browse available care services best suited to their skills, location, and certification.' },
            { n: '05', t: 'Care delivery', d: 'Care professionals attend to the patient for the stipulated number of days or months, with full schedule transparency.' },
            { n: '06', t: 'Outcome', d: 'Oluwatobi is happy her dad is well taken care of from abroad. The care professional is excited to offer her skills — and it shows.' },
          ].map((step, i) => (
            <div key={i} style={{
              padding: '2rem 1.75rem',
              borderRight: (i + 1) % 3 !== 0 ? `1px solid ${C.border}` : 'none',
              borderBottom: i < 3 ? `1px solid ${C.border}` : 'none',
            }}>
              <div style={{ fontFamily: C.font, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, marginBottom: '0.75rem' }}>{step.n}</div>
              <h4 style={{ fontFamily: C.font, fontSize: '0.95rem', fontWeight: 700, color: C.ink, margin: '0 0 0.5rem' }}>{step.t}</h4>
              <p style={{ fontFamily: C.font, fontSize: '0.83rem', lineHeight: 1.75, color: C.muted, margin: 0 }}>{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── User Personas ── */}
      <section style={{ background: 'rgba(238,236,232,0.02)', borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem' }}>
          <SectionLabel>Target Audience</SectionLabel>
          <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: C.ink, margin: '0 0 3rem', letterSpacing: '-0.02em' }}>
            Two people. One platform.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="about-3col">
            {/* Persona 1 */}
            <div style={{
              padding: '2.5rem', borderRadius: 12,
              background: C.panel, border: `1px solid ${C.border}`,
              borderTop: `2px solid ${C.gold}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(232,184,75,0.12)', border: `1px solid rgba(232,184,75,0.3)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: C.font, fontSize: '1.1rem', fontWeight: 800, color: C.gold }}>O</div>
                <div>
                  <div style={{ fontFamily: C.font, fontSize: '1rem', fontWeight: 700, color: C.ink }}>Oluwatobi Hassan</div>
                  <div style={{ fontFamily: C.font, fontSize: '0.78rem', color: C.dim }}>28 · Software Engineer · Canada</div>
                </div>
              </div>
              <p style={{ fontFamily: C.font, fontSize: '0.85rem', lineHeight: 1.8, color: C.muted, margin: '0 0 1.5rem' }}>
                A software engineer in Canada whose father back in Nigeria needs ongoing care after being discharged from hospital. She needs to monitor his care remotely.
              </p>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontFamily: C.font, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, marginBottom: '0.6rem' }}>Goals</div>
                {['Get a skilled care professional for her father', 'Monitor his health and care from Canada'].map(g => (
                  <div key={g} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <span style={{ color: C.gold, fontSize: '0.65rem', marginTop: '0.2rem', flexShrink: 0 }}>✦</span>
                    <span style={{ fontFamily: C.font, fontSize: '0.83rem', color: C.muted }}>{g}</span>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontFamily: C.font, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.dim, marginBottom: '0.6rem' }}>Pain Points</div>
                {['Lack of skilled & well trained care professionals', 'Not being able to monitor care professionals remotely'].map(p => (
                  <div key={p} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <span style={{ color: C.dim, fontSize: '0.65rem', marginTop: '0.2rem', flexShrink: 0 }}>–</span>
                    <span style={{ fontFamily: C.font, fontSize: '0.83rem', color: C.dim }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Persona 2 */}
            <div style={{
              padding: '2.5rem', borderRadius: 12,
              background: C.panel, border: `1px solid ${C.border}`,
              borderTop: `2px solid rgba(238,236,232,0.2)`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(238,236,232,0.06)', border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: C.font, fontSize: '1.1rem', fontWeight: 800, color: C.ink }}>S</div>
                <div>
                  <div style={{ fontFamily: C.font, fontSize: '1rem', fontWeight: 700, color: C.ink }}>Sandra Philips</div>
                  <div style={{ fontFamily: C.font, fontSize: '0.78rem', color: C.dim }}>32 · Care Professional</div>
                </div>
              </div>
              <p style={{ fontFamily: C.font, fontSize: '0.85rem', lineHeight: 1.8, color: C.muted, margin: '0 0 1.5rem' }}>
                A MyCare Assistant certified care professional who loves rendering care services to her patients. She frequently misses available care shifts posted on WhatsApp and needs a better way to discover them.
              </p>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontFamily: C.font, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, marginBottom: '0.6rem' }}>Goals</div>
                {['Render care services efficiently to her patients', 'Properly manage care shifts without conflicts'].map(g => (
                  <div key={g} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <span style={{ color: C.gold, fontSize: '0.65rem', marginTop: '0.2rem', flexShrink: 0 }}>✦</span>
                    <span style={{ fontFamily: C.font, fontSize: '0.83rem', color: C.muted }}>{g}</span>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontFamily: C.font, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.dim, marginBottom: '0.6rem' }}>Pain Points</div>
                {['Misses care shifts due to WhatsApp notification lag', 'Unable to provide certain care services outside certification'].map(p => (
                  <div key={p} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <span style={{ color: C.dim, fontSize: '0.65rem', marginTop: '0.2rem', flexShrink: 0 }}>–</span>
                    <span style={{ fontFamily: C.font, fontSize: '0.83rem', color: C.dim }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MyQura Client App ── */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem' }}>
        <SectionLabel>MyQura Client App</SectionLabel>
        <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: C.ink, margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>
          Designed with intentionality
        </h2>
        <p style={{ fontFamily: C.font, fontSize: '0.9rem', color: C.muted, margin: '0 0 4rem', maxWidth: '52ch', lineHeight: 1.75 }}>
          Every design decision was anchored in the user's needs — ensuring a seamless experience when ordering a care service.
        </p>

        {/* Slider */}
        <MyQuraSlider />

        {/* Design decisions */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
          {[
            { n: '01', t: 'Human connection first', d: 'From the flash screen, I led with real faces — caregivers and patients — to immediately communicate warmth and purpose.' },
            { n: '02', t: 'Warm welcome', d: 'The home screen greets users by name and personalises the experience from the very first interaction.' },
            { n: '03', t: 'Zero guesswork', d: "A contextual card explains the user's exact next step — removing friction at every stage of the journey." },
            { n: '04', t: 'Adaptive content', d: "After a patient is added, the card dynamically changes based on what's most relevant to the user's current state." },
          ].map(d => (
            <div key={d.n} style={{ padding: '1.5rem', background: C.panel, border: `1px solid ${C.border}`, borderRadius: 10 }}>
              <div style={{ fontFamily: C.font, fontSize: '0.63rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, marginBottom: '0.5rem' }}>{d.n}</div>
              <h4 style={{ fontFamily: C.font, fontSize: '0.88rem', fontWeight: 700, color: C.ink, margin: '0 0 0.4rem' }}>{d.t}</h4>
              <p style={{ fontFamily: C.font, fontSize: '0.8rem', lineHeight: 1.7, color: C.muted, margin: 0 }}>{d.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Care Professionals App ── */}
      <section style={{ background: 'rgba(238,236,232,0.02)', borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem' }}>
          <SectionLabel>MyQura Care Professionals</SectionLabel>
          <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: C.ink, margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>
            Tailored for the people who care
          </h2>
          <p style={{ fontFamily: C.font, fontSize: '0.9rem', color: C.muted, margin: '0 0 4rem', maxWidth: '52ch', lineHeight: 1.75 }}>
            Specifically designed to help care professionals find services that suit their certifications, and manage shifts, schedules, and payments — all in one place.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '5rem', alignItems: 'center' }} className="about-3col">
            {/* Professional screens */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <PhoneMockup src={mqPro3} alt="Care professional onboarding: Find your perfect care job" style={{ width: '85%' }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', width: '100%' }}>
                <PhoneMockup src={mqPro1} alt="Care professional home screen with bookings dashboard" />
                <PhoneMockup src={mqPro2} alt="Care professional bookings screen with Best Match tab" />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { n: '01', t: 'Mandatory verification', d: 'Every care professional must be verified before accessing the platform — ensuring the company and clients can trust the caregivers they work with.' },
                  { n: '02', t: 'At-a-glance dashboard', d: 'Cards surface the most critical information: total bookings, amount payable, and hours worked — all visible before the first scroll.' },
                  { n: '03', t: 'Upcoming care reminders', d: 'A dedicated card shows the time and date of the next care service so nothing is missed.' },
                  { n: '04', t: 'Best Match algorithm', d: 'The best-match care services tab pools patient requests that align with each professional\'s certifications and location.' },
                  { n: '05', t: 'Recently completed bookings', d: 'Care professionals can quickly review their completed history to manage continuity and build their professional record.' },
                  { n: '06', t: 'Skill-building courses', d: 'Access to affordable development courses directly within the app — helping professionals expand their certification and earning potential.' },
                ].map((d, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.25rem', padding: '1.25rem 0', borderBottom: `1px solid ${C.border}` }}>
                    <span style={{ fontFamily: C.font, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', color: C.gold, minWidth: 28, paddingTop: '0.15rem' }}>{d.n}</span>
                    <div>
                      <h4 style={{ fontFamily: C.font, fontSize: '0.9rem', fontWeight: 700, color: C.ink, margin: '0 0 0.3rem' }}>{d.t}</h4>
                      <p style={{ fontFamily: C.font, fontSize: '0.82rem', lineHeight: 1.7, color: C.muted, margin: 0 }}>{d.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Admin Portal ── */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem' }}>
        <SectionLabel>Admin Portal</SectionLabel>
        <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: C.ink, margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>
          The command centre
        </h2>
        <p style={{ fontFamily: C.font, fontSize: '0.9rem', color: C.muted, margin: '0 0 3.5rem', maxWidth: '52ch', lineHeight: 1.75 }}>
          A web-based admin portal designed to manage requests from both clients and care professionals — ensuring proficient services are delivered appropriately across the entire network.
        </p>

        <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', border: `1px solid ${C.border}` }}>
          <img
            src={mqAdmin}
            alt="MyQura admin dashboard showing caregivers, clients, bookings, and transactions"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
          {/* Fade overlay at bottom */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%', background: `linear-gradient(to top, ${C.bg}, transparent)`, pointerEvents: 'none' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', marginTop: '3rem', border: `1px solid ${C.border}`, borderRadius: 10, overflow: 'hidden' }}>
          {[
            { n: '126', l: 'Caregivers managed' },
            { n: '592', l: 'Active clients' },
            { n: '1,578', l: 'Total bookings' },
            { n: '126', l: 'Consultations' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '1.75rem',
              borderRight: i < 3 ? `1px solid ${C.border}` : 'none',
              background: C.panel, textAlign: 'center',
            }}>
              <div style={{ fontFamily: C.font, fontSize: '2rem', fontWeight: 800, color: C.gold, lineHeight: 1, marginBottom: '0.4rem' }}>{s.n}</div>
              <div style={{ fontFamily: C.font, fontSize: '0.75rem', color: C.dim }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Retrospect ── */}
      <section style={{ background: 'rgba(238,236,232,0.02)', borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem' }}>
          <SectionLabel>Retrospect</SectionLabel>
          <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: C.ink, margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>
            What this project taught me
          </h2>
          <p style={{ fontFamily: C.font, fontSize: '0.9rem', color: C.muted, margin: '0 0 3.5rem', maxWidth: '48ch', lineHeight: 1.75 }}>
            Three months of deep immersion in healthcare design left me with convictions that now shape every project I take on.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {[
              { n: '01', t: 'Designing for Social Impact', d: "A deep dive into the healthcare sector revealed the urgent need for user-centred solutions in Nigeria and surrounding regions. This project channelled my passion for designing for social impact — and made it personal." },
              { n: '02', t: 'Inclusive Interface Design', d: "Designing for a multi-generational audience required a nuanced approach to accessibility and usability. I gained valuable experience in creating inclusive interfaces that work for everyone — regardless of age or digital literacy." },
              { n: '03', t: 'Admin Workflow & UX', d: "Understanding the administrator's workflow was paramount. I learned how to design intuitive admin interfaces that directly impact the end-user experience — because the back-end shapes what the front-end can deliver." },
              { n: '04', t: 'Data-Driven Design Rationale', d: "Every UI element must be justified and aligned with user needs and business goals. I honed my ability to articulate design rationale to stakeholders — translating design decisions into business outcomes." },
            ].map((l, i) => (
              <div key={i} style={{ padding: '2.5rem', background: C.panel, border: `1px solid ${C.border}`, borderRadius: 12 }}>
                <div style={{ fontFamily: C.font, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, marginBottom: '1rem' }}>{l.n}</div>
                <h4 style={{ fontFamily: C.font, fontSize: '1.05rem', fontWeight: 700, color: C.ink, margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{l.t}</h4>
                <p style={{ fontFamily: C.font, fontSize: '0.85rem', lineHeight: 1.8, color: C.muted, margin: 0 }}>{l.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Next Project CTA ── */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '6rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <p style={{ fontFamily: C.font, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.dim, margin: '0 0 0.5rem' }}>Next Project</p>
          <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)', fontWeight: 800, color: C.ink, margin: 0, letterSpacing: '-0.025em' }}>Surebase →</h2>
          <p style={{ fontFamily: C.font, fontSize: '0.85rem', color: C.muted, margin: '0.5rem 0 0' }}>B2B insurance aggregation platform</p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button className="pill pill-ghost" onClick={() => setPage('projects')}>
            All Projects
          </button>
          <button className="pill pill-gold" onClick={() => setPage('surebase')}>
            View Surebase →
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// ── Surebase Case Study ───────────────────────────────────────────────────────

function SbScreen({ src, alt, label }: { src: string; alt: string; label?: string }) {
  return (
    <div>
      {label && (
        <p style={{ fontFamily: C.font, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.dim, margin: '0 0 0.75rem' }}>{label}</p>
      )}
      <div style={{ borderRadius: 12, overflow: 'hidden', border: `1px solid ${C.border}`, background: '#0d0d0d' }}>
        <img src={src} alt={alt} style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>
    </div>
  )
}

const SB_HERO_SLIDES = [
  { src: sbWebInsurance, label: 'Insurance Partners' },
  { src: sbWebBrokers,   label: 'Brokers' },
  { src: sbWebCorporate, label: 'Corporate Partners' },
]

const SB_CANVAS_W = 2000
const SB_CANVAS_H = 1500
const SB_DESKTOP  = { top: 338, left: 376, width: 1088, height: 660, radius: 16 }

function SbHeroMockup() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [active, setActive] = useState(0)
  const [prev,   setPrev]   = useState<number | null>(null)

  useEffect(() => {
    const update = () => {
      if (wrapRef.current) setScale(wrapRef.current.offsetWidth / SB_CANVAS_W)
    }
    update()
    const ro = new ResizeObserver(update)
    if (wrapRef.current) ro.observe(wrapRef.current)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      setActive(a => {
        const next = (a + 1) % SB_HERO_SLIDES.length
        setPrev(a)
        setTimeout(() => setPrev(null), 580)
        return next
      })
    }, 3600)
    return () => clearInterval(t)
  }, [])

  const cur = SB_HERO_SLIDES[active]

  return (
    <div ref={wrapRef} style={{ position: 'relative', width: '100%', height: SB_CANVAS_H * scale }}>
      {/* Scaled canvas */}
      <div style={{ position: 'absolute', top: 0, left: 0, transformOrigin: 'top left', transform: `scale(${scale})` }}>
        <SbVideoMockup />

        {/* Incoming slide (base layer) */}
        <img src={cur.src} alt={cur.label} style={{
          position: 'absolute',
          top: SB_DESKTOP.top, left: SB_DESKTOP.left,
          width: SB_DESKTOP.width, height: SB_DESKTOP.height,
          borderRadius: SB_DESKTOP.radius,
          objectFit: 'cover', objectPosition: 'top', display: 'block',
        }} />

        {/* Outgoing slide fades out on top */}
        {prev !== null && (
          <img key={prev} src={SB_HERO_SLIDES[prev].src} alt={SB_HERO_SLIDES[prev].label} style={{
            position: 'absolute',
            top: SB_DESKTOP.top, left: SB_DESKTOP.left,
            width: SB_DESKTOP.width, height: SB_DESKTOP.height,
            borderRadius: SB_DESKTOP.radius,
            objectFit: 'cover', objectPosition: 'top', display: 'block',
            animation: 'proSlideOut 0.58s ease forwards',
          }} />
        )}
      </div>
    </div>
  )
}

const SB_WEB_SLIDES = [
  { src: sbWebInsurance, label: 'Insurance Partners', sub: 'Distribute at scale' },
  { src: sbWebBrokers,   label: 'Brokers',            sub: 'Sell more insurance, faster' },
  { src: sbWebCorporate, label: 'Corporate Partners', sub: 'One integration, every product' },
]

function SbWebSlider() {
  const [active, setActive] = useState(0)
  const [prev,   setPrev]   = useState<number | null>(null)
  const [fading, setFading] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const go = (idx: number) => {
    if (idx === active || fading) return
    setPrev(active)
    setActive(idx)
    setFading(true)
    setTimeout(() => { setPrev(null); setFading(false) }, 550)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive(a => {
        const next = (a + 1) % SB_WEB_SLIDES.length
        setPrev(a)
        setFading(true)
        setTimeout(() => { setPrev(null); setFading(false) }, 550)
        return next
      })
    }, 3800)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  const cur = SB_WEB_SLIDES[active]

  return (
    <div>
      {/* Tab strip */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {SB_WEB_SLIDES.map((s, i) => (
          <button key={i} onClick={() => { go(i); if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null } }}
            style={{
              fontFamily: C.font, fontSize: '0.75rem', fontWeight: 600,
              padding: '0.4rem 1rem', borderRadius: 100,
              border: `1px solid ${i === active ? C.gold : C.border}`,
              background: i === active ? `rgba(232,184,75,0.1)` : C.panel,
              color: i === active ? C.gold : C.dim,
              cursor: 'pointer', transition: 'all 0.2s',
            }}>{s.label}</button>
        ))}
      </div>

      {/* Slider container — fixed aspect, crossfade */}
      <div style={{ position: 'relative', width: '100%', borderRadius: 12, overflow: 'hidden', border: `1px solid ${C.border}`, background: '#0d0d0d' }}>
        {/* Base — active slide */}
        <img src={cur.src} alt={cur.label} style={{ width: '100%', height: 'auto', display: 'block' }} />

        {/* Outgoing slide fades out on top */}
        {prev !== null && (
          <img
            key={prev}
            src={SB_WEB_SLIDES[prev].src}
            alt={SB_WEB_SLIDES[prev].label}
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover', display: 'block',
              animation: 'proSlideOut 0.55s ease forwards',
            }}
          />
        )}

        {/* Label overlay */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 100%)',
          padding: '2.5rem 1.5rem 1.25rem',
          pointerEvents: 'none',
        }}>
          <p style={{ fontFamily: C.font, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, margin: '0 0 0.2rem' }}>{cur.label}</p>
          <p style={{ fontFamily: C.font, fontSize: '0.85rem', color: C.muted, margin: 0 }}>{cur.sub}</p>
        </div>

        {/* Dot indicators */}
        <div style={{ position: 'absolute', bottom: '1.1rem', right: '1.25rem', display: 'flex', gap: '0.4rem' }}>
          {SB_WEB_SLIDES.map((_, i) => (
            <button key={i} onClick={() => go(i)} style={{
              width: i === active ? 20 : 6, height: 6, borderRadius: 3,
              background: i === active ? C.gold : 'rgba(238,236,232,0.25)',
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'all 0.35s',
            }} />
          ))}
        </div>
      </div>
    </div>
  )
}

function SurebasePage({ setPage }: { setPage: (p: Page) => void }) {
  const [activeGroup, setActiveGroup] = useState(0)

  const userGroups = [
    {
      n: '01', name: 'Insurance Partners', role: 'Insurers & Underwriters',
      pain: 'Managing product distribution across dozens of broker relationships manually, with no visibility into performance or channel reach.',
      gets: 'A Partner Dashboard to publish products, monitor active policies, track premium revenue, manage claims, and see their full distribution network — all in one place.',
      accent: '#3B82F6',
    },
    {
      n: '02', name: 'Brokers', role: 'Licensed Insurance Brokers',
      pain: 'Spending hours chasing quotes from multiple insurers, managing customers across spreadsheets, and tracking commissions manually.',
      gets: 'A Broker Portal to generate multi-insurer quotes in seconds, issue policies digitally, manage their full customer book, and withdraw commission earnings directly.',
      accent: '#10B981',
    },
    {
      n: '03', name: 'Corporate Partners', role: 'Banks · Fintechs · Logistics',
      pain: 'No single integration to access insurance products. Each insurer required separate agreements, API setups, and compliance overhead.',
      gets: 'API-first access to all insurance products through one platform — with a developer-friendly SDK, sandbox environment, and managed credentials.',
      accent: '#8B5CF6',
    },
    {
      n: '04', name: 'Developers', role: 'Technical Integration Teams',
      pain: 'Fragmented, undocumented APIs from individual insurers. No sandbox to test, no versioning, no centralised credential management.',
      gets: 'A Developer Portal with full API docs, SDK downloads (JS, Node, PHP, Python), a sandbox environment, and structured production access approval.',
      accent: C.gold,
    },
  ]

  return (
    <div style={{ position: 'relative', zIndex: 1, paddingTop: 68 }}>

      {/* ── Hero ── */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem 5rem' }}>
        <button
          onClick={() => setPage('projects')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: C.font, fontSize: '0.8rem', color: C.dim, padding: 0, marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = C.ink)}
          onMouseLeave={e => (e.currentTarget.style.color = C.dim)}
        >
          ← All Projects
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="about-3col">
          {/* Left — text */}
          <div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              {['B2B Platform', 'Insurance Infrastructure', 'Web Platform', '2024'].map(t => (
                <span key={t} style={{ fontFamily: C.font, fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.muted, background: C.panel, border: `1px solid ${C.border}`, padding: '0.28rem 0.65rem', borderRadius: 100 }}>{t}</span>
              ))}
            </div>

            <h1 style={{ fontFamily: C.font, fontWeight: 800, fontSize: 'clamp(3.5rem, 7vw, 6.5rem)', lineHeight: 1, letterSpacing: '-0.04em', color: C.ink, margin: '0 0 1.5rem' }}>
              Sure<em style={{ fontStyle: 'italic', color: C.gold }}>base.</em>
            </h1>

            <p style={{ fontFamily: C.font, fontSize: '1rem', fontWeight: 400, lineHeight: 1.8, color: C.muted, maxWidth: '44ch', margin: '0 0 3rem' }}>
              A B2B insurance infrastructure platform connecting insurers, brokers, and corporate organisations through a single, unified system.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0', border: `1px solid ${C.border}`, borderRadius: 12, overflow: 'hidden' }}>
              {[
                { n: '5', l: 'User Groups' },
                { n: '4+', l: 'Dashboards' },
                { n: '7', l: 'API Categories' },
                { n: '2024', l: 'Year Delivered' },
              ].map((s, i) => (
                <div key={i} style={{ padding: '1.5rem 1.25rem', borderRight: i % 2 === 0 ? `1px solid ${C.border}` : 'none', borderBottom: i < 2 ? `1px solid ${C.border}` : 'none', background: C.panel }}>
                  <div style={{ fontFamily: C.font, fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: C.gold, letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.35rem' }}>{s.n}</div>
                  <div style={{ fontFamily: C.font, fontSize: '0.75rem', fontWeight: 500, color: C.muted }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — tablet mockup with screen crossfade */}
          <SbHeroMockup />
        </div>
      </section>

      {/* ── The Problem ── */}
      <section style={{ borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="about-3col">
            <div>
              <SectionLabel>The Problem</SectionLabel>
              <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: C.ink, margin: '0 0 1.5rem', letterSpacing: '-0.02em' }}>
                Insurance distribution is broken at the infrastructure level.
              </h2>
              <p style={{ fontFamily: C.font, fontSize: '0.95rem', lineHeight: 1.85, color: C.muted, margin: '0 0 1.25rem' }}>
                Brokers in Nigeria work with multiple insurance companies simultaneously — but each insurer has its own processes, portals, and paperwork. A broker generating quotes for a client might need to log into four separate systems, wait hours for each response, and manually reconcile the results.
              </p>
              <p style={{ fontFamily: C.font, fontSize: '0.95rem', lineHeight: 1.85, color: C.muted, margin: 0 }}>
                For insurers, the problem is equally frustrating. Expanding distribution means signing individual contracts with brokers, onboarding each one separately, and maintaining relationships through WhatsApp and email — with no real-time performance data.
              </p>
            </div>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {[
                  { icon: '⊗', t: 'Multiple integrations', d: 'Each insurer required a separate API setup, contract, and compliance review.' },
                  { icon: '⊗', t: 'Different processes', d: 'No standardisation across quote formats, policy documents, or claim workflows.' },
                  { icon: '⊗', t: 'Slow onboarding', d: 'Brokers waited weeks to get access to new insurers. Corporate clients waited longer.' },
                  { icon: '⊗', t: 'Limited product visibility', d: 'Brokers couldn\'t compare products across insurers in one view — so clients got fewer options.' },
                  { icon: '⊗', t: 'Difficult reporting', d: 'Commission tracking, premium reconciliation, and claims monitoring all lived in spreadsheets.' },
                  { icon: '⊗', t: 'Higher operational costs', d: 'Manual processes across every touchpoint inflated operational costs for all parties.' },
                ].map((p, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', padding: '1.1rem 0', borderBottom: `1px solid ${C.border}` }}>
                    <span style={{ fontFamily: C.font, fontSize: '0.85rem', color: '#ef4444', flexShrink: 0, marginTop: '0.1rem' }}>{p.icon}</span>
                    <div>
                      <span style={{ fontFamily: C.font, fontSize: '0.85rem', fontWeight: 700, color: C.ink }}>{p.t} </span>
                      <span style={{ fontFamily: C.font, fontSize: '0.85rem', color: C.muted }}>{p.d}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Solution ── */}
      <section style={{ background: 'rgba(238,236,232,0.02)', borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem' }}>
          <SectionLabel>The Solution</SectionLabel>
          <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: C.ink, margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>
            One system. Every stakeholder.
          </h2>
          <p style={{ fontFamily: C.font, fontSize: '0.9rem', color: C.muted, margin: '0 0 3.5rem', maxWidth: '55ch', lineHeight: 1.75 }}>
            Surebase replaces the fragmented ecosystem with a single platform — giving each user group a purpose-built experience while sharing the same underlying insurance data layer.
          </p>
          <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0' }}>
            {[
              { n: '01', t: 'Insurance Partner Dashboard', d: 'Insurers publish products, manage underwriting, process claims, track premium settlements, and monitor their broker distribution network — all from one portal.' },
              { n: '02', t: 'Broker Dashboard', d: 'Brokers generate multi-insurer quotes in seconds, issue policies digitally, manage their complete customer book, track commissions, and withdraw earnings from a built-in wallet.' },
              { n: '03', t: 'Corporate Partner Dashboard', d: 'Corporate organisations access insurance products through a single account, manage transactions, generate reports, and integrate services into their own systems via APIs.' },
              { n: '04', t: 'Developer Portal', d: 'Developers get full API documentation, SDK packages for JS/Node/PHP/Python, a sandbox environment for testing, and a structured production access approval workflow.' },
              { n: '05', t: 'Public-Facing Website', d: 'A marketing and onboarding entry point tailored per user group — separate landing pages for Insurance Partners, Brokers, and Corporate Partners with clear value props and social proof.' },
              { n: '06', t: 'API Marketplace', d: 'A centralised catalogue of all insurance APIs — searchable by category, provider, and version — with access management, subscription controls, and usage monitoring.' },
            ].map((s, i) => (
              <div key={i} style={{ padding: '2rem 1.75rem', borderRight: (i + 1) % 3 !== 0 ? `1px solid ${C.border}` : 'none', borderBottom: i < 3 ? `1px solid ${C.border}` : 'none', borderTop: `1px solid ${C.border}` }}>
                <div style={{ fontFamily: C.font, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, marginBottom: '0.75rem' }}>{s.n}</div>
                <h3 style={{ fontFamily: C.font, fontSize: '0.95rem', fontWeight: 700, color: C.ink, margin: '0 0 0.5rem' }}>{s.t}</h3>
                <p style={{ fontFamily: C.font, fontSize: '0.82rem', lineHeight: 1.75, color: C.muted, margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── User Groups ── */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem' }}>
        <SectionLabel>User Groups</SectionLabel>
        <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: C.ink, margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>
          Designed for four distinct users
        </h2>
        <p style={{ fontFamily: C.font, fontSize: '0.9rem', color: C.muted, margin: '0 0 3rem', maxWidth: '52ch', lineHeight: 1.75 }}>
          Each user group has fundamentally different needs, workflows, and mental models. The design had to serve all four without compromising any single experience.
        </p>

        {/* Tab strip */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {userGroups.map((g, i) => (
            <button key={i} onClick={() => setActiveGroup(i)} style={{
              fontFamily: C.font, fontSize: '0.75rem', fontWeight: 600,
              letterSpacing: '0.06em', padding: '0.45rem 1rem', borderRadius: 100,
              border: `1px solid ${i === activeGroup ? g.accent : C.border}`,
              background: i === activeGroup ? `${g.accent}15` : C.panel,
              color: i === activeGroup ? g.accent : C.dim,
              cursor: 'pointer', transition: 'all 0.2s',
            }}>{g.name}</button>
          ))}
        </div>

        {/* Active group detail */}
        {userGroups.map((g, i) => i !== activeGroup ? null : (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="about-3col">
            <div style={{ padding: '2.5rem', background: C.panel, border: `1px solid ${C.border}`, borderLeft: `3px solid ${g.accent}`, borderRadius: 12 }}>
              <p style={{ fontFamily: C.font, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: g.accent, margin: '0 0 0.75rem' }}>Pain Point</p>
              <p style={{ fontFamily: C.font, fontSize: '0.95rem', lineHeight: 1.8, color: C.muted, margin: 0 }}>{g.pain}</p>
            </div>
            <div style={{ padding: '2.5rem', background: C.panel, border: `1px solid ${C.border}`, borderLeft: `3px solid ${g.accent}`, borderRadius: 12 }}>
              <p style={{ fontFamily: C.font, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: g.accent, margin: '0 0 0.75rem' }}>What Surebase Gives Them</p>
              <p style={{ fontFamily: C.font, fontSize: '0.95rem', lineHeight: 1.8, color: C.muted, margin: 0 }}>{g.gets}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── Public Website ── */}
      <section style={{ background: 'rgba(238,236,232,0.02)', borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem' }}>
          <SectionLabel>The Design — Public Website</SectionLabel>
          <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: C.ink, margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>
            One URL. Three user groups. Three landing pages.
          </h2>
          <p style={{ fontFamily: C.font, fontSize: '0.9rem', color: C.muted, margin: '0 0 3.5rem', maxWidth: '55ch', lineHeight: 1.75 }}>
            Rather than a generic homepage, the Surebase website routes each user group to a tailored landing page — with its own value proposition, feature set, testimonial, and CTA.
          </p>
          <SbWebSlider />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', marginTop: '3.5rem' }}>
            {[
              { n: '01', t: 'Segmented entry points', d: 'A top navigation sub-tab routes visitors to the right landing page — Insurance Partners, Brokers, or Corporate Partners — each with its own headline and tone.' },
              { n: '02', t: 'Social proof by role', d: 'Testimonials are matched to the visitor\'s user type — an insurer reads from Leadway Assurance, a broker reads from Premier Insurance Brokers.' },
              { n: '03', t: 'Role-specific features', d: 'Feature grids are entirely different per page — insurers see Distribution Network; brokers see Commission Tracking; each reads as if designed exclusively for them.' },
            ].map((d, i) => (
              <div key={i} style={{ padding: '2rem 1.75rem', borderRight: i < 2 ? `1px solid ${C.border}` : 'none', borderTop: `1px solid ${C.border}` }}>
                <div style={{ fontFamily: C.font, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, marginBottom: '0.75rem' }}>{d.n}</div>
                <h4 style={{ fontFamily: C.font, fontSize: '0.92rem', fontWeight: 700, color: C.ink, margin: '0 0 0.5rem' }}>{d.t}</h4>
                <p style={{ fontFamily: C.font, fontSize: '0.82rem', lineHeight: 1.75, color: C.muted, margin: 0 }}>{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Insurance Partner Dashboard ── */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem' }}>
        <SectionLabel>The Design — Insurance Partner Dashboard</SectionLabel>
        <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: C.ink, margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>
          Command centre for insurers
        </h2>
        <p style={{ fontFamily: C.font, fontSize: '0.9rem', color: C.muted, margin: '0 0 3.5rem', maxWidth: '55ch', lineHeight: 1.75 }}>
          Insurance partners need a real-time view of their entire operation — from active policies and pending claims to product performance and broker distribution. Every number that matters is above the fold.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <SbScreen src={sbInsuranceDashboard} alt="Insurance Partner dashboard overview" label="Dashboard Overview — Revenue trend, claims overview, recent policies & claims" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="about-3col">
            <SbScreen src={sbInsuranceProducts} alt="Insurance Partner products catalogue" label="Products Catalogue — 18 products across Motor, Health, Travel, Life & Home" />
            <SbScreen src={sbInsuranceDist} alt="Insurance Partner distribution network" label="Distribution Network — Active brokers, total sales, policies distributed" />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0' }}>
          {[
            { n: '01', t: 'At-a-glance KPIs', d: '5 stat cards surface the critical numbers immediately: total products, active policies, pending claims, total premium, and net revenue — all with month-on-month deltas.' },
            { n: '02', t: 'Product management', d: 'Insurers can create, configure, and publish products with premium ranges, coverage limits, and underwriting criteria. Status filters (Active / Pending / Inactive) keep the catalogue clean.' },
            { n: '03', t: 'Distribution visibility', d: 'The Distribution Network tab shows every active broker — their agent code, products sold, total policies, premium volume, and commission earned. Full transparency in one view.' },
            { n: '04', t: 'Granular role access', d: 'Five roles — Partner Admin, Underwriter, Claims Officer, Finance Officer, Compliance Officer — each with scoped permissions, so every team member sees only what they need.' },
            { n: '05', t: 'Claims workflow', d: 'Claims officers manage submissions, assess documents, communicate decisions, and track settlement status — all within the platform, reducing back-and-forth across external channels.' },
            { n: '06', t: 'Revenue trend chart', d: 'An 8-month revenue line chart and a grouped claims bar chart give the leadership team performance narrative without opening a spreadsheet.' },
          ].map((d, i) => (
            <div key={i} style={{ padding: '2rem 1.75rem', borderRight: (i + 1) % 3 !== 0 ? `1px solid ${C.border}` : 'none', borderBottom: i < 3 ? `1px solid ${C.border}` : 'none', borderTop: `1px solid ${C.border}` }}>
              <div style={{ fontFamily: C.font, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, marginBottom: '0.75rem' }}>{d.n}</div>
              <h4 style={{ fontFamily: C.font, fontSize: '0.92rem', fontWeight: 700, color: C.ink, margin: '0 0 0.5rem' }}>{d.t}</h4>
              <p style={{ fontFamily: C.font, fontSize: '0.82rem', lineHeight: 1.75, color: C.muted, margin: 0 }}>{d.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Broker Dashboard ── */}
      <section style={{ background: 'rgba(238,236,232,0.02)', borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem' }}>
          <SectionLabel>The Design — Broker Dashboard</SectionLabel>
          <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: C.ink, margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>
            Every tool a broker needs, in one place
          </h2>
          <p style={{ fontFamily: C.font, fontSize: '0.9rem', color: C.muted, margin: '0 0 3.5rem', maxWidth: '55ch', lineHeight: 1.75 }}>
            Brokers generate revenue by selling policies quickly and accurately. The dashboard is built for speed — surfacing quotes, policies, customer data, and commissions without a single redundant click.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3.5rem' }}>
            <SbScreen src={sbBrokersDashboard} alt="Broker dashboard overview" label="Dashboard Overview — Quotes, policies, claims, customers & commission at a glance" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="about-3col">
              <SbScreen src={sbBrokersCustomers} alt="Broker customers page" label="Customers — Full book of business with active policies, total spend & status" />
              <SbScreen src={sbBrokersWallet} alt="Broker wallet and earnings" label="Wallet — Available balance, pending commissions & full transaction history" />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0' }}>
            {[
              { n: '01', t: 'Quotes in seconds', d: 'Brokers generate quotes across multiple insurers simultaneously from the dashboard. Quote history is tracked with customer, product, premium, status, and date — all in one table.' },
              { n: '02', t: 'Customer management', d: 'A complete customer database with contact details, active policy count, total spend, and registration date. Search, filter by status, and generate quotes directly from a customer\'s record.' },
              { n: '03', t: 'Commission wallet', d: 'Available, pending, and total commission earnings are visible at a glance. A wallet summary bar breaks down the split between available, pending, and withdrawn funds.' },
              { n: '04', t: 'Three performance charts', d: 'Quotes Generated, Policies Issued, and Commission Trend are charted independently — giving the broker a clear performance narrative across the same time period.' },
              { n: '05', t: 'API Keys access', d: 'Brokers can self-manage their API credentials from within the portal — enabling technical teams to integrate without contacting support.' },
              { n: '06', t: 'Claims submission', d: 'Brokers submit and track claims on behalf of customers — uploading supporting documents, communicating claim status, and monitoring resolution — all without leaving the platform.' },
            ].map((d, i) => (
              <div key={i} style={{ padding: '2rem 1.75rem', borderRight: (i + 1) % 3 !== 0 ? `1px solid ${C.border}` : 'none', borderBottom: i < 3 ? `1px solid ${C.border}` : 'none', borderTop: `1px solid ${C.border}` }}>
                <div style={{ fontFamily: C.font, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, marginBottom: '0.75rem' }}>{d.n}</div>
                <h4 style={{ fontFamily: C.font, fontSize: '0.92rem', fontWeight: 700, color: C.ink, margin: '0 0 0.5rem' }}>{d.t}</h4>
                <p style={{ fontFamily: C.font, fontSize: '0.82rem', lineHeight: 1.75, color: C.muted, margin: 0 }}>{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Design System & API Design ── */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem' }}>
        <SectionLabel>Design Decisions</SectionLabel>
        <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: C.ink, margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>
          Principles that held across five user groups
        </h2>
        <p style={{ fontFamily: C.font, fontSize: '0.9rem', color: C.muted, margin: '0 0 3.5rem', maxWidth: '55ch', lineHeight: 1.75 }}>
          Designing for multiple user groups under one brand required a strict visual language — so users feel consistency even when the features differ entirely.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="about-3col">
          {[
            { n: '01', t: 'Shared design language, different contexts', d: 'All dashboards share the same navigation pattern, stat card structure, table format, and status badge system — so onboarding from one portal to another is instant. The green sidebar accent changes per user group to provide orientation without redesigning the shell.' },
            { n: '02', t: 'Role-based access baked into the design', d: 'Every screen was designed with role constraints in mind. A Viewer never sees action buttons. A Claims Officer sees claims, not financials. The UI enforces permissions — not just the backend — so users are never left wondering what they can or can\'t do.' },
            { n: '03', t: 'Data density without cognitive overload', d: 'Enterprise dashboards need density, but density without hierarchy creates noise. I used progressive disclosure — KPI cards at the top, charts in the middle, detailed tables below — so users can stop reading at the level of detail they need.' },
            { n: '04', t: 'Developer-first API documentation', d: 'The Developer Portal was designed for both technical and non-technical users. Endpoint docs include request parameters, response structures, error codes, and sample code — with a sandbox environment and structured production approval workflow.' },
          ].map((d, i) => (
            <div key={i} style={{ padding: '2.5rem', background: C.panel, border: `1px solid ${C.border}`, borderRadius: 12 }}>
              <div style={{ fontFamily: C.font, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, marginBottom: '1rem' }}>{d.n}</div>
              <h4 style={{ fontFamily: C.font, fontSize: '1rem', fontWeight: 700, color: C.ink, margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{d.t}</h4>
              <p style={{ fontFamily: C.font, fontSize: '0.85rem', lineHeight: 1.8, color: C.muted, margin: 0 }}>{d.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── What I learned ── */}
      <section style={{ background: 'rgba(238,236,232,0.02)', borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem' }}>
          <SectionLabel>Reflections</SectionLabel>
          <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: C.ink, margin: '0 0 3rem', letterSpacing: '-0.02em' }}>
            What designing for infrastructure taught me
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="about-3col">
            {[
              { n: '01', t: 'Complexity is a design problem', d: 'Insurance infrastructure is inherently complex — multiple user types, overlapping permissions, regulated data. The designer\'s job is to absorb that complexity and hide it from the user. If a broker has to read a manual to generate a quote, the design has failed.' },
              { n: '02', t: 'Consistency across contexts is harder than it looks', d: 'Building five different dashboards that feel like one product required ruthless component discipline. Every deviation from the shared language — even a well-intentioned one — risks breaking the coherence that makes multi-product platforms trustworthy.' },
              { n: '03', t: 'Design for the role, not just the person', d: 'Enterprise users don\'t use products the way consumers do. A Finance Officer at Leadway Assurance has a specific job to do, and the product needs to get out of their way. Designing for roles rather than generic users made every decision cleaner and more defensible.' },
              { n: '04', t: 'API design is UX design', d: 'Designing the Developer Portal and API documentation forced me to think about the developer experience as a product experience. Confusing docs, unclear error codes, and poor sandbox access are just as damaging as a broken UI — they just affect a different user.' },
            ].map((l, i) => (
              <div key={i} style={{ padding: '2.5rem', background: C.panel, border: `1px solid ${C.border}`, borderRadius: 12 }}>
                <div style={{ fontFamily: C.font, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, marginBottom: '1rem' }}>{l.n}</div>
                <h4 style={{ fontFamily: C.font, fontSize: '1.05rem', fontWeight: 700, color: C.ink, margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{l.t}</h4>
                <p style={{ fontFamily: C.font, fontSize: '0.85rem', lineHeight: 1.8, color: C.muted, margin: 0 }}>{l.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Next Project CTA ── */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '6rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <p style={{ fontFamily: C.font, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.dim, margin: '0 0 0.5rem' }}>Back to start</p>
          <h2 style={{ fontFamily: C.font, fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)', fontWeight: 800, color: C.ink, margin: 0, letterSpacing: '-0.025em' }}>ProsHQ →</h2>
          <p style={{ fontFamily: C.font, fontSize: '0.85rem', color: C.muted, margin: '0.5rem 0 0' }}>Vetted service marketplace</p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button className="pill pill-ghost" onClick={() => setPage('projects')}>All Projects</button>
          <button className="pill pill-gold" onClick={() => setPage('proshq')}>View ProsHQ →</button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// ── App Root ──────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage]         = useState<Page>('home')
  const [contact, setContact]   = useState(false)
  const [cursorX, setCursorX]   = useState(0)
  const [cursorY, setCursorY]   = useState(0)

  const go = (p: Page) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Track cursor for ambient glow
  useEffect(() => {
    const fn = (e: MouseEvent) => { setCursorX(e.clientX); setCursorY(e.clientY) }
    window.addEventListener('mousemove', fn)
    return () => window.removeEventListener('mousemove', fn)
  }, [])

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = contact ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [contact])

  return (
    <div style={{ background: C.bg, minHeight: '100vh', position: 'relative' }}>
      <Ambient cursorX={cursorX} cursorY={cursorY} />
      <Nav page={page} setPage={go} onContact={() => setContact(true)} />

      {page === 'home'     && <HomePage     setPage={go} onContact={() => setContact(true)} />}
      {page === 'about'    && <AboutPage    setPage={go} />}
      {page === 'projects' && <ProjectsPage setPage={go} />}
      {page === 'myqura'   && <MyQuraPage   setPage={go} />}
      {page === 'proshq'   && <ProsHQPage   setPage={go} />}
      {page === 'surebase' && <SurebasePage setPage={go} />}

      {contact && <ContactModal onClose={() => setContact(false)} />}
    </div>
  )
}
