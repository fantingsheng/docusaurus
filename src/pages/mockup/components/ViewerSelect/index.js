
import { Button, Skeleton, Box } from '@mui/material';

import styles from './style.module.scss';

export default function ViewerSelect() {

  const handleToggle = () => {}
  
  return (
    <Box
      onClick={handleToggle}
      sx={{ width: '100%', position: 'absolute' }}
    >
      <Box sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          border: `1px solid #eee`,
          borderRadius: '5px',
          padding: '8px',
          gap: '8px'
        }}>
        <Box sx={{ width: '60px', height: '40px', backgroundColor: '#eee' }}></Box> 
        <div className={styles.line}>iPhoneX< br/><span className={styles.small}>1920x1560</span></div>
      </Box>
    </Box>
  )
}