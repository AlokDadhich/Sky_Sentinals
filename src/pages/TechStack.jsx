import { Cpu, Brain, Server, Monitor } from 'lucide-react'

export default function TechStack() {
  const sections = [
    {
      title: 'Hardware',
      icon: Cpu,
      items: ['Drone Platform', 'NVIDIA Jetson Orin Nano', 'RGB + Thermal Camera', 'LiDAR / Depth Sensor'],
    },
    {
      title: 'AI & Software',
      icon: Brain,
      items: ['PyTorch', 'YOLOv8', 'DeepSORT', 'LSTM Networks', 'OpenCV', 'ONNX + TensorRT'],
    },
    {
      title: 'Backend',
      icon: Server,
      items: ['FastAPI', 'PostgreSQL', 'MQTT'],
    },
    {
      title: 'Frontend',
      icon: Monitor,
      items: ['React', 'Mapbox'],
    },
  ]

  return (
    <div className="min-h-[calc(100vh-3.5rem)] p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display font-bold text-2xl text-white mb-2">
          Technology Stack
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          End-to-end technology choices
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, i) => (
            <div
              key={i}
              className="bg-slate-900/50 rounded-xl border border-slate-700/50 overflow-hidden"
            >
              <div className="p-4 border-b border-slate-700/50 flex items-center gap-3">
                <section.icon className="w-6 h-6 text-cyan-400" />
                <h2 className="font-display font-semibold text-white">{section.title}</h2>
              </div>
              <div className="p-4 flex flex-wrap gap-2">
                {section.items.map((item, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 rounded-lg bg-slate-800/80 text-slate-300 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
