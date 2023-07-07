import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';
import BrowserOnly from '@docusaurus/BrowserOnly'
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import { publishedLib, unpublishedLib } from '../../config/data/excalidraw/libraries'

export default function () {
  const [Excalidraw, setExcalidraw] = useState(null);
  const [Mod, setMod] = useState(null);

  useEffect(
    () => {
      import('@excalidraw/excalidraw').then((comp) => {
        console.log(comp);
        setMod(comp);
        setExcalidraw(comp.Excalidraw);
      }
    );
  }, []);
  
  const RenderExcalidraw = () => {
    if (Excalidraw) {
      return (
        <Excalidraw 
          initialData={{
            elements: [],
            appState: { zenModeEnabled: false },
            libraryItems: [...publishedLib, ...unpublishedLib],
            scrollToContent: true
          }}
          langCode='zh-CN'
        >
          <Mod.MainMenu>
            <Mod.MainMenu.DefaultItems.LoadScene />
            <Mod.MainMenu.DefaultItems.Export />
            <Mod.MainMenu.DefaultItems.SaveAsImage />
            <Mod.MainMenu.DefaultItems.ClearCanvas />
            <Mod.MainMenu.DefaultItems.ToggleTheme />
            <Mod.MainMenu.DefaultItems.ChangeCanvasBackground />
          </Mod.MainMenu>
        </Excalidraw>
      )
    }
    return <></>
  }
  return (
    <Layout>
      <Head>
        <title>手绘做图工具 | 太空编程</title>
        <meta name='description' content='一款带手写效果白板做图工具，可导出 SVG、PNG 等格式' />
        <meta name="keywords" content='手绘, 画图, 导出, 白板工具, 画布' />
      </Head>
      <div style={{ height: 'calc(100vh - 60px)'}} className={styles.handrawApp}>
        <BrowserOnly>
        {
          () => <RenderExcalidraw />
        }
        </BrowserOnly>
      </div>
    </Layout>
  )
}
