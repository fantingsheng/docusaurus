import { useState } from "react"
import { Slider, ToggleButtonGroup, ToggleButton } from '@mui/material';

export default function BoxShadow({ shadow, handleConfigChange }) {
  const [opacity, setOpacity] = useState(0.4);
  const [shadowVal, setShadowVal] = useState(shadow);

  const onValueChange = () => {}
  return (
    <>
      <Slider
        value={opacity}
        aria-label='shadow'
        min={0}
        step={0.05}
        max={1}
        valueLabelDisplay='auto'
        onChange={e => setOpacity(e.target.value)}
      />
      <ToggleButtonGroup
        value={shadowVal}
        exclusive
        onChange={(e, val) => onValueChange(val)}
        aria-label="border radius"
        size="small"
      >
        <ToggleButton value={"none"} aria-label="5px">
          None
        </ToggleButton>
        <ToggleButton value={""} aria-label="10px">
          Hug
        </ToggleButton>
        <ToggleButton value={""} aria-label="10px">
          Spread
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  )
}
