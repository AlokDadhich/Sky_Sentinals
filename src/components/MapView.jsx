import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import { useEffect } from 'react'
import L from 'leaflet'

// Pune, India coordinates
const PUNE_CENTER = [18.5204, 73.8567]

// Heatmap zone data - Red (high), Yellow (medium), Green (low)
const HEATMAP_ZONES = [
  { lat: 18.525, lng: 73.85, intensity: 0.9, color: '#ef4444', radius: 400 },
  { lat: 18.518, lng: 73.862, intensity: 0.7, color: '#f59e0b', radius: 350 },
  { lat: 18.515, lng: 73.848, intensity: 0.5, color: '#22c55e', radius: 300 },
  { lat: 18.532, lng: 73.858, intensity: 0.6, color: '#f59e0b', radius: 280 },
  { lat: 18.508, lng: 73.855, intensity: 0.4, color: '#22c55e', radius: 320 },
  { lat: 18.522, lng: 73.868, intensity: 0.85, color: '#ef4444', radius: 380 },
  { lat: 18.528, lng: 73.842, intensity: 0.55, color: '#22c55e', radius: 260 },
]

// Drone position
const DRONE_POSITION = [18.520, 73.858]

export default function MapView() {
  useEffect(() => {
    // Fix Leaflet default icon for bundlers
    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    })
  }, [])

  return (
    <MapContainer
      center={PUNE_CENTER}
      zoom={14}
      className="w-full h-full rounded-b-xl z-0"
      style={{ background: '#0f172a' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      {/* Heatmap zones */}
      {HEATMAP_ZONES.map((zone, i) => (
        <CircleMarker
          key={i}
          center={[zone.lat, zone.lng]}
          radius={zone.radius / 25}
          pathOptions={{
            color: zone.color,
            fillColor: zone.color,
            fillOpacity: 0.35,
            weight: 2,
          }}
        >
          <Popup>
            <span className="text-slate-800">
              Density: {Math.round(zone.intensity * 100)}%
            </span>
          </Popup>
        </CircleMarker>
      ))}

      {/* Drone marker */}
      <CircleMarker
        center={DRONE_POSITION}
        radius={8}
        pathOptions={{
          color: '#06b6d4',
          fillColor: '#06b6d4',
          fillOpacity: 1,
          weight: 2,
        }}
      >
        <Popup>
          <div className="text-slate-800">
            <strong>Drone #1</strong>
            <br />
            Patrol Zone: Shivaji Nagar
          </div>
        </Popup>
      </CircleMarker>
    </MapContainer>
  )
}
