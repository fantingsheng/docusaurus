import { Button, ButtonGroup } from '@mui/material';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CopyAll from '@mui/icons-material/CopyAll';

export default function ExportButton() {

  const handleToggle = () => {}

  return (
    <ButtonGroup variant="contained" aria-label="导出图片" disableElevation fullWidth>
      <Button startIcon={<SaveAltIcon />} onClick={handleToggle}>导出图片</Button>
      <Button
        aria-controls={open ? 'split-button-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-label="选择格式并导出图片"
        aria-haspopup="menu"
        onClick={handleToggle}
        sx={{ width: 80 }}
      >
        <CopyAll />
      </Button>
    </ButtonGroup>
  )
}