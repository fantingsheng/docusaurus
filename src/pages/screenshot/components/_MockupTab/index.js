import styles from "./style.module.scss";
import { Box, Typography, TextField } from '@mui/material';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import BorderRadius from "../_BorderRadius";
import BoxShadow from "../_BoxShadow";
import SizeAndPosition from "../_SizeAndPosition";
import StyleButton from "../_StyleButton";
import { useConfigContext } from '../../_configProvider';
import GoogleAdsBlock from '@site/src/components/GoogleAdsBlock';

export default function MockupTab() {
  const { config, handleConfigChange } = useConfigContext();

  const reg = /^(?:(http|https):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i;

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
            error={!!config.url && !reg.test(config.url)}
            value={config.url}
            onChange={e => handleConfigChange(e.target.value, 'url')}
            placeholder=''
            size='small'
            autoComplete='false'
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
        <div className={styles.adsTitle}>成为赞助商</div>
        <GoogleAdsBlock model='pureShow' height='120px' />
      </div>
    </div>
  )
}
