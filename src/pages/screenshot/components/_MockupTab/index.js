import styles from "./style.module.scss";
import { Box, Typography, TextField } from '@mui/material';
import clsx from 'clsx';
import BorderRadius from "../_BorderRadius";
import BoxShadow from "../_BoxShadow";
import SizeAndPosition from "../_SizeAndPosition";
import StyleButton from "../_StyleButton";
import { useConfigContext } from '../../_configProvider';

export default function MockupTab() {
  const { config, handleConfigChange } = useConfigContext();

  const reg = /^(?:(http|https):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i;

  return (
    <div className={styles.setPannel}>
      <Box className={styles.pannelCtrl}>
        <Typography className={styles.setTit} variant="h3" sx={{ marginBottom: '10px' }}>样式</Typography>
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
          <Typography className={styles.setTit} variant="h3">圆角</Typography>
          <BorderRadius />
        </Box>
      }
      {["screenshot", "browser", "iphone15", "iphone16", "pixel7Pro", "ipadPro13", 'ipadAir', 'iphone14',
        'iphoneSe', "huaweiP40ProPlus", "minimalPhone", "wallPaper"].includes(config.mockup.theme) && 
      <Box className={styles.pannelCtrl}>
        <Typography className={styles.setTit} variant="h3">阴影</Typography>
        <BoxShadow />
      </Box>
      }
      <Box className={styles.pannelCtrl}>
        <Typography className={styles.setTit} variant="h3">大小和位置</Typography>
        <SizeAndPosition />
      </Box>
      {/* <Box className={styles.pannelCtrl}>
        <Typography className={styles.setTit} variant="h3">详细信息</Typography>
        <Box className={styles.details}>
          <Box className={styles.row}>
            <span>设备</span>
            <p>{config.mockup.title}</p>
          </Box>
          <Box className={styles.row}>
            <span>图片尺寸</span>
            <p>{config.mockup.sizeInfo}</p>
          </Box>
        </Box>
      </Box> */}
    </div>
  )
}
