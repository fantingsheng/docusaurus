import { useState, useContext } from 'react';

import { Slider, SliderThumb, Stack, ToggleButtonGroup, ToggleButton, styled, Typography } from '@mui/material';
import { useConfigContext } from '../../_configProvider';

export default function BorderRadius() {
  const { config, handleConfigChange } = useConfigContext();

  const onValueChange = (newVal) => {
    handleConfigChange(newVal, "borderRadius");
  }

  return (
    <>
      <Stack spacing={2} direction="row" sx={{  }} alignItems="center">
        <Typography variant="caption">Radius</Typography>
        <Slider
          value={config.borderRadius}
          aria-label='Radius'
          min={1}
          step={1}
          max={40}
          onChange={(e, val) => onValueChange(val)}
        />
        <Typography variant="caption">{config.borderRadius}</Typography>
      </Stack>
      
      <ToggleButtonGroup
        value={config.borderRadius}
        exclusive
        onChange={(e, val) => onValueChange(val)}
        aria-label="border radius switch"
        size="small"
        fullWidth
      >
        <ToggleButton value={5} aria-label="5px">
          5px
        </ToggleButton>
        <ToggleButton value={10} aria-label="10px">
          10px
        </ToggleButton>
        <ToggleButton value={15} aria-label="15px">
          15px
        </ToggleButton>
        <ToggleButton value={20} aria-label="20px">
          20px
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  )
}