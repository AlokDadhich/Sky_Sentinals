import { X, Radio, Video } from 'lucide-react'

export default function LiveVideoFeed({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-slate-900 rounded-2xl border border-slate-700/50 w-full max-w-md shadow-2xl overflow-hidden">
        {/* Video feed placeholder */}
        <div className="aspect-video bg-slate-950 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-4 border-2 border-cyan-500/50">
                <Video className="w-12 h-12 text-cyan-400" />
              </div>
              <p className="text-slate-400 font-display text-sm">LIVE VIDEO FEED</p>
              <p className="text-slate-500 text-xs mt-1">Drone DRN-01 • Shivaji Nagar Zone</p>
            </div>
          </div>
          {/* Simulated scanlines */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
          }} />
        </div>

        {/* Feed options */}
        <div className="p-4 border-t border-slate-700/50 space-y-2">
          <button
            className="w-full flex items-center gap-3 p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all group"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-cyan-400 font-medium">Live Video Feed</span>
            <X className="w-4 h-4 text-slate-500 ml-auto group-hover:text-white" />
          </button>
          <button
            className="w-full flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 transition-all"
          >
            <Video className="w-4 h-4 text-slate-500" />
            <span className="text-sm text-slate-400">Video Feed</span>
          </button>
        </div>

        {/* Close button */}
        <div className="p-4 pt-0">
          <button
            onClick={onClose}
            className="w-full py-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all text-sm font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
