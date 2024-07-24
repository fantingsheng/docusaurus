import React from 'react';
import clsx from 'clsx';
import {useWindowSize} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/theme-common/internal';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import styles from './styles.module.css';
// 评论组件
import GiscusComponent from '@site/src/components/GiscusComponent';
import DonateButton from '@site/src/components/DonateButton';
import GoogleAdsBlock from '@site/src/components/GoogleAdsBlock';
import CustomToolAds from '@site/src/components/CustomToolAds';

/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const {frontMatter, toc} = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? <DocItemTOCMobile /> : undefined;
  const desktop =
    canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
      <DocItemTOCDesktop />
    ) : undefined;
  return {
    hidden,
    mobile,
    desktop,
  };
}
export default function DocItemLayout({children}) {
  const docTOC = useDocTOC();
  const { frontMatter } = useDoc();
  const { 
    enable_comment: enableComment,
    enable_donate: enableDonate,
    enable_adsense: enableAdsense
  } = frontMatter;
  return (
    <div className="row">
      <div className={clsx('col', styles.docItemCol)}>
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
            { enableDonate && <DonateButton /> }
            {
              enableAdsense && <GoogleAdsBlock model='inFluid' height='80px' />
            }
          </article>
          <DocItemPaginator />
        </div>
        { enableComment && <GiscusComponent /> }
      </div>
      <div className="col col--3">
        <div className={styles.sideBar}>
          {docTOC.desktop}
          <div className={styles.adsWrap}>
            <div className={styles.adsTitle}>成为赞助商</div>
            <CustomToolAds />
            <GoogleAdsBlock model='pureShow' height='120px' />
          </div>
        </div>
      </div>
    </div>
  );
}
