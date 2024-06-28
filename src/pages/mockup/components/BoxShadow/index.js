import { useState } from "react"
import { Slider } from '@mui/material';

export default function BoxShadow({ shadow, handleConfigChange }) {
  const [opacity, setOpacity] = useState(0.4);

  return (
    <>
      <Slider
        value={opacity}
        aria-label='Default'
        min={0}
        step={0.05}
        max={1}
        size='small'
        valueLabelDisplay='auto'
        onChange={e => setOpacity(e.target.value)}
      />
    </>
  )
}
