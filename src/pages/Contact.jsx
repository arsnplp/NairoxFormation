import { useState } from 'react'
import { Link } from 'react-router-dom'

const profils = [
  'Dirigeant TPE/PME',
  'Auto-entrepreneur',
  'Profession libérale',
  'Salarié',
  'Autre',
]

const secteurs = [
  'Commerce / Distribution',
  'Santé / Paramédical',
  'BTP / Artisanat',
  'Juridique / Conseil',
  'Communication / Marketing',
  'Finance / Comptabilité',
  'Immobilier',
  'Restauration / Hôtellerie',
  'Éducation / Formation',
  'Tech / Informatique',
  'Agriculture',
  'Transport / Logistique',
  'Industrie / Production',
  'Beauté / Bien-être',
  'Autre',
]

const departements = [
  '01 - Ain', '02 - Aisne', '03 - Allier', '04 - Alpes-de-Haute-Provence',
  '05 - Hautes-Alpes', '06 - Alpes-Maritimes', '07 - Ardèche', '08 - Ardennes',
  '09 - Ariège', '10 - Aube', '11 - Aude', '12 - Aveyron',
  '13 - Bouches-du-Rhône', '14 - Calvados', '15 - Cantal', '16 - Charente',
  '17 - Charente-Maritime', '18 - Cher', '19 - Corrèze', '21 - Côte-d\'Or',
  '22 - Côtes-d\'Armor', '23 - Creuse', '24 - Dordogne', '25 - Doubs',
  '26 - Drôme', '27 - Eure', '28 - Eure-et-Loir', '29 - Finistère',
  '2A - Corse-du-Sud', '2B - Haute-Corse', '30 - Gard', '31 - Haute-Garonne',
  '32 - Gers', '33 - Gironde', '34 - Hérault', '35 - Ille-et-Vilaine',
  '36 - Indre', '37 - Indre-et-Loire', '38 - Isère', '39 - Jura',
  '40 - Landes', '41 - Loir-et-Cher', '42 - Loire', '43 - Haute-Loire',
  '44 - Loire-Atlantique', '45 - Loiret', '46 - Lot', '47 - Lot-et-Garonne',
  '48 - Lozère', '49 - Maine-et-Loire', '50 - Manche', '51 - Marne',
  '52 - Haute-Marne', '53 - Mayenne', '54 - Meurthe-et-Moselle', '55 - Meuse',
  '56 - Morbihan', '57 - Moselle', '58 - Nièvre', '59 - Nord',
  '60 - Oise', '61 - Orne', '62 - Pas-de-Calais', '63 - Puy-de-Dôme',
  '64 - Pyrénées-Atlantiques', '65 - Hautes-Pyrénées', '66 - Pyrénées-Orientales',
  '67 - Bas-Rhin', '68 - Haut-Rhin', '69 - Rhône', '70 - Haute-Saône',
  '71 - Saône-et-Loire', '72 - Sarthe', '73 - Savoie', '74 - Haute-Savoie',
  '75 - Paris', '76 - Seine-Maritime', '77 - Seine-et-Marne', '78 - Yvelines',
  '79 - Deux-Sèvres', '80 - Somme', '81 - Tarn', '82 - Tarn-et-Garonne',
  '83 - Var', '84 - Vaucluse', '85 - Vendée', '86 - Vienne',
  '87 - Haute-Vienne', '88 - Vosges', '89 - Yonne', '90 - Territoire de Belfort',
  '91 - Essonne', '92 - Hauts-de-Seine', '93 - Seine-Saint-Denis',
  '94 - Val-de-Marne', '95 - Val-d\'Oise',
  '971 - Guadeloupe', '972 - Martinique', '973 - Guyane',
  '974 - La Réunion', '976 - Mayotte',
]

const initialForm = {
  profil: '',
  secteur: '',
  prenom: '',
  nom: '',
  email: '',
  telephone: '',
  departement: '',
  message: '',
  rgpdConsent: false,
  cgvConsent: false,
}

