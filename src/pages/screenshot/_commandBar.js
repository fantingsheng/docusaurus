import { IconButton } from '@mui/material';
import HideImageIcon from '@mui/icons-material/HideImage';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { useConfigContext } from './_configProvider';
import { storageLocal } from '@site/src/utils/storage';

export default function CommandBar({ changeFullScreen }) {
  const { config, handleConfigChange, handleResetConfig } = useConfigContext();

  const onChangeMockupDisplay = () => {
    handleConfigChange(!config.hideMockup, "hideMockup");
  }

  const onSaveConfigStorage = () => {
    //todo
    const data = storageLocal.getItem("shots") || [];
    data.push(config);
    storageLocal.setItem("shots", data);
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
        onClick={onSaveConfigStorage}
      >
        <LibraryAddIcon />
        <span style={{ fontSize: '12px' }}>保存</span>
      </IconButton>
    </>
  )
}