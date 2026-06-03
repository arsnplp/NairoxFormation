import { Link } from 'react-router-dom'

const SITE_URL = 'https://nairox-formation.fr'

function Hero() {
  return (
    <section className="bg-gradient-to-br from-navy-900 to-violet-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3">
          Document légal
        </p>
        <h1 className="text-3xl md:text-4xl font-bold">Conditions Générales de Vente</h1>
        <p className="text-white/60 text-sm mt-3">Dernière mise à jour : mai 2026</p>
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

export default function CGV() {
  return (
    <div>
      <Hero />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-8">

          <Section number="1" title="Identification du prestataire">
            <p>Les présentes Conditions Générales de Vente s'appliquent à toutes les ventes de formations en ligne conclues entre :</p>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-1.5">
              <p className="font-semibold text-gray-900">Nairox Formation</p>
              <p>Micro-entreprise — Adresse professionnelle : 53 rue des Alouettes, 92000 Nanterre</p>
              <p>SIREN : 995 237 567 — SIRET : 99523756700012</p>
              <p>Déclaration d'activité : 11923079592</p>
              <p>Téléphone : 06 14 38 05 22</p>
              <p>
                Email :{' '}
                <a href="mailto:arsene.lecoq8@gmail.com" className="text-violet-600 hover:underline">
                  arsene.lecoq8@gmail.com
                </a>
              </p>
              <p>Site internet : {SITE_URL}</p>
            </div>
            <p>
              ci-après désignée « Nairox Formation » ou « le Prestataire », et toute personne physique ou morale souhaitant acquérir une formation proposée sur le Site, ci-après désignée « le Client » ou « le Stagiaire ».
            </p>
          </Section>

          <Section number="2" title="Caractéristiques essentielles de la formation">
            <p>
              Nairox Formation propose des formations en ligne à distance sur l'intelligence artificielle et ses applications professionnelles, notamment la formation{' '}
              <span className="font-medium">« Intégrer l'intelligence artificielle dans une TPE/PME pour optimiser les processus et la productivité »</span>.
            </p>
            <p>
              Les formations sont dispensées intégralement à distance via la plateforme Moodle. Certains modules incluent des sessions en visioconférence live. Le contenu détaillé, la durée (21h), les modalités et les prérequis de chaque formation sont précisés sur le Site au moment de la commande.
            </p>
            <p>
              Le programme détaillé de la formation, précisant les objectifs, le contenu, les modalités pédagogiques et les modalités d'évaluation, est annexé à la convention de formation. Il fait partie intégrante des documents contractuels liant les parties.
            </p>
          </Section>

          <Section number="3" title="Prérequis et public visé">
            <p>
              Les formations de Nairox Formation sont accessibles à toute personne souhaitant découvrir et maîtriser l'intelligence artificielle dans un cadre professionnel, sans prérequis techniques particuliers. Elles s'adressent en priorité aux dirigeants, professions libérales et collaborateurs de TPE/PME.
            </p>
            <p>
              Le Client doit disposer d'un accès à internet, d'un ordinateur ou d'une tablette compatible avec la plateforme Moodle, et d'une adresse email valide pour accéder aux contenus et recevoir les communications liées à sa formation.
            </p>
          </Section>

          <Section number="4" title="Prix et conditions de règlement">
            <p>
              Le prix de la formation est de <span className="font-semibold">500 € HT</span> (TVA non applicable, article 293 B du CGI). Le prix applicable est celui affiché sur le Site au moment de la validation de la commande.
            </p>
            <p>
              Le paiement est exigible intégralement au moment de la commande, par virement bancaire ou tout autre moyen de paiement proposé. Une facture est émise pour chaque commande et transmise au Client par email.
            </p>
            <div className="bg-violet-50 border border-violet-200 rounded-xl p-5">
              <p className="font-semibold text-violet-800 mb-1">Paiement en 4 fois sans frais</p>
              <p className="text-violet-700">
                Un échelonnement en 4 versements égaux est possible sur demande. Les modalités sont précisées lors de l'inscription.
              </p>
            </div>
          </Section>

          <Section number="5" title="Délai d'accès à la formation">
            <p>
              L'accès à la formation est ouvert dans un délai maximum de 14 jours à compter de la signature de la convention de formation et de la réception du règlement, sous réserve de complétude du dossier administratif. Les identifiants de connexion à la plateforme Moodle sont transmis par email avant le démarrage effectif de la formation.
            </p>
          </Section>

          <Section number="6" title="Modalités de déroulement de la formation">
            <p>
              Les formations se déroulent intégralement à distance sur la plateforme Moodle. Le Client suit les modules à son propre rythme selon les délais communiqués au moment de l'inscription.
            </p>
            <p>
              Les sessions en visioconférence incluses dans certains modules sont organisées aux dates communiquées au Client par email. En cas d'impossibilité de participer à une session planifiée, le Client est invité à en informer Nairox Formation dans les meilleurs délais. Un enregistrement ou une session de rattrapage pourra être proposé selon les disponibilités, sans garantie contractuelle.
            </p>
          </Section>

          <Section number="7" title="Droit de rétractation">
            <p>
              Conformément aux articles L.221-18 et suivants du Code de la consommation, le Client particulier dispose d'un délai de 14 jours calendaires à compter de la confirmation de commande pour exercer son droit de rétractation sans justification ni pénalité.
            </p>
            <p>
              <span className="font-semibold">Exception :</span> conformément à l'article L.221-28 du Code de la consommation, ce droit ne peut plus être exercé si le Client a accédé aux contenus avant l'expiration du délai de 14 jours et a expressément consenti à la fourniture immédiate du contenu numérique en renonçant à son droit de rétractation.
            </p>
            <p>
              Pour exercer ce droit, le Client envoie un email à{' '}
              <a href="mailto:arsene.lecoq8@gmail.com" className="text-violet-600 hover:underline">
                arsene.lecoq8@gmail.com
              </a>{' '}
              en précisant son nom, prénom, la formation concernée et la date de commande. Le remboursement intervient dans un délai maximum de 14 jours par le même moyen de paiement.
            </p>
            <p>En cas d'annulation par le Client après expiration du délai légal de rétractation :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Annulation plus de 7 jours avant le démarrage : remboursement intégral.</li>
              <li>Annulation moins de 7 jours avant le démarrage : facturation forfaitaire correspondant à 30 % du montant total.</li>
            </ul>
            <p>En cas d'abandon en cours de formation, les sommes correspondant aux heures réalisées restent dues.</p>
          </Section>

          <Section number="8" title="Attestation de formation">
            <p>
              À l'issue de la formation, et sous réserve de la complétion de l'ensemble des modules et des évaluations, Nairox Formation délivre au Client une attestation de suivi de formation mentionnant les objectifs, la durée et les résultats de l'évaluation des acquis.
            </p>
            <p>
              L'attestation de formation ne sera délivrée qu'après validation de l'assiduité et des évaluations prévues au programme.
            </p>
          </Section>

          <Section number="9" title="Annulation et report par Nairox Formation">
            <p>
              Nairox Formation se réserve le droit d'annuler ou de reporter une session de visioconférence en cas de force majeure, d'indisponibilité du formateur ou de tout autre motif légitime. Le Client sera informé dans les meilleurs délais par email.
            </p>
            <p>
              En cas d'annulation définitive d'une formation par Nairox Formation avant son démarrage, le Client sera remboursé intégralement des sommes versées dans un délai de 14 jours.
            </p>
          </Section>

          <Section number="10" title="Obligations du Client">
            <p>Le Client s'engage à :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>suivre la formation dans un esprit de sérieux et de bonne foi ;</li>
              <li>respecter les autres participants lors des sessions collectives en visioconférence ;</li>
              <li>ne pas reproduire, diffuser ou commercialiser les contenus pédagogiques sans autorisation expresse de Nairox Formation ;</li>
              <li>ne pas partager ses identifiants d'accès à la plateforme Moodle.</li>
            </ul>
            <p>
              Tout comportement inapproprié ou contraire aux présentes CGV pourra entraîner l'exclusion du Client de la formation sans remboursement.
            </p>
          </Section>

          <Section number="11" title="Propriété intellectuelle">
            <p>
              L'ensemble des contenus pédagogiques sont protégés par le droit d'auteur et restent la propriété exclusive de Nairox Formation. Toute reproduction ou diffusion sans autorisation écrite est interdite et constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.
            </p>
            <p>Le Client bénéficie d'un droit d'usage strictement personnel et non cessible pour la durée de son accès.</p>
          </Section>

          <Section number="12" title="Protection des données personnelles">
            <p>
              Les données personnelles collectées sont traitées conformément à la{' '}
              <Link to="/politique-confidentialite" className="text-violet-600 hover:underline">
                Politique de Confidentialité
              </Link>{' '}
              accessible sur le Site, en conformité avec le RGPD.
            </p>
          </Section>

          <Section number="13" title="Médiation">
            <p>
              En cas de litige, le Client contacte Nairox Formation à{' '}
              <a href="mailto:arsene.lecoq8@gmail.com" className="text-violet-600 hover:underline">
                arsene.lecoq8@gmail.com
              </a>{' '}
              pour une résolution amiable. À défaut de réponse satisfaisante dans un délai de 30 jours, le Client particulier peut recourir gratuitement à un médiateur de la consommation conformément aux articles L.616-1 et R.616-1 du Code de la consommation.
            </p>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-5 space-y-1">
              <p className="font-semibold text-gray-900">CM2C — Centre de la Médiation de la Consommation de Conciliateurs de Justice</p>
              <p>
                Site :{' '}
                <a href="https://www.cm2c.net" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">
                  www.cm2c.net
                </a>
              </p>
              <p>
                Email :{' '}
                <a href="mailto:cm2c@cm2c.net" className="text-violet-600 hover:underline">
                  cm2c@cm2c.net
                </a>
              </p>
            </div>
          </Section>

          <Section number="14" title="Droit applicable">
            <p>Les présentes CGV sont soumises au droit français. En cas de litige non résolu, les tribunaux français sont seuls compétents.</p>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-5 space-y-1">
              <p className="font-semibold text-gray-900">Contact</p>
              <p>Email : arsene.lecoq8@gmail.com</p>
              <p>Téléphone : 06 14 38 05 22</p>
              <p>Adresse : Nairox Formation — 53 rue des Alouettes, 92000 Nanterre</p>
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
