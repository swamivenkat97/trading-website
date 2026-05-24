export default function Home() {
  return (
    <main className="text-white min-h-screen relative overflow-hidden">

      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video/bg.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 z-10"></div>

      {/* NAVBAR */}
      <div className="fixed top-0 w-full z-30 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-yellow-400 font-bold text-lg">Qnet Algo</h1>

          <a href="https://t.me/yourgroup">
            <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition">
              Join Now
            </button>
          </a>
        </div>
      </div>

      {/* HERO */}
      <section className="py-28 text-center relative z-20">
        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Automated Trading. Zero Emotions.
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            Strategy-driven execution directly in your account.
          </p>

          <p className="mt-3 text-sm text-gray-400">
            Live demo results shared daily in our Telegram group
          </p>

          <a href="https://t.me/yourgroup">
            <button className="mt-8 px-8 py-4 bg-yellow-400 text-black rounded-lg font-semibold hover:scale-110 transition">
              Join Group Now
            </button>
          </a>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 relative z-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold">What You Get</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl hover:-translate-y-2 transition">
              <h3 className="text-xl font-semibold">Automated Execution</h3>
              <p className="text-gray-400 mt-2">Instant trade execution</p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl hover:-translate-y-2 transition">
              <h3 className="text-xl font-semibold">Strategy-Based</h3>
              <p className="text-gray-400 mt-2">No emotional decisions</p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl hover:-translate-y-2 transition">
              <h3 className="text-xl font-semibold">Time Efficient</h3>
              <p className="text-gray-400 mt-2">No chart watching needed</p>
            </div>

          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 relative z-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-yellow-400 text-2xl font-bold">1</h3>
              <p className="mt-2 text-gray-300">Connect account</p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-yellow-400 text-2xl font-bold">2</h3>
              <p className="mt-2 text-gray-300">Activate bot</p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-yellow-400 text-2xl font-bold">3</h3>
              <p className="mt-2 text-gray-300">Monitor anytime</p>
            </div>

          </div>

        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="py-24 relative z-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold">Performance Overview</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-yellow-400">+12.5%</h3>
              <p className="text-gray-400">Last 30 Days</p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-yellow-400">78%</h3>
              <p className="text-gray-400">Win Rate</p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-yellow-400">Low Risk</h3>
              <p className="text-gray-400">Strategy Based</p>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 relative z-20">
        <div className="max-w-3xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold">FAQ</h2>

          <div className="mt-8 space-y-4 text-gray-400">
            <p>Is it safe? — You control your account</p>
            <p>Is it manual? — Fully automated</p>
            <p>Can I stop anytime? — Yes</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center relative z-20">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-4xl font-bold">
            Start Trading with Discipline
          </h2>

          <p className="mt-4 text-gray-400">
            Let automation handle execution while you focus on growth.
          </p>

          <a href="https://t.me/yourgroup">
            <button className="mt-8 px-10 py-4 bg-yellow-400 text-black rounded-lg font-semibold hover:scale-110 transition">
              Join Now
            </button>
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm relative z-20">
        <p>© 2026 Qnet Algo</p>
        <p className="mt-2">
          Trading involves risk. Past performance does not guarantee future results.
        </p>
      </footer>

    </main>
  );
}