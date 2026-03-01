import { Video, AlertTriangle } from 'lucide-react'

const DRONES = [
  {
    id: 'DRN-01',
    label: 'Primary Crowd Monitor',
    location: 'Shivaji Nagar',
    status: 'LIVE',
    risk: 'High crowd density',
    severity: 'high',
  },
  {
    id: 'DRN-02',
    label: 'Traffic Analytics',
    location: 'FC Road',
    status: 'LIVE',
    risk: 'Moderate congestion',
    severity: 'medium',
  },
  {
    id: 'DRN-03',
    label: 'Geo-fence Patrol',
    location: 'Kothrud',
    status: 'IDLE',
    risk: 'Patrol scheduled',
    severity: 'low',
  },
  {
    id: 'DRN-04',
    label: 'Night Ops',
    location: 'Swargate Bus Stand',
    status: 'LIVE',
    risk: 'Thermal hotspot detected',
    severity: 'medium',
  },
  {
    id: 'DRN-05',
    label: 'Incident Response',
    location: 'Katraj Junction',
    status: 'STANDBY',
    risk: 'Ready for dispatch',
    severity: 'low',
  },
]

export default function DroneGrid() {
  return (
    <div className="h-full bg-slate-900 rounded-xl border border-slate-800 overflow-hidden flex flex-col">
      <div className="p-3 border-b border-slate-700/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h3 className="font-display font-semibold text-sm text-slate-400">
            LIVE DRONE FLEET
          </h3>
          <div className="flex gap-1 text-[10px] text-slate-500">
            <span className="px-2 py-0.5 rounded-full bg-slate-800/80">All</span>
            <span className="px-2 py-0.5 rounded-full bg-slate-800/30">Crowd</span>
            <span className="px-2 py-0.5 rounded-full bg-slate-800/30">Traffic</span>
          </div>
        </div>
        <div className="flex gap-1 text-[10px] text-slate-500">
          <span className="px-1.5 py-0.5 rounded bg-slate-800/60">LIVE</span>
          <span className="px-1.5 py-0.5 rounded bg-slate-800/30">REPLAY</span>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-3 gap-3 p-3">
        {/* Primary large tile on left spanning two rows */}
        <div className="col-span-2 row-span-2 bg-slate-950 rounded-lg border border-slate-700/70 relative overflow-hidden flex flex-col">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage:
              'radial-gradient(circle at 0 0, rgba(34,211,238,0.2), transparent 60%), radial-gradient(circle at 100% 100%, rgba(248,250,252,0.08), transparent 60%)',
          }} />
          <div className="relative flex-1 flex items-center justify-center">
            <div className="text-center">
              <Video className="w-10 h-10 text-cyan-400 mx-auto mb-2" />
              <p className="text-slate-400 text-xs font-display tracking-[0.2em]">
                DRONE 01 • PRIMARY FEED
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Crowd density & risk overlay
              </p>
            </div>
          </div>
          <div className="relative border-t border-slate-800/80 px-4 py-2 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-slate-300">DRN-01 • Shivaji Nagar</span>
            </div>
            <div className="flex items-center gap-2 text-red-400">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>HIGH CROWD RISK</span>
            </div>
          </div>
        </div>

        {/* Small tiles for other drones */}
        {DRONES.slice(1).map((drone) => (
          <div
            key={drone.id}
            className="bg-slate-950 rounded-lg border border-slate-700/70 flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800/80">
              <span className="font-mono text-[11px] text-slate-300">{drone.id}</span>
              <span
                className={`text-[9px] px-1.5 py-0.5 rounded-full ${
                  drone.status === 'LIVE'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-slate-700 text-slate-300'
                }`}
              >
                {drone.status}
              </span>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <Video className="w-6 h-6 text-slate-600" />
            </div>
            <div className="px-3 py-2 border-t border-slate-800/80 text-[10px] space-y-1">
              <div className="text-slate-400 truncate">{drone.label}</div>
              <div className="flex items-center justify-between text-slate-500">
                <span className="truncate">{drone.location}</span>
                <span
                  className={`ml-2 ${
                    drone.severity === 'high'
                      ? 'text-red-400'
                      : drone.severity === 'medium'
                      ? 'text-amber-400'
                      : 'text-slate-400'
                  }`}
                >
                  {drone.risk}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

