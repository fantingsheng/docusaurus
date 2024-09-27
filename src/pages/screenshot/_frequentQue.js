import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './style.module.scss';
import Image from '@theme/IdealImage';

export default function FrequentQuestion () {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Accordion className={styles.accordion} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content">
          <Typography>复制图片在什么场景用到，或者说复制后在哪进行粘贴操作？</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>复制后可以粘贴在常用的富文本编辑器中，微信、QQ、钉钉等聊天工具框中。</Typography>
          <Typography sx={{ marginBottom: '10px' }}>还可以在微博、X、掘金沸点等社交平台输入框中直接粘贴操作，会自动以图片的格式显示，非常方便。</Typography>
          <Image img="https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1723431657226-fb904004-29eb-42c9-baf4-4217464ad524.png" />
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content">
          <Typography>上传的图片会泄露隐私吗？</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>💁‍♂️ 不会，该工具所涉及的数据都存在本地，上传的图片只会在浏览器的本地读取，并未上传到云端。该工具类似离线工具，不会收集任何的用户数据。请放心使用。🥰</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content">
          <Typography>我在自己电脑上保存的数据为什么换台电脑不能用？</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>该网站数据保存在本地，使用的浏览器接口的本地存储（localStorage），有效期为永久（只要不主动删除会一直存在）。不同浏览器之间数据不能共享。</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content">
          <Typography>该工具源码是否开源？</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>该工具是参考网上其它项目，灵感来源多款同类工具，但是代码全部由本人亲手完成。本项目源码暂不考虑开源，如果有技术相关的问题，可以扫描以下的微信二维码和我沟通。</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}
