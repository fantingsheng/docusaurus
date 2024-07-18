import { Button, ButtonGroup, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from 'react';
import html2canvas from 'html2canvas';
import { useConfigContext } from '../../_configProvider';
import { toPng, toJpg, toBlob } from '@site/src/utils/image';
import { downloadByUrl } from '@site/src/utils';

export default function ExportButton({ coverRef }) {
  const { config, handleConfigChange } = useConfigContext();

  const [cn, setCn] = useState("export");
  const [loading, setLoading] = useState(false);


  const onHandleButtonClick = (bn) => {
    setCn(bn);
    if (cn === 'export') {
      downloadImage()
    } else if (cn === 'copy') {
      handleCopyImg()
    }
  };

  const downloadImage = async () => {
    if (!coverRef.current) return;
    setLoading(true);
    const dataUrl = config.format === "png" ? await toPng(coverRef.current, {
      pixelRatio: config.expScale
    }) : await toJpg(coverRef.current, {
      pixelRatio: config.expScale
    });
    const date = new Date()
    const scaleName = config.expScale > 1 ? `@${config.expScale}x` : '';
    const fileName = `spacexcode-screenshot-${date.getMinutes()}${date.getSeconds()}${scaleName}.${config.format}`;
    downloadByUrl(dataUrl, fileName);
    setLoading(false);
  };

  const handleCopyImg = async () => {
    if (!coverRef.current) return;
    setLoading(true);
    const blob = await toBlob(coverRef.current, {
      pixelRatio: config.expScale
    })
    const data = [
      new ClipboardItem({
        [blob.type]: blob,
      })
    ];
    await navigator.clipboard.write(data)
      .then(
        () => {
          console.log("复制成功!");
        },
        (err) => {
          console.error(err);
        }
      ).catch((err) => {
        console.error(err);
      }).finally(() => {
        setLoading(false);
      })

    // html2canvas(coverRef.current, {
    //   useCORS: true,
    //   scale: config.expScale,
    //   backgroundColor: 'transparent'
    // }).then((canvas) => {
    //   canvas.toBlob(async blob => {
    //     console.log(blob);
    //     const data = [
    //       new ClipboardItem({
    //         [blob.type]: blob,
    //       }),
    //     ];
    //     await navigator.clipboard.write(data)
    //       .then(
    //         () => {
    //           console.log("复制成功!");
    //           cb && cb();
    //         },
    //         (err) => {
    //           console.error(err);
    //         }
    //       ).catch((err) => {
    //         console.error(err);
    //       }).finally(() => {
    //         setLoading(false);
    //       })
    //   });
    // })
  };

  return (
    <ButtonGroup variant="contained" aria-label="导出图片" disableElevation fullWidth>
      <LoadingButton 
        variant="contained"
        size="small" 
        loading={cn === 'export' && loading} 
        loadingPosition="start"
        startIcon={<SaveAltIcon />}
        sx={{ paddingTop: '6px', paddingBottom: '6px' }}
        onClick={() => onHandleButtonClick("export")}
      >
        <Typography sx={{ fontSize: '14px', textTransform: 'none', textAlign: 'left', lineHeight: 1 }}>
          导出图片<br />
          <Typography variant="caption" sx={{ fontSize: '10px', lineHeight: 1 }}>
            {`${config.expScale}x as ${config.format}`}
          </Typography>
        </Typography>
      </LoadingButton>
      <LoadingButton 
        variant="contained" 
        size="small" 
        loading={cn === 'copy' && loading} 
        sx={{ width: 80 }}
        onClick={() => onHandleButtonClick("copy")}
      >
        <ContentCopyIcon />
      </LoadingButton>
    </ButtonGroup>
  )
}