import { useRef, useState } from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import LeftSideBar from "./_leftSideBar";
import RightSideBar from "./_rightSideBar";
import ExportLayer from './_exportLayer';
import CenterPreview from './_centerPreview';
import CommandBar from './_commandBar';
import HisDataBar from './_hisDataBar';
import styles from "./style.module.scss";

import ExportButton from "./components/_ExportButton";
import ExportSetting from "./components/_ExportSetting";
import { ConfigProvider } from './_configProvider';
import { Box } from '@mui/material';
export default function () {
  const { siteConfig } = useDocusaurusContext();
  const coverRef = useRef();
  const [fullScreen, setFullScreen] = useState(false);
  
  const handleFullScreen = () => {
    setFullScreen(!fullScreen);
  }
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
            {!fullScreen &&
            <LeftSideBar>
              <Box sx={{ display: 'flex', gap: '8px' }}>
                <ExportButton coverRef={coverRef} />
                <ExportSetting />
              </Box>
            </LeftSideBar>}
          </div>
          <div className={styles.canvas}>
            <CenterPreview />
          </div>
          <div className={styles.sidebar}>
            {!fullScreen && <RightSideBar />}
          </div>
          <div className={styles.commandBar}>
            <CommandBar changeFullScreen={handleFullScreen} />
          </div>
          <div className={styles.hisDataBar}>
            <HisDataBar />
          </div>
          <ExportLayer coverRef={coverRef} />
        </main>
      </ConfigProvider>
    </>
  )
}
