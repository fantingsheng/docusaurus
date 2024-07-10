import { Button, ButtonGroup } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CopyAll from '@mui/icons-material/CopyAll';
import { useState } from 'react';

export default function ExportButton({ loading, handleExportImage, handleCopyImage }) {
  const [cn, setCn] = useState("export");

  const onHandleButtonClick = (bn) => {
    setCn(bn);
    if (cn === 'export') {
      handleExportImage()
    } else if (cn === 'copy') {
      handleCopyImage()
    }
  };

  return (
    <ButtonGroup variant="contained" aria-label="导出图片" disableElevation fullWidth>
      <LoadingButton 
        variant="contained"
        size="small" 
        loading={cn === 'export' && loading} 
        loadingPosition="start"
        startIcon={<SaveAltIcon />} 
        onClick={() => onHandleButtonClick("export")}
      >
        导出图片
      </LoadingButton>
      <LoadingButton 
        variant="contained" 
        size="small" 
        loading={cn === 'copy' && loading} 
        sx={{ width: 80 }}
        onClick={() => onHandleButtonClick("copy")}
      >
        <CopyAll />
      </LoadingButton>
    </ButtonGroup>
  )
}