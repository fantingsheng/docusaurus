import { useState } from "react"
import { Box, Avatar, Slider, ToggleButtonGroup, ToggleButton, Stack, Typography } from '@mui/material';
import { useConfigContext } from '../../_configProvider';

export default function BoxShadow({ shadow }) {
  const { config, handleConfigChange } = useConfigContext();

  const [shadowVal, setShadowVal] = useState("spread");

  const onValueChange = (val) => {
    setShadowVal(val);
    if (val === "none") {
      handleConfigChange(null, "shadowX");
      handleConfigChange(null, "shadowY");
    } else if (val === "hug") {
      handleConfigChange(0.3125, "shadowX");
      handleConfigChange(0.30625, "shadowY");
    } else if (val === "spread") {
      handleConfigChange(0.46875, "shadowX");
      handleConfigChange(0.65625, "shadowY");
    }
  }
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
        <ToggleButton value="none" aria-label="none">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar sx={{ width: '30px', height: '30px', bgcolor: 'rgba(0,0,0,.14)' }} variant="rounded" src="/screenshot/shadow/none.png" />
            <Typography sx={{ lineHeight: 1 }} variant="caption">None</Typography>
          </Box>
        </ToggleButton>
        <ToggleButton value="hug" aria-label="hug">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar sx={{ width: '30px', height: '30px', bgcolor: 'rgba(0,0,0,.14)' }} variant="rounded" src="/screenshot/shadow/hug.png" />
            <Typography sx={{ lineHeight: 1 }} variant="caption">Hug</Typography>
          </Box>
        </ToggleButton>
        <ToggleButton value="spread" aria-label="spread">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar sx={{ width: '30px', height: '30px', bgcolor: 'rgba(0,0,0,.14)' }} variant="rounded" src="/screenshot/shadow/spread.png" />
            <Typography sx={{ lineHeight: 1 }} variant="caption">Spread</Typography>
          </Box>
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  )
}
