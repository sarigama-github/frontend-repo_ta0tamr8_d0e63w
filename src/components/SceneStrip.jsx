function SceneStrip() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50/60">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Project Structure',
              lines: [
                'lib/',
                '  ├─ core/',
                '  ├─ data/',
                '  └─ features/chat/',
              ],
            },
            {
              title: 'BLE Mesh Logic',
              lines: [
                'scan() ➜ advertise()',
                'link-state: connected',
                'relay: TTL=5, RSSI>-80',
              ],
            },
            {
              title: 'Architecture',
              lines: [
                'Domain-driven modules',
                'Repositories & use-cases',
                'SQLite + Firebase bridge',
              ],
            },
          ].map((card) => (
            <div key={card.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-medium uppercase tracking-wide text-blue-700">
                {card.title}
              </div>
              <pre className="mt-3 rounded-lg bg-slate-900/95 p-4 text-blue-100 text-xs overflow-auto">
{card.lines.join('\n')}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SceneStrip
