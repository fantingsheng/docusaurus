import { useState } from 'react';
import { IconButton, Button, Dialog, DialogContent, DialogTitle, DialogActions, DialogContentText, TextField } from '@mui/material';
import HideImageIcon from '@mui/icons-material/HideImage';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { useConfigContext } from './_configProvider';
import { storageLocal } from '@site/src/utils/storage';

export default function CommandBar({ changeFullScreen }) {
  const { config, handleConfigChange, handleResetConfig } = useConfigContext();
  const [open, setOpen] = useState(false);

  const onChangeMockupDisplay = () => {
    handleConfigChange(!config.hideMockup, "hideMockup");
  };

  const handleClickSave = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSaveConfigStorage = (configName) => {
    const data = storageLocal.getItem("screenShots") || [];
    data.push({
      id: Date.now(),
      name: configName,
      time: Date.now(),
      config: config
    });
    storageLocal.setItem("screenShots", data);
  }

  return (
    <>
      <IconButton
        sx={{ width: '70px', flexDirection: 'column', gap: '5px', borderRadius: '5px' }}
        aria-label="hide"
        onClick={onChangeMockupDisplay}
      >
        <HideImageIcon />
        <span style={{ fontSize: '12px' }}>模型</span>
      </IconButton>
      <IconButton
        sx={{ width: '70px', flexDirection: 'column', gap: '5px', borderRadius: '5px' }}
        aria-label="preview"
        onClick={changeFullScreen}
      >
        <OpenInFullIcon />
        <span style={{ fontSize: '12px' }}>预览</span>
      </IconButton>
      <IconButton
        sx={{ width: '70px', flexDirection: 'column', gap: '5px', borderRadius: '5px' }}
        aria-label="reset"
        onClick={handleResetConfig}
      >
        <RestartAltIcon />
        <span style={{ fontSize: '12px' }}>重置</span>
      </IconButton>
      <IconButton
        sx={{ width: '70px', flexDirection: 'column', gap: '5px', borderRadius: '5px' }}
        aria-label="reset"
        onClick={handleClickSave}
      >
        <LibraryAddIcon />
        <span style={{ fontSize: '12px' }}>保存</span>
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const configName = formJson.configName;
            onSaveConfigStorage(configName);
            handleClose();
          },
        }}
      >
        <DialogTitle>数据保存</DialogTitle>
        <DialogContent>
          <DialogContentText>保存当前的配置数据，以便于下次更直接方便地使用</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="configName"
            label="配置名称"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button type="submit">保存</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}