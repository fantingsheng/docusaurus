import { useState } from 'react';
import { IconButton, Button, Dialog, DialogContent, DialogTitle, DialogActions, DialogContentText, TextField } from '@mui/material';
import HideImageIcon from '@mui/icons-material/HideImage';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import OpenWithOutlinedIcon from '@mui/icons-material/OpenWithOutlined';
import HideImageOutlinedIcon from '@mui/icons-material/HideImageOutlined';
import FilterCenterFocusIcon from '@mui/icons-material/FilterCenterFocus';
import { useConfigContext } from './_configProvider';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import toast from 'react-hot-toast';

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
    if (ExecutionEnvironment.canUseDOM) {
      const data = JSON.parse(window.localStorage.getItem("screenShots")) || [];
      const timestamp = Date.now();
      data.push({
        id: timestamp,
        name: configName,
        time: timestamp,
        config: {...config, id: timestamp, picture: ''}
      });
      window.localStorage.setItem("screenShots", JSON.stringify(data));
      handleConfigChange(Date.now(), "id");
      toast.success('保存成功', {position: 'bottom-center'});
    }
  }

  function getDisplayMedia(options) {
    if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
        return navigator.mediaDevices.getDisplayMedia(options)
    }
    if (navigator.getDisplayMedia) {
        return navigator.getDisplayMedia(options)
    }
    if (navigator.webkitGetDisplayMedia) {
        return navigator.webkitGetDisplayMedia(options)
    }
    if (navigator.mozGetDisplayMedia) {
        return navigator.mozGetDisplayMedia(options)
    }
    throw new Error('getDisplayMedia is not defined')
  }

  async function takeScreenshotStream() {
    const width = screen.width * (window.devicePixelRatio || 1)
    const height = screen.height * (window.devicePixelRatio || 1)

    const errors = [];
    let stream;
    const mediaStreamConstraints = {
      audio: false,
      video: {
        width,
        height,
        frameRate: 1
      }
    };

    try {
      stream = await getDisplayMedia(mediaStreamConstraints)
    } catch (ex) {
      // toast.error("", {position: 'bottom-center'})
      errors.push(ex)
    }

    if (errors.length) {
      console.debug(...errors)
      if (!stream) {
        throw errors[errors.length - 1]
      }
    }

    return stream
  }

  async function takeScreenshotCanvas() {
    const stream = await takeScreenshotStream()
    console.log("stream", stream)
    const video = document.createElement('video')
    const result = await new Promise((resolve, reject) => {
      video.onloadedmetadata = () => {
        video.play()
        video.pause()
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        handleConfigChange(`${video.videoWidth} / ${video.videoHeight}`, 'picRatio')
        const context = canvas.getContext('2d')
        context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight)
        resolve(canvas)
      }
      video.srcObject = stream
    })

    stream.getTracks().forEach(function (track) {
      track.stop()
    })

    if (result == null) {
      toast.error('截图失败', {position: 'bottom-center'})
      throw new Error('Cannot take canvas screenshot')
    }

    return result
}

  const handleClickCapture = async () => {
    const canvas = await takeScreenshotCanvas()
    handleConfigChange(canvas.toDataURL(), "picture");
  }

  return (
    <>
      <IconButton
        sx={{ width: '70px', flexDirection: 'column', gap: '5px', borderRadius: '5px' }}
        aria-label="hide"
        onClick={onChangeMockupDisplay}
      >
        <HideImageOutlinedIcon />
        <span style={{ fontSize: '12px' }}>模型</span>
      </IconButton>
      <IconButton
        sx={{ width: '70px', flexDirection: 'column', gap: '5px', borderRadius: '5px' }}
        aria-label="preview"
        onClick={changeFullScreen}
      >
        <OpenWithOutlinedIcon />
        <span style={{ fontSize: '12px' }}>预览</span>
      </IconButton>
      <IconButton
        sx={{ width: '70px', flexDirection: 'column', gap: '5px', borderRadius: '5px' }}
        aria-label="reset"
        onClick={handleClickCapture}
      >
        <FilterCenterFocusIcon />
        <span style={{ fontSize: '12px' }}>截图</span>
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
        <LibraryAddOutlinedIcon />
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
        <DialogTitle>保存配置</DialogTitle>
        <DialogContent>
          <DialogContentText>保存当前的配置数据，以便于下次更直接方便地使用，但不保存图片信息，需要你重新上传</DialogContentText>
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
            autoComplete="off"
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