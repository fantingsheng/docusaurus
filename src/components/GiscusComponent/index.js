import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';
import styles from './style.module.scss';

export default function GiscusComponent({ lazy = 'lazy', reactionsEnabled = "1" }) {
  const { colorMode } = useColorMode();

  return (
    <div className={styles.commentWrapper} id="Comment">
      <Giscus
        repo="fantingsheng/spacexcode-discus"
        repoId="R_kgDOJoGL9w"
        category="General"
        categoryId="DIC_kwDOJoGL984CWxiW"  // E.g. id of "General"
        mapping="url"                        // Important! To map comments to URL
        term="Welcome to @giscus/react component!"
        strict="0"
        reactionsEnabled={reactionsEnabled}
        emitMetadata="1"
        inputPosition="top"
        theme={colorMode}
        lang="zh-Hans"
        loading={lazy}
        crossorigin="anonymous"
        async
      />
    </div>
  );
}