import { useState } from "react"
import { Box, Avatar, styled, ToggleButtonGroup, ToggleButton, Paper } from '@mui/material';
import RangeSlider from "@site/src/components/RangeSlider";
import {
  toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup';
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
    backgroundColor: '#fff',
    borderRadius: '6px'
    // border: '2px solid rgba(0,0,0,1)'
  }
})

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    margin: theme.spacing(0.5),
    border: 0,
    borderRadius: theme.shape.borderRadius,
    [`&.${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    },
  },
  [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
    {
      marginLeft: -1,
      borderLeft: '1px solid transparent',
    },
}));

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
            <BoxShadowIcon sx={{ '&::after': { bottom: '8px', right: '8px' } }} />
          </Box>
        </CusToggleButton>
        <CusToggleButton value="hug" aria-label="hug" disableRipple>
          <Box sx={{ padding: '5px 0' }}>
            <BoxShadowIcon sx={{ '&::after': { bottom: '8px', right: '8px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' } }} />
          </Box>
        </CusToggleButton>
        <CusToggleButton value="spread" aria-label="spread" disableRipple>
          <Box sx={{ padding: '5px 0' }}>
            <BoxShadowIcon sx={{ '&::after': { bottom: '8px', right: '8px', boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.4)' } }} />
          </Box>
        </CusToggleButton>
      </ToggleButtonGroup>

      {/* <Paper
        elevation={0}
        sx={(theme) => ({
          display: 'flex',
          marginTop: '20px',
          background: 'rgba(220,220,220,0.55)',
          flexWrap: 'wrap',
        })}
      >
        <StyledToggleButtonGroup
          size="small"
          value={shadowVal}
          exclusive
          aria-label="text alignment"
          onChange={(e, val) => onValueChange(val)}
          fullWidth
        >
          <CusToggleButton value="none" aria-label="none" disableRipple>
            <Box sx={{ padding: '5px 0' }}>
              <BoxShadowIcon sx={{ '&::after': { bottom: '8px', right: '8px' } }} />
            </Box>
          </CusToggleButton>
          <CusToggleButton value="hug" aria-label="hug" disableRipple>
            <Box sx={{ padding: '5px 0' }}>
              <BoxShadowIcon sx={{ '&::after': { bottom: '8px', right: '8px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' } }} />
            </Box>
          </CusToggleButton>
          <CusToggleButton value="spread" aria-label="spread" disableRipple>
            <Box sx={{ padding: '5px 0' }}>
              <BoxShadowIcon sx={{ '&::after': { bottom: '8px', right: '8px', boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.4)' } }} />
            </Box>
          </CusToggleButton>
        </StyledToggleButtonGroup>
        <StyledToggleButtonGroup
          size="small"
          value={shadowVal}
          aria-label="text formatting"
          onChange={(e, val) => onValueChange(val)}
          exclusive
          fullWidth
        >
          <CusToggleButton value="hug1" aria-label="hug1" disableRipple>
            <Box sx={{ padding: '5px 0' }}>
              <BoxShadowIcon sx={{ 
                '&::after': { top: '4px', left: '4px', bottom: '4px', right: '4px', width: 'auto', height: 'auto',
                  borderRadius: '3px',
                  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.4)' } 
              }} />
            </Box>
          </CusToggleButton>
          <CusToggleButton value="hug2" aria-label="hug2" disableRipple>
            <Box sx={{ padding: '5px 0' }}>
              <BoxShadowIcon sx={{ '&::after': { top: '8px', left: '8px', boxShadow: '-2px -2px 4px rgba(0, 0, 0, 0.4)' } }} />
            </Box>
          </CusToggleButton>
          <CusToggleButton value="hug3" aria-label="hug3" disableRipple>
            <Box sx={{ padding: '5px 0' }}>
              <BoxShadowIcon sx={{ '&::after': { top: '8px', left: '8px', boxShadow: '-2px -2px 4px rgba(0, 0, 0, 0.4)' } }} />
            </Box>
          </CusToggleButton>
        </StyledToggleButtonGroup>
      </Paper> */}
    </Box>
  )
}
