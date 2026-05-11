export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Pre-Series A Founders
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Calculate Your Startup&apos;s Health Score
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Input revenue, users, and churn — get an industry-benchmarked health score with specific, actionable improvement recommendations.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $29/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Metrics Preview */}
      <section className="grid grid-cols-3 gap-4 mb-20">
        {[
          { label: 'MRR Growth', value: '+18%', note: 'vs 12% benchmark' },
          { label: 'Churn Rate', value: '3.2%', note: 'above 2% target' },
          { label: 'Health Score', value: '74/100', note: 'Good — room to grow' },
        ].map((m) => (
          <div key={m.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">{m.value}</div>
            <div className="text-xs font-semibold text-white mb-1">{m.label}</div>
            <div className="text-xs text-[#8b949e]">{m.note}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Growth Plan</div>
          <div className="text-4xl font-bold text-white mb-1">$29<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to track and improve startup health.</p>
          <ul className="space-y-3 mb-8">
            {[
              'Unlimited metric snapshots',
              'Industry benchmark comparisons',
              'Personalized improvement recommendations',
              'MRR, churn, CAC, LTV scoring',
              'Email health score reports',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How is the health score calculated?',
              a: 'We combine your MRR growth, churn rate, CAC, and LTV against curated benchmarks from thousands of SaaS startups at your stage to produce a 0–100 score.',
            },
            {
              q: 'What metrics do I need to get started?',
              a: 'Just monthly revenue, active user count, and monthly churn rate. Additional metrics like CAC and LTV unlock deeper insights.',
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel with one click from your dashboard. No questions asked, no lock-in.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Startup Growth Metric Calculator. All rights reserved.
      </footer>
    </main>
  )
}
