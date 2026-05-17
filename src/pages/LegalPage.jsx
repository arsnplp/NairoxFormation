import { Link } from 'react-router-dom'

export default function LegalPage({ title }) {
  return (
    <div className="min-h-[60vh]">
      <section className="bg-gradient-to-br from-navy-900 to-navy-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3">
            Document légal
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-10 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Document en cours de rédaction
          </h2>
          <p className="text-gray-500 mb-8">Ce document sera disponible prochainement.</p>
          <Link
            to="/"
            className="inline-block btn-navy px-6 py-3 text-sm"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </section>
    </div>
  )
}
