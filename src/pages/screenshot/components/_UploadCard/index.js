import { Box, Button, styled, Typography } from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import styles from './style.module.scss';

import { useConfigContext } from '../../_configProvider';

export default function UploadCard({ showBtn, children }) {
  const { config, handleConfigChange } = useConfigContext();
  const bgColor = 'rgba(220,220,220,1)';

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1
  });

  const onFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      handleConfigChange(img.src, 'picture')
      img.onload = function() {
        const width = this.width;
        const height = this.height;
        handleConfigChange(`${width} / ${height}`, 'picRatio')
      };
    }
  }

  const calcBorderRadius = () => {
    switch(config.mockup.theme) {
      case "screenshot":
        return `${config.borderRadius / 8}em`;
      case "minimalPhone":
        return `${config.borderRadius / 4}em`;
      default:
        return ''
    }
  }

  const uploadCardBg = () => {
    if (config.mockup.theme === 'browser') {
      if (config.picture && config.mockup.style.includes('Dark')) {
        return '#121214';
      }
      return bgColor;
    }
    return 'transparent';
  }

  return (
    <Box className="uploadWrap" 
      sx={{
        width: "100%",
        height: "100%",
        padding: 'var(--drop-padding)',
        borderRadius: calcBorderRadius(),
        background: uploadCardBg(),
        overflow: ["screenshot", "minimalPhone"].includes(config.mockup.theme) ? 'hidden' : 'unset'
    }}>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        sx={{
          width: "100%",
          height: "100%",
          minWidth: "100%",
          background: config.mockup.theme === 'browser' ? 'transparent' : bgColor,
          color: "rgba(0,0,0,.8)",
          borderRadius: 'var(--drop-radius)',
          '&:hover': {
            background: config.mockup.theme === 'browser' ? 'transparent' : bgColor
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
            <AddPhotoAlternateIcon fontSize="large" sx={{ fontSize: '3.5em' }} />
            <Typography sx={{ marginTop: '6px', fontSize: '1em' }}>上传图片</Typography>
            <Typography variant="caption" sx={{ fontSize: '0.75em' }}>（PNG 或 JPG）</Typography>
            </>
          )
        }
        { showBtn && 
          <VisuallyHiddenInput
            type="file"
            accept="image/x-png,image/jpeg,image/webp,image/jpg"
            onChange={onFileInputChange}
          />}
          {children}
      </Button>
    </Box>
  )
}