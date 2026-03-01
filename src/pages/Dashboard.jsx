import { useState } from 'react'
import MapView from '../components/MapView'
import LeftPanel from '../components/LeftPanel'
import RightPanel from '../components/RightPanel'
import AlertTimeline from '../components/AlertTimeline'
import DroneGrid from '../components/DroneGrid'
import DroneControlPanel from '../components/DroneControlPanel'
import LiveVideoFeed from '../components/LiveVideoFeed'
import { Camera, Gamepad2, Maximize2, RefreshCw } from 'lucide-react'

export default function Dashboard() {
  const [showDronePanel, setShowDronePanel] = useState(false)
  const [showVideoFeed, setShowVideoFeed] = useState(false)

  return (
    <div className="h-[calc(100vh-3.5rem)] p-4 overflow-hidden">
      <div className="h-full grid grid-rows-[minmax(0,1.4fr)_minmax(0,1fr)] grid-cols-[260px_minmax(0,2.2fr)_320px] gap-4">
        {/* Row 1, Col 1: metrics */}
        <div className="h-full">
          <LeftPanel />
        </div>

        {/* Row 1, Col 2: map */}
        <div className="h-full flex flex-col min-w-0 bg-slate-900 rounded-xl border border-slate-800 overflow-hidden relative">
          <div className="p-3 border-b border-slate-800 flex items-center justify-between">
            <div>
              <h2 className="font-display font-semibold text-sm text-white">
                CITY SURVEILLANCE MAP
              </h2>
              <p className="text-slate-500 text-xs">Real-time heatmap zones & drone positions</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all">
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all">
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          <div className="flex-1 min-h-0 relative">
            <MapView />
          </div>
        </div>

        {/* Row 1, Col 3: drone status / alerts console */}
        <div className="h-full">
          <RightPanel onOpenDronePanel={() => setShowDronePanel(true)} />
        </div>

        {/* Row 2, Col 1-2: multi-drone wall */}
        <div className="h-full col-span-2">
          <DroneGrid />
        </div>

        {/* Row 2, Col 3: alert timeline console */}
        <div className="h-full">
          <AlertTimeline />
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-40">
        <button
          onClick={() => setShowVideoFeed(true)}
          className="w-14 h-14 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-600/30 flex items-center justify-center transition-all hover:scale-105"
          title="Live Video Feed"
        >
          <Camera className="w-6 h-6" />
        </button>
        <button
          onClick={() => setShowDronePanel(true)}
          className="w-14 h-14 rounded-full bg-slate-700 hover:bg-slate-600 text-white shadow-lg flex items-center justify-center transition-all hover:scale-105"
          title="Drone Control Panel"
        >
          <Gamepad2 className="w-6 h-6" />
        </button>
      </div>

      {/* Modals */}
      {showDronePanel && (
        <DroneControlPanel onClose={() => setShowDronePanel(false)} />
      )}
      {showVideoFeed && (
        <LiveVideoFeed onClose={() => setShowVideoFeed(false)} />
      )}
    </div>
  )
}
