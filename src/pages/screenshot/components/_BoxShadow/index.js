import { useState } from "react"
import { Box, Avatar, styled, ToggleButtonGroup, ToggleButton } from '@mui/material';
import RangeSlider from "@site/src/components/RangeSlider";

import { useConfigContext } from '../../_configProvider';

export const BoxShadowIcon = styled(Box)({
  width: '28px',
  height: '28px',
  backgroundColor: 'rgb(222, 226, 230)',
  borderRadius: '5px',
  border: '1px solid rgba(0,0,0,.12)',
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '100px',
    height: '100px',
    bottom: '8px',
    right: '8px',
    backgroundColor: '#fff',
    borderRadius: '6px'
    // border: '2px solid rgba(0,0,0,1)'
  }
})

export const CusToggleButton = styled(ToggleButton)({
  border: 'none',
  background: 'transparent',
  borderRadius: '5px !important',
  transition: 'all 0.2s ease',
  '&.Mui-selected': {
    background: '#fff',
    '&:hover' : {
      background: '#fff'
    }
  },
  '&:hover': {
    background: 'transparent'
  }
})

export default function BoxShadow() {
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
    <Box>
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
        sx={{
          padding: '3px',
          background: 'rgba(220,220,220,0.55)',
          borderRadius: '5px'
        }}
        fullWidth
      >
        <CusToggleButton value="none" aria-label="none" disableRipple>
          <Box sx={{ padding: '5px 0' }}>
            <BoxShadowIcon />
          </Box>
        </CusToggleButton>
        <CusToggleButton value="hug" aria-label="hug" disableRipple>
          <Box sx={{ padding: '5px 0' }}>
            <BoxShadowIcon sx={{ '&::after': { boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' } }} />
          </Box>
        </CusToggleButton>
        <CusToggleButton value="spread" aria-label="spread" disableRipple>
          <Box sx={{ padding: '5px 0' }}>
            <BoxShadowIcon sx={{ '&::after': { boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.4)' } }} />
          </Box>
        </CusToggleButton>
      </ToggleButtonGroup>
    </Box>
  )
}
