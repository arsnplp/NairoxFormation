import { Link } from 'react-router-dom'

// ⚠️ Mettre à jour avec l'URL définitive du site
const SITE_URL = 'https://nairox-formation.fr'

function Hero() {
  return (
    <section className="bg-gradient-to-br from-navy-900 to-violet-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3">
          Document légal
        </p>
        <h1 className="text-3xl md:text-4xl font-bold">Mentions légales</h1>
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

function Info({ label, children }) {
  return (
    <p>
      <span className="font-semibold text-gray-900">{label} : </span>
      {children}
    </p>
  )
}

export default function MentionsLegales() {
  return (
    <div>
      <Hero />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-8">

          <Section title="Identité">
            <p>
              Le site disponible à l'adresse suivante : <span className="font-medium">{SITE_URL}</span> (ci-après dénommé le « Site ») est édité par Nairox Formation, micro-entreprise dont
              l'adresse professionnelle est située au 53 rue des Alouettes, 92000 Nanterre (ci-après dénommée « Nairox Formation »).
            </p>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-2">
              <Info label="SIREN">995 237 567</Info>
              <Info label="SIRET">99523756700012</Info>
              <Info label="Déclaration d'activité de formation">11923079592 — enregistré auprès du préfet de région Île-de-France. Cet enregistrement ne vaut pas agrément de l'État.</Info>
              <Info label="Adresse professionnelle">53 rue des Alouettes, 92000 Nanterre</Info>
              <Info label="Directeur de la publication">Monsieur Arsène Lecoq Martin, en qualité de responsable de Nairox Formation</Info>
            </div>
            <p>TVA non applicable, article 293 B du Code général des impôts.</p>
          </Section>

          <Section title="Contact">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-2">
              <Info label="Adresse électronique">
                <a href="mailto:arsene.lecoq8@gmail.com" className="text-violet-600 hover:underline">
                  arsene.lecoq8@gmail.com
                </a>
              </Info>
              <Info label="Téléphone">06 14 38 05 22</Info>
              <Info label="Adresse postale">Nairox Formation — 53 rue des Alouettes, 92000 Nanterre</Info>
            </div>
          </Section>

          <Section title="Hébergement">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-2">
              <p><span className="font-semibold text-gray-900">Hébergeur :</span> Hostinger International Ltd</p>
              <p><span className="font-semibold text-gray-900">Adresse :</span> 61 Lordou Vironos Street, 6023 Larnaca, Chypre</p>
              <p>
                <span className="font-semibold text-gray-900">Site :</span>{' '}
                <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">
                  www.hostinger.fr
                </a>
              </p>
              <p><span className="font-semibold text-gray-900">Type :</span> VPS (Serveur Privé Virtuel)</p>
            </div>
          </Section>

          <Section title="Publicité">
            <p>
              Nairox Formation se réserve la faculté d'insérer, sur toute page du Site et dans toute communication aux utilisateurs, des messages publicitaires ou promotionnels sous une forme et dans des conditions dont Nairox Formation sera seule juge.
            </p>
            <p>Les utilisateurs acceptent en conséquence l'affichage de tels messages.</p>
          </Section>

          <Section title="Liens hypertextes">
            <p>
              Lors de l'utilisation du Site, Nairox Formation peut recommander des services de tiers ou de partenaires. Les utilisateurs peuvent ainsi accéder à des liens dirigeant vers des sites tiers.
            </p>
            <p>Nairox Formation ne sera en aucun cas responsable :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>du contenu des sites référencés sur le Site ;</li>
              <li>des informations ou contenus fournis par des tiers et/ou partenaires.</li>
            </ul>
            <p>
              Les exploitants des sites indexés sont seuls responsables de leur contenu. Nairox Formation ne pourra être tenue responsable d'un litige survenant entre un site indexé et un utilisateur.
            </p>
          </Section>

          <Section title="Traitement des données à caractère personnel">
            <p>
              Lors de la navigation sur le Site, les utilisateurs peuvent communiquer des données personnelles. Les conditions de traitement figurent dans la{' '}
              <Link to="/politique-confidentialite" className="text-violet-600 hover:underline">
                Politique de confidentialité
              </Link>{' '}
              accessible sur le Site.
            </p>
            <p>
              Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi n°78-17 du 6 janvier 1978 dite « Informatique et Libertés », les utilisateurs disposent d'un droit d'accès, de modification, de rectification, de limitation, de portabilité et de suppression de leurs données en contactant :{' '}
              <a href="mailto:arsene.lecoq8@gmail.com" className="text-violet-600 hover:underline">
                arsene.lecoq8@gmail.com
              </a>
            </p>
          </Section>

          <Section title="Modifications des mentions légales">
            <p>
              Nairox Formation se réserve le droit de modifier, à tout moment, les présentes mentions légales, notamment pour prendre en compte toute évolution légale, jurisprudentielle, éditoriale, fonctionnelle et/ou technique.
            </p>
            <p>
              La version applicable est celle accessible en ligne au jour de la consultation du Site. Toute consultation du Site après publication des mentions légales modifiées vaut acceptation sans réserve des nouvelles mentions légales.
            </p>
          </Section>

          <Section title="Responsabilité">
            <p>Nairox Formation s'efforce d'assurer, au mieux de ses possibilités, l'exactitude et l'actualité des informations diffusées sur le Site.</p>
            <p>Nairox Formation décline toute responsabilité :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>pour toute imprécision, inexactitude ou omission relative aux informations disponibles sur le Site ;</li>
              <li>pour les dommages résultant d'une modification frauduleuse des informations par des tiers ;</li>
              <li>pour tout dommage direct ou indirect provoqué par l'accès au Site ou l'impossibilité d'y accéder.</li>
            </ul>
          </Section>

          <Section title="Loi applicable">
            <p>
              Le Site est régi par le droit français. En cas de litige, les tribunaux du ressort du siège de Nairox Formation seront compétents, sous réserve des règles de compétence prévues par le Code de la consommation pour les consommateurs.
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
