import { Slider, SliderThumb, Stack, ToggleButtonGroup, ToggleButton, styled, Typography } from '@mui/material';
import { useState, useContext } from 'react';

import { ConfigContext } from "../../index";

export default function SizeAndPosition() {
  const { config, handleConfigChange } = useContext(ConfigContext);

  const onValueChange = (newVal) => {
    // setRadius(newVal);
    handleConfigChange(newVal, "scale");
  }

  return (
    <>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <Typography>Size</Typography>
        <Slider
          value={config.scale}
          aria-label='Radius'
          min={0}
          step={0.01}
          max={2}
          valueLabelDisplay='auto'
          onChangeCommitted={e => onValueChange(e.target.value)}
        />
        <Typography>{config.scale}</Typography>
      </Stack>
      
      {/* <ToggleButtonGroup
        value={config.scale}
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
      </ToggleButtonGroup> */}
    </>
  )
}