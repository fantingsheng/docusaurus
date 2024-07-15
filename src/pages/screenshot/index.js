import { useEffect, createContext, useRef, useState } from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import LeftSideBar from "./leftSideBar";
import RightSideBar from "./rightSideBar";
import Preview from "./preview";
import styles from "./style.module.scss";
import html2canvas from 'html2canvas';

import ExportButton from "./components/ExportButton";
import ExportSetting from "./components/ExportSetting";
import { ConfigProvider, useConfigContext } from './_configProvider';
import { Box } from '@mui/material';

// export const ConfigContext = createContext();

export default function () {
  const { siteConfig } = useDocusaurusContext();

  const coverRef = useRef();
  const [loading, setLoading] = useState(false);

  // const { config } = useConfigContext();

  const [config, setConfig] = useState({
    theme: "screenshot",
    picture: "",
    bgImg: "",
    borderRadius: 10,
    transparent: false,
    style: "",
    shadow: "",
    bg: "linear-gradient(140deg, rgb(255, 100, 50) 12.8%, rgb(255, 0, 101) 43.52%, rgb(123, 46, 255) 84.34%)",
    ratio: '4 / 3',
    noise: 0,
    blur: 0,
    scale: 1,
    transformX: 0,
    transformY: 0,
    width: 1920,
    height: 1440
  })

  const [expConfig, setExpConfig] = useState({
    format: 'png',
    scale: 1
  });

  // const handleConfigChange = (val, key) => {
  //   setConfig((prev) => ({ ...prev, [key]: val }));
  // };

  const handleExpConfigChange = (val, key) => {
    setExpConfig((prev) => ({ ...prev, [key]: val }));
  };

  const downloadImage = () => {
    if (!coverRef.current) return;
    setLoading(true);
    html2canvas(coverRef.current, {
      useCORS: true,
      scale: expConfig.scale,
      ignoreElements: true,
      backgroundColor: 'transparent'
    }).then((canvas) => {
      let newImg = new Image()
      const date = new Date()
      newImg.src = canvas.toDataURL('image/' + expConfig.format) // 'image/png'
      const a = document.createElement("a");
      const scaleName = expConfig.scale > 1 ? `@${expConfig.scale}x` : '';
      a.style.display = "none";
      a.href = newImg.src;
      a.download = `spacexcode-coverview-${date.getMinutes()}${date.getSeconds()}${scaleName}.${expConfig.format}`;
      a.rel = "noopener noreferrer";
      document.body.append(a);
      a.click();
      setTimeout(() => {
          a.remove();
      }, 1000);
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setLoading(false);
    })
  };
  const handleCopyImg = (cb) => {
    if (!coverRef.current) return;
    setLoading(true);
    html2canvas(coverRef.current, {
      useCORS: true,
      scale: expConfig.scale,
      backgroundColor: 'transparent'
    }).then((canvas) => {
      canvas.toBlob(async blob => {
        console.log(blob);
        const data = [
          new ClipboardItem({
            [blob.type]: blob,
          }),
        ];
        await navigator.clipboard.write(data)
          .then(
            () => {
              console.log("复制成功!");
              cb && cb();
            },
            (err) => {
              console.error(err);
            }
          ).catch((err) => {
            console.error(err);
          }).finally(() => {
            setLoading(false);
          })
      });
    })
  };

  return (
    <>
      <Head>
        <title>{`图片美化套壳 | ${siteConfig.title}`}</title>
        <meta name="title" content='图片模型生成器' />
        <meta name="description" content="选择模型帮你生成漂亮的图片" />
        <meta name="keywords" content='手机套壳,模型,图片美化' />
      </Head>
      <ConfigProvider>
        <main className={styles.appMain}>
          <div className={styles.sidebar}>
            <LeftSideBar>
              <Box sx={{ display: 'flex', gap: '8px' }}>
                <ExportButton loading={loading} handleExportImage={downloadImage} handleCopyImage={handleCopyImg} />
                <ExportSetting expConfig={expConfig} handleExpConfigChange={handleExpConfigChange} />
              </Box>
            </LeftSideBar>
          </div>
          <div className={styles.canvas}>
            <div className={styles.safeArea}>
              <div
                id="previewFrame"
                className={styles.previewFrame}
                style={{ aspectRatio: config.ratio }}
              >
                <Preview
                  transform={config.style}
                  showBtn={true}
                />
              </div>
            </div>
          </div>
          <div className={styles.sidebar}>
            <RightSideBar />
          </div>
          <div
            className={styles.exportLayer}
            style={{ zIndex: -1000, width: config.width / 2, height: config.height / 2 }}
          >
            <div
              ref={coverRef}
              id="captureCanvas"
              className={styles.frame}
              style={{ aspectRatio: config.ratio, width: config.width / 2, height: config.height / 2}}
            >
              <Preview transform={config.style} showBtn={false} />
            </div>
          </div>
        </main>
      </ConfigProvider>
    </>
  )
}
