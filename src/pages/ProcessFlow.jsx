import { Camera, Cpu, BarChart3, Shield, LayoutDashboard, UserCheck } from 'lucide-react'

export default function ProcessFlow() {
  const steps = [
    { icon: Camera, label: 'Drone Camera Capture', desc: 'RGB + Thermal imaging' },
    { icon: Cpu, label: 'Edge AI Processing', desc: 'On NVIDIA Jetson Orin' },
    { icon: BarChart3, label: 'Analytics Extraction', desc: 'Density | Traffic | Risk Score' },
    { icon: Shield, label: 'Encrypted Metadata', desc: 'Secure transmission' },
    { icon: LayoutDashboard, label: 'Smart City Dashboard', desc: 'Real-time visualization' },
    { icon: UserCheck, label: 'Authority Decision', desc: 'Action & response' },
  ]

  return (
    <div className="min-h-[calc(100vh-3.5rem)] p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display font-bold text-2xl text-white mb-2">
          System Process Flow
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          End-to-end data flow from capture to action
        </p>

        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-cyan-400" />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 h-12 bg-gradient-to-b from-cyan-500/50 to-slate-700" />
                )}
              </div>
              <div className="flex-1 pb-12">
                <div className="bg-slate-900/50 rounded-xl border border-slate-700/50 p-4">
                  <h3 className="font-display font-semibold text-white mb-1">
                    {step.label}
                  </h3>
                  <p className="text-slate-500 text-sm">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flow diagram sketch */}
        <div className="mt-12 p-6 rounded-xl bg-slate-900/30 border border-dashed border-slate-600/50">
          <p className="text-slate-500 text-xs font-display uppercase tracking-wider mb-4">
            Wireframe Reference
          </p>
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-2 flex-shrink-0">
                <div className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-xs text-slate-300 whitespace-nowrap">
                  {step.label}
                </div>
                {i < steps.length - 1 && (
                  <div className="text-slate-600">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
