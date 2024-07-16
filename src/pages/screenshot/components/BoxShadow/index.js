import { useState } from "react"
import { Slider, ToggleButtonGroup, ToggleButton, Stack, Typography } from '@mui/material';
import { useConfigContext } from '../../_configProvider';

export default function BoxShadow({ shadow }) {
  const { config, handleConfigChange } = useConfigContext();

  const [opacity, setOpacity] = useState(0.4);
  const [shadowVal, setShadowVal] = useState(shadow);

  const onValueChange = () => {}
  return (
    <>
      <Stack spacing={2} direction="row" sx={{  }} alignItems="center">
        <Typography variant="caption">Opacity</Typography>
        <Slider
          value={config.shadowOpacity * 100}
          aria-label='shadow'
          min={10}
          step={1}
          max={70}
          onChange={(e, val) => handleConfigChange(val / 100, "shadowOpacity")}
        />
        <Typography variant="caption">{config.shadowOpacity * 100}</Typography>
      </Stack>
    
      <ToggleButtonGroup
        value={shadowVal}
        exclusive
        onChange={(e, val) => onValueChange(val)}
        aria-label="border radius"
        size="small"
        fullWidth
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
