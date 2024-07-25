import { useRef, useState, useContext } from 'react';
import { Box, Button, Typography, styled, Popper, ClickAwayListener, Paper, Grow, } from "@mui/material";
import { SketchPicker } from 'react-color';
import styles from "./style.module.scss";
import clsx from 'clsx';
import { useConfigContext } from '../../_configProvider';
import 'css-doodle';

export default function Background() {
  const { config, handleConfigChange } = useConfigContext();

  const [customColor, setCustomColor] = useState("");
  const [open, setOpen] = useState(false);

  const anchorRef = useRef(null);

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
    "linear-gradient(113.96deg, rgb(69, 233, 159) 11.98%, rgb(213, 168, 155) 50%, rgb(232, 70, 152) 85.42%)",
    "linear-gradient(113.96deg, rgb(69, 223, 232) 11.98%, rgb(211, 170, 175) 50%, rgb(232, 103, 100) 85.42%)",
    "linear-gradient(135deg, rgb(79, 172, 254), rgb(0, 242, 254))",
    "linear-gradient(135deg, rgb(248, 208, 129), rgb(238, 129, 68))",
    "linear-gradient(135deg, rgb(249, 240, 71), rgb(15, 216, 80))",
    "linear-gradient(-45deg, rgb(114, 122, 154), rgb(216, 219, 233))",
    "linear-gradient(-45deg, rgb(80, 82, 133) 0%, rgb(88, 94, 146) 12%, rgb(101, 104, 159) 25%, rgb(116, 116, 176) 37%, rgb(126, 126, 187) 50%, rgb(131, 137, 199) 62%, rgb(151, 149, 212) 75%, rgb(162, 161, 220) 87%, rgb(181, 174, 228) 100%)",
    "linear-gradient(150deg, rgb(95, 108, 138), rgb(48, 59, 94), rgb(14, 18, 38))"
  ]

  const cssDoodleList = [
    `:doodle {
      @grid: 1x8 / 100%;
    }
    @place-cell: center;
    width: @rand(40%, 80%);
    height: @rand(40%, 80%);
    transform: translate(@rand(-200%, 200%), @rand(-60%, 60%)) scale(@rand(.8, 1.8)) skew(@rand(45deg));
    clip-path: polygon(
      @r(0, 30%) @r(0, 50%), 
      @r(30%, 60%) @r(0%, 30%), 
      @r(60%, 100%) @r(0%, 50%), 
      @r(60%, 100%) @r(50%, 100%), 
      @r(30%, 60%) @r(60%, 100%),
      @r(0, 30%) @r(60%, 100%)
    );
    background: @pick(#f44336, #e91e63, #9c27b0, #673ab7, #3f51b5, #60569e, #e6437d, #ebbf4d, #00bcd4, #03a9f4, #2196f3, #009688, #5ee463, #f8e645, #ffc107, #ff5722, #43f8bf);
    opacity: @rand(.3, .8);`,
    `:doodle {
      @grid: 8x8 / 100%;
    }
    background: rgba(96, 86, 158, @rand(.9));
    transition: .2s ease @rand(200ms);
    transform: rotate(@rand(360deg));
    clip-path: polygon(
      @rand(100%) 0, 100% @rand(100%), 0 @rand(100%)
    );`,
    `@grid: 7 / 100% / #0a0c27;
    @shape: clover 5;
    background: hsla(-@i(*4), 70%, 68%, @r.8);
    transform:
      scale(@r(.2, 1.5))
      translate(@m2.@r(±50%));`
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
          <span>透明</span>
        </Button>
        <Button
          className={clsx(styles.bgButton, config.bg && config.bg === customColor ? styles.active : '')}
          ref={anchorRef}
          variant="outlined"
          onClick={handleToggle}
          fullWidth
        >
          <div className={clsx(styles.samDot, styles.color)} style={{ backgroundColor: customColor || '#ffffff' }}></div>
          <span>{ customColor || '#ffffff' }</span>
        </Button>
        <Button
          className={clsx(styles.bgButton, config.bgImg ? styles.active : '')}
          component="label"
          variant="outlined"
          fullWidth
        >
          <div className={clsx(styles.samDot)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor" d="M16.33 2c3.38 0 5.66 2.37 5.66 5.91v8.16c0 3.53-2.28 5.91-5.67 5.91H7.65c-3.39 0-5.67-2.38-5.67-5.92V7.89c0-3.54 2.27-5.92 5.66-5.92h8.66Zm1.1 10.55c-1.08-.67-1.9.27-2.13.57-.22.29-.41.6-.6.92-.48.78-1.03 1.69-1.97 2.22-1.38.76-2.42.05-3.17-.45-.29-.19-.56-.37-.83-.49-.68-.29-1.28.04-2.18 1.17-.48.59-.94 1.18-1.41 1.77-.29.35-.22.89.16 1.13.6.37 1.35.57 2.18.57h8.42c.47 0 .95-.07 1.4-.22 1.02-.34 1.83-1.11 2.26-2.12.35-.86.532-1.89.19-2.75-.12-.29-.28-.55-.52-.79-.62-.61-1.19-1.18-1.88-1.61ZM8.49 6c-1.38 0-2.5 1.12-2.5 2.49s1.12 2.5 2.49 2.5 2.49-1.13 2.49-2.51-1.13-2.5-2.5-2.5Z"></path>
            </svg>
          </div>
          <span>图片</span>
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
        <Typography className={styles.title} variant="h4">纯色</Typography>
        <div className={styles.solidColorList}>
          { solidColors.map(el => (
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
        <Typography className={styles.title} variant="h4">渐变色</Typography>
        <div className={styles.gridentColorList}>
          { gradientColors.map((el, index) => (
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
        <Typography className={styles.title} variant="h4">背景图</Typography>
        <div className={styles.cssDoodleList}>
        { cssDoodleList.map((el, index) => (
          <div
            className={clsx(styles.colorRect, config.bgLayer === el ? styles.active : '')}
            onClick={() => onClickCssDoodle(el)}
            key={index}
          >
            <css-doodle>
              <style>
                {el}
              </style>
            </css-doodle>
          </div>
        ))}
        </div>
      </Box>
    </Box>
  )
}
