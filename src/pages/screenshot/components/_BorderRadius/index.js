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

export default function BorderRadius() {
  const { config, handleConfigChange } = useConfigContext();

  const onValueChange = (newVal) => {
    console.log("newVal", newVal);
    handleConfigChange(newVal, "borderRadius");
  }

  return (
    <Box>
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
        sx={{
          padding: '3px',
          background: 'rgba(220,220,220,0.55)',
          borderRadius: '5px'
        }}
        fullWidth
      >
        <CusToggleButton value={0} aria-label="Sharp" disableRipple>
          <Box sx={{ padding: '5px 0' }}>
            <BorderRadiusIcon />
          </Box>
        </CusToggleButton>
        <CusToggleButton value={20} aria-label="Curved" disableRipple>
          <Box sx={{ padding: '5px 0' }}>
            <BorderRadiusIcon sx={{ '&::after': { borderRadius: '8px' } }} />
          </Box>
        </CusToggleButton>
        <CusToggleButton value={40} aria-label="Round" disableRipple>
          <Box sx={{ padding: '5px 0' }}>
            <BorderRadiusIcon sx={{ '&::after': { borderRadius: '12px' } }} />
          </Box>
        </CusToggleButton>
      </ToggleButtonGroup>
    </Box>
  )
}