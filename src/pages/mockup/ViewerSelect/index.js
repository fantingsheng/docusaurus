
import { Button, Skeleton, Box } from '@mui/material';

import styles from './style.module.scss';

export default function ViewerSelect() {

  const handleToggle = () => {}
  
  return (
    <Box
      onClick={handleToggle}
      sx={{ width: '100%', position: 'absolute' }}
    >
      <Box sx={{ display: 'flex', width: '100%', border: `1px solid var(--mui-palette-primary-dark)`, borderRadius: '5px' }}>
        <Box sx={{ width: '60px', height: '40px' }}></Box> 
        <span>iPhoneX< br/>1920x1560</span>
      </Box>
    </Box>
  )
}