import { Link } from 'react-router-dom'

function CheckIcon({ className = 'text-emerald-500' }) {
  return (
    <svg
      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function GradientText({ children }) {
  return (
    <span className="bg-gradient-to-r from-violet-400 to-violet-700 bg-clip-text text-transparent">
      {children}
    </span>
  )
}


const objectives = [
  "Comprendre les principes fondamentaux de l'IA et de l'IA générative appliqués aux TPE/PME",
  "Identifier et comparer les principaux outils d'IA générative adaptés aux besoins de votre entreprise",
  "Formuler des prompts clairs, structurés et efficaces pour obtenir des résultats exploitables",
  "Utiliser l'IA pour optimiser les processus internes de l'entreprise",
  "Identifier des leviers concrets de gain de temps et de productivité",
  "Configurer et utiliser un assistant IA personnalisé adapté à votre activité",
  "Utiliser l'IA de manière responsable, sécurisée et conforme au RGPD",
  "Construire un plan d'intégration opérationnel de l'IA au sein de votre entreprise",
]

const audiences = [
  { emoji: '🏢', title: 'Dirigeants de TPE & PME' },
  { emoji: '🚀', title: 'Auto-entrepreneurs & Freelances' },
  { emoji: '⚖️', title: 'Professions libérales (avocats, consultants, agents immobiliers…)' },
  { emoji: '👥', title: 'Collaborateurs souhaitant monter en compétences' },
]

const teamMembers = [
  {
    name: 'Arsène Lecoq Martin',
    role: 'Président — Référent Administratif, Pédagogique et Référent Handicap',
    emailContact: 'arsene.lecoq8@gmail.com',
    emailHandicap: 'arsene.lecoq9@gmail.com',
    phone: '06 14 38 05 22',
    photo: '/arsene.png',
  },
  {
    name: 'Fatima Namane',
    role: 'Directrice Générale — Référente Administrative, Pédagogique et Référente Handicap',
    emailContact: 'fnamane@hotmail.fr',
    emailHandicap: 'referent.h.nairoxformation@gmail.com',
    phone: '06 64 76 23 32',
    photo: '/fatima.jpg',
  },
]

const whyCards = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    title: "L'IA s'impose partout",
    text: "L'intelligence artificielle transforme toutes les façons de travailler. Les TPE et PME qui ne s'y préparent pas aujourd'hui prendront du retard demain.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Gagnez en productivité',
    text: "Automatisez les tâches répétitives, rédigez plus vite, construisez un assistant IA personnalisé adapté à votre activité.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Utilisez l'IA en confiance",
    text: "Comprendre les limites, les risques et les règles RGPD pour adopter l'IA avec discernement et sécurité dans votre entreprise.",
  },
]

