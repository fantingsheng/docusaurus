import { Box, Button, styled } from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export default function UploadCard({ handleConfigChange }) {
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
        width: "100%", height: "100%",
        background: "rgba(220,220,220,1)",
        color: "rgba(0,0,0,.8)",
        '&:hover': {
          background: "rgba(220,220,220,1)"
        }
      }}
    >
      <AddPhotoAlternateIcon />
      上传图片
      <VisuallyHiddenInput type="file" onChange={(e) => handleConfigChange(URL.createObjectURL(e.target.files[0]), 'picture')} />
    </Button>
  )
}