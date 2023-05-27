import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import GiscusComponent from '@site/src/components/GiscusComponent';
import WeChatFollowCard from '@site/src/components/WeChatFollowCard';

import useIsBrowser from '@docusaurus/useIsBrowser';

export default function BlogPostItemWrapper(props) {
  const { metadata, isBlogPostPage } = useBlogPost()
  const isBrowser = useIsBrowser();

  const { frontMatter } = metadata
  const { enableComments } = frontMatter
  return (
    <>
      <BlogPostItem {...props} />
      <WeChatFollowCard />
      {(enableComments && isBlogPostPage) && (
        <GiscusComponent />
      )}
    </>
  );
}
