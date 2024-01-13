import React from 'react';
import { useState } from 'react';
import { Popover, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Image from '@theme/IdealImage';
import Link from '@docusaurus/Link';
import styles from './style.module.scss';

export default function () {
  const [anchorEl, setAnchorEl] = useState(null);
  const svgSize = '1.2rem';
  const [payMethod, setPayMethod] = useState({});
  const payOptions = [
    { type: 'alipay', name: '支付宝', qrcode: '/img/alipay.png', color: '#00a0e9', viewBox: '0 0 448 512', path: 'M377.74 32H70.26C31.41 32 0 63.41 0 102.26v307.48C0 448.59 31.41 480 70.26 480h307.48c38.52 0 69.76-31.08 70.26-69.6-45.96-25.62-110.59-60.34-171.6-88.44-32.07 43.97-84.14 81-148.62 81-70.59 0-93.73-45.3-97.04-76.37-3.97-39.01 14.88-81.5 99.52-81.5 35.38 0 79.35 10.25 127.13 24.96 16.53-30.09 26.45-60.34 26.45-60.34h-178.2v-16.7h92.08v-31.24H88.28v-19.01h109.44V92.34h50.92v50.42h109.44v19.01H248.63v31.24h88.77s-15.21 46.62-38.35 90.92c48.93 16.7 100.01 36.04 148.62 52.74V102.26C447.83 63.57 416.43 32 377.74 32zM47.28 322.95c.99 20.17 10.25 53.73 69.93 53.73 52.07 0 92.58-39.68 117.87-72.9-44.63-18.68-84.48-31.41-109.44-31.41-67.45 0-79.35 33.06-78.36 50.58z' },
    { type: 'wechat_pay', name: '微信', qrcode: '/img/wechat_pay.png', color: '#07c160', viewBox: '0 0 576 512', path: 'M385.2 167.6c6.4 0 12.6.3 18.8 1.1C387.4 90.3 303.3 32 207.7 32 100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-4-12.9-6.2-26.6-6.2-40.8-.1-84.9 72.9-154 165.3-154zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.8 0-29.3-9.7-29.3-24.2.1-14.7 14.6-24.4 29.3-24.4zm-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2 0-14.8 14.8-24.4 29.3-24.4 14.8 0 24.4 9.7 24.4 24.4 0 14.6-9.6 24.2-24.4 24.2zM563 319.4c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3-14.8-48.6C534 402.1 563 363.2 563 319.4zm-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.8 0 24.4 9.7 24.4 19.3 0 10-9.7 19.6-24.4 19.6zm107.1 0c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.4 9.7 24.4 19.3.1 10-9.9 19.6-24.4 19.6z' }
  ]
  const handleClick = (event, payType) => {
    const method = payOptions.find(el => el.type === payType);
    if (method) {
      setPayMethod(method)
    }
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
      <div className={styles.donate}>
        本站内容遵守 
        <Link to='https://creativecommons.org/licenses/by-nc-sa/4.0/' rel='external nofollow noopener noreferrer'>
          &nbsp;CC BY-NC-SA 4.0&nbsp;
        </Link>许可协议，转载请注明出处。<br />
        如果内容对你有用，请作者喝杯咖啡 ☕：
        {
          payOptions.map(el => {
            return (
              <IconButton key={el.type} aria-describedby={id} aria-label={el.name} onClick={e => handleClick(e, el.type)}>
                <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox={el.viewBox} color={el.color} height={svgSize} width={svgSize} xmlns='http://www.w3.org/2000/svg' style={{color: el.color}}>
                  <path d={el.path}></path>
                </svg>
              </IconButton>
            )
          })
        }
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className={styles.popoverCont}>
          <Typography variant="h6" gutterBottom>{payMethod.name}</Typography>
          <div style={{ width: '200px', height: '200px'}}>
            <Image img={payMethod.qrcode} />
          </div>
        </div>
      </Popover>
    </div>
  )
}
