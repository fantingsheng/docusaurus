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
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content">
          <Typography>为什么导出的图片和左边展示区域的有差异？</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>导出图片使用的是 <a href="https://html2canvas.hertzen.com/">html2canvas</a> 这个库。会有一些支持的不够好的 CSS 属性导致图片略有差异。🥶</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}
