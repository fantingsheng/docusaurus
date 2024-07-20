import { Button, styled, Typography } from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import styles from './style.module.scss';

import { useConfigContext } from '../../_configProvider';

export default function UploadCard({ showBtn, showBorderRadius = true }) {
  const { config, handleConfigChange } = useConfigContext();

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      sx={{
        width: "100%",
        height: "100%",
        background: "rgba(220,220,220,1)",
        color: "rgba(0,0,0,.8)",
        borderRadius: showBorderRadius ? `${config.borderRadius}px` : 0,
        '&:hover': {
          background: "rgba(220,220,220,1)"
        },
        flexDirection: 'column',
        overflow: 'hidden',
        gap: '5px',
        padding: 0
      }}
    >
      {config.picture ? 
        <img src={config.picture} className={styles.uploadImg} /> : 
        (showBtn && <>
          <AddPhotoAlternateIcon fontSize="large" />
          <Typography>上传图片</Typography>
          <Typography variant="caption">（PNG 或者 JPG）</Typography>
          </>
        )
      }
      { showBtn && 
        <VisuallyHiddenInput
          type="file"
          accept="image/x-png,image/jpeg,image/webp,image/jpg"
          onChange={(e) => handleConfigChange(URL.createObjectURL(e.target.files[0]), 'picture')}
        />}
    </Button>
  )
}