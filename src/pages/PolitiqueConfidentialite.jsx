import { Link } from 'react-router-dom'

const SITE_URL = 'https://nairox-formation.fr'

function Hero() {
  return (
    <section className="bg-gradient-to-br from-navy-900 to-violet-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3">
          Document légal
        </p>
        <h1 className="text-3xl md:text-4xl font-bold">Politique de confidentialité</h1>
      </div>
    </section>
  )
}

function Section({ number, title, children }) {
  return (
    <div className="pb-8 border-b border-gray-100 last:border-0 last:pb-0">
      <h2 className="text-lg font-bold text-navy-900 mb-4">
        {number}. {title}
      </h2>
      <div className="text-sm text-gray-700 leading-relaxed space-y-3">{children}</div>
    </div>
  )
}

export default function PolitiqueConfidentialite() {
  return (
    <div>
      <Hero />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-8">

          <Section number="1" title="Responsable du traitement">
            <p>
              Le site accessible à l'adresse <span className="font-medium">{SITE_URL}</span> est édité par :
            </p>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-1.5">
              <p className="font-semibold text-gray-900">Nairox Formation</p>
              <p>Micro-entreprise — 53 rue des Alouettes, 92000 Nanterre</p>
              <p>SIREN : 995 237 567 — SIRET : 99523756700012</p>
              <p>
                Email :{' '}
                <a href="mailto:arsene.lecoq8@gmail.com" className="text-violet-600 hover:underline">
                  arsene.lecoq8@gmail.com
                </a>
              </p>
            </div>
            <p>Le responsable du traitement des données personnelles est Arsène Lecoq Martin (Nairox Formation).</p>
          </Section>

          <Section number="2" title="Objet de la politique">
            <p>
              Cette politique de confidentialité a pour but d'informer les utilisateurs (ci-après « Utilisateurs ») du Site sur :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>les données personnelles collectées lors de la navigation ou de l'utilisation des services ;</li>
              <li>la manière dont elles sont utilisées, partagées et protégées ;</li>
              <li>la durée pendant laquelle elles sont conservées ;</li>
              <li>les droits dont disposent les Utilisateurs concernant leurs données.</li>
            </ul>
          </Section>

          <Section number="3" title="Finalités du traitement">
            <p>Les données sont collectées pour :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>gérer les demandes d'information et les inscriptions aux formations ;</li>
              <li>assurer le suivi pédagogique et administratif ;</li>
              <li>établir les factures et respecter les obligations comptables ;</li>
              <li>améliorer l'expérience utilisateur et analyser la fréquentation du site ;</li>
              <li>envoyer des communications commerciales (avec consentement préalable) ;</li>
              <li>répondre aux obligations légales et réglementaires applicables aux organismes de formation.</li>
            </ul>
            <p>
              Les données identifiées comme obligatoires dans les formulaires conditionnent l'accès aux services proposés. À défaut de fourniture de ces informations, l'inscription à une formation ne pourra être traitée.
            </p>
          </Section>

          <Section number="4" title="Base légale du traitement">
            <p>Les données sont collectées et traitées sur les bases légales suivantes :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold text-gray-900">Le consentement</span> de l'Utilisateur pour l'envoi de communications commerciales et l'utilisation de cookies non essentiels. Ce consentement peut être retiré à tout moment.
              </li>
              <li>
                <span className="font-semibold text-gray-900">L'exécution d'un contrat</span> pour toutes les données nécessaires à la gestion de votre inscription et à la fourniture des services de formation.
              </li>
              <li>
                <span className="font-semibold text-gray-900">L'obligation légale</span> pour la conservation des factures et documents comptables conformément aux obligations fiscales françaises.
              </li>
              <li>
                <span className="font-semibold text-gray-900">L'intérêt légitime</span> de Nairox Formation pour l'amélioration de ses services et la sécurisation du Site.
              </li>
            </ul>
          </Section>

          <Section number="5" title="Durée de conservation">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-2">
              <div className="flex gap-4">
                <span className="text-gray-500 w-64 flex-shrink-0">Données de contact et inscription</span>
                <span className="font-medium text-gray-900">3 ans après la dernière interaction</span>
              </div>
              <div className="h-px bg-gray-200" />
              <div className="flex gap-4">
                <span className="text-gray-500 w-64 flex-shrink-0">Données de facturation</span>
                <span className="font-medium text-gray-900">10 ans (conformité légale)</span>
              </div>
              <div className="h-px bg-gray-200" />
              <div className="flex gap-4">
                <span className="text-gray-500 w-64 flex-shrink-0">Données de navigation / cookies</span>
                <span className="font-medium text-gray-900">Maximum 13 mois</span>
              </div>
              <div className="h-px bg-gray-200" />
              <div className="flex gap-4">
                <span className="text-gray-500 w-64 flex-shrink-0">Données statistiques anonymisées</span>
                <span className="font-medium text-gray-900">Durée indéfinie</span>
              </div>
            </div>
          </Section>

          <Section number="6" title="Sous-traitants">
            <p>Vos données peuvent être transmises aux prestataires suivants :</p>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-2">
              <div className="flex gap-4">
                <span className="text-gray-500 w-48 flex-shrink-0">Hébergeur du site</span>
                <span className="text-gray-900">Hostinger International Ltd — VPS (Chypre)</span>
              </div>
              <div className="h-px bg-gray-200" />
              <div className="flex gap-4">
                <span className="text-gray-500 w-48 flex-shrink-0">Plateforme LMS</span>
                <span className="text-gray-900">Moodle</span>
              </div>
              <div className="h-px bg-gray-200" />
              <div className="flex gap-4">
                <span className="text-gray-500 w-48 flex-shrink-0">Formulaire de contact</span>
                <span className="text-gray-900">Formspree</span>
              </div>
            </div>
          </Section>

          <Section number="7" title="Droits des utilisateurs">
            <p>
              Conformément au RGPD et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-semibold text-gray-900">Droit d'accès :</span> obtenir la confirmation que des données vous concernant sont traitées et en obtenir une copie.</li>
              <li><span className="font-semibold text-gray-900">Droit de rectification :</span> demander la correction de données inexactes ou incomplètes.</li>
              <li><span className="font-semibold text-gray-900">Droit à l'effacement :</span> demander la suppression de vos données dans les cas prévus par la réglementation.</li>
              <li><span className="font-semibold text-gray-900">Droit à la limitation :</span> demander la suspension temporaire du traitement de vos données.</li>
              <li><span className="font-semibold text-gray-900">Droit d'opposition :</span> vous opposer au traitement de vos données, notamment en matière de prospection commerciale.</li>
              <li><span className="font-semibold text-gray-900">Droit à la portabilité :</span> recevoir vos données dans un format structuré et les transmettre à un autre responsable.</li>
              <li><span className="font-semibold text-gray-900">Droit de retirer votre consentement</span> à tout moment, sans que cela remette en cause la licéité des traitements antérieurs.</li>
            </ul>
            <p>
              Pour exercer l'un de ces droits, contactez-nous à :{' '}
              <a href="mailto:arsene.lecoq8@gmail.com" className="text-violet-600 hover:underline">
                arsene.lecoq8@gmail.com
              </a>{' '}
              en précisant votre nom, prénom et la nature de votre demande. Nous nous engageons à vous répondre dans un délai maximum d'un mois.
            </p>
            <p>
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL :{' '}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">
                www.cnil.fr
              </a>{' '}
              — 3 Place de Fontenoy, 75007 Paris.
            </p>
          </Section>

          <Section number="8" title="Cookies et traceurs">
            <p>Le Site peut utiliser des cookies et autres traceurs pour :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>la navigation et le bon fonctionnement du site (strictement nécessaires) ;</li>
              <li>les statistiques et la performance (analyse du trafic) ;</li>
              <li>la mémorisation des préférences de session.</li>
            </ul>
            <p>
              Les cookies statistiques ne sont déposés qu'après recueil de votre consentement. Vous pouvez modifier vos préférences à tout moment.
            </p>
          </Section>

          <Section number="9" title="Sécurité des données">
            <p>Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>hébergement sécurisé chez un prestataire fiable ;</li>
              <li>transmission sécurisée des données via protocole HTTPS ;</li>
              <li>limitation de l'accès aux données aux seules personnes habilitées.</li>
            </ul>
          </Section>

          <Section number="10" title="Modifications de la politique">
            <p>
              La présente politique de confidentialité peut être mise à jour à tout moment pour tenir compte des évolutions légales ou des modifications techniques du Site. La version applicable est celle en ligne au moment de votre consultation.
            </p>
          </Section>

          <Section number="11" title="Contact">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-1.5">
              <p>Pour toute question relative à la protection de vos données personnelles :</p>
              <p>
                <span className="font-semibold text-gray-900">Email :</span>{' '}
                <a href="mailto:arsene.lecoq8@gmail.com" className="text-violet-600 hover:underline">
                  arsene.lecoq8@gmail.com
                </a>
              </p>
              <p><span className="font-semibold text-gray-900">Adresse :</span> Nairox Formation — 53 rue des Alouettes, 92000 Nanterre</p>
            </div>
          </Section>

        </div>

        <div className="mt-12">
          <Link to="/" className="inline-block btn-navy px-6 py-3 text-sm">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  )
}
