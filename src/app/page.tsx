export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl">
          <span className="block text-red-600">ilovebroker</span>
          Your All-in-One Real Estate Platform
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          List, search, and connect instantly. Built for brokers, buyers, and
          developers — fresh listings, AI-driven leads, and zero clutter.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#"
            className="rounded-xl bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow hover:bg-indigo-700 transition"
          >
            🚀 Get Started
          </a>
          <a
            href="#"
            className="rounded-xl border border-gray-300 px-6 py-3 text-lg font-semibold text-gray-900 hover:bg-gray-50 transition"
          >
            👀 Browse Listings
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Why Choose iLoveBroker?
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600">
                📍 Map Search
              </h3>
              <p className="mt-3 text-gray-600">
                Draw on the map and find exactly what you’re looking for, where
                you want it.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600">
                ⚡ Fresh Listings
              </h3>
              <p className="mt-3 text-gray-600">
                Only verified, non-duplicate listings — refreshed every 10 days.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600">
                🤝 AI Matchmaking
              </h3>
              <p className="mt-3 text-gray-600">
                Our AI connects brokers and buyers instantly, with no bias.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600">
                📲 WhatsApp Alerts
              </h3>
              <p className="mt-3 text-gray-600">
                Get personalized brochures, invoices, and updates directly on
                WhatsApp.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600">
                💼 Broker-First
              </h3>
              <p className="mt-3 text-gray-600">
                Transparent, affordable subscription model designed for real
                estate pros.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600">
                📊 Smart Analytics
              </h3>
              <p className="mt-3 text-gray-600">
                Track your listings, leads, and deals with easy-to-read
                dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 py-20 text-center text-white">
        <h2 className="text-4xl font-extrabold">
          Ready to take your Real Estate Business to the next level?
        </h2>
        <p className="mt-4 text-lg">
          Join thousands of brokers using iLoveBroker to grow their business.
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="inline-block rounded-xl bg-white px-8 py-4 text-lg font-bold text-indigo-600 shadow hover:bg-gray-100 transition"
          >
            Sign Up Today
          </a>
        </div>
      </section>
    </main>
  )
}
