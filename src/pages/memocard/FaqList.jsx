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
          <Typography>为什么导出的图片和左边预览区域的有差异？</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>导出图片使用的是 <a href="https://www.npmjs.com/package/html-to-image">html-to-image</a> 这个库。会有一些支持的不够好的 CSS 属性导致图片略有差异。🥶</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content">
          <Typography>正文输入部分右上角 Emoji 表情插入都支持哪些？</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>目前是罗列了一些我经常使用的表情符号，可以直接点击复制到剪切板，方面快速粘贴。
          </Typography>
          <Typography>如果你想要更多的表情符号，可以去下面这些网站去浏览👉：</Typography>
          <ul>
            <li>EmojiAll中文官方網站: <a href="https://www.emojiall.com/zh-hant" target="_blank">https://www.emojiall.com/zh-hant</a></li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </>
  )
}
