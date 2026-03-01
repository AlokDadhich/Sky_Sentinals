import { Camera, Gauge, Cpu, Shield, Database, LayoutDashboard } from 'lucide-react'

export default function Architecture() {
  const layers = [
    {
      name: 'Layer 1: Drone Hardware',
      icon: Camera,
      items: ['RGB Camera', 'Thermal Sensor', 'LiDAR', 'GPS + IMU'],
    },
    {
      name: 'Layer 2: Edge AI (Jetson Orin Nano)',
      icon: Cpu,
      items: ['YOLO Detection', 'Density Model', 'LSTM Risk Model', 'Traffic Detection', 'Obstacle Avoidance'],
    },
    {
      name: 'Layer 3: Communication',
      icon: Shield,
      items: ['MQTT over TLS', 'AES-256 Encryption'],
    },
    {
      name: 'Layer 4: Backend',
      icon: Database,
      items: ['FastAPI', 'PostgreSQL'],
    },
    {
      name: 'Layer 5: Frontend',
      icon: LayoutDashboard,
      items: ['React', 'Mapbox', 'Alert Engine'],
    },
  ]

  return (
    <div className="min-h-[calc(100vh-3.5rem)] p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display font-bold text-2xl text-white mb-2">
          System Architecture
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          Layered architecture with secure data flow
        </p>

        <div className="space-y-4">
          {layers.map((layer, i) => (
            <div
              key={i}
              className="bg-slate-900/50 rounded-xl border border-slate-700/50 overflow-hidden"
            >
              <div className="p-4 border-b border-slate-700/50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                  <layer.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h2 className="font-display font-semibold text-white">
                  {layer.name}
                </h2>
              </div>
              <div className="p-4 flex flex-wrap gap-2">
                {layer.items.map((item, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 rounded-lg bg-slate-800/80 text-slate-300 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {i < layers.length - 1 && (
                <div className="h-6 flex justify-center">
                  <div className="w-0.5 h-6 bg-cyan-500/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Data flow note */}
        <div className="mt-8 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
          <p className="text-cyan-400 text-sm">
            ↑ Data flows upward from hardware to dashboard
          </p>
        </div>
      </div>
    </div>
  )
}
