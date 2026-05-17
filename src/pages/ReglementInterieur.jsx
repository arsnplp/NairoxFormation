import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="bg-gradient-to-br from-navy-900 to-violet-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3">
          Document légal
        </p>
        <h1 className="text-3xl md:text-4xl font-bold">Règlement intérieur stagiaires</h1>
        <p className="text-white/60 text-sm mt-3">
          Pris en application des articles L.6352-3 et R.6352-1 à R.6352-15 du Code du travail
        </p>
        <p className="text-white/50 text-xs mt-1">
          NDA 119230795 — SIREN 995 237 567 — Version 1.0 — Mai 2026
        </p>
      </div>
    </section>
  )
}

function Article({ number, title, children }) {
  return (
    <div className="pb-8 border-b border-gray-100 last:border-0 last:pb-0">
      <h2 className="text-base font-bold text-violet-700 mb-3">
        Article {number} — {title}
      </h2>
      <div className="text-sm text-gray-700 leading-relaxed space-y-3">{children}</div>
    </div>
  )
}

export default function ReglementInterieur() {
  return (
    <div>
      <Hero />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-8">

          <Article number="1" title="Objet du règlement intérieur">
            <p>
              Le présent règlement est établi conformément aux dispositions des articles L.6352-3 et R.6352-1 à R.6352-15 du Code du travail.
            </p>
            <p>
              Il s'applique à tous les stagiaires inscrits à une formation dispensée par Nairox Formation — SIREN 995 237 567 — SIRET 99523756700012 — sise 53 Rue des Alouettes, 92000 Nanterre, pour la durée de la formation suivie.
            </p>
            <p>Le présent règlement détermine :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>les principales mesures applicables en matière de santé et de sécurité dans le cadre des formations dispensées à distance ;</li>
              <li>les règles applicables en matière de discipline, notamment la nature et l'échelle des sanctions ainsi que les droits du stagiaire en cas de procédure disciplinaire.</li>
            </ul>
            <p>
              Lorsque la formation se déroule dans une entreprise déjà dotée d'un règlement intérieur, les mesures de santé et de sécurité applicables aux stagiaires sont celles du règlement existant. Un exemplaire en est alors remis.
            </p>
          </Article>

          <Article number="2" title="Informations remises au stagiaire avant son inscription définitive">
            <p>Avant toute inscription définitive, Nairox Formation remet au stagiaire :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>le programme et les objectifs de la formation ;</li>
              <li>les horaires et les modalités d'organisation ;</li>
              <li>
                les coordonnées des personnes chargées des relations avec les stagiaires : Arsène Lecoq Martin —{' '}
                <a href="mailto:arsene.lecoq8@gmail.com" className="text-violet-600 hover:underline">arsene.lecoq8@gmail.com</a>{' '}
                — 06 14 38 05 22 ;
              </li>
              <li>le présent règlement intérieur applicable à la formation.</li>
            </ul>
          </Article>

          <Article number="3" title="Informations demandées au stagiaire">
            <p>
              La finalité des informations demandées au stagiaire est d'apprécier son aptitude à suivre l'action de formation, qu'elle soit sollicitée, proposée ou engagée.
            </p>
            <p>
              Ces informations doivent présenter un lien direct et nécessaire avec l'action de formation. Le candidat à une formation ou le stagiaire est tenu d'y répondre de bonne foi.
            </p>
          </Article>

          <Article number="4" title="Discipline">
            <p>Il est formellement interdit aux stagiaires :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>de se présenter aux sessions en visioconférence en état d'ébriété ou sous l'emprise de substances altérant le jugement ;</li>
              <li>d'enregistrer, de copier, de reproduire ou de diffuser les supports pédagogiques et les sessions en visioconférence sans l'autorisation expresse de Nairox Formation ;</li>
              <li>de partager leurs identifiants d'accès à la plateforme Moodle ou de permettre à un tiers d'utiliser leur compte ;</li>
              <li>d'adopter un comportement contraire au respect dû au formateur, aux autres stagiaires ou à l'organisme.</li>
            </ul>
          </Article>

          <Article number="5" title="Assiduité, ponctualité et absences">
            <p>
              Le stagiaire est tenu de signer la feuille d'émargement électronique lors de chaque session en visioconférence.
            </p>
            <p>
              La progression sur les modules e-learning hébergés sur la plateforme Moodle est tracée automatiquement (logs de connexion, temps passé, scores aux quiz) et fait office de justificatif de présence et de suivi.
            </p>
            <p>Toute absence est subordonnée à l'autorisation écrite de Nairox Formation ou de son représentant.</p>
            <p>
              En cas d'impossibilité de suivre une session en visioconférence (maladie, contrainte exceptionnelle, force majeure), le stagiaire doit en informer Nairox Formation dans les meilleurs délais à l'adresse{' '}
              <a href="mailto:arsene.lecoq8@gmail.com" className="text-violet-600 hover:underline">arsene.lecoq8@gmail.com</a>,
              afin qu'une solution de rattrapage puisse être organisée.
            </p>
          </Article>

          <Article number="6" title="Participation, matériel mis à disposition et engagement du stagiaire">
            <p>
              La présence de chaque stagiaire doit s'accompagner d'une participation active et de l'accomplissement d'efforts personnels.
            </p>
            <p>Les stagiaires s'engagent à :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>disposer d'un équipement personnel fonctionnel (ordinateur, connexion Internet stable, webcam et microphone) pour suivre les modules e-learning et participer aux sessions en visioconférence ;</li>
              <li>utiliser les accès à la plateforme Moodle (identifiants login / mot de passe) de manière strictement personnelle et confidentielle ; tout partage d'identifiants est interdit ;</li>
              <li>accéder aux contenus pédagogiques mis à disposition uniquement dans le cadre de leur formation, sans les reproduire ni les diffuser à des tiers ;</li>
              <li>
                signaler sans délai tout problème technique à{' '}
                <a href="mailto:arsene.lecoq8@gmail.com" className="text-violet-600 hover:underline">arsene.lecoq8@gmail.com</a>{' '}
                afin qu'une solution puisse être apportée rapidement.
              </li>
            </ul>
          </Article>

          <Article number="7" title="Mesures disciplinaires">
            <p>
              Constitue une sanction toute mesure, autre que les observations verbales, prise par le directeur de l'organisme de formation ou son représentant, à la suite d'un agissement du stagiaire considéré comme fautif, que cette mesure soit de nature à affecter immédiatement ou non la présence de l'intéressé dans la formation ou à mettre en cause la continuité de la formation qu'il reçoit.
            </p>
            <p>
              Tout agissement considéré comme fautif pourra, en fonction de sa nature et de sa gravité, faire l'objet de l'une ou l'autre des sanctions ci-après, classées par ordre croissant d'importance :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>avertissement écrit ;</li>
              <li>exclusion définitive de la formation.</li>
            </ul>
            <p>Les amendes ou autres sanctions pécuniaires sont interdites.</p>
            <p>
              Aucune sanction ne peut être infligée au stagiaire sans qu'il ait été informé au préalable des griefs retenus contre lui et qu'il ait été en mesure de présenter sa défense, conformément aux articles R.6352-4 et suivants du Code du travail.
            </p>
          </Article>

          <Article number="8" title="Hygiène et sécurité">
            <p>
              Dans le cadre d'une formation dispensée intégralement à distance, les règles de sécurité applicables sont celles relatives à l'usage des outils numériques et à la protection des données personnelles.
            </p>
            <p>Les stagiaires sont tenus de :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>utiliser un environnement de travail calme et sécurisé lors des sessions en visioconférence ;</li>
              <li>ne pas enregistrer, diffuser ou partager les sessions en visioconférence sans l'autorisation expresse de Nairox Formation ;</li>
              <li>
                signaler immédiatement tout incident lié à la sécurité informatique (accès non autorisé à leur compte, suspicion de piratage) à{' '}
                <a href="mailto:arsene.lecoq8@gmail.com" className="text-violet-600 hover:underline">arsene.lecoq8@gmail.com</a> ;
              </li>
              <li>respecter les règles de confidentialité et de protection des données personnelles conformément au RGPD, notamment en ne partageant pas de données sensibles dans les outils d'IA utilisés durant la formation.</li>
            </ul>
          </Article>

          <Article number="9" title="Accessibilité et situation de handicap">
            <p>
              Nairox Formation s'engage à rendre ses formations accessibles à toute personne en situation de handicap.
            </p>
            <p>Les référents handicap désignés sont :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <span className="font-semibold text-gray-900">Référent principal :</span> Arsène Lecoq Martin — Président —{' '}
                <a href="mailto:arsene.lecoq9@gmail.com" className="text-violet-600 hover:underline">arsene.lecoq9@gmail.com</a>{' '}
                — 06 14 38 05 22
              </li>
              <li>
                <span className="font-semibold text-gray-900">Référent secondaire :</span> Fatima Namane — Directrice générale —{' '}
                <a href="mailto:referent.h.nairoxformation@gmail.com" className="text-violet-600 hover:underline">referent.h.nairoxformation@gmail.com</a>{' '}
                — 06 64 76 23 32
              </li>
            </ul>
            <p>
              Tout stagiaire ayant des besoins spécifiques est invité à contacter un référent handicap avant le démarrage de la formation afin que des aménagements adaptés puissent être étudiés et mis en place.
            </p>
          </Article>

          <Article number="10" title="Protection des données personnelles (RGPD)">
            <p>Nairox Formation s'engage à :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>garantir la confidentialité des informations personnelles et professionnelles transmises dans le cadre de la formation ;</li>
              <li>traiter les données personnelles des stagiaires conformément au Règlement (UE) 2016/679 du 27 avril 2016 (RGPD) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée ;</li>
              <li>conserver les données strictement nécessaires à l'exécution de la prestation de formation et au respect des obligations légales (notamment la conservation des pièces justificatives pendant la durée légale) ;</li>
              <li>
                garantir au stagiaire les droits d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de ses données, exerçables auprès de Nairox Formation à l'adresse{' '}
                <a href="mailto:arsene.lecoq8@gmail.com" className="text-violet-600 hover:underline">arsene.lecoq8@gmail.com</a>.
              </li>
            </ul>
          </Article>

          <Article number="11" title="Entrée en vigueur">
            <p>
              Le présent règlement intérieur entre en application à compter de la date de démarrage de la formation.
            </p>
            <p>
              Un exemplaire est remis au stagiaire avant le démarrage de sa formation, dans le cadre de la signature du contrat ou de la convention de formation professionnelle.
            </p>
          </Article>

          {/* Download + note */}
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-sm text-violet-800">
                <span className="font-semibold">Document signé :</span> Ce règlement vous sera transmis au format PDF à signer avant le démarrage de votre formation.
              </p>
            </div>
            <a
              href="/reglement-interieur-nairox.pdf"
              download
              className="inline-flex items-center gap-2 bg-violet-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-violet-500 transition-colors flex-shrink-0"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Télécharger le PDF
            </a>
          </div>

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
