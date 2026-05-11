import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Startup Growth Metric Calculator',
  description: 'Calculate startup health scores from basic metrics. Input revenue, users, churn — get industry-benchmarked health score with specific improvement recommendations.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="11f1db44-e5d4-4c07-ac05-816f57b69c42"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
