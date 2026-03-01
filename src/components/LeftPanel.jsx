import { Activity, Car, AlertTriangle } from 'lucide-react'

export default function LeftPanel() {
  const metrics = [
    {
      label: 'CROWD DENSITY SCORE',
      value: '72%',
      status: 'warning',
      icon: Activity,
      description: 'Shivaji Nagar Zone',
    },
    {
      label: 'TRAFFIC CONGESTION INDEX',
      value: '58',
      status: 'medium',
      icon: Car,
      description: 'Moderate congestion',
    },
    {
      label: 'ALERT LEVEL',
      value: 'ELEVATED',
      status: 'alert',
      icon: AlertTriangle,
      description: '2 active alerts',
    },
  ]

  const statusColors = {
    warning: 'border-amber-500/50 bg-amber-500/5',
    medium: 'border-cyan-500/50 bg-cyan-500/5',
    alert: 'border-red-500/50 bg-red-500/5',
  }

  const iconColors = {
    warning: 'text-amber-400',
    medium: 'text-cyan-400',
    alert: 'text-red-400',
  }

  return (
    <div className="w-64 flex-shrink-0 flex flex-col gap-4">
      <div className="bg-slate-900 rounded-xl border border-slate-700/70 p-4">
        <h3 className="font-display font-semibold text-sm text-slate-400 mb-4">
          REAL-TIME METRICS
        </h3>
        <div className="space-y-3">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg border ${statusColors[metric.status]}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <metric.icon className={`w-4 h-4 ${iconColors[metric.status]}`} />
                <span className="text-xs text-slate-500">{metric.label}</span>
              </div>
              <div className="text-xl font-display font-bold text-white">
                {metric.value}
              </div>
              <div className="text-xs text-slate-500 mt-1">{metric.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Heatmap Legend */}
      <div className="bg-slate-900 rounded-xl border border-slate-700/70 p-4">
        <h3 className="font-display font-semibold text-sm text-slate-400 mb-3">
          HEATMAP LEGEND
        </h3>
        <div className="space-y-2">
          <div className="text-xs text-slate-400">High density (&gt;80%)</div>
          <div className="text-xs text-slate-400">Medium (50-80%)</div>
          <div className="text-xs text-slate-400">Low (&lt;50%)</div>
        </div>
      </div>
    </div>
  )
}