function Label({ children, required }) {
  return (
    <label className="form-label">
      {children}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
  )
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.rgpdConsent || !form.cgvConsent) {
      setError(
        'Veuillez accepter la politique de confidentialité et les CGV pour envoyer votre demande.'
      )
      return
    }
    setError('')
    setLoading(true)
    try {
      const res = await fetch('https://formspree.io/f/xbdbryda', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitted(true)
        window.scrollTo(0, 0)
      } else {
        setError("Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.")
      }
    } catch {
      setError("Impossible d'envoyer la demande. Vérifiez votre connexion et réessayez.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-[70vh] bg-gray-50 flex items-center justify-center px-4 py-16">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-10 max-w-lg w-full text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-navy-900 mb-3">Demande envoyée !</h2>
          <p className="text-gray-600 mb-2">
            Votre demande a bien été envoyée. Nous vous répondons sous 48h ouvrées.
          </p>
          <p className="text-gray-400 text-sm mb-8">arsene.lecoq8@gmail.com</p>
          <Link
            to="/"
            className="inline-block btn-primary px-6 py-3 text-sm"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-navy-900 via-violet-950 to-violet-800 text-white py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-violet-300 text-xs font-semibold uppercase tracking-widest mb-4">
            Échange gratuit · Sans engagement
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Nous contacter</h1>
          <p className="text-white/75 text-lg max-w-xl mx-auto">
            Une question sur la formation ? Besoin d'un devis ? Notre équipe vous répond sous 48h
            ouvrées.
          </p>
        </div>
      </section>

      {/* ── CONTENU ── */}
      <section className="bg-gradient-to-br from-white via-violet-50/40 to-violet-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Colonne gauche — infos */}
            <div className="lg:col-span-1">
              <h2 className="text-lg font-bold text-navy-900 mb-6">Nos coordonnées</h2>
              <div className="space-y-5">
                {[
                  {
                    icon: '📧',
                    label: 'Email',
                    content: (
                      <a
                        href="mailto:arsene.lecoq8@gmail.com"
                        className="text-violet-600 hover:text-violet-700 font-medium text-sm transition-colors"
                      >
                        arsene.lecoq8@gmail.com
                      </a>
                    ),
                  },
                  {
                    icon: '📍',
                    label: 'Adresse',
                    content: (
                      <p className="text-gray-700 text-sm">
                        53 Rue des Alouettes
                        <br />
                        92000 Nanterre
                      </p>
                    ),
                  },
                  {
                    icon: '🕐',
                    label: 'Délai de réponse',
                    content: <p className="text-gray-700 text-sm">Sous 48h ouvrées</p>,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-bold text-navy-900 text-sm mb-4">L'équipe</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-navy-900 text-sm">Arsène Lecoq Martin</p>
                    <p className="text-xs text-gray-400 mt-0.5">Président · Référent Handicap</p>
                    <a href="mailto:arsene.lecoq9@gmail.com" className="block text-xs text-violet-600 hover:text-violet-700 transition-colors mt-0.5">
                      arsene.lecoq9@gmail.com
                    </a>
                    <a href="tel:0614380522" className="block text-xs text-gray-500 hover:text-violet-500 transition-colors mt-0.5">
                      06 14 38 05 22
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 text-sm">Fatima Namane</p>
                    <p className="text-xs text-gray-400 mt-0.5">Directrice Générale · Référente Handicap</p>
                    <a href="mailto:referent.h.nairoxformation@gmail.com" className="block text-xs text-violet-600 hover:text-violet-700 transition-colors mt-0.5">
                      referent.h.nairoxformation@gmail.com
                    </a>
                    <a href="tel:0664762332" className="block text-xs text-gray-500 hover:text-violet-500 transition-colors mt-0.5">
                      06 64 76 23 32
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne droite — formulaire */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
                <h2 className="text-lg font-bold text-navy-900 mb-6">Formulaire de contact</h2>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 mb-6 text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label required>Vous êtes</Label>
                      <select
                        name="profil"
                        value={form.profil}
                        onChange={handleChange}
                        required
                        className="form-input"
                      >
                        <option value="">Sélectionnez…</option>
                        {profils.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label required>Secteur d'activité</Label>
                      <select
                        name="secteur"
                        value={form.secteur}
                        onChange={handleChange}
                        required
                        className="form-input"
                      >
                        <option value="">Sélectionnez…</option>
                        {secteurs.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label required>Prénom</Label>
                      <input
                        type="text"
                        name="prenom"
                        value={form.prenom}
                        onChange={handleChange}
                        required
                        placeholder="Votre prénom"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <Label required>Nom</Label>
                      <input
                        type="text"
                        name="nom"
                        value={form.nom}
                        onChange={handleChange}
                        required
                        placeholder="Votre nom"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label required>Email</Label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="votre@email.fr"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <Label required>Téléphone</Label>
                      <input
                        type="tel"
                        name="telephone"
                        value={form.telephone}
                        onChange={handleChange}
                        required
                        placeholder="06 12 34 56 78"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <Label required>Département</Label>
                    <select
                      name="departement"
                      value={form.departement}
                      onChange={handleChange}
                      required
                      className="form-input"
                    >
                      <option value="">Sélectionnez votre département…</option>
                      {departements.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label>Message / Questions</Label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Décrivez votre situation, vos besoins, vos questions…"
                      className="form-input resize-none"
                    />
                  </div>

                  <div className="space-y-3 pt-1">
                    <label className="flex gap-3 cursor-pointer items-start">
                      <input
                        type="checkbox"
                        name="rgpdConsent"
                        checked={form.rgpdConsent}
                        onChange={handleChange}
                        className="mt-0.5 w-4 h-4 rounded border-gray-300 text-violet-600 focus:ring-violet-400 flex-shrink-0"
                      />
                      <span className="text-xs text-gray-600 leading-relaxed">
                        J'accepte que mes données personnelles soient utilisées pour traiter ma
                        demande, conformément à la{' '}
                        <Link
                          to="/politique-confidentialite"
                          className="text-violet-600 underline hover:text-violet-700"
                        >
                          politique de confidentialité
                        </Link>
                        . Ces données ne seront pas transmises à des tiers.{' '}
                        <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <label className="flex gap-3 cursor-pointer items-start">
                      <input
                        type="checkbox"
                        name="cgvConsent"
                        checked={form.cgvConsent}
                        onChange={handleChange}
                        className="mt-0.5 w-4 h-4 rounded border-gray-300 text-violet-600 focus:ring-violet-400 flex-shrink-0"
                      />
                      <span className="text-xs text-gray-600 leading-relaxed">
                        J'ai lu et j'accepte les{' '}
                        <Link
                          to="/cgv"
                          className="text-violet-600 underline hover:text-violet-700"
                        >
                          Conditions Générales de Vente
                        </Link>
                        . <span className="text-red-500">*</span>
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary py-4 text-base mt-1 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading && (
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                    )}
                    {loading ? 'Envoi en cours…' : 'Envoyer ma demande'}
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    Réponse sous 48h ouvrées · arsene.lecoq8@gmail.com
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
