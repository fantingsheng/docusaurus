import { useState, useContext } from 'react';

import { Slider, SliderThumb, Stack, ToggleButtonGroup, ToggleButton, styled, Typography } from '@mui/material';
import { useConfigContext } from '../../_configProvider';

export default function BorderRadius() {
  const { config, handleConfigChange } = useConfigContext();

  const [radius, setRadius] = useState(10);

  const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: '#383c93',
    height: 3,
    padding: '13px 0',
    '& .MuiSlider-thumb': {
      height: 27,
      width: 27,
      backgroundColor: '#fff',
      border: '1px solid currentColor',
      '&:hover': {
        boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
      },
      '& .airbnb-bar': {
        height: 9,
        width: 1,
        backgroundColor: 'currentColor',
        marginLeft: 1,
        marginRight: 1,
      },
    },
    '& .MuiSlider-track': {
      height: 3,
    },
    '& .MuiSlider-rail': {
      color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
      opacity: theme.palette.mode === 'dark' ? undefined : 1,
      height: 3,
    },
  }));

  function AirbnbThumbComponent(props) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
      </SliderThumb>
    );
  }

  const onValueChange = (newVal) => {
    // setRadius(newVal);
    handleConfigChange(newVal, "borderRadius");
  }

  return (
    <>
      {/* <AirbnbSlider
        aria-label='radius'
        slots={{ thumb: AirbnbThumbComponent }}
        value={radius}
        min={1}
        step={1}
        max={40}
        valueLabelDisplay='auto'
        onChange={e => setRadius(e.target.value)}
      /> */}
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <Typography>Radius</Typography>
        <Slider
          value={config.borderRadius}
          aria-label='Radius'
          min={1}
          step={1}
          max={40}
          valueLabelDisplay='auto'
          onChange={e => onValueChange(e.target.value)}
        />
        <Typography>{config.borderRadius}</Typography>
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