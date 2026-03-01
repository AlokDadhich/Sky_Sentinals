export default function UseCaseDiagram() {
  const actors = ['Smart City Operator', 'Drone System', 'Traffic Authority', 'Emergency Response']
  const useCases = [
    'Monitor Crowd Density',
    'Detect Traffic Congestion',
    'Receive Risk Alerts',
    'Initiate Emergency Response',
    'Deploy Drone Patrol',
  ]

  return (
    <div className="min-h-[calc(100vh-3.5rem)] p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-display font-bold text-2xl text-white mb-2">
          Use Case Diagram
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          UML-style actor–use case relationships
        </p>

        <div className="bg-slate-900/50 rounded-xl border border-slate-700/50 p-8 overflow-auto">
          <div className="flex gap-12 items-start min-w-max">
            {/* Actors */}
            <div className="flex flex-col gap-6">
              {actors.map((actor, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-3 rounded-lg border-2 border-dashed border-cyan-500/40 bg-cyan-500/5"
                >
                  <div className="w-12 h-12 rounded-full border-2 border-cyan-500/60 bg-slate-900 flex items-center justify-center text-cyan-400 text-xs font-bold">
                    A{i + 1}
                  </div>
                  <span className="text-sm text-slate-300 whitespace-nowrap">{actor}</span>
                </div>
              ))}
            </div>

            {/* System boundary */}
            <div className="flex-1 border-2 border-slate-600 rounded-xl p-6 min-w-[400px]">
              <div className="text-xs text-slate-500 font-display mb-4 -mt-8 bg-slate-900 w-fit px-2">
                Surveillance System
              </div>
              <div className="grid grid-cols-2 gap-3">
                {useCases.map((uc, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg border border-slate-600 bg-slate-800/50 text-slate-300 text-sm text-center"
                  >
                    {uc}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-6">
            Connect actors to relevant use cases with lines
          </p>
        </div>
      </div>
    </div>
  )
}
