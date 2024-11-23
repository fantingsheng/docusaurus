import React from 'react';
import Link from '@docusaurus/Link';
import styles from './style.module.scss';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import IconButton from '@mui/material/IconButton';
import { Alert, AlertTitle, Snackbar, Menu, MenuItem }  from '@mui/material';
import confetti from 'canvas-confetti';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import QRCode from 'qrcode.react';
import useEventListener from '@site/src/hooks/useEventListener';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function BlogToolBar({}) {
  const { siteConfig } = useDocusaurusContext();
  const audioRef = React.useRef();
  const [copied, setCopied] = React.useState(false);
  const [paused, setPaused] = React.useState(true);
  const { metadata, isBlogPostPage } = useBlogPost();
  const { permalink } = metadata;
  const blogUrl = siteConfig.url + '' + useBaseUrl(permalink);

  const [commentCounter, setCommentCounter] = React.useState(-1);
  
  const [alertText, setAlertText] = React.useState('');
  const [alertType, setAlertType] = React.useState('success');
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const open1 = Boolean(anchorEl1);
  
  const onClap = (e) => {
    confetti({
      particleCount: 200, // 默认值：50，要发射的五彩纸屑的数量。
      startVelocity: 30, // 默认值：45，五彩纸屑开始移动的速度，以像素为单位
      angle: 90, // 发射的角度，0 表示水平向右；90 表示垂直向上；180 表示水平向左；270 表示垂直向下
      spread: 120, //默认值：45，五彩纸屑在垂直方向扩散的角度，45 表示五彩纸屑以垂直方向正负 22.5 度角发射
      ticks: 300, // 默认值: 200 ，值越小粒子消失得越快，值越大粒子消失得越慢
      gravity: 0.5, // 默认值：1，粒子下落的速度。1 是全重力，0.5 是半重力，0 表示无重力；大于 1 表示加速下落，负值表示粒子会向上升起。
      origin: {
        x: e.clientX / e.view.innerWidth,
        y: e.clientY / e.view.innerHeight
      }
    })
  }

  const onCopy = () => {
    navigator.clipboard.writeText(blogUrl)
    .then(() => {
      setAlertText("复制链接成功");
      setAlertType('success');
      setCopied(true);
    })
    .catch((error) => {
      console.error("复制时出错: ", error);
    });
  };
  const onPlayAudio = () => {
    if (metadata.frontMatter.audio) {
      audioRef.current.play();
      paused ? audioRef.current.play() : audioRef.current.pause();
      setPaused(!paused)
      console.log("to play audio")
    } else {
      setAlertType('warning');
      setAlertText("本文未上传音频");
      setCopied(true);
    }
  }

  const onShare = (event) => {
    setAnchorEl(event.currentTarget);
  }
  
  React.useEffect(() => {
    audioRef.current?.addEventListener('loadeddata', () => {
      //todo
    });
    audioRef.current?.addEventListener('play', () => {
      //todo
    });
    audioRef.current?.addEventListener('ended', () => {
      setPaused(true);
    });
  }, []);

  if (ExecutionEnvironment.canUseDOM) {
    useEventListener('message', function (e) {
      if (e.origin !== 'https://giscus.app') return
      if (!(typeof e.data === 'object' && e.data.giscus)) return

      const giscus = e.data.giscus;

      if (giscus.error) {
        setCommentCounter(0)
        return
      }
      if (giscus.discussion) {
        setCommentCounter(
          giscus.discussion.totalCommentCount + giscus.discussion.totalReplyCount
        )
      }
    })
  }
  return (
    <>
    {
      (isBlogPostPage && 
        <div className={styles.toolBar}>
          <div className={styles.leftSide}>
            <IconButton aria-label="鼓掌" onClick={e => onClap(e)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#6B6B6B"><path fillRule="evenodd" clipRule="evenodd" d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"></path></svg>
            </IconButton>
            <span>
              <IconButton aria-label="讨论">
                <Link to="#Comment">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#6B6B6B"><path d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z"></path></svg>
                </Link>
              </IconButton>
              <IconButton disabled sx={{ paddingLeft: '3px'}}>
                <span style={{ fontSize: '14px',color: '#6B6B6B' }}>{commentCounter !== -1 ? commentCounter : ''}</span>
              </IconButton>
            </span>
          </div>
          <div className={styles.rightSide}>
            <IconButton aria-label="听全文" onClick={onPlayAudio}>
            {paused ?
                (<svg width="24" height="24" viewBox="0 0 24 24" fill="#6B6B6B"><path fillRule="evenodd" clipRule="evenodd" d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0zm9-10a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm3.38 10.42l-4.6 3.06a.5.5 0 0 1-.78-.41V8.93c0-.4.45-.63.78-.41l4.6 3.06c.3.2.3.64 0 .84z" fill="currentColor"></path></svg>)
              :
              (<svg viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"></rect>
                <circle cx="128" cy="128" r="96" fill="none" stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></circle>
                <line x1="104" x2="104" y1="96" y2="160" fill="none" stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></line>
                <line x1="152" x2="152" y1="96" y2="160" fill="none" stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></line>
              </svg>)
            }
            </IconButton>
            <audio ref={audioRef} src={metadata.frontMatter.audio}></audio>
            <IconButton aria-label="分享" aria-controls={open ? 'share-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={onShare}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#6B6B6B"><path fillRule="evenodd" clipRule="evenodd" d="M15.22 4.93a.42.42 0 0 1-.12.13h.01a.45.45 0 0 1-.29.08.52.52 0 0 1-.3-.13L12.5 3v7.07a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V3.02l-2 2a.45.45 0 0 1-.57.04h-.02a.4.4 0 0 1-.16-.3.4.4 0 0 1 .1-.32l2.8-2.8a.5.5 0 0 1 .7 0l2.8 2.8a.42.42 0 0 1 .07.5zm-.1.14zm.88 2h1.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2H8a.5.5 0 0 1 .35.14c.1.1.15.22.15.35a.5.5 0 0 1-.15.35.5.5 0 0 1-.35.15H6.4c-.5 0-.9.4-.9.9v10.2a.9.9 0 0 0 .9.9h11.2c.5 0 .9-.4.9-.9V8.96c0-.5-.4-.9-.9-.9H16a.5.5 0 0 1 0-1z" fill="currentColor"></path></svg>
            </IconButton>
            <Menu
              id="share-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={() => setAnchorEl(null)}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={() => setAnchorEl(null)}>
                <a className={styles.shareLink} href={`https://service.weibo.com/share/share.php?url=${encodeURIComponent(blogUrl)}&title=${encodeURIComponent(metadata.title + " | " + metadata.description)}&pic=${metadata.frontMatter.image}`} target="_blank">
                  <svg width="22" height="22" viewBox="0 0 512 512" role="img" xmlns="http://www.w3.org/2000/svg"><title>分享到微博</title><path d="M403.51 247.992c12.189-23.721 13.499-45.899 3.546-63.137-10.316-17.868-31.605-28.033-59.944-28.622-20.81-.427-44.439 4.311-68.131 13.528 8.166-27.851 5.532-49.961-7.876-63.369-16.113-16.113-44.899-16.666-81.056-1.558-33.715 14.088-70.764 40.33-104.325 73.889C35.742 228.706 2.534 286.681.945 326.653A75.672 75.672 0 0 0 0 338.441c0 35.793 25.09 69.017 70.648 93.547 43.858 23.617 101.979 36.622 163.656 36.622s119.798-13.005 163.656-36.622c45.558-24.53 70.648-57.754 70.648-93.547.001-34.374-23.032-66.257-65.098-90.449z" fill="#EA533B"/><path d="M260.338 459.932c-61.677 0-119.798-13.005-163.656-36.622-45.558-24.53-70.648-57.754-70.648-93.547 0-3.863.318-7.825.945-11.787 1.589-39.973 34.797-97.947 84.78-147.93 33.227-33.226 69.87-59.27 103.314-73.458-7.854 1.823-16.218 4.566-25.023 8.245-33.715 14.088-70.764 40.33-104.325 73.889C35.742 228.707 2.534 286.682.945 326.654A75.65 75.65 0 0 0 0 338.441c0 35.793 25.09 69.017 70.648 93.547 43.858 23.617 101.979 36.622 163.656 36.622 48.616 0 95.016-8.086 133.969-23.074-32.921 9.405-69.744 14.396-107.935 14.396z" fill="#D93C1C"/><path d="M364.19 312.032c-2.568-29.565-22.081-55.61-54.944-73.338-31.681-17.091-72.302-24.49-114.382-20.835-42.079 3.656-80.818 17.949-109.076 40.247-29.314 23.131-44.045 52.151-41.476 81.715 2.569 29.565 22.082 55.61 54.946 73.338 26.389 14.236 58.976 21.748 93.447 21.747 6.913 0 13.905-.302 20.934-.913 42.079-3.654 80.817-17.948 109.075-40.246 29.315-23.131 44.044-52.151 41.476-81.715z" fill="#FFFFFF"/><path d="M230.36 425.319a241.87 241.87 0 0 1-20.934.913c-34.471.001-67.059-7.511-93.447-21.747-32.863-17.729-52.378-43.774-54.946-73.338-2.569-29.564 12.161-58.584 41.476-81.715 5.799-4.575 12.046-8.808 18.665-12.687-12.993 5.932-24.911 13.095-35.388 21.361-29.314 23.131-44.045 52.151-41.476 81.715 2.569 29.565 22.082 55.61 54.946 73.338 26.389 14.236 58.976 21.748 93.447 21.747 6.913 0 13.905-.302 20.934-.913 33.445-2.905 64.771-12.535 90.41-27.559-22.053 10.069-47.206 16.585-73.687 18.885z" fill="#E5E5E5"/><path d="M286.65 312.533c-9.507-39.544-55.55-62.508-102.638-51.189-47.088 11.32-77.661 52.703-68.156 92.249 4.682 19.473 18.156 35.492 37.943 45.105 12.283 5.967 26.102 9.003 40.355 9.003 8.042 0 16.221-.967 24.339-2.918 47.089-11.321 77.664-52.703 68.157-92.25z" fill="#333333"/><circle cx="177.898" cy="351.457" r="30.373" fill="#FFFFFF" /><g fill="#FFA929"><path d="M373.152 117.153c-7.189 0-13.017 5.828-13.017 13.017 0 7.189 5.828 13.017 13.017 13.017 26.318 0 47.729 21.411 47.729 47.729 0 7.189 5.828 13.017 13.017 13.017s13.017-5.828 13.017-13.017c-.001-40.673-33.091-73.763-73.763-73.763z" /><path d="M364.475 43.39c-3.261 0-6.564.108-9.817.322-9.564.629-16.808 8.893-16.18 18.458.629 9.564 8.9 16.804 18.458 16.18a115.6 115.6 0 0 1 7.539-.248c62.206 0 112.813 50.608 112.813 112.813 0 7.606-.759 15.204-2.257 22.581-1.396 6.875 1.691 14.209 7.576 18.025 5.99 3.884 14.111 3.587 19.829-.675 3.388-2.525 5.774-6.307 6.614-10.445a148.538 148.538 0 0 0 2.95-29.487c0-81.343-66.18-147.524-147.525-147.524z" /></g><circle cx="234.305" cy="321.085" r="17.356" fill="#FFFFFF" /></svg>
                </a>
              </MenuItem>
              <MenuItem onClick={() => setAnchorEl(null)}>
                <a className={styles.shareLink} href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(blogUrl)}&text=${encodeURIComponent(metadata.title + " | " + metadata.description)}`} rel="noopener" target="_blank">
                  <svg width="20" height="20" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>分享到 X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                </a>
              </MenuItem>
            </Menu>
            <IconButton aria-label="复制链接" onClick={onCopy}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#6B6B6B"><path fillRule="evenodd" clipRule="evenodd" d="M12.5 9.68l.6-.6a5 5 0 0 1 1.02 7.87l-2.83 2.83a5 5 0 0 1-7.07-7.07l2.38-2.38c0 .43.05.86.12 1.3l-1.8 1.79a4 4 0 0 0 5.67 5.65l2.82-2.83a4 4 0 0 0-1.04-6.4l.14-.16zm-1 4.64l-.6.6a5 5 0 0 1-1.02-7.87l2.83-2.83a5 5 0 0 1 7.07 7.07l-2.38 2.39c0-.43-.05-.87-.12-1.3l1.8-1.8a4 4 0 1 0-5.67-5.65L10.6 7.76a4 4 0 0 0 1.04 6.4l-.13.16z" fill="currentColor"></path></svg>
            </IconButton>
            <IconButton aria-label="二维码" aria-controls={open1 ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open1 ? 'true' : undefined} onClick={(event) => setAnchorEl1(event.currentTarget)}>
              <img className={styles.qrBtn} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA9ElEQVRYR9VXWw7DIAwbN+Yo3HjTJqUfqSI/FNaWvwpIjeOYMOac75cw1lrjuzz2xXeEUOMNdcM2APkkmRR0YgSsincwcBsAOSXVyVRGgoEc78TAYwBk1SOm2hnYBqCyhJxzVgMonl0F7QBYM6ycL2uAjWc7IdIADYBdyDqjGu93sTij0oAaqzQiVNeVdaNqyfPXA6jEhHKunrRaf2gA5bTrh6fLSBWNygxab1cB8gFWpLYRdaXkPgB2tWSIKfs2ZDUgA3BbMreM23rCvwNwU5B9wWZgGwDUw7EvICS+mLerwM15+TBh7wS2J2T7CdsJXQ1k5j7FF35r3ynsoAAAAABJRU5ErkJggg==" width="20" height="20" alt="qrcode" />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl1}
              open={open1}
              onClose={() => setAnchorEl1(null)}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <div className={styles.qrcard}><QRCode value={blogUrl} renderAs="svg" /></div>
            </Menu>
          </div>
          <Snackbar open={copied} autoHideDuration={1500} anchorOrigin={{ horizontal: 'center', vertical: 'top' }} onClose={() => setCopied(false)}>
            <Alert severity={alertType}><AlertTitle>{alertText}</AlertTitle></Alert>
          </Snackbar>
        </div>)
    }
  </>
  );
}
