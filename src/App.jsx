import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import SceneStrip from './components/SceneStrip'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />

      {/* Studio strip illustrating the focused developer and multiple live screens */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl px-6 -mt-16 md:-mt-24">
          <div className="rounded-3xl border border-slate-200 bg-white/90 backdrop-blur shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-slate-200 bg-gradient-to-b from-blue-50/60 to-white">
                <h3 className="text-xl font-semibold">The Developer</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  Immersed in code with an intense focus, crafting project structure, BLE networking logic, and a resilient architecture for an offline-first Flutter app.
                </p>
                <div className="mt-6 rounded-2xl bg-slate-900 p-4 text-blue-100 text-xs font-mono leading-relaxed shadow-inner">
                  <div className="flex items-center gap-2 text-blue-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    lib/core/ble/mesh_manager.dart
                  </div>
                  <pre className="mt-2 whitespace-pre-wrap">class MeshManager {\n  void scan() {/* BLE scan with filters */}\n  void advertise() {/* GATT service */}\n  void relay(Message msg) {/* TTL + RSSI */}\n}</pre>
                </div>
              </div>

              <div className="p-8 lg:p-10 bg-white">
                <h3 className="text-sm font-medium uppercase tracking-wide text-blue-700">Screens</h3>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    'BLE Scanner',
                    'Mesh Setup',
                    'Relay Queue',
                    'GPS Share',
                    'Local Storage',
                    'Firebase Sync',
                  ].map((name) => (
                    <div key={name} className="rounded-xl border border-slate-200 bg-gradient-to-br from-blue-50 to-white p-4 shadow-sm">
                      <div className="h-28 rounded-lg bg-white shadow-inner border border-blue-100 flex items-center justify-center text-xs text-blue-700">
                        {name}
                      </div>
                      <div className="mt-3 h-2 w-24 rounded bg-blue-200/60" />
                      <div className="mt-1 h-2 w-32 rounded bg-blue-100" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 lg:p-10 bg-white border-t lg:border-t-0 lg:border-l border-slate-200">
                <h3 className="text-sm font-medium uppercase tracking-wide text-blue-700">Architecture</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> Modular features with domain-driven boundaries</li>
                  <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> Repositories over SQLite with conflict-aware merges</li>
                  <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> BLE mesh: scanning, advertising, relaying with TTL</li>
                  <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> GPS location sharing and hop-path visualization</li>
                  <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> Firebase sync when connectivity returns</li>
                </ul>

                <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-4 text-blue-900 text-sm">
                  Blue & white, minimal and urgent — purpose-built for reliability when it matters most.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureGrid />
      <SceneStrip />

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center text-slate-600 text-sm">
          Built to visualize a mission-critical Flutter app for disaster communication.
        </div>
      </footer>
    </div>
  )
}

export default App
