import { Link } from 'react-router-dom'

const legalLinks = [
  { to: '/mentions-legales', label: 'Mentions légales' },
  { to: '/cgu', label: 'CGU' },
  { to: '/cgv', label: 'CGV' },
  { to: '/politique-confidentialite', label: 'Politique de confidentialité' },
  { to: '/reglement-interieur', label: 'Règlement intérieur stagiaires' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-navy-900 via-violet-950 to-violet-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          {/* Logo + description */}
          <div className="lg:col-span-2">
            <div className="text-xl font-bold mb-4">
              <span className="text-violet-600">Nairox</span>{' '}
              <span className="font-medium">Formation</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Organisme de formation spécialisé dans l'intelligence artificielle pour les dirigeants,
              professions libérales et collaborateurs de TPE/PME.
            </p>
          </div>

          {/* Informations légales */}
          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">
              Informations légales
            </h4>
            <div className="space-y-2.5 text-sm">
              <div>
                <p className="text-white/40 text-xs mb-0.5">Déclaration d'activité</p>
                <p className="text-white/80">11923079592</p>
              </div>
              <div>
                <p className="text-white/40 text-xs mb-0.5">SIRET</p>
                <p className="text-white/80">99523756700012</p>
              </div>
              <div>
                <p className="text-white/40 text-xs mb-0.5">Adresse</p>
                <p className="text-white/80">53 Rue des Alouettes<br />92000 Nanterre</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">
              Contact
            </h4>
            <div className="space-y-2.5 text-sm">
              <a
                href="mailto:arsene.lecoq8@gmail.com"
                className="block text-violet-400 hover:text-violet-300 transition-colors"
              >
                arsene.lecoq8@gmail.com
              </a>
              <p className="text-white/60">Formation FOAD — E-learning &amp; visioconférences</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-white/40 hover:text-white/70 text-xs transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-white/30 text-xs flex-shrink-0">
            © 2026 Nairox Formation — Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  )
}
