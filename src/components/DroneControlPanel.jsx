import { X, Power, PowerOff, AlertTriangle, Home, Bell, RotateCcw } from 'lucide-react'

export default function DroneControlPanel({ onClose }) {
  const statusFields = [
    { label: 'FLIGHT MODE', value: 'AUTO PATROL' },
    { label: 'BATTERY LEVEL', value: '78%' },
    { label: 'GPS STATUS', value: 'LOCKED' },
    { label: 'SATELLITES', value: '14' },
    { label: 'PRE-ARM CHECK', value: 'PASS' },
    { label: 'ARMED STATUS', value: 'ARMED' },
  ]

  const controlButtons = [
    { label: 'Arm Drone', icon: Power },
    { label: 'Disarm', icon: PowerOff },
    { label: 'Emergency Land', icon: AlertTriangle },
    { label: 'Return Home', icon: Home },
    { label: 'Ring Buzzer', icon: Bell },
    { label: 'Reboot FC', icon: RotateCcw },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-slate-900 rounded-2xl border border-slate-700/50 w-full max-w-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-slate-700/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <h2 className="font-display font-semibold text-lg text-white">
              Drone Control Panel
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Grid */}
        <div className="p-4 border-b border-slate-700/50">
          <div className="grid grid-cols-3 gap-2">
            {statusFields.map((field, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg border bg-slate-800/50 ${
                  field.label === 'SATELLITES'
                    ? 'border-cyan-500/50 ring-1 ring-cyan-500/20'
                    : 'border-slate-700/50'
                }`}
              >
                <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">
                  {field.label}
                </div>
                <div className="text-sm font-mono text-white">{field.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Control Buttons */}
        <div className="p-4">
          <div className="grid grid-cols-3 gap-2">
            {controlButtons.map((btn, i) => (
              <button
                key={i}
                className="flex flex-col items-center gap-2 p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700/50"
              >
                <btn.icon className="w-5 h-5" />
                <span className="text-xs font-medium">{btn.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
