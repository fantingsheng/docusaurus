import { IconButton } from '@mui/material';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import HideImageIcon from '@mui/icons-material/HideImage';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { useConfigContext } from './_configProvider';

export default function CommandBar() {
  const { config, handleConfigChange } = useConfigContext();

  const onChangeMockupDisplay = () => {
    handleConfigChange(!config.hideMockup, "hideMockup");
  }

  const onChangeFullScreen = () => {
    handleConfigChange(!config.fullScreen, "fullScreen");
  }

  return (
    <>
      <IconButton
        sx={{ flexDirection: 'column', gap: '5px', borderRadius: '5px' }}
        aria-label="hide"
        onClick={onChangeMockupDisplay}
      >
        <HideImageIcon />
        <span style={{ fontSize: '12px' }}>Mockup</span>
      </IconButton>
      <IconButton
        sx={{ flexDirection: 'column', gap: '5px', borderRadius: '5px' }}
        aria-label="preview"
        onClick={onChangeFullScreen}
      >
        <OpenInFullIcon />
        <span style={{ fontSize: '12px' }}>Preview</span>
      </IconButton>
    </>
  )
}