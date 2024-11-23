import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './style.module.scss';

export default function FrequentQuestion () {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Accordion className={styles.accordion} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content">
          <Typography>复制图片在什么场景用到，或者说复制后在哪才能粘贴？</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>复制后可以粘贴在常用的富文本编辑器中，微信、QQ、钉钉等聊天工具框中。</Typography>
          <Typography>还有在微博、X、掘金沸点等社交平台输入框中直接粘贴操作，会自动以图片的格式显示，非常方便。</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content">
          <Typography>为什么导出的图片和左边展示区域的有差异？</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>导出图片使用的是 <a href="https://www.npmjs.com/package/html-to-image/">html-to-image</a> 这个库。会有一些支持的不够好的 CSS 属性导致图片略有差异。🥶</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content">
          <Typography>上传的图片会泄露隐私吗？</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>💁‍♂️ 不会，上传的图片只会在浏览器的本地读取，并未上传到云端。该工具类似离线工具，不会收集任何的用户数据。请放心使用。🥰</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content">
          <Typography>找不到好看的背景图和文章很搭的图标怎么办，有推荐的网站吗？</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>👉 免费的图片素材网站：</Typography>
          <ul>
            <li>Unsplash: <a href="https://unsplash.com" target="_blank">https://unsplash.com</a></li>
            <li>Pexels: <a href="https://www.pexels.com/zh-cn" target="_blank">https://www.pexels.com/zh-cn</a></li>
            <li>500 PX: <a href="https://500px.com" target="_blank">https://500px.com</a></li>
            <li>Pixabay: <a href="https://pixabay.com/photos" target="_blank">https://pixabay.com/photos</a></li>
            <li>Awesome Wallpapers:  <a href="https://wallhaven.cc" target="_blank">https://wallhaven.cc</a></li>
          </ul>
          <Typography>👉 免费的图标网站：</Typography>
          <ul>
            <li>Devicon - 提供一系列关于编程语言、设计和开发工具的图标: <a href="https://devicon.dev" target="_blank">https://devicon.dev</a></li>
            <li>Simple Icons - 收集了2770个免费 SVG 格式的国内外著名品牌的图标: <a href="https://simpleicons.org" target="_blank">https://simpleicons.org</a></li>
            <li>svgl - 漂亮的 SVG 格式的软件产品和公司图标: <a href="https://svgl.app" target="_blank">https://svgl.app</a></li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5bh-content">
          <Typography>找不到满足自己的需求的主题模版？</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>如果提供的模版满足不了您的图片要求，在下面的评论区提出你的意见，上传参考图片，如果合理我会考虑开发相应的模板。<br />
          同时我也希望凭借大家的智慧，尽量丰富这个工具的主题模板。</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}