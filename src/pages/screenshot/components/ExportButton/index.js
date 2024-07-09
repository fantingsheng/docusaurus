import { Button, ButtonGroup, LoadingButton } from '@mui/material';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CopyAll from '@mui/icons-material/CopyAll';

export default function ExportButton({ handleExportImage, handleCopyImage }) {

  return (
    <ButtonGroup variant="contained" aria-label="导出图片" disableElevation fullWidth>
      <Button size="small" startIcon={<SaveAltIcon />} onClick={handleExportImage}>导出图片</Button>
      <Button
        size="small"
        onClick={handleCopyImage}
        sx={{ width: 80 }}
      >
        <CopyAll />
      </Button>
    </ButtonGroup>
  )
}