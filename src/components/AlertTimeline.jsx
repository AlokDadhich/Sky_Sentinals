import { useState } from 'react'
import { Clock, RefreshCw } from 'lucide-react'

const ALERTS = [
  { id: 1, time: '14:32', type: 'CROWD', severity: 'high', location: 'Market Square', desc: 'Density threshold exceeded' },
  { id: 2, time: '14:28', type: 'TRAFFIC', severity: 'medium', location: 'FC Road', desc: 'Congestion detected' },
  { id: 3, time: '14:25', type: 'BEHAVIOR', severity: 'low', location: 'Shivaji Nagar', desc: 'Abnormal movement pattern' },
  { id: 4, time: '14:18', type: 'CROWD', severity: 'medium', location: 'Swargate', desc: 'Increasing density trend' },
  { id: 5, time: '14:12', type: 'TRAFFIC', severity: 'high', location: 'Katraj Junction', desc: 'Traffic violation detected' },
]

export default function AlertTimeline() {
  const [autoRefresh, setAutoRefresh] = useState(true)

  return (
    <div className="h-full bg-slate-900 rounded-xl border border-slate-800 overflow-hidden flex flex-col">
      <div className="p-3 border-b border-slate-800 flex items-center justify-between">
        <h3 className="font-display font-semibold text-sm text-slate-400 flex items-center gap-2">
          <Clock className="w-4 h-4" />
          ALERT TIMELINE
        </h3>
        <button
          onClick={() => setAutoRefresh(!autoRefresh)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            autoRefresh
              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
              : 'bg-slate-800 text-slate-400 border border-slate-600'
          }`}
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Auto Refresh {autoRefresh ? 'ON' : 'OFF'}
        </button>
      </div>
      <div className="overflow-x-auto overflow-y-hidden flex-1">
        <div className="flex gap-4 p-3 min-w-max">
          {ALERTS.map((alert) => (
            <div
              key={alert.id}
              className={`flex-shrink-0 w-48 p-3 rounded-lg border ${
                alert.severity === 'high'
                  ? 'border-red-500/40 bg-red-500/5'
                  : alert.severity === 'medium'
                  ? 'border-amber-500/40 bg-amber-500/5'
                  : 'border-slate-600 bg-slate-800/30'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-slate-500">{alert.time}</span>
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    alert.severity === 'high'
                      ? 'bg-red-500/30 text-red-400'
                      : alert.severity === 'medium'
                      ? 'bg-amber-500/30 text-amber-400'
                      : 'bg-slate-600 text-slate-400'
                  }`}
                >
                  {alert.type}
                </span>
              </div>
              <div className="text-sm text-white font-medium truncate">{alert.location}</div>
              <div className="text-xs text-slate-500 truncate">{alert.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
