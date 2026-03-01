import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Architecture from './pages/Architecture'
import ProcessFlow from './pages/ProcessFlow'
import UseCaseDiagram from './pages/UseCaseDiagram'
import TechStack from './pages/TechStack'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="architecture" element={<Architecture />} />
          <Route path="process-flow" element={<ProcessFlow />} />
          <Route path="use-case" element={<UseCaseDiagram />} />
          <Route path="tech-stack" element={<TechStack />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
