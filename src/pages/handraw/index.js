import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';
import BrowserOnly from '@docusaurus/BrowserOnly'

export default function () {
  const [Excalidraw, setExcalidraw] = useState(null);

  useEffect(
    () => {
      import('@excalidraw/excalidraw').then((comp) => {
        console.log(comp);
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
          langCode='zh-CN'
        >
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
