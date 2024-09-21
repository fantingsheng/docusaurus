import { useState, useContext } from 'react';
import { Slider, Box, Stack, ToggleButtonGroup, ToggleButton, styled, Typography, Avatar } from '@mui/material';
import RangeSlider from "@site/src/components/RangeSlider";
import { useConfigContext } from '../../_configProvider';

export const BorderRadiusIcon = styled(Box)({
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
    top: '8px',
    right: '8px',
    border: '2px solid rgba(0,0,0,1)'
  }
})

export default function BorderRadius() {
  const { config, handleConfigChange } = useConfigContext();

  const onValueChange = (newVal) => {
    console.log("newVal", newVal);
    handleConfigChange(newVal, "borderRadius");
  }

  return (
    <>
      <RangeSlider
        minVal={1}
        maxVal={40}
        step={1}
        value={config.borderRadius}
        label='Radius'
        onValueChange={val => handleConfigChange(val, "borderRadius")}
      />
      <ToggleButtonGroup
        value={config.borderRadius}
        exclusive
        onChange={(e, val) => onValueChange(val)}
        aria-label="border radius switch"
        size="small"
        fullWidth
      >
        <ToggleButton value={0} aria-label="Sharp">
          <Box sx={{ padding: '10px 0' }}>
            <BorderRadiusIcon />
            {/* <Typography sx={{ lineHeight: 1, color: 'rgba(0, 0, 0, 0.56)', textTransform: 'none', fontSize: '11px' }} variant="caption">直角</Typography> */}
          </Box>
        </ToggleButton>
        <ToggleButton value={20} aria-label="Curved">
          <Box sx={{ padding: '10px 0' }}>
            <BorderRadiusIcon sx={{ '&::after': { borderRadius: '8px' } }} />
            {/* <Typography sx={{ lineHeight: 1, color: 'rgba(0, 0, 0, 0.56)', textTransform: 'none' }} variant="caption">Curved</Typography> */}
          </Box>
        </ToggleButton>
        <ToggleButton value={40} aria-label="Round">
          <Box sx={{ padding: '10px 0' }}>
            <BorderRadiusIcon sx={{ '&::after': { borderRadius: '12px' } }} />
            {/* <Typography sx={{ lineHeight: 1, color: 'rgba(0, 0, 0, 0.56)', textTransform: 'none' }} variant="caption">Round</Typography> */}
          </Box>
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  )
}