import { useState } from 'react'
import { Link } from 'react-router-dom'

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function ChevronDown() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

const modules = [
  {
    title: "Comprendre l'intelligence artificielle",
    duration: '3h',
    content: [
      "Origines et évolution de l'IA (Turing, machine learning, deep learning, IA générative)",
      "Types d'IA : IA faible vs IA forte (AGI)",
      "Fonctionnement simplifié d'un modèle d'IA générative (tokens, paramètres, réseau neuronal)",
      'Panorama des solutions IA grand public',
      'Opportunités pour les TPE/PME : gains de temps et productivité',
      'Risques : hallucinations, cybersécurité, dépendance technologique',
    ],
  },
  {
    title: "Panorama des outils d'IA pour les dirigeants",
    duration: '3h',
    content: [
      'ChatGPT (OpenAI)',
      'Claude (Anthropic)',
      'Gemini (Google) et outils Google intégrant l\'IA',
      'Microsoft Copilot',
      'Canva AI',
      'Mistral AI / Le Chat (alternative française et européenne)',
      'Critères pour choisir le bon outil selon ses besoins',
    ],
  },
  {
    title: 'Rédiger des prompts efficaces',
    duration: '3h',
    content: [
      "Définition et importance du prompt",
      "Les composantes clés d'un bon prompt",
      'Du prompt faible au prompt parfait : exemple fil rouge',
      'Types de prompts : informatifs, créatifs, comparatifs',
      'Stratégies avancées et itération',
      'Les prompts à éviter (trop courts, sans contexte, ambigus, biaisés…)',
    ],
  },
  {
    title: "Optimiser les processus internes grâce à l'IA",
    duration: '4h',
    content: [
      "Communication & rédaction professionnelle assistée par IA",
      'Relation client et automatisation des réponses',
      'Analyser, résumer et organiser des documents',
      "Créer des visuels professionnels avec l'IA",
      'Automatisation des tâches répétitives',
      "Applications concrètes par secteur d'activité",
    ],
  },
  {
    title: 'Créer et utiliser un assistant IA personnalisé',
    duration: '4h',
    content: [
      'Différence entre usage classique et agent IA personnalisé',
      "Créer un agent IA dédié à son activité (réseaux sociaux, rédaction, relation client…)",
      'Tutoriel : configurer son propre assistant IA',
      'Session visioconférence : questions/réponses et corrections de configuration',
    ],
  },
  {
    title: 'Sécurité, éthique et conformité RGPD',
    duration: '2h',
    content: [
      'Comprendre les données sensibles et leur protection',
      'Le RGPD : cadre juridique et obligations pour les TPE/PME',
      "Ce qu'il est interdit d'introduire dans un outil IA",
      'Biais algorithmiques, deepfakes, risques psychosociaux',
      'Bonnes pratiques : anonymiser, vérifier, limiter les données',
      "Impact environnemental de l'IA et sobriété numérique",
      'Session visioconférence : ateliers conformité et cas concrets',
    ],
  },
  {
    title: "Construire un plan d'intégration de l'IA",
    duration: '2h',
    content: [
      "Identifier les processus de son entreprise automatisables",
      "Prioriser les cas d'usage à fort impact",
      'Construire une roadmap IA opérationnelle',
      "Évaluation finale des acquis et plan d'actions personnalisé",
    ],
  },
]

const practicalInfo = [
  { label: 'Durée', value: '21 heures' },
  { label: 'Tarif', value: '500 € HT par participant (600 € TTC)' },
  { label: 'Prérequis', value: "Maîtrise des bases de l'informatique et d'Internet" },
  { label: 'Modalité', value: 'Format mixte\nE-learning sur LMS Moodle 24h/24\n+ Visio collective avec formateur' },
  { label: "Délai d'accès", value: '14 jours minimum après signature de la convention (délai légal de rétractation)' },
  {
    label: 'Format',
    value:
      'Mixte : modules e-learning sur Moodle + sessions visioconférence live + supports numériques + exercices pratiques + études de cas',
  },
  {
    label: 'Public',
    value: "Dirigeants TPE/PME, entrepreneurs, indépendants, responsables d'activité",
  },
  {
    label: 'Financement',
    value: 'Autofinancement — paiement en 4 fois sans frais — Finançable OPCO',
  },
]

const methods = [
  {
    icon: '🖥️',
    title: 'Sessions visioconférence',
    text: "Animées par un formateur expert. Sessions collectives dédiées à la pratique, aux questions et aux études de cas réels.",
  },
  {
    icon: '📖',
    title: 'Supports pédagogiques variés',
    text: 'Contenus écrits, guides pratiques, vidéos explicatives, quiz et exercices interactifs.',
  },
  {
    icon: '💼',
    title: 'Études de cas réels',
    text: "Mise en situation sur des cas concrets issus du quotidien des TPE/PME.",
  },
  {
    icon: '📄',
    title: 'Supports PDF téléchargeables',
    text: 'Un support PDF par module pour faciliter la mise en application après la formation.',
  },
]

