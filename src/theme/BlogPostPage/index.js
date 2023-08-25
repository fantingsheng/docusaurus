import React from 'react';
import clsx from 'clsx';
import {HtmlClassNameProvider, ThemeClassNames} from '@docusaurus/theme-common';
import {BlogPostProvider, useBlogPost} from '@docusaurus/theme-common/internal';
import BlogLayout from '@theme/BlogLayout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogPostPaginator from '@theme/BlogPostPaginator';
import BlogPostPageMetadata from '@theme/BlogPostPage/Metadata';
import GiscusComponent from '@site/src/components/GiscusComponent';
import WeChatFollowCard from '@site/src/components/WeChatFollowCard';
import DonateButton from '@site/src/components/DonateButton';
import GoogleAdsBlock from '@site/src/components/GoogleAdsBlock';

import TOC from '@theme/TOC';
function BlogPostPageContent({sidebar, children}) {
  const {metadata, toc, isBlogPostPage} = useBlogPost();
  const {nextItem, prevItem, frontMatter} = metadata;
  const {
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
    enable_comment: enableComment,
    enable_donate: enableDonate,
    enable_adsense: enableAdsense
  } = frontMatter;
  return (
    <BlogLayout
      sidebar={sidebar}
      toc={
        !hideTableOfContents && toc.length > 0 ? (
          <TOC
            toc={toc}
            minHeadingLevel={tocMinHeadingLevel}
            maxHeadingLevel={tocMaxHeadingLevel}
          />
        ) : undefined
      }>
      <BlogPostItem>{children}</BlogPostItem>

      {
        (enableDonate && isBlogPostPage) && <DonateButton />
      }

      {
        isBlogPostPage && <WeChatFollowCard />
      }

      {
        enableAdsense && <GoogleAdsBlock model='inFluid' height='80px' />
      }

      {(nextItem || prevItem) && (
        <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
      )}

      {
        (enableComment && isBlogPostPage) && <GiscusComponent />
      }
    </BlogLayout>
  );
}
export default function BlogPostPage(props) {
  const BlogPostContent = props.content;
  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <HtmlClassNameProvider
        className={clsx(
          ThemeClassNames.wrapper.blogPages,
          ThemeClassNames.page.blogPostPage,
        )}>
        <BlogPostPageMetadata />
        <BlogPostPageContent sidebar={props.sidebar}>
          <BlogPostContent />
        </BlogPostPageContent>
      </HtmlClassNameProvider>
    </BlogPostProvider>
  );
}
