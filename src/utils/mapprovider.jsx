import { createContext, useContext, useState, useMemo } from "react";

export const MapContext = createContext(null)

export function MapProvider({ children }) {
  const [hoverCoordinate, setHoverCoordinate] = useState(null)

  const value = useMemo(
    () => ({
      hoverCoordinate,
      setHoverCoordinate,
    }),
    [hoverCoordinate],
  )

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>
}

export function useMapContext() {
  const context = useContext(MapContext)
  if (!context) throw Error('Must be used within MapProvider')
  return context
}
