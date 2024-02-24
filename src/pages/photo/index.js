import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { Box, Dialog, DialogContent, ImageList, ImageListItem, ToggleButtonGroup, ToggleButton, ImageListItemBar,
  FormControlLabel, IconButton, Checkbox }  from '@mui/material';
import Map from '@mui/icons-material/Map';
import {useWindowSize} from '@docusaurus/theme-common';

export default function AlbumGallery () {
  const windowSize = useWindowSize();
  const isMobile = windowSize === 'mobile';
  const itemData = [
    { title: '惠山-三毛峰', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1704533891019-98978b32-181f-404b-a728-37eaf040f9cf.jpg' },
    { title: '苏宁悦城', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1689408969633-035197b8-c646-45bc-a43c-9350ced51585.jpg'},
    { title: '宜家家居', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1689408969569-82b40cf0-61ae-424a-b0ab-be54140e446d.jpg'},
    { title: '傍晚天空-南湖大道', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1689408969619-f7963791-c9a9-4460-968f-9af381d4de18.jpg'},
    { title: '太湖广场', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1689408969587-3dbebfa2-50b3-4832-8fa0-1064a48ee941.jpg' },
    { title: '无锡太科园', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1689408969604-e34d6d43-46c8-4c1d-a95e-8ea64693a763.jpg'},
    { title: '高浪路-苏宁悦城段', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1689408969547-b76c7d2a-8dbd-48f6-9495-8a29325fe8ba.jpg' },
    { title: '金城湾-万象城', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1689408969560-abf2f872-b7bf-4b76-9356-65471ab0de18.jpg' },
    { title: '无锡国家软件园', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1689411403075-2fb62116-9a67-43af-a6f3-8fe4fe8d3f56.jpg' },
    { title: '菱湖大道与高浪路交叉口', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1689411403045-935b392c-60e6-408d-a56b-5392024ab33a.jpg' },
    { title: '朗诗新郡', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1689411535688-2c38d2f5-a113-4c08-9d0f-9dde2a0dc961.jpg' },
    { title: '吴都路高架桥', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1689411608170-d2f68fcf-b75a-41be-ae51-4d7a57eb6f28.jpg' },
    { title: '苏宁悦城A区', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1689411672728-b3cfd8b9-8edf-47e4-bb4e-414b2f6b03f8.jpg' },
    { title: '大悦城', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1689411672709-236a3755-f646-44fd-8ba4-35d48bd5436d.jpg' },
    { title: '长广溪', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1689411672750-5fd2b742-8290-4fab-9995-52bd21607a9a.jpg' },
    { title: '高浪路大桥', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1691453492290-10718d13-b73f-4baa-802d-08bf03d13be9.jpg' },
    { title: '太湖新城-落日', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1691823880195-89da9942-9665-4b8d-b113-41eb498f21cd.jpg'},
    { title: '软件园双子座', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1691823975286-df751ccf-adcc-4595-a92c-d25c41441735.jpg' },
    { title: '金匮公园', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1691824055242-26ea485a-cf61-4c8e-a205-fac8cde53a7a.jpg' },
    { title: '苏宁悦城', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1691824116308-79726dde-454b-43e9-9b8c-588ad141f12a.jpg' },
    { title: '太科园网红树', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1691824199596-7fd873ad-1059-41f9-a4c5-62c4f972cd04.jpg' },
    { title: '3W Coffee', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1691824270197-622c538f-c845-499c-b426-955a4fd0861d.jpg' },
    { title: '苏宁悦城新家', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1691824348337-14b4c10a-fba8-4a3b-9fa0-61a062e3a4db.jpg' },
    { title: '西红柿', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1691824407811-577ca32c-28bc-482f-9fa9-9b9c0f26d9fc.jpg' },
    { title: '尚贤河湿地公园', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1703126295574-0e1a48d8-6faa-4b4b-9add-44cd6ba45d97.jpg' },
    { title: '灵山梵宫', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1708747413426-1cc36aff-1a6c-432f-8ca2-9939f4f029ea.jpg' },
    { title: '金匮公园山顶视角', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1708747413452-f5b1e391-c64f-4b85-9a67-f643e760adce.jpg' }
  ];
  const [col, setCol] = useState(4);
  const [showTitle, setShowTitle] = useState(false);
  const [isFluid, setIsFluid] = useState(false);
  const [open, setOpen] = useState(false);
  const [openImg, setOpenImg] = useState();
  const [size, setSize] = useState('medium');
  const [sizeOptions, setSizeOptions] = useState([
    { value: 6, label: '小' },
    { value: 4, label: '中' },
    { value: 3, label: '大' }
  ]);

  useEffect(() => {
    if (isMobile) {
      setCol(2);
      setSize('small');
      setSizeOptions([
        { value: 3, label: '小' },
        { value: 2, label: '中' },
        { value: 1, label: '大' }
      ]);
    }
  }, [isMobile]);

  const handleScale = (event, val) => {
    if (val !== null) {
      setCol(val)
    }
  };

  const handleOpenImg = (href) => {
    setOpenImg(href);
    setOpen(true);
  }
  return (
    <Layout title='城市印象' description='记录自己的城市风景，居一城，爱一城'>
      <Head>
        <meta name='keywords' content='城市, 风景, 无锡, 随手拍, 江南, 太湖' />
      </Head>
      <div className='container'>
        <div className='row'>
          <div className='col col--12 margin-top--md'>
            <div style={{ height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <ToggleButtonGroup
                value={col}
                exclusive
                onChange={handleScale}
                size={size}
                aria-label='Photo Size'
              >
                {
                  sizeOptions.map(item => (
                    <ToggleButton sx={{ padding: '5px 14px' }} value={item.value} key={item.value}>{item.label}</ToggleButton>
                  ))
                }
              </ToggleButtonGroup>
              <Box>
                <FormControlLabel control={
                  <Checkbox
                    checked={showTitle}
                    size={size}
                    onChange={(event, val) => setShowTitle(val)}
                    inputProps={{ 'aria-label': 'controlled' }}
                    color='default'
                  />}
                  label='显示地点'
                />
                <FormControlLabel control={
                  <Checkbox
                    checked={isFluid}
                    size={size}
                    onChange={(event, val) => setIsFluid(val)}
                    inputProps={{ 'aria-label': 'controlled' }}
                    color='default'
                  />}
                  label='瀑布流'
                />
              </Box>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col col--12 margin-top--md'>
            <ImageList
              variant={isFluid ? 'masonry' : 'quilted'}
              cols={col}
              gap={10}
              rowHeight={isFluid ? 'auto' : 200}
            >
              {itemData.map((item) => (
                <ImageListItem
                  sx={{ 
                    '& > img': { cursor: 'zoom-in' }
                  }} key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    onClick={() => handleOpenImg(item.img)}
                  />
                  {
                    showTitle ? <ImageListItemBar
                      sx={{
                        background:
                          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                      }}
                      title={item.title}
                      position="top"
                      actionIcon={
                        <IconButton
                          sx={{ color: 'white' }}
                          aria-label={`star ${item.title}`}
                        >
                          <Map />
                        </IconButton>
                      }
                      actionPosition="left"
                    /> : ''
                  }
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          maxWidth='lg'
        >
          <DialogContent>
            <img
              style={{ width: '100%' }}
              src={`${openImg}?w=248&fit=crop&auto=format`}
              srcSet={`${openImg}?w=248&fit=crop&auto=format&dpr=2 2x`}
            />
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  )
}