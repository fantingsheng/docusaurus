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
    
      <ToggleButtonGroup
        value={shadowVal}
        exclusive
        onChange={(e, val) => onValueChange(val)}
        aria-label="border radius"
        size="small"
        fullWidth
      >
        <ToggleButton value="none" aria-label="none">
          <Box sx={{ padding: '10px 0' }}>
            <Avatar sx={{ width: '28px', height: '28px', bgcolor: 'rgba(0,0,0,.14)' }} variant="rounded" src="/screenshot/shadow/none.png" />
            {/* <Typography sx={{ lineHeight: 1, color: 'rgba(0, 0, 0, 0.56)', textTransform: 'none' }} variant="caption">None</Typography> */}
          </Box>
        </ToggleButton>
        <ToggleButton value="hug" aria-label="hug">
          <Box sx={{ padding: '10px 0' }}>
            <Avatar sx={{ width: '28px', height: '28px', bgcolor: 'rgba(0,0,0,.14)' }} variant="rounded" src="/screenshot/shadow/hug.png" />
            {/* <Typography sx={{ lineHeight: 1, color: 'rgba(0, 0, 0, 0.56)', textTransform: 'none' }} variant="caption">Hug</Typography> */}
          </Box>
        </ToggleButton>
        <ToggleButton value="spread" aria-label="spread">
          <Box sx={{ padding: '10px 0' }}>
            <Avatar sx={{ width: '28px', height: '28px', bgcolor: 'rgba(0,0,0,.14)' }} variant="rounded" src="/screenshot/shadow/spread.png" />
            {/* <Typography sx={{ lineHeight: 1, color: 'rgba(0, 0, 0, 0.56)', textTransform: 'none' }} variant="caption">Spread</Typography> */}
          </Box>
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  )
}
