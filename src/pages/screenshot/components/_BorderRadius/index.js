import { useState, useContext } from 'react';

import { Slider, Box, Stack, ToggleButtonGroup, ToggleButton, styled, Typography, Avatar } from '@mui/material';
import { useConfigContext } from '../../_configProvider';

export const BorderRadiusIcon = styled(Box)({
  width: '28px',
  height: '28px',
  backgroundColor: 'rgba(0,0,0,.14)',
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
    handleConfigChange(newVal, "borderRadius");
  }

  return (
    <>
      <Stack spacing={2} direction="row" sx={{  }} alignItems="center">
        <Typography variant="caption" sx={{ color: 'rgba(0, 0, 0, 0.56)' }}>Radius</Typography>
        <Slider
          value={config.borderRadius}
          aria-label='Radius'
          min={1}
          step={1}
          max={40}
          onChange={(e, val) => onValueChange(val)}
        />
        <Typography variant="caption" sx={{ color: 'rgba(0, 0, 0, 0.56)' }}>{config.borderRadius}</Typography>
      </Stack>
      
      <ToggleButtonGroup
        value={config.borderRadius}
        exclusive
        onChange={(e, val) => onValueChange(val)}
        aria-label="border radius switch"
        size="small"
        fullWidth
      >
        <ToggleButton value={0} aria-label="Sharp">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <BorderRadiusIcon />
            <Typography sx={{ lineHeight: 1, color: 'rgba(0, 0, 0, 0.56)', textTransform: 'none' }} variant="caption">Sharp</Typography>
          </Box>
        </ToggleButton>
        <ToggleButton value={10} aria-label="Curved">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <BorderRadiusIcon sx={{ '&::after': { borderRadius: '8px' } }} />
            <Typography sx={{ lineHeight: 1, color: 'rgba(0, 0, 0, 0.56)', textTransform: 'none' }} variant="caption">Curved</Typography>
          </Box>
        </ToggleButton>
        <ToggleButton value={20} aria-label="Round">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <BorderRadiusIcon sx={{ '&::after': { borderRadius: '14px' } }} />
            <Typography sx={{ lineHeight: 1, color: 'rgba(0, 0, 0, 0.56)', textTransform: 'none' }} variant="caption">Round</Typography>
          </Box>
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  )
}