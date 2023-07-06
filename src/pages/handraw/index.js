import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';
import BrowserOnly from '@docusaurus/BrowserOnly'

export default function () {
  const [Excalidraw, setExcalidraw] = useState(null);
  const [Mod, setMod] = useState(null);

  useEffect(
    () => {
      import('@excalidraw/excalidraw').then((comp) => {
        console.log(comp);
        setMod(comp);
        setExcalidraw(comp.Excalidraw)
      }
    );
  }, []);

  // const renderExcalidrawMenu = () => {
  //   return (
  //    <MainMenu>
  //     <MainMenu.DefaultItems.LoadScene />
    //     <MainMenu.DefaultItems.Export />
    //     <MainMenu.DefaultItems.SaveAsImage />
    //     <MainMenu.DefaultItems.ClearCanvas />
    //     <MainMenu.DefaultItems.ToggleTheme />
    //     <MainMenu.DefaultItems.ChangeCanvasBackground />
    //   </MainMenu>
  //     }
  //   )
  // }
  
  const RenderExcalidraw = () => {
    if (Excalidraw) {
      return (
        <Excalidraw 
          initialData={{
            elements: [],
            appState: { zenModeEnabled: false },
            scrollToContent: true
          }}
          renderTopRightUI={() => {
            return (
              <button
                className='library-button'
                onClick={() => window.location.href = '/'}
              >
                回到首页
              </button>
            );
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
    <div style={{ height: '100vh'}} className={styles.handrawApp}>
      <BrowserOnly>
      {
        () => <RenderExcalidraw /> 
      }
      </BrowserOnly>
    </div>
  )
}
