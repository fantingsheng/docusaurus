
import { Button } from '@mui/material';

import styles from './style.module.scss';

export default function ViewerSelect() {

  const handleToggle = () => {}
  
  return (
    <Button
      aria-controls={open ? 'split-button-menu' : undefined}
      aria-expanded={open ? 'true' : undefined}
      aria-label="选择格式并导出图片"
      aria-haspopup="menu"
      onClick={handleToggle}
      sx={{ width: 80, position: 'fixed' }}
    >
      button
    </Button>
  )
}