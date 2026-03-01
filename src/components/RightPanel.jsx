import { Cpu, Battery, MapPin, Bell, Wifi } from 'lucide-react'

export default function RightPanel({ onOpenDronePanel }) {
  const drones = [
    {
      id: 'DRN-01',
      status: 'active',
      battery: 78,
      zone: 'Shivaji Nagar',
      altitude: '120m',
    },
  ]

  const alerts = [
    { id: 1, type: 'crowd', msg: 'High density at Market Square', time: '2m ago', severity: 'high' },
    { id: 2, type: 'traffic', msg: 'Congestion on FC Road', time: '5m ago', severity: 'medium' },
  ]

  return (
    <div className="w-72 flex-shrink-0 flex flex-col gap-4">
      <div className="bg-slate-900 rounded-xl border border-slate-700/70 p-4 flex-1">
        <h3 className="font-display font-semibold text-sm text-slate-400 mb-4 flex items-center justify-between">
          DRONE STATUS
          <button
            onClick={onOpenDronePanel}
            className="text-xs text-cyan-400 hover:text-cyan-300"
          >
            Control →
          </button>
        </h3>
        <div className="space-y-3">
          {drones.map((drone) => (
            <div
              key={drone.id}
              className="p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-mono text-sm text-white">{drone.id}</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Battery className="w-4 h-4 text-slate-500" />
                  <span className="text-slate-400">Battery:</span>
                  <span className="text-white font-medium">{drone.battery}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span className="text-slate-400">Zone:</span>
                  <span className="text-cyan-400 text-xs">{drone.zone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Alerts */}
      <div className="bg-slate-900 rounded-xl border border-slate-700/70 p-4 flex-1 min-h-0">
        <h3 className="font-display font-semibold text-sm text-slate-400 mb-3 flex items-center gap-2">
          <Bell className="w-4 h-4" />
          ACTIVE ALERTS
        </h3>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-2 rounded-lg text-xs ${
                alert.severity === 'high'
                  ? 'bg-red-500/10 border border-red-500/30'
                  : 'bg-amber-500/10 border border-amber-500/30'
              }`}
            >
              <div className="text-slate-300">{alert.msg}</div>
              <div className="text-slate-500 mt-1">{alert.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
