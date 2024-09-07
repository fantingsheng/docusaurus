import { useState } from "react"
import { Box, Avatar, Slider, ToggleButtonGroup, ToggleButton, Stack, Typography } from '@mui/material';
import RangeSlider from "@site/src/components/RangeSlider";

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
      <RangeSlider
        minVal={0.1}
        maxVal={0.7}
        step={0.01}
        value={config.shadowOpacity}
        label='Opacity'
        onValueChange={val => handleConfigChange(val, "shadowOpacity")}
      />
      {/* <Stack spacing={2} direction="row" sx={{  }} alignItems="center">
        <Typography variant="caption" sx={{ color: 'rgba(0, 0, 0, 0.56)' }}>Opacity</Typography>
        <Slider
          value={config.shadowOpacity}
          aria-label='shadow'
          valueLabelDisplay="auto"
          min={0.1}
          step={0.01}
          max={0.7}
          sx={{
            '& .MuiSlider-thumb': {
              backgroundColor: '#fff',
              border: '2px solid currentColor',
            },
            '& .MuiSlider-valueLabel': {
              lineHeight: 1.2,
              fontSize: 12,
              background: 'unset',
              padding: 0,
              width: 32,
              height: 32,
              borderRadius: '50% 50% 50% 0',
              backgroundColor: 'var(--ifm-color-primary)',
              transformOrigin: 'bottom left',
              transform: 'translate(50%, -85%) rotate(-45deg) scale(0)',
              '&::before': { display: 'none' },
              '&.MuiSlider-valueLabelOpen': {
                transform: 'translate(50%, -85%) rotate(-45deg) scale(1)',
              },
              '& > *': {
                transform: 'rotate(45deg)',
              },
            }
          }}
          onChange={(e, val) => handleConfigChange(val, "shadowOpacity")}
        />
        <Typography variant="caption" sx={{ color: 'rgba(0, 0, 0, 0.56)' }}>{config.shadowOpacity}</Typography>
      </Stack> */}
    
      <ToggleButtonGroup
        value={shadowVal}
        exclusive
        onChange={(e, val) => onValueChange(val)}
        aria-label="border radius"
        size="small"
        fullWidth
      >
        <ToggleButton value="none" aria-label="none">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <Avatar sx={{ width: '28px', height: '28px', bgcolor: 'rgba(0,0,0,.14)' }} variant="rounded" src="/screenshot/shadow/none.png" />
            <Typography sx={{ lineHeight: 1, color: 'rgba(0, 0, 0, 0.56)', textTransform: 'none' }} variant="caption">None</Typography>
          </Box>
        </ToggleButton>
        <ToggleButton value="hug" aria-label="hug">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <Avatar sx={{ width: '28px', height: '28px', bgcolor: 'rgba(0,0,0,.14)' }} variant="rounded" src="/screenshot/shadow/hug.png" />
            <Typography sx={{ lineHeight: 1, color: 'rgba(0, 0, 0, 0.56)', textTransform: 'none' }} variant="caption">Hug</Typography>
          </Box>
        </ToggleButton>
        <ToggleButton value="spread" aria-label="spread">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <Avatar sx={{ width: '28px', height: '28px', bgcolor: 'rgba(0,0,0,.14)' }} variant="rounded" src="/screenshot/shadow/spread.png" />
            <Typography sx={{ lineHeight: 1, color: 'rgba(0, 0, 0, 0.56)', textTransform: 'none' }} variant="caption">Spread</Typography>
          </Box>
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  )
}
