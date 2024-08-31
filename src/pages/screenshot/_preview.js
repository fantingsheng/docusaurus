import styles from "./style.module.scss";
import CoverTheme from "./_themes";
import clsx from 'clsx';
import CssDoodle from "./components/_CssDoodle";
import { useRef } from 'react';
import { useConfigContext } from './_configProvider';


export default function Preview({ transform, showBtn }) {
  const { config } = useConfigContext();
  const cssDoodle = useRef();

  const cssDoodleChange = async () => {
    cssDoodle.current && cssDoodle.current.update();
  };
  
  return (
    <div className={styles.frameContent}>
      <div className={styles.frameBackgroundDisplay}>
        <div className={styles.frameBlur} style={{ backdropFilter: `blur(${config.blur * 0.04}em)`, transform: 'translate3d(0px, 0px, 0px)' }} />
        <div className={styles.frameNoise} style={{ opacity: config.noise / 100 }} />
        { !config.transparent && config.bgImg &&
          <img className={styles.frameBackground} src={config.bgImg} />
        }
        { !config.transparent && config.bg &&
          !config.bgImg && <div className={styles.frameBackground} style={{ background: config.bg, opacity: 1 }} />
        }
        { !config.transparent && config.bgLayer && 
          <CssDoodle ref={cssDoodle} rule={config.bgLayer} cssDoodleChange={cssDoodleChange} />
        }
      </div>
      <div className={styles.displayContainer}>
        <div className={clsx(styles.mockupModule, styles[config.mockup.theme])} style={{ transform: transform, display: config.hideMockup ? 'none' : 'block' }}>
          <div
            className={styles.devices}
            style={{
              transform: `scale(${config.scale}) translateX(${config.translateX}%) translateY(${config.translateY}%)`,
              '--aspect-ratio': ['screenshot', 'browser'].includes(config.mockup.theme) ? config.picRatio : 'unset'
            }}
          >
            <div className={styles.item}>
              <div className={clsx(styles.itemContainer, 'item-container')}>
                <CoverTheme config={config} showBtn={showBtn} />
                {/* 阴影 */}
                { config.shadowX &&
                  config.shadowY &&
                  ['screenshot', 'browser', 'iphone15', 'ipadPro13', 'pixel7Pro', 'ipadAir', 'iphone14', 'iphoneSe', 'huaweiP40ProPlus'].includes(config.mockup.theme) &&
                  <div
                    className={styles.shadow}
                    style={{ borderRadius: config.mockup.theme === 'screenshot' ? `${config.borderRadius / 8}em` : '' }}
                  >
                    {[1, 3, 6, 10].map(el => (
                      <div
                        className={styles.shadowLayer} 
                        style={{
                          transform: `translateX(${config.shadowX * el}em) translateY(${config.shadowY * el}em) scale(1)`,
                          filter: `blur(${0.325 * el}em)`,
                          opacity: config.shadowOpacity
                        }}
                        key={el}
                      />
                    ))}
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}