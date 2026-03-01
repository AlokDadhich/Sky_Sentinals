import { Outlet, Link, useLocation } from 'react-router-dom'
import { Map, Layers, GitBranch, Users, Cpu } from 'lucide-react'

export default function Layout() {
  const loc = useLocation()
  const nav = [
    { to: '/', icon: Map, label: 'Dashboard' },
    { to: '/process-flow', icon: GitBranch, label: 'Process Flow' },
    { to: '/architecture', icon: Layers, label: 'Architecture' },
    { to: '/use-case', icon: Users, label: 'Use Case' },
    { to: '/tech-stack', icon: Cpu, label: 'Tech Stack' },
  ]

  return (
    <div className="min-h-screen bg-[#0a0e17]">
      <header className="h-14 border-b border-slate-800/50 flex items-center justify-between px-6 bg-[#0a0e17]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-600 flex items-center justify-center">
            <Map className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-semibold text-lg text-white">
            SkySentinels
          </span>
          <span className="text-slate-500 text-sm hidden lg:inline">
            Intelligent Aerial Surveillance Platform
          </span>
        </div>
        <nav className="flex items-center gap-1 overflow-x-auto">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-sm whitespace-nowrap ${
                loc.pathname === item.to
                  ? 'text-cyan-400 bg-slate-800/80'
                  : 'text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50'
              }`}
            >
              <item.icon className="w-4 h-4 flex-shrink-0" />
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
