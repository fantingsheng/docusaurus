import { Box, Slider } from '@mui/material';

export default function RangeSlider({ minVal, maxVal, step, value, onValueChange, label }) {
  return (
    <Box sx={{ position: 'relative', display: 'flex', margin: '10px 0', backgroundColor: 'rgba(220,220,220,0.65)', padding: '3px', borderRadius: '5px' }}>
      <Slider
        value={value}
        aria-label='Radius'
        min={minVal}
        step={step}
        max={maxVal}
        sx={{
          height: 28,
          padding: '0',
          color: 'rgba(228,228,228,1)',
          borderRadius: '5px',
          position: 'relative',
          '& .MuiSlider-thumb': {
            width: '2px',
            height: '20px',
            margin: '0 4px',
            borderRadius: '2px',
            backgroundColor: 'rgba(0,0,0,0.4)',
            boxShadow: 'none',
            border: 'none',
            '&::before': { boxShadow: 'none' },
            '&:hover': { boxShadow: 'none' }
          },
          '& .MuiSlider-rail': {
            position: 'relative',
            backgroundColor: 'transparent',
            opacity: 1
          },
          '& .MuiSlider-track': {
            border: 'none',
            borderRadius: 'inherit',
            backgroundColor: '#fff',
            left: '3px'
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
        padding: '0 10px 0 8px',
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