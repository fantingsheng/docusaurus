import { Button, ButtonGroup } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CopyAll from '@mui/icons-material/CopyAll';
import { useState } from 'react';

export default function ExportButton({ loading, handleExportImage, handleCopyImage }) {
  const [cn, setCn] = useState("export");

  const onHandleExportImage = (bn) => {
    setCn(bn);
    handleExportImage();
  };
  const onHandleCopyImage = (bn) => {
    setCn(bn);
    handleCopyImage();
  }

  return (
    <ButtonGroup variant="contained" aria-label="导出图片" disableElevation fullWidth>
      <LoadingButton 
        variant="contained"
        size="small" 
        loading={cn === 'export' && loading} 
        loadingPosition="start"
        startIcon={<SaveAltIcon />} 
        onClick={() => onHandleExportImage("export")}
      >
        导出图片
      </LoadingButton>
      <LoadingButton 
        variant="contained" 
        size="small" 
        loading={cn === 'copy' && loading} 
        loadingPosition="start" 
        sx={{ width: 80 }}
        onClick={() => onHandleCopyImage("copy")}
      >
        <CopyAll />
      </LoadingButton>
    </ButtonGroup>
  )
}