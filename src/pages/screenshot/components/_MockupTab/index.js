import styles from "./style.module.scss";
import { Box, Typography, TextField, InputAdornment, styled } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import HttpIcon from '@mui/icons-material/Http';
import BorderRadius from "../_BorderRadius";
import BoxShadow from "../_BoxShadow";
import SizeAndPosition from "../_SizeAndPosition";
import StyleButton from "../_StyleButton";
import { useConfigContext } from '../../_configProvider';
import GoogleAdsBlock from '@site/src/components/GoogleAdsBlock';

export default function MockupTab() {
  const { config, handleConfigChange } = useConfigContext();

  const reg = /^(?:(http|https):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i;

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));

  return (
    <div className={styles.setPannel}>
      <Box className={styles.pannelCtrl}>
        <Typography className={styles.setTit} variant="h3" sx={{ marginBottom: '5px' }}>样式</Typography>
        <Box className={styles.pannelCtrlGrid}>
          <StyleButton />
        </Box>
      </Box>
      {["browser"].includes(config.mockup.theme) && 
        <Box className={styles.pannelCtrl}>
          <Typography className={styles.setTit} variant="h3">地址栏</Typography>
          <TextField
            value={config.url}
            onChange={e => handleConfigChange(e.target.value, 'url')}
            placeholder='网址'
            size='small'
            autoComplete='false'
            sx={{ '& > div': { paddingLeft: '6px', '& input': { padding: '5px 8px 6px 0' } }}}
            slotProps={{
              input: {
                startAdornment: <InputAdornment position="start">http://</InputAdornment>,
              },
            }}
            fullWidth
          />
        </Box>
      }
      {["screenshot", "browser", "minimalPhone", "wallPaper"].includes(config.mockup.theme) && 
        <Box className={styles.pannelCtrl}>
          <Typography className={styles.setTit} variant="h3" sx={{ marginBottom: '-5px' }}>圆角</Typography>
          <BorderRadius />
        </Box>
      }
      {["screenshot", "browser", "iphone15", "iphone16", "pixel7Pro", "ipadPro13", 'ipadAir', 'iphone14',
        'iphoneSe', "huaweiP40ProPlus", "minimalPhone", "wallPaper"].includes(config.mockup.theme) && 
      <Box className={styles.pannelCtrl}>
        <Typography className={styles.setTit} variant="h3" sx={{ marginBottom: '-5px' }}>阴影</Typography>
        <BoxShadow />
      </Box>
      }
      <Box className={styles.pannelCtrl}>
        <Typography className={styles.setTit} variant="h3" sx={{ marginBottom: '-5px' }}>大小和位置</Typography>
        <SizeAndPosition />
      </Box>
      <Box className={styles.pannelCtrl}>
        <Box className={styles.details}>
          <Box className={styles.row}>
            <span>A side project by <Link to='/author'>Timfan</Link>.</span>
          </Box>
        </Box>
      </Box>
      <div>
        <Tooltip title="fants0230@sina.com" placement="top" arrow>
          <div className={styles.adsTitle}>成为赞助商</div>
        </Tooltip>
        <GoogleAdsBlock model='pureShow' height='120px' />
      </div>
    </div>
  )
}
