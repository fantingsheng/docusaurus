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
          <Typography>上传的图片会泄露隐私吗？</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>💁‍♂️ 不会，上传的图片只会在浏览器的本地读取，并未上传到云端。该工具类似离线工具，不会收集任何的用户数据。请放心使用。🥰</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content">
          <Typography>我在一台电脑上保存的数据为什么换台电脑不能用？</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>该网站数据保存在本地，使用的浏览器接口的本地存储，有效期只要不主动删除会一直存在。</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}
