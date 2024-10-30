import styles from "./style.module.scss";
import CoverTheme from "./_themes";
import clsx from 'clsx';
import { debounce } from '@site/src/utils';
import CssDoodle from "./components/_CssDoodle";
import { useRef, useState, useEffect, useCallback } from 'react';
import { useConfigContext } from './_configProvider';


export default function Preview({ transform, showBtn }) {
  const { config, handleConfigChange } = useConfigContext();
  const cssDoodle = useRef();

  const [handSide, setHandSide] = useState('left');
  const [clientX, setClientX] = useState(0)

  const cssDoodleChange = async () => {
    cssDoodle.current && cssDoodle.current.update();
  };

  // 是否在拖动
  const [isResizing, setIsResizing] = useState(false)

  const handleStartResize = useCallback((e, side) => {
    setHandSide(side)
    setIsResizing(true)
    setClientX(e.clientX)
  }, [])

  const handleStopResize = useCallback(() => {
    setIsResizing(false);
  }, [])

  const didHandleResize = debounce(e => {
    if (!isResizing) return;
    const offset = e.clientX - clientX;
    let scale = 0;
    const pixelToScale = 0.01;

    if (handSide === 'left') {
      scale = config.scale - offset * pixelToScale;
    }
    if (handSide === 'right') {
      scale = config.scale + offset * pixelToScale;
    }
    setClientX(e.clientX);
    handleConfigChange(parseFloat(scale.toFixed(2)), 'scale');
  }, 0)

  const handleResize = useCallback(didHandleResize, [isResizing, clientX, didHandleResize])

  useEffect(() => {
    document.addEventListener('mouseup', handleStopResize)
    document.addEventListener('mousemove', handleResize)

    return () => {
      document.removeEventListener('mouseup', handleStopResize)
      document.removeEventListener('mousemove', handleResize)
    }
  }, [handleStopResize, handleResize])

  
  return (
    <div className={styles.frameContent}>
      <div className={styles.frameBackgroundDisplay}>
        <div className={styles.frameBlur} style={{ backdropFilter: `blur(${config.blur * 0.04}em)`, transform: 'translate3d(0px, 0px, 0px)' }} />
        <div className={styles.frameNoise} style={{ opacity: config.noise / 100 }} />
        { !config.transparent && config.bgImg &&
          <img className={styles.frameBackground} src={config.bgImg} />
        }
        { !config.transparent && !config.bgImg && config.bg &&
          <div className={styles.frameBackground} style={{ background: config.bg, opacity: 1 }} />
        }
        { !config.transparent && config.bgLayer && 
          <CssDoodle ref={cssDoodle} rule={config.bgLayer} cssDoodleChange={cssDoodleChange} />
        }
      </div>
      <div className={styles.displayContainer}>
        <div
          className={clsx(styles.mockupModule, styles[config.mockup.theme], styles[config.mockup.style])}
          style={{ transform: transform, display: config.hideMockup ? 'none' : 'block' }}
        >
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
                  ['screenshot', 'browser', 'iphone15', 'iphone16', 'ipadPro13', 'pixel7Pro', 'ipadAir', 'iphone14', 'iphoneSe', 'huaweiP40ProPlus', 'minimalPhone', 'wallPaper'].includes(config.mockup.theme) &&
                  <div
                    className={styles.shadow}
                    style={{ 
                      borderRadius: ['screenshot', 'wallPaper'].includes(config.mockup.theme) ? 
                        `${config.borderRadius / 8}em` : config.mockup.theme === 'minimalPhone' ?
                        `${config.borderRadius / 4}em` : '' }}
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
            {showBtn &&
              <div className={styles.resizeHandle}>
                <div className={clsx(styles.handleArea, styles.leftTop)} onMouseDown={e => handleStartResize(e, 'left')}>
                  <div className={styles.handle}></div>
                </div>
                <div className={clsx(styles.handleArea, styles.rightTop)} onMouseDown={e => handleStartResize(e, 'right')}>
                  <div className={styles.handle}></div>
                </div>
                <div className={clsx(styles.handleArea, styles.rightBottom)} onMouseDown={e => handleStartResize(e, 'right')}>
                  <div className={styles.handle}></div>
                </div>
                <div className={clsx(styles.handleArea, styles.leftBottom)} onMouseDown={e => handleStartResize(e, 'left')}>
                  <div className={styles.handle}></div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}