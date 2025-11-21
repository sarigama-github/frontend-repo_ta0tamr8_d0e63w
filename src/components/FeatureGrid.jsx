import { ScanSearch, Radio, Send, MapPin, Database, CloudUpload } from 'lucide-react'

const features = [
  {
    icon: ScanSearch,
    title: 'BLE Scanning',
    desc: 'Discover nearby devices and services with precise filters and RSSI strength.'
  },
  {
    icon: Radio,
    title: 'Mesh Networking',
    desc: 'Auto-forming Bluetooth mesh for resilient, hop-by-hop message relaying.'
  },
  {
    icon: Send,
    title: 'Message Relaying',
    desc: 'Store-and-forward messaging optimized for disaster scenarios.'
  },
  {
    icon: MapPin,
    title: 'GPS Location Sharing',
    desc: 'Share coordinates with confidence; visualize hop paths and proximity.'
  },
  {
    icon: Database,
    title: 'SQLite Storage',
    desc: 'Offline-first local store for messages, peers, and sessions.'
  },
  {
    icon: CloudUpload,
    title: 'Firebase Sync',
    desc: 'Secure cloud sync when connectivity returns; conflict-aware merges.'
  }
]

function FeatureGrid() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">
          Core capabilities for crisis-ready communication
        </h2>
        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
          Designed for reliability under pressure — from nearby scans to mesh relays and cloud recovery.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 ring-1 ring-blue-200">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid
