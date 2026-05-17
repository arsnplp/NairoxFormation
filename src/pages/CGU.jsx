import { Link } from 'react-router-dom'

const SITE_URL = 'https://nairox-formation.fr'

function Hero() {
  return (
    <section className="bg-gradient-to-br from-navy-900 to-violet-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3">
          Document légal
        </p>
        <h1 className="text-3xl md:text-4xl font-bold">Conditions Générales d'Utilisation</h1>
      </div>
    </section>
  )
}

function Section({ title, children }) {
  return (
    <div className="pb-8 border-b border-gray-100 last:border-0 last:pb-0">
      <h2 className="text-lg font-bold text-navy-900 mb-4">{title}</h2>
      <div className="text-sm text-gray-700 leading-relaxed space-y-3">{children}</div>
    </div>
  )
}

export default function CGU() {
  return (
    <div>
      <Hero />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-8">

          <Section title="Préambule">
            <p>
              Nairox Formation édite et exploite le site internet <span className="font-medium">{SITE_URL}</span>, dédié à la présentation et à la commercialisation de formations à distance dans le domaine de l'intelligence artificielle. Les présentes Conditions Générales d'Utilisation ont pour objet de définir les modalités d'accès et d'utilisation du Site par tout Utilisateur.
            </p>
          </Section>

          <Section title="Définitions">
            <p>Dans le cadre des présentes CGU, les termes ci-dessous ont la signification suivante :</p>
            <ul className="space-y-3 pt-1">
              <li>
                <span className="font-semibold text-gray-900">« Site » :</span>{' '}
                désigne le site internet édité par Nairox Formation et accessible à l'adresse {SITE_URL}, permettant aux Utilisateurs de consulter des informations relatives aux programmes de formation proposés et de prendre contact avec Nairox Formation.
              </li>
              <li>
                <span className="font-semibold text-gray-900">« Utilisateur » :</span>{' '}
                désigne toute personne physique accédant au Site, consultant son contenu ou prenant contact avec Nairox Formation.
              </li>
              <li>
                <span className="font-semibold text-gray-900">« CGU » :</span>{' '}
                désigne les présentes Conditions Générales d'Utilisation régissant l'accès et l'utilisation du Site.
              </li>
              <li>
                <span className="font-semibold text-gray-900">« CGV » :</span>{' '}
                désigne les Conditions Générales de Vente régissant les modalités d'inscription, de réalisation et de paiement des formations proposées par Nairox Formation.
              </li>
              <li>
                <span className="font-semibold text-gray-900">« Prospect » :</span>{' '}
                désigne toute personne prenant contact avec Nairox Formation via le Site en vue d'obtenir des informations sur les formations proposées.
              </li>
            </ul>
          </Section>

          <Section title="Objet et opposabilité">
            <p>
              Les CGU ont pour objet de définir les conditions et modalités d'accès et d'utilisation du Site par les Utilisateurs.
            </p>
            <p>
              Toute connexion au Site implique l'acceptation pleine et entière des présentes CGU. Cette acceptation est valable pour l'ensemble des pages consultées et des formulaires utilisés sur le Site.
            </p>
          </Section>

          <Section title="Accès au Site">
            <p>
              Le Site est accessible 7 jours sur 7 et 24 heures sur 24, sauf interruption, programmée ou non, pour des besoins de maintenance ou en cas de force majeure.
            </p>
            <p>
              Nairox Formation se réserve le droit d'interrompre temporairement l'accès au Site pour assurer sa maintenance ou pour toute évolution technique. Nairox Formation ne saurait être tenue responsable d'une interruption du Site due à des causes indépendantes de sa volonté.
            </p>
          </Section>

          <Section title="Obligations des Utilisateurs">
            <p>En accédant au Site, l'Utilisateur s'engage à :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>utiliser le Site de manière loyale et conforme à sa destination ;</li>
              <li>ne pas porter atteinte au bon fonctionnement du Site ;</li>
              <li>ne pas tenter d'accéder frauduleusement aux systèmes informatiques du Site ;</li>
              <li>ne pas reproduire, copier ou exploiter tout ou partie du Site sans autorisation préalable.</li>
            </ul>
            <p>Il est strictement interdit d'utiliser le Site à des fins illégales ou contraires aux lois et règlements en vigueur.</p>
          </Section>

          <Section title="Responsabilité de Nairox Formation">
            <p>
              Nairox Formation s'efforce d'assurer l'exactitude des informations publiées sur le Site. Toutefois, ces informations sont fournies à titre indicatif et peuvent être modifiées à tout moment. Nairox Formation ne saurait être tenue responsable des dommages résultant d'une mauvaise utilisation du Site ou d'une interruption indépendante de sa volonté.
            </p>
          </Section>

          <Section title="Propriété intellectuelle">
            <p>
              L'ensemble des contenus présents sur le Site (textes, images, vidéos, logos, éléments graphiques, structure) est protégé par le droit de la propriété intellectuelle et demeure la propriété exclusive de Nairox Formation.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, des éléments du Site est interdite sans autorisation écrite préalable de Nairox Formation.
            </p>
          </Section>

          <Section title="Données personnelles">
            <p>
              Les données personnelles collectées via le Site sont traitées conformément à la réglementation applicable, et en particulier au Règlement (UE) 2016/679 (RGPD) et à la loi Informatique et Libertés.
            </p>
            <p>
              Les modalités de traitement des données personnelles sont détaillées dans la{' '}
              <Link to="/politique-confidentialite" className="text-violet-600 hover:underline">
                Politique de confidentialité
              </Link>{' '}
              accessible sur le Site.
            </p>
          </Section>

          <Section title="Liens vers des sites tiers">
            <p>
              Le Site peut contenir des liens vers des sites externes. Nairox Formation ne peut être tenue responsable du contenu de ces sites tiers, qui sont soumis à leurs propres conditions d'utilisation. Tout accès à un site tiers se fait sous la seule responsabilité de l'Utilisateur.
            </p>
          </Section>

          <Section title="Modification des CGU">
            <p>
              Nairox Formation se réserve le droit de modifier les présentes CGU à tout moment afin de prendre en compte toute évolution légale, technique ou éditoriale du Site. La version applicable est celle en vigueur au moment de la consultation du Site.
            </p>
          </Section>

          <Section title="Loi applicable — Litiges">
            <p>
              Les présentes CGU sont soumises au droit français. En cas de litige avec un professionnel, compétence expresse est attribuée aux tribunaux du ressort du siège de Nairox Formation. Lorsqu'il s'agit d'un consommateur, les règles de compétence prévues par le Code de la consommation s'appliquent.
            </p>
            <p>
              Avant tout recours judiciaire, l'Utilisateur est invité à contacter Nairox Formation par courrier électronique à{' '}
              <a href="mailto:arsene.lecoq8@gmail.com" className="text-violet-600 hover:underline">
                arsene.lecoq8@gmail.com
              </a>{' '}
              afin de tenter une résolution amiable.
            </p>
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
