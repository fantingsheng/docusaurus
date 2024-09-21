import { Box, Slider } from '@mui/material';

export default function RangeSlider({ minVal, maxVal, step, value, onValueChange, label }) {
  return (
    <Box sx={{ position: 'relative', display: 'flex' }}>
      <Slider
        value={value}
        aria-label='Radius'
        min={minVal}
        step={step}
        max={maxVal}
        sx={{
          height: 28,
          padding: '10px 0',
          color: 'rgba(220,220,220,1)',
          '& .MuiSlider-thumb': {
            width: '2px',
            height: '20px',
            margin: '0 4px',
            borderRadius: 0,
            backgroundColor: 'currentColor',
            boxShadow: 'none',
            border: 'none',
            '&::before': { boxShadow: 'none' },
            '&:hover': { boxShadow: 'none' }
          },
          borderRadius: '5px',
          '& .MuiSlider-rail': {
            position: 'relative'
          },
          '& .MuiSlider-track': {
            border: 'none'
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
        onChange={(e, val) => onValueChange(val)}
      />
      <Box sx={{
        width: '100%',
        display: 'flex',
        position: 'absolute',
        height: '100%',
        top: 0,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 8px',
        pointerEvents: 'none',
        font: 'normal 11px/14px Inter,sans-serif',
        letterSpacing: '-.2px',
        color: 'rgba(0,0,0,0.56)'
      }}>
        <span>{label}</span>
        <span>{value}</span>
      </Box>
    </Box>
  )
}