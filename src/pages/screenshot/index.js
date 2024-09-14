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
import toast, { Toaster } from 'react-hot-toast';

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
        <title>{`图片套壳美化 | ${siteConfig.title}`}</title>
        <meta name="title" content='图片套壳美化生成器' />
        <meta name="description" content="一款快捷的图片美化工具，我们预设了一些样式和设备模型，通过参数配置可以帮你一键生成并导出适用于不同分享平台的漂亮的封面图片" />
        <meta name="keywords" content='手机套壳,模型,图片美化,封面,抖音封面,公众号封面,视频封面,封面制作' />
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
          <Toaster />
        </main>
      </ConfigProvider>
    </>
  )
}