export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden text-white py-24 md:py-32 px-4">
        {/* Image de fond légèrement floutée */}
        <div
          className="absolute inset-0 scale-105 blur-[3px]"
          style={{ backgroundImage: "url('/fondsitenairox.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        {/* Overlay dégradé navy→violet pour lisibilité */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-5xl mx-auto text-center" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.6)' }}>
          <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-5">
            Organisme de formation — Intelligence Artificielle
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
            Intégrer l'intelligence artificielle{' '}
            <span className="text-white">dans votre TPE&nbsp;/ PME</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Comprendre, maîtriser et déployer l'IA pour optimiser vos processus et votre
            productivité.{' '}
            <strong className="text-white font-semibold">Sans prérequis technique.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/formation" className="btn-primary px-8 py-4 text-base">
              Voir le programme
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
            >
              Nous contacter
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { value: '21h', label: 'de formation' },
              { value: 'Format mixte', label: 'E-learning sur LMS Moodle 24h/24\n+ Visio collective avec formateur' },
              { value: '0', label: 'prérequis technique' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5"
              >
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/80 text-sm whitespace-pre-line">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POURQUOI ── */}
      <section className="bg-gradient-to-br from-white to-violet-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title">
              L'IA transforme le monde du travail.{' '}
              <GradientText>Soyez prêt.</GradientText>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-8 border border-violet-100 shadow-sm hover:shadow-md hover:border-violet-200 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-violet-50 to-violet-100 text-violet-600 rounded-xl flex items-center justify-center mb-5">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OBJECTIFS ── */}
      <section className="bg-gradient-to-br from-violet-50/60 via-white to-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-violet-500 text-xs font-semibold uppercase tracking-widest mb-3">
              Objectifs pédagogiques
            </p>
            <h2 className="section-title">
              Ce que vous allez <GradientText>apprendre</GradientText>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {objectives.map((obj, i) => (
              <div key={i} className="flex gap-3 items-start bg-white rounded-xl p-4 border border-violet-100 shadow-sm">
                <CheckIcon />
                <p className="text-gray-700 text-sm leading-relaxed">{obj}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/formation" className="btn-navy px-8 py-4 text-sm inline-block">
              Voir le programme complet →
            </Link>
          </div>
        </div>
      </section>

      {/* ── À QUI ── */}
      <section className="bg-gradient-to-br from-white via-violet-50/40 to-violet-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              À qui s'adresse <GradientText>cette formation ?</GradientText>
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              Dirigeants de TPE/PME, entrepreneurs, indépendants et collaborateurs souhaitant
              intégrer l'IA dans leur activité.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="bg-white rounded-2xl p-6 border border-violet-100 shadow-sm text-center hover:border-violet-300 hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-4">{a.emoji}</div>
                <h3 className="font-semibold text-navy-900 text-sm leading-snug">{a.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÉQUIPE ── */}
      <section className="bg-gradient-to-br from-violet-50/30 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">
              L'équipe <GradientText>Nairox Formation</GradientText>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {teamMembers.map((person) => (
              <div
                key={person.name}
                className="bg-white rounded-2xl border border-violet-100 shadow-sm overflow-hidden"
              >
                <div className="p-8 flex flex-col items-center text-center">
                  <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-violet-100 mb-5 flex-shrink-0">
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900">{person.name}</h3>
                  <p className="text-gray-500 text-xs mt-2 mb-5 leading-relaxed max-w-xs">{person.role}</p>
                  <div className="space-y-2">
                    <a
                      href={`mailto:${person.emailContact}`}
                      className="flex items-center gap-2 text-violet-500 hover:text-violet-600 text-sm font-medium transition-colors justify-center"
                    >
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      {person.emailContact}
                    </a>
                    <a
                      href={`mailto:${person.emailHandicap}`}
                      className="flex items-center gap-2 text-violet-400 hover:text-violet-500 text-xs transition-colors justify-center"
                    >
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      {person.emailHandicap}
                      <span className="text-gray-300 text-xs">(handicap)</span>
                    </a>
                    <a
                      href={`tel:${person.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 text-gray-400 hover:text-violet-500 text-sm transition-colors justify-center"
                    >
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      {person.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs italic max-w-2xl mx-auto leading-relaxed">
            Les indicateurs de performance (taux de satisfaction, taux de complétion) seront publiés
            à l'issue des premières sessions.
          </p>
        </div>
      </section>

      {/* ── SESSIONS ── */}
      <section className="bg-gradient-to-br from-white to-violet-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title mb-10">
            Prochaines <GradientText>sessions</GradientText>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {['Avril 2026', 'Mai 2026', 'Juin 2026'].map((session) => (
              <div
                key={session}
                className="bg-white border-2 border-violet-400 rounded-2xl px-10 py-6 flex-1 max-w-xs mx-auto sm:mx-0 hover:border-violet-400 transition-colors"
              >
                <div className="text-violet-600 font-bold text-xl">{session}</div>
                <div className="text-gray-400 text-xs mt-1">Session prévisionnelle</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINALE ── */}
      <section className="bg-gradient-to-br from-navy-900 via-violet-950 to-violet-800 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à intégrer l'IA{' '}
            <GradientText>dans votre activité ?</GradientText>
          </h2>
          <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Réservez un échange gratuit avec notre équipe. Nous identifions ensemble la meilleure
            approche pour votre entreprise.
          </p>
          <Link to="/contact" className="inline-block btn-primary px-10 py-4 text-lg mb-8">
            Nous contacter
          </Link>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {['Réponse sous 48h', 'Sans engagement', 'Accompagnement personnalisé'].map((badge) => (
              <span
                key={badge}
                className="bg-white/10 border border-white/20 text-white/85 text-sm px-5 py-2 rounded-full"
              >
                ✓ {badge}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
