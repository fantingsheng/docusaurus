import { useRef, useEffect, useState } from 'react';
import UploadCard from "../components/_UploadCard";
import styles from "./style.module.scss";
import clsx from "clsx";

export default function Browser(props) {
  const { config } = {...props}
  const [headHeight, setHeadHeight] = useState(0);
  const headRef = useRef();

  useEffect(() => {
    // const height = headRef.current.getBoundingClientRect().height;
    // setHeadHeight(height);
  }, [])

  return (
    <>
      <div className={clsx(styles.theme, styles.browser, config.mockup.style.includes('Dark') ? styles.dark : '')} style={{ borderRadius: `${config.borderRadius / 8}em`}}>
        <div className={styles.browserUI}>
          {['default', 'safariDark'].includes(config.mockup.style) &&
            <div className={clsx(styles.safariUI, styles[config.mockup.style])}>
              <img crossOrigin="anonymous" src={`/screenshot/theme/browser/safari/left_${config.mockup.style}.png`} loading="eager" />
              <div className={styles.centerDiv}>
                <img className={styles.shield} crossOrigin="anonymous" src="/screenshot/theme/browser/safari/shield.png" loading="eager" />
                <div className={styles.addressBar}>
                  <img className={styles.lock} crossOrigin="anonymous" src="/screenshot/theme/browser/safari/lock.png" loading="eager" />
                  <div className={styles.urlDiv}>
                    <img className={styles.secure} crossOrigin="anonymous" src="/screenshot/theme/browser/safari/secure.png" loading="eager" />
                    <p>{config.url}</p>
                  </div>
                </div>
                <img className={styles.shield} crossOrigin="anonymous" src="/screenshot/theme/browser/safari/shield.png" style={{ opacity: 0 }} loading="eager" />
              </div>
              <img crossOrigin="anonymous" src={`/screenshot/theme/browser/safari/right_${config.mockup.style}.png`} loading="eager" />
            </div>
          }
          {['chromeLight', 'chromeDark'].includes(config.mockup.style) &&
            <div className={clsx(styles.chromeUI, styles[config.mockup.style])}>
              <div className={styles.top}>
                <div className={styles.logoTitle}>
                  <p>{config.url.split('.')[0]}</p>
                </div>
                <img crossOrigin="anonymous" src={`/screenshot/theme/browser/chrome/tab-${config.mockup.style}.png`} loading="eager" />
              </div>
              <div className={styles.bottom}>
                <img crossOrigin="anonymous" src={`/screenshot/theme/browser/chrome/bottom-left-${config.mockup.style}.png`} loading="eager" />
                <div className={styles.addressBar}>
                  <img crossOrigin="anonymous" src="/screenshot/theme/browser/chrome/bottom-lock.png" loading="eager" />
                  <p>{config.url}</p>
                </div>
                <img crossOrigin="anonymous" src={`/screenshot/theme/browser/chrome/bottom-right-${config.mockup.style}.png`} loading="eager" />
              </div>
            </div>
          } 
        </div>
        <div className={styles.body} style={{ height: 'calc(100% - var(--ui-height))'}}>
          <UploadCard {...props} />
        </div>
      </div>
    </>
    // <div className={clsx(styles.theme, styles.browser)} style={{ borderRadius: `${config.borderRadius / 8}em`}}>
    //   <div ref={headRef} className={clsx(styles.header, styles[config.mockup.style])}>
    //     <div className={styles.button}>
    //       <span style={{ background: 'rgb(242, 95, 88)'}}></span>
    //       <span style={{ background: 'rgb(251, 190, 60)'}}></span>
    //       <span style={{ background: 'rgb(88, 203, 66)'}}></span>
    //     </div>
    //     <div className={styles.address}>{config.url}</div>
    //     <div className={styles.menu}>
    //       <span></span>
    //       <span></span>
    //       <span></span>
    //     </div>
    //   </div>
    //   <div className={styles.body} style={{ height: 'calc(100% - 40px)'}}>
    //     <UploadCard {...props} />
    //   </div>
    // </div>
  )
}
