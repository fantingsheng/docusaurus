import { useRef, useState, useContext } from 'react';
import { Box, Button, Typography, styled, Popper, ClickAwayListener, Paper, Grow, IconButton, } from "@mui/material";
import { SketchPicker } from 'react-color';
import styles from "./style.module.scss";
import clsx from 'clsx';
import { useConfigContext } from '../../_configProvider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CssDoodle from "../_CssDoodle";

export default function Background() {
  const { config, handleConfigChange } = useConfigContext();

  const [customColor, setCustomColor] = useState("");
  const [open, setOpen] = useState(false);
  const cssDoodle = useRef([]);

  const addRef = (index) => (ref) => {
    cssDoodle.current[index] = ref;
  };

  const anchorRef = useRef(null);
  const [expand1, setExpand1] = useState(false);
  const [expand2, setExpand2] = useState(false);
  const [expand3, setExpand3] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const onClickTransBg = () => {
    handleConfigChange(true, "transparent");
    handleConfigChange("", "bgImg");
    handleConfigChange("", "bg");
    handleConfigChange("", "bgLayer");
  }

  const solidColors = [
    "rgb(248, 249, 250)", "rgb(222, 226, 230)", "rgb(173, 181, 189)", "rgb(73, 80, 87)", "rgb(33, 37, 41)", "rgb(21, 22, 23)",
    "rgb(255, 89, 94)", "rgb(255, 146, 76)", "rgb(255, 202, 58)", "rgb(197, 202, 48)","rgb(138, 201, 38)", "rgb(63, 201, 93)",
    "rgb(255, 173, 173)", "rgb(255, 194, 169)", "rgb(255, 214, 165)", "rgb(253, 255, 182)", "rgb(202, 255, 191)", "rgb(195, 255, 208)",
    "rgb(54, 148, 157)", "rgb(25, 130, 196)", "rgb(66, 103, 172)", "rgb(86, 90, 160)", "rgb(106, 76, 147)", "rgb(238, 75, 134)",
    "rgb(179, 251, 223)", "rgb(170, 224, 239)", "rgb(160, 196, 255)", "rgb(189, 178, 255)", "rgb(255, 198, 255)", "rgb(255, 199, 236)"
  ];

  const gradientColors = [
    "linear-gradient(140deg, rgb(255, 100, 50) 12.8%, rgb(255, 0, 101) 43.52%, rgb(123, 46, 255) 84.34%)",
    "linear-gradient(140deg, rgb(244, 229, 240), rgb(229, 54, 171), rgb(92, 3, 188), rgb(14, 7, 37))",
    "linear-gradient(135deg, rgb(238, 221, 243), rgb(238, 146, 177), rgb(99, 48, 180))",
    "linear-gradient(113.96deg, rgb(69, 190, 232) 13.54%, rgb(214, 161, 172) 50%, rgb(232, 140, 93) 85.42%)",
    "linear-gradient(135deg, rgb(79, 172, 254), rgb(0, 242, 254))",
    "linear-gradient(135deg, rgb(248, 208, 129), rgb(238, 129, 68))",
    "linear-gradient(135deg, rgb(249, 240, 71), rgb(15, 216, 80))",
    "linear-gradient(-45deg, rgb(114, 122, 154), rgb(216, 219, 233))",
    "linear-gradient(-45deg, rgb(80, 82, 133) 0%, rgb(88, 94, 146) 12%, rgb(101, 104, 159) 25%, rgb(116, 116, 176) 37%, rgb(126, 126, 187) 50%, rgb(131, 137, 199) 62%, rgb(151, 149, 212) 75%, rgb(162, 161, 220) 87%, rgb(181, 174, 228) 100%)",
    "linear-gradient(150deg, rgb(95, 108, 138), rgb(48, 59, 94), rgb(14, 18, 38))",
    'linear-gradient(140deg, rgb(207, 47, 152), rgb(106, 61, 236))',
    'linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248))',
    'linear-gradient(140deg, rgb(255, 99, 99), rgb(115, 52, 52))',
    'linear-gradient(140deg, rgb(189, 227, 236), rgb(54, 54, 84))',
    'linear-gradient(140deg, rgb(89, 212, 153), rgb(160, 135, 45))',
    'linear-gradient(140deg, rgb(76, 200, 200), rgb(32, 32, 51))',
    'linear-gradient(140deg, rgb(142, 199, 251), rgb(28, 85, 170))',
    'linear-gradient(140deg, rgb(51, 51, 51), rgb(24, 24, 24))',
    'linear-gradient(140deg, rgb(80, 104, 83), rgb(33, 50, 35))',
    'linear-gradient(140deg, rgb(238, 213, 182), rgb(175, 136, 86))'
  ]

  const imageList = [
    '/screenshot/bgImg/macos-big-sur-small.jpg',
    '/screenshot/bgImg/macos-monterey-small.jpg',
    '/screenshot/bgImg/macos-big-sur-dark-small.jpg',
    '/screenshot/bgImg/macos-big-sur-colorful-small.jpg',
    '/screenshot/bgImg/painted-whirl-small.png',
    '/screenshot/bgImg/painted-flow-small.png',
    '/screenshot/bgImg/slide-mac-small.png',
    '/screenshot/bgImg/wave-mac-small.png'
    // '/screenshot/bgImg/autumnal-peach-small.png',
    // '/screenshot/bgImg/blossom-2-small.png',
    // '/screenshot/bgImg/good-vibes-small.png'
  ]

  const cssDoodleList = [
    `:doodle {
      background-color: red;
      background-image: radial-gradient(at 40% 20%,#ffb87a 0,transparent 50%),radial-gradient(at 80% 0,#1fddff 0,transparent 50%),radial-gradient(at 0 50%,#ffdbde 0,transparent 50%),radial-gradient(at 80% 50%,#ff85ad 0,transparent 50%),radial-gradient(at 0 100%,#ffb58a 0,transparent 50%),radial-gradient(at 80% 100%,#6b66ff 0,transparent 50%),radial-gradient(at 0 0,#ff85a7 0,transparent 50%);
    }
    @grid: 14 / 100%;
    @random {
      filter: drop-shadow(0 0 10px #fff);
    }`,
    `:doodle {
      background: #26004d;
      background-image: radial-gradient(at 98% 31%,hsl(353,88%,56%) 0,hsla(353,88%,56%,0) 50%),radial-gradient(at 95% 37%,hsl(59,88%,67%) 0,hsla(59,88%,67%,0) 50%),radial-gradient(at 55% 74%,hsl(156,92%,53%) 0,hsla(156,92%,53%,0) 50%),radial-gradient(at 27% 55%,hsl(339,87%,56%) 0,hsla(339,87%,56%,0) 50%),radial-gradient(at 38% 25%,hsl(11,88%,60%) 0,hsla(11,88%,60%,0) 50%),radial-gradient(at 14% 1%,hsl(72,95%,70%) 0,hsla(72,95%,70%,0) 50%),radial-gradient(at 89% 41%,hsl(341,90%,53%) 0,hsla(341,90%,53%,0) 50%);
    }
    @grid: 14 / 100%;`,
    `:doodle {
      background-color: #ffd500;
      background-image: radial-gradient(circle at 30% 30%,#80ff80 0,transparent 70%),radial-gradient(circle at 70% 70%,#ff80bf 0,transparent 70%);
    }
    @grid: 14 / 100%;`,
    `:doodle {
      background-image: radial-gradient(at 50% 50%,#fff785 0,transparent 50%),radial-gradient(at 80% 30%,#f73 0,transparent 50%),linear-gradient(45deg,#ff4000,#ff0);
    }
    @grid: 14 / 100%;`,
    `:doodle {
      background-color: #ff9a9e;
      background-image: radial-gradient(at 40% 20%,#fad0c4 0,transparent 50%),radial-gradient(at 80% 0,#fad0c4 0,transparent 50%),radial-gradient(at 0 50%,#ff9a9e 0,transparent 50%),radial-gradient(at 80% 50%,#fad0c4 0,transparent 50%),radial-gradient(at 0 100%,#fad0c4 0,transparent 50%),radial-gradient(at 80% 100%,#ff9a9e 0,transparent 50%),radial-gradient(at 0 0,#fad0c4 0,transparent 50%);
    }
    @grid: 14 / 100%;`,
    `:doodle {
      background-color: #0080ff;
      background-image: radial-gradient(at 70% 20%,#00d4ff 0,transparent 50%),radial-gradient(at 30% 80%,#66ffe5 0,transparent 50%);
    }
    @grid: 14 / 100%;`
  ]

  const onClickSolidColor = (color) => {
    handleConfigChange(false, "transparent");
    handleConfigChange("", "bgImg");
    handleConfigChange(color, "bg");
    handleConfigChange("", "bgLayer");
  };

  const onClickUploadBg = (val) => {
    handleConfigChange(val, "bgImg");
    handleConfigChange(false, "transparent");
    handleConfigChange("", "bg");
    handleConfigChange("", "bgLayer");
  };

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

  const handleChangeComplete = (color) => {
    setCustomColor(color.hex);
    handleConfigChange(color.hex, "bg");
    handleConfigChange(false, "transparent");
    handleConfigChange("", "bgImg");
    handleConfigChange("", "bgLayer");
  };

  const onClickCssDoodle = (cssVal) => {
    handleConfigChange(cssVal, "bgLayer");
    handleConfigChange(false, "transparent");
    handleConfigChange("", "bgImg");
    handleConfigChange("", "bg");
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <Button
          className={clsx(styles.bgButton, config.transparent ? styles.active : '')}
          variant="outlined"
          onClick={onClickTransBg}
          fullWidth
        >
          <div className={clsx(styles.samDot, styles.trans)}></div>
          <span className={styles.btnTit}>透明</span>
        </Button>
        <Button
          className={clsx(styles.bgButton, config.bg && config.bg === customColor ? styles.active : '')}
          ref={anchorRef}
          variant="outlined"
          onClick={handleToggle}
          fullWidth
        >
          <div className={clsx(styles.samDot, styles.color)} style={{ backgroundColor: customColor || '#ffffff' }}></div>
          <span className={styles.btnTit}>{ customColor || '#ffffff' }</span>
        </Button>
        <Button
          className={clsx(styles.bgButton, config.bgImg && config.bgImg.startsWith('blob') ? styles.active : '')}
          component="label"
          variant="outlined"
          fullWidth
        >
          <div className={clsx(styles.samDot)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor" d="M16.33 2c3.38 0 5.66 2.37 5.66 5.91v8.16c0 3.53-2.28 5.91-5.67 5.91H7.65c-3.39 0-5.67-2.38-5.67-5.92V7.89c0-3.54 2.27-5.92 5.66-5.92h8.66Zm1.1 10.55c-1.08-.67-1.9.27-2.13.57-.22.29-.41.6-.6.92-.48.78-1.03 1.69-1.97 2.22-1.38.76-2.42.05-3.17-.45-.29-.19-.56-.37-.83-.49-.68-.29-1.28.04-2.18 1.17-.48.59-.94 1.18-1.41 1.77-.29.35-.22.89.16 1.13.6.37 1.35.57 2.18.57h8.42c.47 0 .95-.07 1.4-.22 1.02-.34 1.83-1.11 2.26-2.12.35-.86.532-1.89.19-2.75-.12-.29-.28-.55-.52-.79-.62-.61-1.19-1.18-1.88-1.61ZM8.49 6c-1.38 0-2.5 1.12-2.5 2.49s1.12 2.5 2.49 2.5 2.49-1.13 2.49-2.51-1.13-2.5-2.5-2.5Z"></path>
            </svg>
          </div>
          <span className={styles.btnTit}>图片</span>
          <VisuallyHiddenInput type="file" onChange={(e) => onClickUploadBg(URL.createObjectURL(e.target.files[0]))} />
        </Button>
      </Box>
      <Popper
        sx={{ zIndex: 5, minWidth: '200px' }}
        open={open}
        placement="bottom"
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <SketchPicker
                  color={customColor}
                  onChangeComplete={handleChangeComplete}
                />
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      <Box className={styles.colorStyles}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography className={styles.title} variant="h4">纯色</Typography>
          <IconButton aria-label="expand" size="small" onClick={() => setExpand1((val) => !val)}>
            <KeyboardArrowDownIcon className={clsx(styles.slideBtn, expand1 && styles.up)} />
          </IconButton>
        </Box>
        <div className={styles.solidColorList}>
          { solidColors.filter((item, index) => expand1 || (!expand1 && index < 18)).map(el => (
              <div
                className={clsx(styles.colorCircle, config.bg === el ? styles.active : '')}
                style={{ backgroundColor: el }}
                key={el}
                onClick={() => onClickSolidColor(el)}
              />
            ))
          }
        </div>
      </Box>
      <Box className={styles.colorStyles}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography className={styles.title} variant="h4">渐变色</Typography>
          <IconButton aria-label="expand" size="small" onClick={() => setExpand2((val) => !val)}>
            <KeyboardArrowDownIcon className={clsx(styles.slideBtn, expand2 && styles.up)} />
          </IconButton>
        </Box>
        <div className={styles.gridentColorList}>
          { gradientColors.filter((item, index) => expand2 || (!expand2 && index < 9)).map((el, index) => (
              <div
                className={clsx(styles.colorRect, config.bg === el ? styles.active : '')}
                style={{ background: el }}
                key={index}
                onClick={() => onClickSolidColor(el)}
              />
            ))
          }
        </div>
      </Box>
      <Box className={styles.colorStyles}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography className={styles.title} variant="h4">背景图</Typography>
          <IconButton aria-label="expand" size="small" onClick={() => setExpand3((val) => !val)}>
            <KeyboardArrowDownIcon className={clsx(styles.slideBtn, expand3 && styles.up)} />
          </IconButton>
        </Box>
        <div className={styles.imageList}>
          { imageList.filter((item, index) => expand3 || (!expand3 && index < 6)).map((el, index) => (
          <div
            className={clsx(styles.colorRect, config.bgImg === el.replace('-small', '') ? styles.active : '')}
            onClick={() => onClickUploadBg(el.replace('-small', ''))}
            key={index}
          >
            <div className={styles.img} style={{ backgroundImage: `url(${el})` }}></div>
          </div>
          ))}
        </div>
      </Box>
      <Box className={styles.colorStyles}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography className={styles.title} variant="h4">CSS Doodle</Typography>
          <IconButton aria-label="expand" size="small">
             <span style={{ fontSize: '12px' }}>🧪</span>
          </IconButton>
        </Box>
        <div className={styles.cssDoodleList}>
          { cssDoodleList.map((el, index) => (
            <div
              className={clsx(styles.colorRect, config.bgLayer === el ? styles.active : '')}
              onClick={() => onClickCssDoodle(el)}
              key={index}
            >
              <CssDoodle ref={addRef(index)} rule={el} />
            </div>
          ))}
        </div>
      </Box>  
    </Box>
  )
}
