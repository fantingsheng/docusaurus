import React from 'react';
import QRCode from 'qrcode.react';
import styles from './style.module.scss';

export default function QrcodeBox ({ config }) {
  const { url, dark } = {...config};
  const reg = /^(?:(http|https):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i;

  return (
    <>
    {
      url && reg.test(url) ?
      <div className={styles.qrcode}>
        <QRCode value={url} renderAs="svg" size={50} bgColor="transparent" fgColor={ dark ? "#CDD0D6" : "#606266" } />
      </div>
      : <></>
    }
    </>
  )
}
