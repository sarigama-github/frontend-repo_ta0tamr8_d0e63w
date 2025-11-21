import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      {/* 3D Spline Cover Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient veil to fit the blue/white brand while keeping the 3D visible */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(59,130,246,0.20),transparent_60%)]" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-3 py-1 text-xs font-medium text-blue-700 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            Disaster Communication • BLE Mesh • Flutter
          </div>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            Building a resilient Flutter app for disaster communication
          </h1>
          <p className="mt-4 text-slate-700 md:text-lg">
            A focused developer, immersed in code and surrounded by live prototypes. The screens reveal BLE scanning, mesh relaying, GPS sharing, SQLite storage, and Firebase sync — a robust tool when traditional networks fail.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/30">
              Blue & white, minimal, mission-critical
            </span>
            <span className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 border border-blue-200">
              Bluetooth Mesh • Offline-first
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
