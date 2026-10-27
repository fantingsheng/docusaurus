import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';
import GoogleAdsBlock from '@site/src/components/GoogleAdsBlock';
import Tooltip from '@mui/material/Tooltip';
import styles from './styles.module.css';

export default function BlogLayout(props) {
  const {sidebar, toc, children, ...layoutProps} = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;
  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row">
          <BlogSidebar sidebar={sidebar} />
          <main
            className={clsx('col', {
              'col--7': hasSidebar,
              'col--8 col--offset-1': !hasSidebar && toc,
              'col--8 col--offset-2': !hasSidebar && !toc
            })}
            itemScope
            itemType="https://schema.org/Blog">
            {children}
          </main>
          {
            toc && (
              <div className="col col--2">
                <div className={styles.sideBar}>
                  {toc}
                  <div className={styles.adsWrap}>
                    <Tooltip title="合作联系：fants0230@sina.com" placement="top" arrow>
                      <div className={styles.adsTitle}>成为赞助商</div>
                    </Tooltip>
                    <GoogleAdsBlock model='pureShow' height='120px' />
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </Layout>
  );
}