const evaluations = [
  'Quiz et QCM à la fin de chaque module',
  'Exercices pratiques et mises en situation',
  'Auto-évaluation en début et fin de formation',
  "Grille d'évaluation et travaux pratiques",
  'Échanges avec le formateur',
  "Évaluation finale des acquis",
  "Plan d'actions personnalisé remis à chaque participant",
]

const registrationSteps = [
  'Vous soumettez une demande via le formulaire en ligne ou par email',
  "Nairox Formation vous contacte pour échanger sur vos besoins et valider l'adéquation de la formation",
  'Vous recevez une convention de formation à signer',
  "Vous effectuez le règlement selon les modalités convenues (paiement en 4 fois sans frais possible)",
  "Après validation, vous recevez vos accès à la formation par email",
]

function ModuleAccordion() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className="space-y-3">
      {modules.map((module, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm"
        >
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors gap-4"
          >
            <div className="flex items-center gap-4 min-w-0">
              <span className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                {i + 1}
              </span>
              <div className="min-w-0">
                <span className="font-semibold text-navy-900 text-sm">{module.title}</span>
                <span className="text-gray-400 text-xs ml-2">— {module.duration}</span>
              </div>
            </div>
            <span
              className={`text-violet-600 transition-transform duration-200 flex-shrink-0 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
            >
              <ChevronDown />
            </span>
          </button>

          {openIndex === i && (
            <div className="px-6 pb-6 border-t border-gray-100">
              <ul className="mt-4 space-y-2.5">
                {module.content.map((item, j) => (
                  <li key={j} className="flex gap-2.5 items-start text-gray-600 text-sm">
                    <span className="text-violet-600 mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function Formation() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-navy-900 via-violet-950 to-violet-800 text-white py-20 md:py-28 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-violet-300 text-xs font-semibold uppercase tracking-widest mb-5">
            Programme de formation
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Intégrer l'intelligence artificielle dans une TPE&nbsp;/ PME pour optimiser les
            processus et la productivité
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed">
            Une formation complète en format mixte, sans prérequis technique, conçue pour les
            professionnels qui veulent exploiter le plein potentiel de l'IA.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['21h de formation', '500 € HT', 'Format mixte', '0 prérequis'].map((badge) => (
              <span
                key={badge}
                className="bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
          <a
            href="/catalogue-nairox-formation.pdf"
            download
            className="inline-flex items-center gap-2 bg-white text-violet-700 font-semibold text-sm px-6 py-3 rounded-full hover:bg-violet-50 transition-colors shadow-md"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Télécharger le catalogue PDF
          </a>
        </div>
      </section>

      {/* ── INFOS PRATIQUES ── */}
      <section className="bg-gradient-to-br from-violet-50/40 via-white to-white py-16 px-4" id="infos">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title mb-8">Informations pratiques</h2>
          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            {practicalInfo.map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6 px-6 py-4 ${
                  i % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } ${i < practicalInfo.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <span className="font-semibold text-navy-900 text-sm sm:w-44 flex-shrink-0">
                  {item.label}
                </span>
                <span className="text-gray-600 text-sm whitespace-pre-line">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMME ── */}
      <section className="bg-gradient-to-br from-white to-violet-50 py-16 px-4" id="programme">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h2 className="section-title mb-3">Le programme</h2>
            <p className="text-gray-500 text-sm">
              7 modules progressifs pour passer de zéro à une intégration opérationnelle de l'IA
              dans votre entreprise.
            </p>
          </div>
          <ModuleAccordion />
        </div>
      </section>

      {/* ── MÉTHODES ── */}
      <section className="bg-gradient-to-br from-violet-50/30 to-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title mb-10 text-center">
            Comment se déroule la formation ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methods.map((m) => (
              <div
                key={m.title}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-violet-300 transition-colors"
              >
                <div className="text-3xl mb-4">{m.icon}</div>
                <h3 className="font-bold text-navy-900 text-sm mb-2">{m.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÉVALUATION ── */}
      <section className="bg-gradient-to-br from-white to-violet-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title mb-8">Modalités d'évaluation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {evaluations.map((item, i) => (
              <div key={i} className="flex gap-3 items-start bg-white rounded-xl px-4 py-3 border border-gray-200">
                <CheckIcon />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-navy-900 text-white rounded-2xl p-6 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">📜</span>
            <div>
              <h3 className="font-bold text-lg mb-2">Attestation de fin de formation</h3>
              <p className="text-white/75 text-sm leading-relaxed">
                Une attestation mentionnant la nature, la durée et les compétences acquises est
                remise à chaque participant ayant suivi l'intégralité du programme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINANCEMENT ── */}
      <section className="bg-gradient-to-br from-violet-50/20 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title mb-6">Paiement</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            La formation est réglée directement par l'apprenant ou son entreprise. Un échelonnement
            en 4 fois sans frais est disponible sur demande.
          </p>
          <div className="bg-violet-50 border border-violet-200 rounded-2xl p-6">
            <h3 className="font-bold text-navy-900 text-lg mb-5">Paiement en 4 fois sans frais</h3>
            <div className="space-y-3">
              {[
                { label: "À la signature (après délai de rétractation de 14 jours)", amount: '150 € TTC' },
                { label: "À l'issue du Jour 1", amount: '150 € TTC' },
                { label: "À l'issue du Jour 2", amount: '150 € TTC' },
                { label: "À l'issue du Jour 3 (solde)", amount: '150 € TTC' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center border-b border-violet-200 pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-gray-700 text-sm">{item.label}</span>
                  <span className="font-semibold text-navy-900 text-sm">{item.amount}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-3">
                <span className="font-bold text-navy-900">Total</span>
                <span className="font-bold text-violet-700 text-xl">600 € TTC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACCESSIBILITÉ ── */}
      <section className="bg-gradient-to-br from-white to-violet-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title mb-6">
            Accessibilité aux personnes en situation de handicap
          </h2>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Nairox Formation s'engage à garantir l'accessibilité de ses formations aux personnes
              en situation de handicap. Un référent handicap est désigné au sein de l'organisme afin
              d'étudier toute demande d'adaptation. Les besoins spécifiques sont analysés en amont
              de l'entrée en formation et peuvent donner lieu à des aménagements pédagogiques et
              organisationnels (adaptation des supports, aménagement du rythme, modalités
              d'accompagnement spécifiques).
            </p>
            <div className="border-t border-gray-100 pt-4 space-y-2">
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-3">Référents handicap</p>
              <div>
                <p className="text-sm text-gray-700 font-medium">Arsène Lecoq Martin</p>
                <a href="mailto:arsene.lecoq9@gmail.com" className="text-xs text-violet-600 hover:text-violet-700 transition-colors">arsene.lecoq9@gmail.com</a>
                <span className="text-xs text-gray-400 mx-1">·</span>
                <a href="tel:0614380522" className="text-xs text-gray-500 hover:text-violet-500 transition-colors">06 14 38 05 22</a>
              </div>
              <div>
                <p className="text-sm text-gray-700 font-medium">Fatima Namane</p>
                <a href="mailto:referent.h.nairoxformation@gmail.com" className="text-xs text-violet-600 hover:text-violet-700 transition-colors">referent.h.nairoxformation@gmail.com</a>
                <span className="text-xs text-gray-400 mx-1">·</span>
                <a href="tel:0664762332" className="text-xs text-gray-500 hover:text-violet-500 transition-colors">06 64 76 23 32</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDICATEURS ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title mb-2">Indicateurs de résultats</h2>
          <p className="text-gray-500 text-sm mb-8">
            Données à date du 31 mars 2026 — Sur la base de 1 session pilote (1 apprenant)
          </p>
          <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm mb-8">
            {[
              { label: "Nombre d'apprenants formés", value: '1' },
              { label: 'Taux de satisfaction global', value: '100 % (5/5)' },
              { label: "Taux d'atteinte des objectifs pédagogiques", value: '100 %' },
              { label: 'Progression moyenne (QCM initial → QCM final)', value: '+4 points (de 6/10 à 10/10, soit +40 %)' },
              { label: 'Taux de recommandation', value: '100 %' },
              { label: "Taux d'abandon", value: '0 %' },
            ].map((row, i) => (
              <div
                key={row.label}
                className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 px-6 py-4 ${
                  i % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } border-b border-gray-100 last:border-0`}
              >
                <span className="text-gray-700 text-sm flex-1">{row.label}</span>
                <span className="font-bold text-violet-700 text-sm sm:text-right whitespace-nowrap">{row.value}</span>
              </div>
            ))}
          </div>
          <div className="bg-violet-50 border border-violet-100 rounded-2xl p-6 space-y-3 text-sm text-gray-600 leading-relaxed">
            <p><span className="font-semibold text-navy-900">Méthode de recueil :</span> bilan de satisfaction obligatoire à l'issue de chaque formation (échelle 1 à 5), évaluations en cours de formation (7 exercices sur grille /20, seuil 14/20), QCM de positionnement initial et final.</p>
            <p><span className="font-semibold text-navy-900">Mise à jour :</span> ces indicateurs sont mis à jour à chaque nouvelle session clôturée.</p>
            <p><span className="font-semibold text-navy-900">Transparence :</span> conformément à notre démarche de certification Qualiopi, nous publions ces chiffres en toute transparence, en précisant la volumétrie sur laquelle ils sont calculés.</p>
          </div>
        </div>
      </section>

      {/* ── FOAD ── */}
      <section className="bg-navy-900 py-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/70 text-sm font-medium tracking-wide uppercase">
            Formation FOAD — E-learning &amp; visioconférences
          </p>
        </div>
      </section>

      {/* ── INSCRIPTION ── */}
      <section className="bg-gradient-to-br from-violet-50/30 to-white py-16 px-4" id="inscription">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title mb-10 text-center">Comment s'inscrire ?</h2>
          <div className="space-y-4 mb-12">
            {registrationSteps.map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <p className="text-gray-700 text-sm">{step}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/contact" className="inline-block btn-primary px-10 py-4 text-base">
              Démarrer mon inscription
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
